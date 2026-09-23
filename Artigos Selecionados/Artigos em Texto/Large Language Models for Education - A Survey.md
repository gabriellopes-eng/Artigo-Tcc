




1

Automatic Zoom
Large Language Models for Education: A Survey
Hanyi Xua, Wensheng Gana,∗, Zhenlian Qib,∗, Jiayang Wua and Philip S. Yuc
aCollege of Cyber Security, Jinan University, Guangzhou 510632, China
bSchool of Information Engineering, Guangdong Eco-Engineering Polytechnic, Guangzhou 510520, China
cDepartment of Computer Science, University of Illinois Chicago, Chicago, USA
A R T I C L E I N F O
Keywords:
artificial intelligence
smart education
LLMs
applications
challenges
A B S T R A C T
Artificial intelligence (AI) has a profound impact on traditional education. In recent years, large
language models (LLMs) have been increasingly used in various applications such as natural language
processing, computer vision, speech recognition, and autonomous driving. LLMs have also been
applied in many fields, including recommendation, finance, government, education, legal affairs, and
finance. As powerful auxiliary tools, LLMs incorporate various technologies such as deep learning,
pre-training, fine-tuning, and reinforcement learning. The use of LLMs for smart education (LLMEdu)
has been a significant strategic direction for countries worldwide. While LLMs have shown great
promise in improving teaching quality, changing education models, and modifying teacher roles,
the technologies are still facing several challenges. In this paper, we conduct a systematic review of
LLMEdu, focusing on current technologies, challenges, and future developments. We first summarize
the current state of LLMEdu and then introduce the characteristics of LLMs and education, as well
as the benefits of integrating LLMs into education. We also review the process of integrating LLMs
into the education industry, as well as the introduction of related technologies. Finally, we discuss the
challenges and problems faced by LLMEdu, as well as prospects for future optimization of LLMEdu.
1. Introduction
Artificial intelligence (AI) has developed rapidly in re-
cent years [73, 111, 139], thanks to the continuous improve-
ments in Web 3.0 [38], Internet of Behaviors (IoB) [103],
data mining [35, 48, 68], deep learning [122], and language
processing technologies [47]. LLMs have shown excellent
performance in various industries with the optimization of
pre-training models and the continuous adjustment of related
technologies [25, 132]. LLM is mainly based on many
AI technologies, e.g., natural language processing (NLP),
and was used to understand and generate massive texts
[41]. They perform self-supervised learning on a large-scale
corpus to obtain the statistical laws of language [31] and
then convert it into logical natural language text. Its basic
framework is shown in Figure 1. LLMs have demonstrated
strong versatility and logical reasoning capabilities, lead-
ing to their widespread model-as-a-service (MaaS) [37] in
various industries, including finance, education [36], law
[58], robotics [131], and government affairs [20, 32, 126].
Creating a scenario-based user experience is a key advantage
for most digital companies, and it also happens to be a
development need for LLM.
The concept of education has been around for cen-
turies, dating back to the theory of biological origins. In
primitive societies, education was limited to the use of
primary production tools, whereas ancient societies relied
on oral transmission and practice to pass knowledge down
to future generations [66]. With the development of sci-
ence and technology in modern society, education and AI
∗ Corresponding author
xhyzhiyi@gmail.com (H. Xu); wsgan001@gmail.com (W. Gan);
qzlhit@gmail.com (Z. Qi); csjywu1@jnu.edu.cn (J. Wu); psyu@uic.edu (P.S.
Yu)
ORCID(s):AI
Machine Learning 
Deep Learning 
LLM
Pre-training
Fine-tuning
(Task-specific labeled data)
Fine-tuned model
Figure 1: Framework of LLMs.
have become inseparable [22], including intelligent teacher
assistants, voice assistants [77, 92], AI writing creation
platforms, etc. The fourth industrial revolution, represented
by the intelligent revolution [15], can bring the education
industry to a new level with the help of LLMs. Education
is essentially about knowledge transfer, instant feedback,
and emotional interaction. LLMs mainly enhance the “im-
mediate feedback" process in education. They have the po-
tential to revolutionize the education industry by providing
personalized, adaptive learning experiences for students. By
infusing knowledge into their models, LLMs can gradually
build a deep understanding of the world, surpassing human
learning in some aspects. They can generate high-quality
text content, comprehend natural language, extract informa-
tion, and answer questions across various fields [71]. LLMs
can also do complex mathematical reasoning [123], which
helps the education sector show that they are good at self-
supervision, intelligent adaptive teaching, and multi-modal
interaction [26]. With their ability to adapt the individual
students’ needs and learning styles, LLMs can provide a
more effective and engaging learning experience.
H. Xu et al.: Preprint submitted to Elsevier Page 1 of 19
arXiv:2405.13001v1  [cs.CL]  12 May 2024
Large Language Models for Education: A Survey
Research gaps: There are already many educators and
researchers who have shown a lot of thinking about AI
in education. Examples are as follows: Some research has
been conducted on the paradigm shift in AI in education
[85] and on the impact of AI in management, teaching,
and learning [21]. Some studies explain AI in education
and show how they work [72]. Due to the rapid iteration
and update of AI, many new educational AI technologies
have been spawned, but there is a lack of summary and
analysis of emerging technological means. LLMs, as one
of these technologies, have significantly advanced AI devel-
opment to a new stage. LLMs are the latest technological
means to support intelligent education. The integration of
education and LLMs particularly highlights the development
and application characteristics of LLMs. There has been
one brief review of LLMs for education [36], while many
characteristics of LLMEdu and key technologies are not
discussed in detail.
Contributions: To examine the potential of LLMEdu
and promote its development, this paper provides an in-depth
analysis of the development process and technical structure
of LLMEdu and forms a comprehensive summary. This
review aims to help readers gain a deeper understanding of
LLMEdu and encourages us to invent and consider LLMEdu
applications. The specific contributions are as follows:
•We take a closer look at the connection between LLMs
and education, aiming to achieve smart education.
•We demonstrate the development process of LLMEdu
through the process of applying LLMs to education
and the key technologies of LLMs.
•We review the implementation of LLMEdu from the
perspective of LLMs empowering education, focusing
on exploring the development potential of LLMEdu.
•We highlight the problems and challenges existing in
LLMEdu in detail, aiming to trigger some insight,
critical thinking, and exploration.
Roadmap: In Section 2, we briefly introduce the char-
acteristics of LLMs and the education industry, as well as
the characteristics of LLMs integrated into education. In
Section 3, we conduct an in-depth analysis of the process
of applying LLMs to education. In Section 4, we explain the
key technologies related to LLMs. In Section 5, we provide
the implementation of LLMEdu from the perspective of
empowering education with LLMs. In Section 6, we high-
light some of the main issues and challenges in LLMEdu.
Finally, in Section 7, we summarize LLMEdu and propose
expectations for the development of future LLMs. Table 1
describes some basic symbols in this article.
2. Characteristics of LLM in Education
In this section, we discuss the key characteristics of
LLMs, the key characteristics of education, the limitations of
traditional education, and the combinations between LLMs
and education, as depicted in Figure 2.
Table 1
Summary of symbols and their explanations
Symbol Definition
AI Artificial Intelligence
AIGC AI-Generated Content
ChatGPT Chat Generative Pre-Training Transformer
CV Computer Vision
DNNs Deep Neural Networks
GPT Generative Pre-trained Transformer
HFRL Human Feedback Reinforcement Learning
LLMEdu Large Language Models for Education
LLMs Large Language Models
LMs Language Models
NLP Natural Language Processing08. High complexity and cost
03. Pre-training and fine-tuning
Education
01. Large-scal
06. Fragmentization
02. General-purpose
05. Homogenization
04. Emergent capacity
07. Break the limits of accuracy
02. Large capacity 
01. Low threshold
03. System perfection
04. Rise of online education
05. Younger-age trend
06. Intelligentize
07. Precision
08. Individuation
LLM LLMEdu
Show: 
Interdisciplinary teaching , precise identification of personalized needs, guided learning, enhancing teaching quality and effectiveness
Impact:
Personalized learning support, personalized assessment and feedback, wide coverage of subject knowledge
Real-time problem-solving and tutoring, expansion of opportunities, provision of learning resources and tools
Critical thinking and problem-solving skills, professional development for educators, accessibility and inclusivity in education
Figure 2: The characteristics of LLMEdu.
2.1. Characteristics of LLMs
Large-scale. The term “large" in LLMs can be inter-
preted in two ways. Firstly, LLMs possess an enormous
number of parameters, with the parameter count increasing
exponentially from billions to trillions in just a few years.
For instance, Google’s BERT had 300 million parameters in
2018, GPT-2 had 1.5 billion parameters in 2019, and GPT-
3 had 175 billion parameters in 2021 [137, 101]. In 2022,
the Switch Transformer reached an impressive 1.6 trillion
parameters [67, 100]. Furthermore, LLMs are trained on
vast amounts of data from diverse sources, including the
web, academic literature, and conversations. This large-scale
corpus of data enables the models to learn and represent
complex patterns and relationships in language, leading to
improved performance in various NLP tasks [107].
General-purpose. LLMs have a wide range of applica-
tions [88]. In addition to excelling in specific domains, they
are adept at handling various types of tasks, including NLP,
CV, speech recognition, and even cross-modal tasks. In other
words, LLMs possess powerful generalization capabilities,
and achieving such capabilities requires training on massive
amounts of data.
Pre-training and fine-tuning [27, 47, 132]. The core
of the model training process lies in the use of pre-training
followed by fine-tuning. Initially, pre-training is performed
on a large-scale unlabeled text corpus to acquire the model’s
H. Xu et al.: Preprint submitted to Elsevier Page 2 of 19
