/**
 * IAUPE Analyzer - geracao automatica dos dois formularios de avaliacao
 * (Sprint 2 do board: "avaliar classificacao IA x analise manual" e
 * "avaliar Hipotese 1 de pesquisa").
 *
 * COMO USAR:
 * 1. Acesse https://script.google.com > Novo projeto.
 * 2. Apague o conteudo padrao e cole este arquivo inteiro.
 * 3. Salve (Ctrl+S) - so depois de salvar o dropdown de funcoes fica disponivel.
 * 4. Selecione a funcao `criarTodosFormularios` no dropdown ao lado de "Run".
 * 5. Rode. Na primeira execucao o Google pede autorizacao - aceite (e a sua
 *    propria conta, os formularios sao criados no seu Google Drive).
 * 6. Veja os links no "Execution log" (Ctrl+Enter) - um para cada form
 *    (link de edicao e link de resposta).
 *
 * Os dois formularios usam o mesmo vocabulario controlado do pipeline
 * (pipeline/pdf_pipeline/analyzer.py: AREAS_INTERESSE e SEGMENTOS) e as
 * mesmas secoes/rotulos exibidos na tela de detalhe do edital
 * (front/src/components/EditalDetailView.tsx), para que o avaliador
 * compare exatamente o que aparece no app com o PDF original.
 */

var AREAS_INTERESSE = [
  "Projetos de Pesquisa, Desenvolvimento e Inovação (PD&I)",
  "Extensão Tecnológica (prestação de serviços, assistência tecnológica)",
  "Empreendedorismo (apoio a startups, spin-offs)",
  "Incubação de Empresas",
  "Aceleração de Negócios",
  "Serviços Tecnológicos",
  "Propriedade Intelectual (patentes, licenciamento, transferência de tecnologia)",
  "Captação de Recursos para PD&I/Inovação",
];

var SEGMENTOS = [
  "Saúde",
  "Educação",
  "Indústria",
  "Comércio",
  "Serviços",
  "Agropecuária",
  "Tecnologia da informação(TI)",
  "Construção civil",
  "Transporte e Logística",
  "Administração pública",
];

var FONTES = ["FACEPE", "CNPq", "CAPES", "FINEP"];

// Escala de alucinacao/invencao reutilizada em toda secao: mede se a IA
// escreveu algo que nao esta no PDF original (o ponto central da task -
// "nao criando respostas do nada").
var ESCALA_ALUCINACAO = [
  "Não, tudo que está escrito consta no documento original",
  "Parcialmente - parte da informação não está no documento",
  "Sim - a informação foi inventada, não consta no documento",
];

// Escala de omissao: mede se a IA deixou de capturar algo relevante que
// estava no PDF.
var ESCALA_OMISSAO = [
  "Não faltou nada relevante",
  "Faltou algo pouco relevante",
  "Faltou informação relevante presente no documento",
];

function criarTodosFormularios() {
  var f1 = criarFormularioClassificacaoIA();
  var f2 = criarFormularioHipotese1();
  Logger.log("=== Formulário 1: Coerência Classificação IA x Análise Manual ===");
  Logger.log("Editar: " + f1.getEditUrl());
  Logger.log("Responder: " + f1.getPublishedUrl());
  Logger.log("");
  Logger.log("=== Formulário 2: Percepção - Direcionamento Automático (Hipótese 1) ===");
  Logger.log("Editar: " + f2.getEditUrl());
  Logger.log("Responder: " + f2.getPublishedUrl());
}

/**
 * Adiciona a uma secao o trio de perguntas padrao: nota 1-5 de fidelidade,
 * checagem de alucinacao e checagem de omissao. Usado em toda secao do
 * Form 1 para manter o mesmo criterio de avaliacao em todas elas.
 */
function addAvaliacaoPadrao(form) {
  form.addScaleItem()
    .setTitle("Nota de 1 a 5: quão fiel esta seção está ao documento original do edital?")
    .setBounds(1, 5)
    .setLabels("1 = Nada fiel / totalmente errado", "5 = Totalmente fiel ao PDF")
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle("A IA escreveu nesta seção alguma informação que NÃO está no documento original (alucinação)?")
    .setChoiceValues(ESCALA_ALUCINACAO)
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle("Faltou nesta seção alguma informação relevante que está no documento e a IA não capturou (omissão)?")
    .setChoiceValues(ESCALA_OMISSAO)
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle("Comentário / correção (opcional - o que exatamente está errado, inventado ou faltando)")
    .setRequired(false);
}

/**
 * FORM 1 - apoia a Hipótese 2 (confiabilidade da extração). Preenchido pelo
 * avaliador UM EDITAL POR VEZ: abre o edital no app (ou no e-mail de
 * notificação) lado a lado com o PDF original e confere seção por seção.
 */
function criarFormularioClassificacaoIA() {
  var form = FormApp.create("IAUPE Analyzer - Avaliação da Classificação da IA (Extração x Análise Manual)");
  form.setDescription(
    "Este formulário valida se a IA (LLM) está extraindo corretamente as informações de um edital, " +
    "e não inventando respostas. Abra o edital no app/e-mail de notificação do IAUPE Analyzer e o " +
    "PDF original lado a lado, e avalie cada seção exibida comparando os dois. " +
    "Preencha UM formulário para CADA edital avaliado."
  );
  form.setCollectEmail(false);
  form.setShowLinkToRespondAgain(true);

  // --- Identificação ---
  form.addSectionHeaderItem()
    .setTitle("Identificação")
    .setHelpText("Dados do avaliador e do edital avaliado.");

  form.addTextItem().setTitle("Nome do avaliador").setRequired(true);
  form.addDateItem().setTitle("Data da avaliação").setRequired(true);
  form.addTextItem().setTitle("Título do edital avaliado").setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle("Fonte do edital")
    .setChoiceValues(FONTES)
    .setRequired(true);
  form.addTextItem().setTitle("Link/URL do PDF original do edital").setRequired(false);

  // --- Seção 1: Órgão + Prazo final de submissão ---
  form.addSectionHeaderItem()
    .setTitle("Órgão e Prazo final de submissão")
    .setHelpText("Campos exibidos no topo do card do edital no app.");
  form.addMultipleChoiceItem()
    .setTitle("O órgão exibido está correto?")
    .setChoiceValues(["Sim", "Não", "Não informado no documento"])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle("A data de 'Prazo final de submissão' exibida está correta?")
    .setChoiceValues(["Sim", "Não", "Documento não trazia data explícita de submissão"])
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle("Se algum dos dois estiver errado, qual seria o valor correto?")
    .setRequired(false);
  addAvaliacaoPadrao(form);

  // --- Seção 2: Público-alvo ---
  form.addSectionHeaderItem().setTitle("Público-alvo");
  addAvaliacaoPadrao(form);

  // --- Seção 3: Resumo do Edital ---
  form.addSectionHeaderItem().setTitle("Resumo do Edital");
  addAvaliacaoPadrao(form);

  // --- Seção 4: Áreas de interesse ---
  form.addSectionHeaderItem()
    .setTitle("Áreas de interesse")
    .setHelpText("Vocabulário controlado - compare os badges exibidos no app com o que o edital realmente indica.");
  form.addCheckboxItem()
    .setTitle("Quais áreas de interesse estão exibidas no app para este edital?")
    .setChoiceValues(AREAS_INTERESSE)
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle("Após ler o documento original, quais áreas de interesse deveriam estar marcadas?")
    .setChoiceValues(AREAS_INTERESSE)
    .setRequired(true);
  addAvaliacaoPadrao(form);

  // --- Seção 5: Segmentos ---
  form.addSectionHeaderItem()
    .setTitle("Segmentos")
    .setHelpText("Vocabulário controlado - compare os badges exibidos no app com o que o edital realmente indica.");
  form.addCheckboxItem()
    .setTitle("Quais segmentos estão exibidos no app para este edital?")
    .setChoiceValues(SEGMENTOS)
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle("Após ler o documento original, quais segmentos deveriam estar marcados?")
    .setChoiceValues(SEGMENTOS)
    .setRequired(true);
  addAvaliacaoPadrao(form);

  // --- Seção 6: Critérios do público-alvo ---
  form.addSectionHeaderItem().setTitle("Critérios do público-alvo");
  addAvaliacaoPadrao(form);

  // --- Seção 7: Quem pode submeter ---
  form.addSectionHeaderItem().setTitle("Quem pode submeter");
  addAvaliacaoPadrao(form);

  // --- Seção 8: Cronograma ---
  form.addSectionHeaderItem().setTitle("Cronograma");
  addAvaliacaoPadrao(form);

  // --- Seção 9: Observações ---
  form.addSectionHeaderItem().setTitle("Observações");
  addAvaliacaoPadrao(form);

  // --- Avaliação geral ---
  form.addSectionHeaderItem().setTitle("Avaliação geral do edital");
  form.addScaleItem()
    .setTitle("Nota geral de 1 a 5: no conjunto, quão coerente está toda a extração da IA com o documento original?")
    .setBounds(1, 5)
    .setLabels("1 = Nada coerente", "5 = Totalmente coerente")
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle("Em quais seções houve alucinação (informação inventada, fora do documento)? Marque todas que se aplicam.")
    .setChoiceValues([
      "Nenhuma seção teve alucinação",
      "Órgão / Prazo final de submissão",
      "Público-alvo",
      "Resumo do Edital",
      "Áreas de interesse",
      "Segmentos",
      "Critérios do público-alvo",
      "Quem pode submeter",
      "Cronograma",
      "Observações",
    ])
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle("Se houve erro, qual o tipo (taxonomia usada no estudo da Electronics)?")
    .setChoiceValues([
      "Não se aplica",
      "Formato de data incorreto",
      "Erro de raciocínio numérico",
      "Falha herdada de OCR (texto ilegível/mal extraído)",
      "Classificação em categoria errada (área/segmento)",
      "Alucinação (informação inventada, sem base no edital)",
      "Informação faltante (campo vazio quando deveria ter conteúdo)",
      "Outro",
    ])
    .setRequired(false);
  form.addParagraphTextItem()
    .setTitle("Comentários adicionais")
    .setRequired(false);

  return form;
}

/**
 * FORM 2 - apoia a Hipótese 1 (direcionamento automático). Como o matching
 * automático ainda não existe em produção, este formulário mede PERCEPÇÃO
 * de utilidade junto a docentes/gestores/grupos de pesquisa, conforme
 * métrica prevista no desenho de pesquisa ("Percepção de utilidade...
 * coletada por entrevista ou questionário").
 */
function criarFormularioHipotese1() {
  var form = FormApp.create("IAUPE Analyzer - Pesquisa de Percepção: Direcionamento Automático de Editais");
  form.setDescription(
    "Esta pesquisa avalia a Hipótese 1 do projeto IAUPE Analyzer: a ideia de que direcionar " +
    "automaticamente cada edital de fomento aos pesquisadores, departamentos ou grupos certos de " +
    "sua área ajudaria a instituição a se organizar com mais antecedência, submeter propostas mais " +
    "competitivas e, com isso, captar mais recursos e ganhar mais visibilidade junto às agências de fomento. " +
    "Leva cerca de 5 minutos."
  );
  form.setCollectEmail(false);
  form.setShowLinkToRespondAgain(false);

  // --- Perfil ---
  form.addSectionHeaderItem().setTitle("Seu perfil");
  form.addTextItem().setTitle("Nome (opcional)").setRequired(false);
  form.addMultipleChoiceItem()
    .setTitle("Qual seu vínculo institucional?")
    .setChoiceValues(["Docente", "Coordenador(a) de grupo de pesquisa", "Gestor(a)/Departamento", "Pesquisador(a) discente", "Outro"])
    .setRequired(true);
  form.addTextItem().setTitle("Departamento / unidade").setRequired(true);
  form.addCheckboxItem()
    .setTitle("Área(s) de interesse principal do seu trabalho")
    .setChoiceValues(AREAS_INTERESSE)
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle("Segmento(s) de atuação")
    .setChoiceValues(SEGMENTOS)
    .setRequired(true);

  // --- Situação atual ---
  form.addSectionHeaderItem().setTitle("Como você acompanha editais hoje");
  form.addCheckboxItem()
    .setTitle("Como você atualmente acompanha editais de fomento (FACEPE, CNPq, CAPES, FINEP)?")
    .setChoiceValues([
      "Acesso direto aos portais das agências",
      "Recebo e-mails/avisos da instituição",
      "Uso o sistema IAUPE Analyzer (favoritar edital / notificações)",
      "Colegas ou departamento me avisam",
      "Não acompanho ativamente",
      "Outro",
    ])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle("Com que frequência você perde prazos ou toma conhecimento tarde de editais relevantes à sua área?")
    .setChoiceValues(["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle("Quanto tempo, em média, você gasta por semana procurando/lendo editais?")
    .setChoiceValues(["Menos de 30 min", "30 min a 1h", "1h a 3h", "3h a 5h", "Mais de 5h"])
    .setRequired(true);

  // --- Percepção sobre direcionamento automático ---
  form.addSectionHeaderItem()
    .setTitle("Direcionamento automático de editais")
    .setHelpText(
      "Imagine um recurso em que o sistema cruza automaticamente os campos já extraídos de cada " +
      "edital (área de interesse, segmento, público-alvo) com o seu perfil cadastrado, e te notifica " +
      "apenas dos editais realmente aderentes à sua área - com a maior antecedência possível."
    );

  var likert = ["1 - Discordo totalmente", "2 - Discordo", "3 - Neutro", "4 - Concordo", "5 - Concordo totalmente"];

  form.addMultipleChoiceItem()
    .setTitle("Esse direcionamento me daria mais tempo para me organizar e preparar propostas mais competitivas.")
    .setChoiceValues(likert)
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle("Esse direcionamento aumentaria as chances de submissão de propostas do meu departamento/grupo.")
    .setChoiceValues(likert)
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle("Esse direcionamento poderia aumentar a captação de recursos de fomento pela instituição.")
    .setChoiceValues(likert)
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle("Esse direcionamento poderia aumentar a visibilidade da instituição junto às agências de fomento.")
    .setChoiceValues(likert)
    .setRequired(true);
  form.addScaleItem()
    .setTitle("Comparado ao acompanhamento manual que você faz hoje, quão útil seria esse direcionamento automático para você?")
    .setBounds(1, 5)
    .setLabels("1 = Nada útil", "5 = Extremamente útil")
    .setRequired(true);

  // --- Aberta ---
  form.addSectionHeaderItem().setTitle("Comentários");
  form.addParagraphTextItem()
    .setTitle("Além do direcionamento por área, que outros fatores você considera importantes para aumentar a captação de recursos e o número de propostas submetidas?")
    .setRequired(false);
  form.addParagraphTextItem()
    .setTitle("Comentários ou sugestões adicionais")
    .setRequired(false);

  return form;
}
