
1

Automatic Zoom
A Survey of Large Language Models
Wayne Xin Zhao1, Kun Zhou2*, Junyi Li1*, Tianyi Tang1, Zican Dong1, Yupeng Hou1, Beichen Zhang1, Yingqian Min1,
Junjie Zhang1, Peiyu Liu1, Xiaolei Wang1, Yifan Du1, Chen Yang1, Yushuo Chen1, Zhipeng Chen1, Jinhao Jiang1,
Ruiyang Ren1, Yifan Li1, Xinyu Tang1, Zikang Liu1, Yiwen Hu1, Jian-Yun Nie3, Ji-Rong Wen1 ✉
1. Gaoling School of Artificial Intelligence, Renmin University of China, Beijing 100872, China
2. School of Information, Renmin University of China, Beijing 100872, China
3. Department of Computer Science, Université de Montréal, Montréal H3T 1J4, Canada
Received February 14, 2026; accepted March 17, 2026
E-mail: jrwen@ruc.edu.cn. * These authors contributed equally to this work.
© The Author(s) 2026. This article is published with open access at link.springer.com and journal.hep.com.cn
Abstract
The rapid evolution of large language models (LLMs) has driven a transformative shift in artificial intelligence (AI), reshaping both research
paradigms  and  practical  applications.  Distinguished  from  their  predecessors  by  unprecedented  scale  and  advanced  capabilities,  LLMs
necessitate new frameworks for understanding their development, behavior, and societal impact. This survey systematically reviews recent
advancements in LLM techniques across four key dimensions: (1) pre-training methodologies, which establish core model capabilities through
large-scale self-supervised training, architectural innovations, and data curation strategies; (2) post-training techniques, including supervised
fine-tuning  and  reinforcement  learning,  which  adapt  foundational  models  to  downstream  tasks  and  enhance  their  alignment  and  safety;
(3) utilization strategies, such as in-context learning, prompt engineering, and agentic reasoning, that optimize real-world deployment and
enable effective interaction with external environments; and (4) evaluation methods, encompassing benchmarks for key ability dimensions
such  as  core  language  capabilities,  reasoning,  and  safety,  which  support  comprehensive  and  reliable  assessment  of  model  performance.
Additionally, we identify critical research issues, including those concerning theoretical foundations, efficient scaling, alignment, and agentic
capability, and highlight the open challenges they present. By synthesizing state-of-the-art insights and emerging trends, this survey aims to
provide  a  systematic  and  comprehensive  framework  for  understanding  the  trajectory,  current  limitations,  and  future  directions  of  LLM
progress.
Keywords
Large language models; Pre-training; Post-training; Utilization; Evaluation
 
 ■ 1  Introduction
Language is a foundational human ability, essential to communica-
tion and expression. It emerges in early childhood and continues to
evolve throughout life [1]. For machines, however, this capacity is
not  innate;  without  sophisticated  artificial  intelligence  (AI)
algorithms,  they  cannot  naturally  process  or  generate  human
language. Thus, enabling machines to read, write, and communicate
in  a  human-like  manner  has  remained  a  central  and  enduring
challenge for AI research [2].
At  the  technical  core  of  this  endeavor  lies  natural  language
modeling, which serves as a cornerstone of machine intelligence for
language.  It  works  by  modeling  the  generative  likelihood  of  word
sequences,  predicting  the  probabilities  of  upcoming  or  missing
tokens. Research in this field has attracted immense attention, and its
historical  progress  can  be  organized  into  four  main  developmental
stages:n
● Statistical language models (SLMs) [3,4], commonly referred to
as  -gram  models,  emerged  in  the  1990s.  Based  on  statistical
learning  methods,  they  operate  under  the  Markov  assumption,
predicting each word based on only a limited window of preceding
context. Although widely adopted in information retrieval (IR) and
natural language processing (NLP), SLMs suffer from the curse of
dimensionality,  which  complicates  reliable  estimation  of  word
transition  probabilities.  To  address  the  resulting  data  sparsity,
smoothing  techniques  (e.g.,  back-off  and  Good-Turing  estimation)
were often employed.
● Neural language models (NLMs) [5,6] leverage neural networks
(e.g.,  multilayer  perceptron)  to  model  word  sequence  probabilities.
The seminal work by Bengio et al. [5] introduced distributed word
representations  and  established  a  word  prediction  framework
conditioned on aggregated contextual features. Subsequent advances,
such as the unified neural architecture [7], extended NLMs to diverse
https://doi.org/10.1007/s11704-026-60308-3
REVIEW ARTICLE
 
Frontiers of Computer Science  | Issue 12 | Volume 20 | December 2026 | 2012627-1
NLP tasks. Pivotal work like word2vec [8,9] later demonstrated that
even  shallow  neural  networks  could  learn  highly  effective  word
embeddings.  Collectively,  these  advances  shifted  the  focus  of
language  modeling  from  sequence  prediction  alone  to  robust,
distributed text representation learning.
●  Pre-trained  language  models  (PLMs)  [10,11]  are  developed
through self-supervised learning on carefully designed pre-text tasks,
enabling them to acquire the contextual semantic representations of
natural language texts. The ELMo model [10] pioneered this learning
paradigm using bidirectional LSTMs, while BERT [11] significantly
advanced  the  approach  by  employing  the  highly  parallelizable
Transformer  architecture  [12].  This  evolution  established  the
influential “pre-train + fine-tune” paradigm, in which models first
learn  a  broad  understanding  of  language  and  are  subsequently
adapted to specific downstream tasks via task-specific fine-tuning.
●  Large  language  models  (LLMs)  [13]  achieve  substantially
enhanced  capabilities  by  scaling  up  model  size,  training  data,  and
computational resources in accordance with established scaling laws
[14].  Pioneering  examples  include  GPT-3  (175B  parameters)  [13]
and  PaLM  (540B  parameters)  [15],  which  delivered  significant
performance gains over their predecessors, such as BERT [11] and
GPT-1  [16].  Notably,  GPT-3  excels  at  few-shot  tasks  through  in-
context learning, a capability absent in GPT-2. This leap in capability
led the research community to formalize the term “large language
models” [17,18], distinguishing them from conventional pre-trained
language  models.  The  transformative  potential  of  LLMs  became
widely  recognized  with  the  launch  of  ChatGPT,  an  advanced
dialogue-oriented model that sparked global interest in generative AI.
Today,  LLMs  have  transformed  both  AI  research  and  industry,
driving a paradigm shift from task-specific models toward general-
purpose  foundation  models.  Beyond  merely  improving  upon
traditional benchmarks, LLMs now act as accelerators for scientific
discovery—synthesizing literature, generating code to lower barriers,
and aiding hypothesis formation—thus becoming indispensable tools
for research work. In industry, LLMs leverage their extensive world
knowledge  and  advanced  capabilities,  such  as  planning,  reasoning,
and  tool  use,  to  serve  as  versatile  intelligent  assistants.  This
technological  leap  has  catalyzed  a  rapidly  growing  application
ecosystem. LLMs now form the core of advanced enterprise search
platforms, AI-driven data analysis tools, automated customer support
systems,  and  sophisticated  content  creation  suites,  demonstrating
their  deep  integration  into  professional  and  operational  workflows.
Given  their  expanding  role,  LLM  development  has  accelerated
markedly, with numerous models now emerging and being integrated
into daily life, as shown in the evolution timeline (Fig. 1).
Overall,  the  development  and  deployment  of  modern  language
models (Fig. 2) involves substantially greater complexity than earlier
generations.  This  complexity  is  driven  by  the  increasing  scale  and
capabilities  of  these  models,  and  is  manifested  in  a  multi-stage
pipeline. The foundational pre-training stage requires the meticulous
orchestration  of  data,  architecture,  and  large-scale  optimization,
balancing performance goals with practical constraints. An optional
mid-training  phase  then  further  refine  advanced  capabilities.
Subsequently,  rigorous  post-training  has  become  indispensable,
enhancing  instruction  following,  complex  reasoning,  and  task
performance  while  aligning  models  with  human  values  and
addressing  critical  safety  concerns.  To  leverage  these  models
effectively  in  practice,  they  are  typically  used  with  prompt
engineering  techniques  and  are  often  deployed  within  agentic
frameworks  designed  to  enhance  both  usability  and  performance.
Finally, establishing reliable and challenging evaluation benchmarks
is essential for steering the future development of LLMs.
The  remarkable  advancement  of  LLMs  has  brought  both
transformative capabilities and significant new challenges. As these
systems  demonstrate  increasingly  sophisticated  capacities,  the
research  community  requires  authoritative  frameworks  to  navigate
this  rapidly  evolving  and  complex  technical  pipeline.  This  survey
addresses  this  necessity  by  providing  a  structured  overview  and
analysis of four critical, interconnected stages of the LLM lifecycle:
pre-training  (developing  capable  base  models),  post-training
(optimizing  models  for  alignment  and  task-oriented  adaptation),
utilization (effective strategies for deployment and downstream use),
 
 
Fig. 1    A timeline of representative LLMs released in recent years. Models with publicly available checkpoints are highlighted in yellow
Wayne Xin Zhao et al.    A Survey of Large Language Models
 
Frontiers of Computer Science  | Issue 12 | Volume 20 | December 2026 | 2012627-2
