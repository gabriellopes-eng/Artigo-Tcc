Revisão Sistemática da Literatura 
Engenharia de Software 
Este guia mostra como conduzir uma Revisão Sistemática da Literatura (RSL) de forma rigorosa e reproduzível. Cada passo explica o que fazer, como fazer e por que aquele filtro existe. 
 
  PASSO 1    Monte a String de Busca 
A string é a "consulta" que você digita nas bases de dados. Ela precisa cobrir todos os termos que descrevem o seu tema — incluindo sinônimos — e usar operadores booleanos para combiná-los corretamente. 
Como fazer 
Liste os conceitos centrais do seu tema (ex: code review, software quality, defect detection). 
Para cada conceito, liste sinônimos e variações (ex: "code review" OR "code inspection" OR "peer review" OR "pull request review"). 
Use AND para conectar conceitos diferentes e OR para conectar sinônimos do mesmo conceito. 
Use aspas para expressões compostas: "technical debt", "software testing". 
Use * para truncamento: "automat*" captura automated, automation, automatically.

Exemplo de string — tema: Code Review e Qualidade de Software 
("code review" OR "code inspection" OR "peer review" OR "pull request") 
AND 
("software quality" OR "defect detection" OR "bug detection" OR "software defect") 
AND 
("empirical study" OR "experiment" OR "case study" OR "survey") 


Por que isso importa: Uma string mal feita pode deixar de fora artigos relevantes (baixa revocação) ou trazer resultados demais sem relação com o tema (baixa precisão). Documente todas as versões testadas antes de executar a busca definitiva. 





  PASSO 2    Escolha as Bases de Dados 
Use no mínimo 3 bases complementares. 
Por que isso importa: Usar bases de qualidade garante que o corpus já faz parte de estudos com peer review. Isso evita que você construa seu referencial teórico sobre artigos sem validação científica. 
  PASSO 3    Aplique os Filtros de Busca 
Além da string, define filtros que delimitam o escopo da revisão. Esses critérios devem ser decididos antes de executar qualquer busca. 
Filtros mais usados em RSLs de Engenharia de Software 
Período: ex., 2015–2025 (últimos 10 anos). Justifique: a área de SE evolui rápido, artigos antigos podem estar desatualizados. 
Idioma: inglês (obrigatório). Incluir português se o foco for produção nacional. 
Tipo de documento: artigos de journal e conference papers com peer review completo. Excluir: editoriais, resumos, white papers.
  
Por que isso importa: Definir os critérios antes da busca evita que você tome decisões convenientes durante a triagem. 


  PASSO 4    Documente os Resultados Iniciais 
Execute a busca em todas as bases e registre exatamente quantos artigos cada uma retornou. Depois, junte tudo em um gerenciador de referências e remova as duplicatas. 
O que registrar 
Base | Data da busca | Versão da string | Filtros aplicados | Nº de resultados. 
Nº total antes da deduplicação | Nº de duplicatas removidas | Nº final após deduplicação. 
 
  PASSO 5    Triagem 1 — Leitura dos Títulos 
Percorra todos os títulos e decida: INCLUIR (para a próxima etapa) ou EXCLUIR (com justificativa). Esta é a triagem mais rápida e deve eliminar o óbvio. 
Regras práticas 
Na dúvida, inclua. É melhor passar um artigo irrelevante para a próxima triagem do que descartar um relevante aqui. 
Exclua apenas quando o título deixar claro que o artigo é de área diferente, idioma incompatível, ou tipo de publicação inválido. 
Registre o motivo de cada exclusão (mesmo que resumido: "área diferente", "idioma", "editorial"). 
 
Por que isso importa: O objetivo é reduzir o volume para as etapas mais custosas sem comprometer a cobertura. 


  PASSO 6    Triagem 2 — Leitura dos Resumos (Abstracts) 
Para cada artigo que sobrou, leia o resumo completo. Aqui você confirma se o artigo realmente trata do tema com a abordagem adequada. 
O que verificar no abstract 
O objetivo do artigo está alinhado com a sua pergunta de pesquisa? 
A metodologia descrita é adequada? (ex: estudo empírico, experimento controlado, survey — relevantes para SE) 
O contexto é pertinente? (ex: artigos sobre code review em sistemas embarcados podem fugir do escopo se o foco for desenvolvimento web) 
Os resultados descritos têm relação com o que você quer investigar? 


Atenção: o abstract nem sempre reflete o artigo completo  
Se o título foi muito promissor mas o abstract foi vago ou inconclusivo, mantenha o artigo para a próxima triagem. Só exclua quando tiver certeza da irrelevância. 





  PASSO 7    Triagem 3 — Introdução e Conclusão 
Com o corpus já bem reduzido, faça uma leitura diagonal: introdução completa + conclusão completa. Isso confirma (ou derruba) artigos que passaram nas triagens anteriores mas ainda gera dúvida. 
O que buscar 
Introdução: qual o problema real que o artigo resolve? Quais lacunas identificam? Os objetivos são explícitos? 
Conclusão: os resultados obtidos são relevantes para o seu tema? Há limitações que comprometem a utilidade do artigo para a sua revisão? 
Artigos que nas conclusões apontam o seu tema exato como "trabalho futuro" são muito valiosos — eles mapeiam a fronteira do conhecimento atual. 
 
Por que isso importa: Evita gastar tempo com leitura completa de artigos que seriam descartados de qualquer forma. Uma leitura diagonal bem feita leva de 5 a 10 minutos por artigo. 






  PASSO 8    Triagem 4 — Leitura Completa (Full-Text) 
Agora sim: leia o artigo completo e tome a decisão definitiva. O corpus que sair desta etapa é o seu corpus final. 
O que avaliar 
O artigo realmente responde (ou contribui para responder) à sua pergunta de pesquisa? 
A metodologia é rigorosa e bem descrita o suficiente para ser citada com credibilidade? 
Os resultados são consistentes com os objetivos e a metodologia declarados? 
Há contradições internas entre resultados e conclusões? 
O artigo declara suas limitações de forma honesta? 
 
Por que isso importa: É a última linha de defesa contra artigos de baixa qualidade no seu referencial. Tudo que entrar aqui vai fundamentar as suas conclusões — então o rigor é essencial. 


  PASSO 9    Fichamento e Análise dos Artigos Finais 
Com o corpus definitivo em mãos, extraia e organize o conhecimento em dois níveis: o que usar como conteúdo e o que usar como modelo de escrita. 
9A — Extração de Conteúdo (para o seu referencial teórico) 
Para cada artigo, registre em uma planilha: 
Referência completa (autor, ano, título, journal, DOI). 
Objetivo e pergunta de pesquisa do artigo. 
Metodologia usada (tipo de estudo, amostra, ferramentas). 
Principais resultados e dados quantitativos relevantes. 
Definições e conceitos que você pode citar diretamente. 
Lacunas identificadas pelos autores ("trabalhos futuros"). 
 
9B — Análise Estrutural (para modelar a escrita do seu artigo) 
Os artigos do corpus são os melhores exemplos de como se escreve na sua área. Analise como eles estão escritos: 
Estrutura das seções: quantas seções? Quais os títulos? Seguem IMRaD (Introdução, Método, Resultados, Discussão)? 
Como a introdução é construída: contexto → problema → lacuna → objetivo. Esse padrão se repete? 
Como os resultados são apresentados: tabelas, gráficos, ou narrativa? Como integram dados ao texto? 
Tom do texto: impessoal ("was conducted") ou pessoal ("we conducted")? Hedged ("suggests", "may indicate") ou assertivo? 
Como citam a literatura: citações diretas são raras? Preferem sínteses de múltiplos autores por parágrafo? 
 
Por que isso importa: Cada área tem um "contrato" implícito de como um bom artigo deve ser escrito. 
 
 
Resumo do Funil 




Passo 
Ação 
Filtrar por 
1–3 
String + bases + filtros 
Relevância temática e qualidade da fonte 
4 
Documentação quantitativa 
Rastreabilidade e remoção de duplicatas 
5 
Triagem por títulos 
Eliminação do óbvio (área, idioma, tipo) 
6 
Triagem por abstracts 
Relevância e metodologia adequada 
7 
Introdução + Conclusão 
Alinhamento profundo com a pesquisa 
8 
Leitura completa 
Qualidade metodológica e consistência interna 
9 
Fichamento e análise 
Extração de conteúdo e padrões de escrita 




