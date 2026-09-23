
3453

Automatic Zoom
Vol.:(0123456789)Scientometrics (2025) 130:3433–3453
https://doi.org/10.1007/s11192-025-05372-5
Prompt engineering for bibliographic web‑scraping
Manuel Blázquez‑Ochando1  · Juan José Prieto‑Gutiérrez1  · 
María Antonia Ovalle‑Perandones1 
Received: 11 July 2024 / Accepted: 17 June 2025 / Published online: 11 July 2025 
© The Author(s) 2025
Abstract
Bibliographic  catalogues  store  millions  of  data.  The  use  of  computer  techniques  such  as  
web-scraping allows the extraction of data in an efficient and accurate manner. The recent 
emergence  of  ChatGPT  is  facilitating  the  development  of  suitable  prompts  that  allow  the  
configuration  of  scraping  to  identify  and  extract  information  from  databases.  The  aim  of  
this  article  is  to  define  how  to  efficiently  use  prompts  engineering  to  elaborate  a  suitable  
data  entry  model,  able  to  generate  in  a  single  interaction  with  ChatGPT-4o,  a  fully  func-
tional web-scraper, programmed in PHP language, adapted to the case of bibliographic cat-
alogues. As a demonstration example, the bibliographic catalogue of the National Library 
of  Spain  with  a  dataset  of  thousands  of  records  is  used.  The  findings  present  an  effective  
model for developing web-scraping programs, assisted with AI and with the minimum pos-
sible interaction. The results obtained with the model indicate that the use of prompts with 
large  language  models  (LLM)  can  improve  the  quality  of  scraping  by  understanding  spe-
cific contexts and patterns, adapting to different formats and styles of presentation of bib-
liographic information.
Keywords  Prompts · Scraping · Bibliographic catalogs · LLM · ChatGPT
Introduction
Large language models (LLM) have transformed the generation and understanding of nat-
ural  language  and  have  gained  wide  coverage  and  potential  in  the  scientific  community  
(Zhao  et  al.,  2023).  In  this  context  of  great  advances,  it  is  essential  to  know  how  to  take  
advantage  of  the  capacity  of  Artificial  Intelligence  (AI)  to  obtain  the  best  results  in  the  
tasks  entrusted  to  it.  This  is  the  design  of  prompts  or,  in  other  words,  the  textual  input   * Juan José Prieto-Gutiérrez  jujpriet@ucm.es Manuel Blázquez-Ochando  manublaz@ucm.es María Antonia Ovalle-Perandones  maovalle@ucm.es
1 Departamento de Biblioteconomía y Documentación. Facultad de Ciencias de La Documentación, 
Universidad Complutense de Madrid, Madrid, Spain
3434 Scientometrics (2025) 130:3433–3453
written by the user, with the instructions or questions posed in his or her query. The prompt 
sets  the  context  of  the  conversation,  tells  the  LLM  model  what  information  is  important  
and what the desired output, form, transformations and content should be (Qi et al., 2023). 
Ambiguity,  reinforcement  of  bias,  overfitting,  lack  of  context,  ethical  considerations  are  
some of the key challenges that the information professional has to deal with in order not to 
get incomplete, incorrect, inaccurate or grossly misleading answers. This entails the gener-
ation of optimised, well-structured prompts that correctly represent the need, task, method 
or phases of work through which the AI action must pass. In fact, Gao et al. (2023) reveal 
that ChatGPT performance is highly dependent on the style and formal organisation of the 
message and semantic refinement (Zhu et al., 2023).
For this reason, prompts must be designed according to a method, which is still under 
development by the scientific community, and which some have dared to call ‘prompt engi-
neering’,  which  was  initially  researched  and  popularised  in  LLMs  by  Liu  et  al.  (2023). 
This  justifies  the  need  to  develop  a  specific  competence  in  prompt  creation,  leveraging  
the  capabilities  and  features  of  LLMs,  such  as  ChatGPT,  facilitating  more  engaging  and  
impactful  interactions  with  these  advanced  language  models.  Such  engineering  actions  
have  profound  implications  in  software  development  (Khojah  et  al.,  2024;  Vaillant  et  al.,  
2024)  supporting,  as  discussed  above  in  software  programming  (Xia  &  Zhang,  2023).  In  
this sense, prompt engineering involves creating and tuning specific instructions that guide 
the  behaviour  of  the  language  model  to  obtain  more  accurate  and  consistent  responses.  
This  may  include  techniques  such  as  zero-shot  prompting,  few-shot  prompting,  Chain-of-
Thought (CoT) Prompting, Auto-CoT, Consistency and Coherence or Emotion Prompting, 
where specific examples are provided, so that the model learns and responds appropriately 
to new tasks.
Thus,  as  a  Zero-shot  prompting  technique,  the  language  model  is  asked  to  perform  a  
task  without  providing  specific  input–output  examples.  The  model  uses  its  pre-existing  
knowledge  acquired  during  its  training  to  generate  responses  based  on  the  given  instruc-
tion. For example, if the model is asked to translate a sentence without having been given 
prior  examples  of  translation,  the  model  will  attempt  to  use  its  understanding  of  the  lan-
guage  and  context  to  perform  the  task  (Kojima  et  al.,  2022;  Kong  et  al.,  2023).  Few-shot  
prompting  is  when  the  model  is  provided  with  some  input–output  examples  to  help  it  
better.  understand  the  task  to  be  performed  These  examples  act  as  a  guide  for  the  model,  
improving its ability to generate accurate and relevant responses. For example, if you want 
the model to classify the sentiment of a sentence, you can give it a few examples sentences 
with their corresponding sentiment classification and then ask it to classify a new sentence 
(Reynolds  &  McDonell,  2021).  Alongside  these  is  Chain-of-Thought  (CoT)  prompting  
which is a technique that promotes step-by-step reasoning in language models.
Instead  of  generating  a  direct  answer,  the  model  is  encouraged  to  decompose  the  
problem  into  smaller  steps  and  solve  each  step  sequentially.  An  example  of  CoT  ori-
ented to our case could be the following: ‘We need to extract bibliographic data from 
the  catalogue  of  a  university  library.  Answer  by  following  these  steps:  1)  Identify  the  
model  of  the  catalogue  card.  2)  Identify  the  data  container  tags.  3)  Design  the  web-
scraping strategy. 4) Program the programme in PHP’. The AI model is provided with 
concrete steps, correlated and chained by logic, so that it has the steps that will allow 
it  to  solve  a  complex  problem.  This  helps  to  make  the  answers  more  structured  and  
easier  to  solve.  For  example,  in  the  case  of  a  mathematical  problem,  the  model  could  
detail each step of the calculation instead of just providing the final result (Wei et al., 
2022). Auto-CoT is a method that automates the creation of chains of reasoning. This 
approach  aims  to  improve  model  robustness  and  reduce  errors  by  generating  multiple  
3436 Scientometrics (2025) 130:3433–3453
e) To provide a method that allows the researcher to quickly customise and adapt the 
prompt for any altmetric and bibliometric research. In this way, the researcher is enabled 
in the achievement and development of their own data extraction tools.
Methodology
The  method  to  achieve  a  correct  development  of  a  web-scraper  programme  in  PHP  with  
AI, necessarily involves the use of well-defined prompts.
The  methodology  is  based  on  the  combination  of  ‘Role  Prompting’  and  ‘Few-shot  
Prompting’,  techniques  selected  for  their  proven  effectiveness  in  code  generation  tasks  
(Yang et al., 2023; Nguyen et al., 2023). Role Prompting allows contextualising the exper-
tise  needed  for  the  task,  while  Few-shot  Prompting  facilitates  learning  through  specific  
examples from the bibliographic domain. This combination has been shown to be superior 
to  other  methods  such  as  Zero-shot  Prompting  in  specialised  programming  tasks  (Kong  
et al., 2023).
Our  method  seeks  to  minimise  interactions  with  the  AI  by  making  the  best  possible  
use of the ChatGPT attention layer (Vaswani et al., 2017). It is important to consider that, 
as  the  conversation  with  the  AI  grows  to  better  profile  tasks,  the  attention  layer  may  lose  
key  details  of  the  original  task,  leading  to  the  risk  of  ‘hallucination’  and,  consequently,  
unsatisfactory  results  (Huang  et  al.,  2023;  Duan  et  al.,  2024;  Yehuda  et  al.,  2024;  Verma  
et al., 2023). This forces the opening of new conversations and complicates the interroga-
tion procedure, resulting in a waste of time and effort to achieve the initial goal. AI must 
be able to recognise the instructions and tasks necessary to create a programme, with good 
performance and even more, adapted to the particularities and needs of each case. To this 
end, some authors claim that it is possible to structure the input prompt or message through 
markdown (Atlas, 2023; Greshake et al., 2023; Pividori & Greene, 2023), in order to make 
the  AI  attention  layer  more  effective  in  interpreting  and  executing  tasks.  The  attentional  
layer is critical because it allows AI to focus on the relevant parts of the input, prioritising 
critical information and filtering out the superfluous. This differential attentional capability 
improves  text  comprehension  and  processing,  allowing  for  a  more  accurate  and  relevant  
response to the prompt’s instructions. As Vaswani et al. (2017) point out, attentional archi-
tecture is crucial for handling long-term dependencies in data streams, which is essential in 
the generation and understanding of complex instructions such as those required for web-
scraper programming (see Table 1).
In this research we will work with the AI systems ChatGPT-4o and Claude Sonnet 3.5, 
following the next phases:
1 Selection of the web-scraping target. The catalogue datos.bne.es, which belongs to 
the National Library of Spain, has been selected due to the idiosyncrasy of the data 
it provides, i.e. the semantic scope, with structured and semi-structured access to the 
Table 1  Control prompt, representing a simple query to solve the problem of a web-scraper for datos.bnehttps:// github. com/ manub laz/ promp tAI/ blob/ main/ webSc raping- bibli oCata log- test1- en. txt
3442 Scientometrics (2025) 130:3433–3453
Table 4  Response obtained by ChatGPT for the advanced prompt. 
3450 Scientometrics (2025) 130:3433–3453
the  real  feasibility  of  the  system  for  large-scale  practical  applications.  These  numbers  
translate  into  the  ability  to  process  entire  medium-sized  catalogues  in  a  matter  of  days,  a  
substantial improvement over traditional methods of bibliographic data extraction.
Automated  extraction  of  bibliographic  data  through  web  scraping  requires  careful  
consideration  of  ethical  and  legal  issues  (Krotov,  et  al.,  2020).  In  this  research,  we  have  
implemented  specific  safeguards  to  ensure  responsible  use  of  library  resources.  The  3  s  
scheduled pause between requests is not arbitrary; it represents an ethical commitment to 
avoid  overloading  the  servers  of  library  institutions.  In  addition,  our  method  respects  the  
fair  use  policies  of  bibliographic  catalogues,  limiting  the  rate  of  extraction  and  avoiding  
interfering  with  other  users’  normal  access.  It  is  essential  that  researchers  and  practition-
ers implementing this methodology consider three basic principles: 1) consult and respect 
the  data  usage  policies  of  each  institution,  2)  implement  appropriate  access  rate  control  
mechanisms, and 3) use the extracted data exclusively for research or library development 
purposes. Transparency in the extraction process, documenting the methodology and pur-
pose  of  data  collection,  is  essential  to  maintain  trust  between  library  institutions  and  the  
research community.
Conclusions
This  work  presents  an  effective  working  method  to  develop  web-scraping  programs,  
assisted  with  AI  and  with  the  minimum  possible  interaction.  It  is  shown  that  a  correctly  
configured prompt allows to obtain a debugged code, from the first interaction, satisfying 
the  needs  of  data  extraction  and  processing,  starting  from  a  given  web  resource,  in  this  
case, from a bibliographic catalogue. The AI is able to interpret the instructions and under-
stand the subtleties of the task, tracing a workflow, assisted by a well-defined methodology. 
This demonstrates the importance of defining prompts with a clear method and structures, 
recognisable to the AI, that are likely to capture its ‘attention’ on the key data and proce-
dures of the work it will have to develop.
The prompt is the indispensable element in the interaction with the AI. In the context of 
software development and more specifically of web-scraping programs, it is recommended 
to use the sections: a) Role, b) Context and purpose, c) Input and constraints, d) Input and 
output examples, e) Detailed steps. This confirms the observations made by the scientific 
community (Brown et al., 2020; Yang et al., 2023; Nguyen et al., 2023).
Constraints are essential to get the IA to work on the lines specified by its operator. It 
has been observed that all guidelines are adhered to, and where optional guidelines are pro-
vided, the AI can determine whether or not to consider them. This indicates that the results 
it provides are driven by the given rules and by other principles, probably that of minimum 
effort,  simplicity  or  simplicity  in  the  development  of  the  code.  In  the  specific  case  pre-
sented here, the ‘switch’ function was chosen instead of ‘preg_match’, to avoid the use of 
regular expressions and the excess of conditional structures that this would have entailed. 
Therefore,  in  the  absence  of  further  confirmation  or  experimentation,  it  could  be  that  the  
AI knows rules of efficiency and effectiveness in code design, which could be a very useful 
feature for all researchers. This means that it is not necessary to be a specialist in program-
ming to create programs that satisfy specific or specific needs, typical of scientific develop-
ment, and in this case, of text and data mining.
Another  aspect  that  proves  fundamental  is  the  input  and  output  section  of  the  prompt  
design.  The  AI  is  able  to  associate  the  details  given  in  the  context  and  in  the  tasks  or  
3452 Scientometrics (2025) 130:3433–3453
References
Atlas,  S.  (2023).  ChatGPT  for  higher  education  and  professional  development:  A  guide  to  conversational  
AI. https:// digit alcom mons. uri. edu/ cba_ facpu bs/ 548
Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D., Dhariwal, P., & Amodei, D. (2020). Language 
models  are  few-shot  learners.  Advances  in  Neural  Information  Processing  Systems,  33,  1877–1901.  
https:// doi. org/ 10. 5555/ 34957 24. 34958 83
Chai, C. P. (2023). Comparison of text preprocessing methods. Natural Language Engineering, 29(3), 509–
553. https:// doi. org/ 10. 1017/ S1351 32492 20002 13
Chen, S., Wong, S., Chen, L., & Tian, Y. (2023b). Extending context window of large language models via 
positional interpolation. Preprint retrieved from https:// arxiv. org/ abs/ quant- ph/ 2306. 15595
Chen,  B.,  Zhang,  Z.,  Langrené,  N.,  &  Zhu,  S.  (2023a).  Unleashing  the  potential  of  prompt  engineering  in  
large language models: a comprehensive review. Preprint retrieved from https:// arxiv. org/ abs/ quant- ph/ 2310. 14735
Dong, Z., Li, J., Men, X., Zhao, W.X., Wang, B., Tian, Z., & Wen, J. R. (2024). Exploring context window 
of large language models via decomposed positional vectors. Preprint retrieved from https:// arxiv. org/ abs/ quant- ph/ 2405. 18009
Duan, H., Yang, Y., & Tam, K. Y. (2024). Do LLMs Know about Hallucination? An Empirical Investigation 
of LLM’s Hidden States. Preprint retrieved from https:// arxiv. org/ abs/ quant- ph/ 2402. 09733
Dula,  M.  W.,  &  Ye,  G.  (2012).  Case  study:  Pepperdine  University  libraries’  migration  to  OCLC’s  World-
Share. Journal of Web Librarianship, 6(2), 125–132. https:// doi. org/ 10. 1080/ 19322 909. 2012. 677296
Fahrudin, T. M., Funabiki, N., Brata, K. C., Naing, I., Aung, S. T., Muhaimin, A., & Prasetya, D. A. (2025). 
An  improved  reference  paper  collection  system  using  web  scraping  with  three  enhancements.  Future 
Internet, 17(5), 195. https:// doi. org/ 10. 3390/ fi170 50195
Gao, J., Zhao, H., Yu, C., & Xu, R. (2023). Exploring the feasibility of chatgpt for event extraction. Preprint 
retrieved from https:// arxiv. org/ abs/ quant- ph/ 2303. 03836
Giray, L. (2023). Prompt engineering with ChatGPT: A guide for academic writers. Annals of Biomedical 
Engineering, 51(12), 2629–2633. https:// doi. org/ 10. 1007/ s10439- 023- 03272-4
Greshake, K., Abdelnabi, S., Mishra, S., Endres, C., Holz, T., & Fritz, M. (2023). Not what you’ve signed up 
for: Compromising real-world llm-integrated applications with indirect prompt injection. Proceedings 
of the ACM Workshop on Artificial Intelligence and Security. https:// doi. org/ 10. 1145/ 36057 64362 3985
Hassanien,  H.E.-D.  (2019).  Web  scraping  scientific  repositories  for  augmented  relevant  literature  search  
using CRISP-DM. Applied System Innovation, 2(4), 37. https:// doi. org/ 10. 3390/ asi20 40037
Huang, L., Yu, W., Ma, W., Zhong, W., Feng, Z., Wang, H., & Liu, T. (2023). A survey on hallucination in 
large language models: Principles, taxonomy, challenges, and open questions. Preprint retrieved from 
https:// arxiv. org/ abs/ quant- ph/ 2311. 05232
Huang,  F.,  et  al.  (2024).  A  Three-Stage  Framework  for  Event-Event  Relation  Extraction  with  Large  Lan-
guage  Model.  In  B.  Luo,  L.  Cheng,  Z.  G.  Wu,  H.  Li,  &  C.  Li  (Eds.),  Neural  information  process-
ing.  ICONIP  2023.  Communications  in  computer  and  information  science.    (Vol.  1968).  Singapore:  
Springer.
Khojah, R., Mohamad, M., Leitner, P., & Neto, F. G. D. O. (2024). Beyond code generation: An observa-
tional study of ChatGPT usage in software engineering practice. Proceedings of the ACM on Software 
Engineering. https:// doi. org/ 10. 1145/ 36607 88
Kojima,  T.,  Gu,  S.  S.,  Reid,  M.,  Matsuo,  Y.,  &  Iwasawa,  Y.  (2022).  Large  language  models  are  zero-shot  
reasoners.  Advances  in  Neural  Information  Processing  Systems.  https:// doi. org/ 10. 48550/ arXiv. 2205. 11916
Kong, A., Zhao, S., Chen, H., Li, Q., Qin, Y., Sun, R., & Zhou, X. (2023). Better zero-shot reasoning with 
role-play prompting. Preprint retrieved from https:// arxiv. org/ abs/ quant- ph/ 2308. 07702
Krotov, V., Johnson, L., & Silva, L. (2020). Tutorial: Legality and ethics of web scraping. https:// doi. org/ 10. 17705/ 1CAIS. 04724
Lázaro-Rodríguez, P. (2024). PyDataBibPub: script en Python para automatizar la descarga de datos de bib-
liotecas  públicas  de  España  desarrollado  con  ChatGPT  3.5.  Infonomy.  https:// doi. org/ 10. 3145/ infon omy. 24. 042
Liu, Y., Deng, G., Xu, Z., Li, Y., Zheng, Y., Zhang, Y., & Liu, Y. (2023). Jailbreaking chatgpt via prompt 
engineering: An empirical study. Preprint retrieved from https:// arxiv. org/ abs/ quant- ph/ 2305. 13860
National Library of Spain (2021). National Library of Spain Report 2021. https:// www. bne. es/ sites/ defau lt/ files/ repos itorio- archi vos/ memor ia_ BNE_ 2021_0. pdf
Nguyen Duc, A., Cabrero-Daniel, B., Przybylek, A., Arora, C., Khanna, D., Herda, T., & Rafiq, U. (2023). 
Generative artificial intelligence for software engineering—A research agenda. SSRN. https:// doi. org/ 10. 2139/ ssrn. 46225 17
3453Scientometrics (2025) 130:3433–3453 
Nye, M., Tessler, M., Tenenbaum, J., & Lake, B. M. (2021). Improving coherence and consistency in neural 
sequence  models  with  dual-system,  neuro-symbolic  reasoning.  Advances  in  Neural  Information  Pro-
cessing Systems. https:// doi. org/ 10. 48550/ arXiv. 2107. 02794
Pividori,  M.,  &  Greene,  C.  S.  (2023).  A  publishing  infrastructure  for  AI-assisted  academic  authoring.  
BioRxiv. https:// doi. org/ 10. 1101/ 2023. 01. 21. 525030
Qi, S., Cao, Z., Rao, J., Wang, L., Xiao, J., & Wang, X. (2023). What is the limitation of multimodal LLMs? 
A  deeper  look  into  multimodal  LLMs  through  prompt  probing.  Information  Processing  &  Manage-
ment, 60(6), 103510. https:// doi. org/ 10. 1016/j. ipm. 2023. 103510
Reynolds,  L.,  &  McDonell,  K.  (2021).  Prompt  programming  for  large  language  models:  Beyond  the  few-
shot paradigm. In Extended Abstracts of the 2021 CHI Conference on Human Factors in Computing 
Systems (pp. 1–7). https:// doi. org/ 10. 1145/ 34117 63. 34517 60
Robinson-Garcia, N., Mongeon, P., Jeng, W., & Costas, R. (2017). DataCite as a novel bibliometric source: 
Coverage, strengths and limitations. Journal of Informetrics, 11(3), 841–854. https:// doi. org/ 10. 1016/j. joi. 2017. 07. 003
Sahoo, P., Singh, A.K., Saha, S., Jain, V., Mondal, S., & Chadha, A. (2024). A Systematic Survey of Prompt 
Engineering in Large Language Models: Techniques and Applications. Preprint retrieved from https:// arxiv. org/ abs/ quant- ph/ 2402. 07927
Ul  Huda,  N.,  Sahito,  S.  F.,  Gilal,  A.  R.,  Abro,  A.,  Alshanqiti,  A.,  Alsughayyir,  A.,  &  Palli,  A.  S.  (2024).  
Impact  of  contradicting  subtle  emotion  cues  on  large  language  models  with  various  prompting  tech-
niques.  International  Journal  of  Advanced  Computer  Science  &  Applications.  https:// doi. org/ 10. 14569/ IJACSA. 2024. 01504 42
Vaillant, T.S., de Almeida, F.D., Neto, P.A., Gao, C., Bosch, J., & de Almeida, E.S. (2024). Developers’ per-
ceptions on the impact of ChatGPT in software development: A survey. Preprint retrieved from https:// arxiv. org/ abs/ quant- ph/ 2405. 12195
Vaswani,  A.,  Shazeer,  N.,  Parmar,  N.,  Uszkoreit,  J.,  Jones,  L.,  Gomez,  A.  N.,  &  Polosukhin,  I.  (2017).  
Attention  is  all  you  need.  Advances  in  Neural  Information  Processing  Systems.  https:// doi. org/ 10. 48550/ arXiv. 1706. 03762
Verma,  S.,  Tran,  K.,  Ali,  Y.,  &  Min,  G.  (2023).  Reducing  llm  hallucinations  using  epistemic  neural  net-
works. Preprint retrieved from https:// arxiv. org/ abs/ quant- ph/ 2312. 15576
Wei,  J.,  Wang,  X.,  Schuurmans,  D.,  Bosma,  M.,  Xia,  F.,  Chi,  E.,  Le,  Q.,  &  Zhou,  D.  (2022).  Chain-of-
thought  prompting  elicits  reasoning  in  large  language  models.  Advances  in  Neural  Information  Pro-
cessing Systems. https:// doi. org/ 10. 48550/ arXiv. 2201. 11903
Xia,  C.S.,  &  Zhang,  L.  (2023).  Keep  the  Conversation  Going:  Fixing  162  out  of  337  bugs  for  $0.42  each  
using ChatGPT. Preprint retrieved from https:// arxiv. org/ abs/ quant- ph/ 2304. 00385
Yang, Z., Chen, S., Gao, C., Li, Z., Li, G., & Lv, R. (2023). Deep learning based code generation methods: 
A literature review. https:// doi. org/ 10. 48550/ arXiv. 2303. 01056
Ye,  Q.,  Axmed,  M.,  Pryzant,  R.,  &  Khani,  F.  (2023).  Prompt  engineering  a  prompt  engineer.  Preprint  
retrieved from https:// arxiv. org/ abs/ quant- ph/ 2311. 05661
Yehuda, Y., Malkiel, I., Barkan, O., Weill, J., Ronen, R., & Koenigstein, N. (2024). In Search of Truth: An 
Interrogation Approach to Hallucination Detection. Preprint retrieved from https:// arxiv. org/ abs/ quant- ph/ 2403. 02889
Zhao,  Z.,  Song,  S.,  Duah,  B.,  Macbeth,  J.,  Carter,  S.,  Van,  M.  P.,  et  al.  (2023,  June).  More  human  than  
human:  LLM-generated  narratives  outperform  human-LLM  interleaved  narratives.  In  Proceedings  of  
the 15th Conference on Creativity and Cognition (pp. 368–370)
Zhu,  X.,  Kuang,  Z.,  &  Zhang,  L.  (2023).  A  prompt  model  with  combined  semantic  refinement  for  aspect  
sentiment  analysis.  Information  Processing  &  Management,  60(5),  103462.  https:// doi. org/ 10. 1016/j. ipm. 2023. 103462
Publisher’s Note  Springer Nature remains neutral with regard to jurisdictional claims in published maps and 
institutional affiliations.
