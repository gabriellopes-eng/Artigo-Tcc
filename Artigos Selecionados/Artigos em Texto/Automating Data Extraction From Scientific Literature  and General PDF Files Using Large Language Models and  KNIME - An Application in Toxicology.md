
16

Automatic Zoom
1 of 16Wiley Interdisciplinary Reviews: Computational Molecular Science, 2025; 15:e70047
https://doi.org/10.1002/wcms.70047
Wiley Interdisciplinary Reviews: Computational Molecular Science
SOFTWARE FOCUS OPEN ACCESS
Automating Data Extraction From Scientific Literature 
and General PDF Files Using Large Language Models and 
KNIME: An Application in Toxicology
José Teófilo Moreira-Filho1   |  Dhruv Ranganath1,2  |  Ricardo S. Tieghi1,2  |  Robert Patton3  |  Vicki Sutherland4  |  
Charles Schmitt5  |  Andrew A. Rooney5  |  Jennifer Fostel5  |  Vickie R. Walker5  |  Trey Saddler6  |  
David Reif7  |  Kamel Mansouri1  |  Nicole Kleinstreuer1
1National Toxicology Program Interagency Center for the Evaluation of Alternative Toxicological Methods, Division of Translational Toxicology, National 
Institute of Environmental Health Sciences, Research Triangle Park, North Carolina, USA  |  2University of North Carolina, Chapel Hill, North Carolina, 
USA  |  3Oak Ridge National Laboratory, Oak Ridge, Tennessee, USA  |  4Preclinical Sciences & Translational Safety, Johnson & Johnson, Spring House, 
Pennsylvania, USA  |  5Division of Translational Toxicology, National Institute of Environmental Health Sciences, Research Triangle Park, North Carolina, 
USA  |  6Axle Informatics, Rockville, Maryland, USA  |  7Predictive Toxicology Branch, Division of Translational Toxicology, National Institute of 
Environmental Health Sciences, Research Triangle Park, North Carolina, USA
Correspondence: José Teófilo Moreira- Filho (teofilo.moreirafilho@nih.gov)  |  Kamel Mansouri (kamel.mansouri@nih.gov)
Received: 12 May 2025  |  Revised: 15 August 2025  |  Accepted: 25 August 2025
Associate Editor: Peter R. Schreiner   |  Editor- in- Chief: Peter R. Schreiner 
Funding: This research was supported by the NIH, National Institute of Environmental Health Sciences through Intramural Research Program Project 
ES103376-  02.
Keywords: generative artificial intelligence | KNIME | LLMs
ABSTRACT
The  large  and  steadily  increasing  volume  of  scientific  publications  presents  a  challenge  in  accessing  and  utilizing  data  due  to  
their unstructured nature. Toxicology, in particular, depends on structured data from diverse study types for study evaluation, 
weight-  of-  evidence  chemical  assessments,  and  validation  of  new  approach  methodologies  (NAMs).  Manual  data  extraction  is  
time and labor- intensive. This work presents an automated data extraction workflow using large language models (LLMs) within 
the KNIME platform. The workflow integrates document parsing tools with LLMs to extract variables from scientific publica-
tions and general PDF files. Two execution modes are available: text mode and image mode. Text mode applies tools for extracting 
text and tables, while image mode uses multimodal LLMs to process non- linear layouts and graphical content. The workflow 
achieves  81.14%  accuracy  in  text  mode  for  scientific  publications  and  up  to  98.54%  in  image  mode  for  general  PDF  files.  The  
KNIME platform ensures accessibility through a user- friendly interface, allowing non- experts to use advanced data extraction 
methods. This automated approach facilitates toxicological research by improving the retrieval of structured data. By democra-
tizing access to LLM- powered workflows, this approach paves the way for significant advancements in knowledge synthesis to 
support biomedical research.
This article is categorized under:
Data Science > Artificial Intelligence/Machine Learning
Data Science > Computer Algorithms and Programming
Data Science > Databases and Expert Systems
This is an open access article under the terms of the Creative Commons Attribution License, which permits use, distribution and reproduction in any medium, 
provided the original work is properly cited.
© 2025 The Author(s). WIREs Computational Molecular Science published by Wiley Periodicals LLC.
2 of 16 Wiley Interdisciplinary Reviews: Computational Molecular Science, 2025
1   |   Introduction
An  enormous  volume  of  data  is  published  in  the  scientific  lit-
erature every year. According to bibliometric studies, over 
2.5  million  articles  are  published  annually  [1],  and  this  num-
ber  is  increasing  exponentially  [2].  Such  a  volume  of  data  is  
beyond  the  human  capacity  to  find,  process,  read,  and  extract  
the  relevant  information,  even  within  a  single  research  do-
main.  Consequently,  invaluable  knowledge  often  remains  hid-
den within the sheer magnitude of scientific publications [3, 4]. 
Adding to the challenge, scientific findings are disseminated in 
various  formats,  including  journal  articles  and  reports,  often  
presented  in  an  unstructured  manner  reflecting  the  diverse  
ways  researchers  present  and  emphasize  key  findings  via  text,  
figures, tables, or schematics [5].
To  overcome  the  challenges  posed  by  the  overwhelming  vol-
ume  and  unstructured  nature  of  scientific  publications,  one  
solution  involves  extracting  data  from  free-  text  and  organiz-
ing  them  into  structured,  searchable  databases.  These  data-
bases are computer- readable and enable researchers to query, 
process,  and  analyze  data  efficiently  [3].  In  toxicology,  ac-
cess  to  structured  data  is  critical  for  identifying  relevant  in-
formation,  evaluating  study  quality,  integrating  evidence  on  
chemical  effects,  and  developing  reference  datasets  that  can  
be  used  to  build  and  validate  new  approach  methodologies  
(NAMs), such as computational models. These NAMs address 
the  challenge  of  informing  hazard  and  risk  assessment  in  a  
rapid, human- relevant way while reducing reliance on animal 
testing  [6–9].  However,  building  tools  and  resources  to  make  
toxicology  data  accessible  and  leverage  the  information  from  
all  of  this  research  requires  significant  effort  in  manual  data  
extraction  and  curation,  further  complicated  by  the  inherent  
difficulty  and  uncertainty  in  interpreting  scientific  informa-
tion from diverse textual formats [10, 11].
In this context, Natural Language Processing (NLP), a subfield 
of  artificial  intelligence  (AI)  and  linguistics  that  enables  ma-
chines to process human words and phrases with their intent 
and  content,  has  opened  promising  avenues  for  automating  
data extraction from scientific literature into structured data-
sets  [12].  Despite  its  increase  in  popularity,  traditional  NLP  
methods often require considerable target- domain knowledge 
and  the  development  of  sets  of  domain-  specific  rules  defined  
manually  from  experience  on  a  case-  by-  case  basis,  making  
them  time-  intensive  to  fine-  tune  and  with  weak  generaliza-
tion  capabilities  [3,  13].  Fortunately,  with  the  advent  of  large  
language  models  (LLMs),  a  new  technological  era  has  begun  
in the NLP field [14]. These models are trained using extensive 
amounts  of  data  to  achieve  a  level  of  linguistic  comprehen-
sion  akin  to  human  understanding,  and  they  can  solve  tasks  
for which they have not been explicitly trained [15, 16]. For a 
few  examples,  LLMs  can  answer  questions,  summarize  text,  
change  file  formats,  learn  to  use  programs,  execute  multi-  step tasks [17], and extract structured data from unstructured 
text [18–21].
Large  language  models  can  be  accessed  through  provider-  hosted web interfaces, which offer a straightforward way 
to  interact  with  these  powerful  models.  However,  web  in-
terfaces  often  lack  the  f lexibility  and  scalability  needed  for  
more  complex  or  automated  applications.  To  overcome  these  
limitations,  LLMs  can  also  be  accessed  through  Application  
Programming  Interfaces  (APIs),  enabling  the  development  
of  automated,  customizable,  and  scalable  systems  tailored  to  
specific  needs  [22,  23].  These  APIs  allow  for  seamless  inte-
gration  of  LLM  capabilities  into  workf lows,  supporting  tasks  
such  as  data  extraction,  information  synthesis,  and  decision-  making.  Despite  the  advantages  of  APIs,  relying  solely  on  
programming scripts for their implementation can pose acces-
sibility  challenges,  particularly  for  non-  technical  users.  This  
reliance on coding expertise can hinder the broader adoption 
and  democratization  of  LLM-  based  technologies.  To  address  
this  gap,  the  Konstanz  Information  Miner  (KNIME),  a  free  
and  open-  source  data  analytics  platform,  provides  a  valuable  
alternative [24, 25]. KNIME's low- code/no- code environment, 
coupled  with  intuitive  graphical  user  interfaces  (GUIs),  em-
powers  users  to  rapidly  design,  deploy,  and  apply  workf lows  
without  extensive  programming  knowledge  [12].  By  bridging  
the  gap  between  technical  complexity  and  user  accessibility,  
KNIME  facilitates  the  widespread  adoption  of  LLM-  powered  
systems,  fostering  innovation  and  inclusivity  across  diverse  
domains.
In  this  work,  we  introduce  an  automated  KNIME  workf low  
that  easily  integrates  document  parsing  tools  and  LLMs  to  
enable  the  efficient  extraction  of  key  study  protocol  and  data  
variables relevant to toxicology. We also document the process 
used to establish and test this workf low for transparency and 
to support greater understanding of the rigor in the approach. 
The workf low is designed to extract data from Portable 
Document Format (PDF) files from various sources, including 
scientific publications and safety data sheets (SDSs). Multiple 
preprocessing  strategies  and  extraction  modes  were  explored  
to  handle  different  document  structures  and  improve  accu-
racy.  By  leveraging  the  capabilities  of  LLMs  such  as  GPT-  4o  
and Claude 3.5 Sonnet within an accessible and user- friendly 
platform,  this  approach  aims  to  streamline  data  extraction,  
enhance data accessibility, and support advancements in tox-
icological  research  and  safety  assessment.  The  performance  
testing  demonstrated  the  workf low's  reliability  and  efficacy,  
attaining an accuracy of 81.14% for scientific publications and 
up to 98.54% for SDSs. This robust assessment underscores the 
workf low's potential to democratize advanced data extraction 
methods, fostering broader adoption and interdisciplinary 
collaboration.
The  data  extraction  workf low  is  part  of  the  Modeling  and  
Visualization  Pipeline  (MoVIZ),  which  has  the  goal  of  de-
mocratizing  computational  methods  to  non-  experts  and  sim-
plifying  their  use  for  the  scientific  community  by  providing  
user-  friendly  GUIs,  step-  by-  step  instructions,  and  straight-
forward  tool  installation  [26].  This  workf low  is  available  for  
download from GitHub (https:// github. com/ NIEHS/  Data_ extra ction_ workf low)  and  KNIME  Community  Hub  (https:// hub. knime. com/s/ oh8vL kMh-  2h0th6B)  and  can  be  installed  
on  local  desktops  or  network  servers.  Also,  the  workf low  
is accessible via the National Institute of Environmental 
Health Sciences (NIEHS) KNIME Server, serving all National 
Institutes  of  Health  (NIH)  users  (under  the  NIH  network)  as  
a  web  application  at  the  KNIME  WebPortal  (https:// knime. niehs. nih. gov/ knime/  webpo rtal/ ). 17590884, 2025, 5, Downloaded from https://wires.onlinelibrary.wiley.com/doi/10.1002/wcms.70047 by Capes, Wiley Online Library on [26/04/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
3 of 16
2   |   Materials and Methods
2.1   |   Background
The PDF file format first appeared in the early 1990s to enable 
consistent  presentation  of  documents  for  viewing,  sharing,  
and  printing;  the  format  quickly  gained  widespread  accep-
tance in both academic and commercial fields. By 2015, Adobe 
estimated  that  approximately  1.5  trillion  PDF  files  had  been  
produced, which has undoubtedly increased exponentially 
in  the  years  since  [27].  PDF  is  a  layout-  oriented  format  that  
defines  the  placement  and  font  of  each  individual  character  
in  the  text,  and  the  position  of  figures  within  the  document  
[28,  29],  and  as  a  result,  the  semantic  role  of  individual  com-
ponents  is  lost  in  this  visually  oriented  file  format.  Without  
visually interpreting the pages, it becomes extremely challeng-
ing  to  determine  whether  a  specific  set  of  characters  corre-
sponds to a title, abstract, table, or another document element. 
Furthermore,  scientific  literature  and  reports  in  PDF  format  
lack  layout  standardization  across  domains  and  publishers.  
These  characteristics  make  PDF  files  particularly  difficult  to  
convert into structured, machine- readable formats [27, 29, 30].
In  PDF  data  extraction  tasks,  identifying  the  document  layout  
and extracting content while preserving semantic relationships 
is only the initial step. Subsequently, it is necessary to perform 
named  entity  recognition  (NER)  to  obtain  the  information  in  
a  structured  format,  such  as  tabular  data.  NER  is  a  subfield  of  
NLP that focuses on identifying and classifying named entities 
(e.g., chemical names, animal species, administered doses, nec-
ropsy  findings,  etc.)  within  unstructured  text  [31].  LLMs  have  
been  proven  effective  for  performing  NER  [20,  32,  33]  due  to  
their  reasoning,  comprehension,  recognition  capabilities,  and  
ability to process large inputs with extensive context windows. 
Moreover,  LLMs  allow  interaction  through  prompts—tailored  
instructions—making  them  more  accessible,  flexible,  and  suit-
able for human operators [13].
2.2   |   Overview of the Data Extraction Workflow
Several  approaches,  machine  learning  models,  and  tools  are  
available  to  automate  PDF  parsing,  text  extraction,  and  NER.  
However,  no  single  tool  suits  all  purposes,  and  it  is  essential  
to  acknowledge  that  all  existing  tools  have  some  drawbacks,  
either  in  terms  of  performance  or  ease  of  use.  Furthermore,  
some  of  these  tools  are  implemented  in  commercial  products,  
which  can  hinder  the  democratization  of  these  technologies  
[23, 27, 30, 34–36]. In this context, we developed a free and open- source  KNIME  workflow  that  combines  various  PDF  parsing,  
text extraction, and NER approaches, integrated with LLMs, to 
produce  structured  output  extractions.  A  general  overview  of  
the workflow steps is provided in Figure 1.
The data extraction KNIME workflow provides two differ-
ent  running  modes:  “New  Analysis”  and  “New  Analysis  with  
Prior  Configuration”.  The  first  step  of  the  default  mode  “New  
Analysis”  is  inputting  a  compressed  archive  file  (ZIP  format)  
containing  PDF  documents  from  scientific  literature  and  other  
sources. These files are decompressed, and the individual PDFs 
are  processed  for  parsing.  The  parsing  process  is  divided  into  
two primary modes: text mode and image mode, designed to op-
timize data extraction while addressing the inherent challenges 
posed by the diverse structures and formats of PDF documents.
The  text  mode  is  subdivided  into  two  categories:  PDF  files  of  
scientific  publications  and  general  PDF  files,  which  enable  the  
workflow to extract textual data from PDF documents. For PDF 
files  of  scientific  publications,  the  workflow  extracts  the  text  
of  documents  that  follow  the  IMRAD  structure  (Introduction,  
Methods, Results, and Discussion). The extracted elements typ-
ically include titles and main body sections, ensuring the docu-
ment's  logical  flow  and  essential  components  are  retained.  For  
general PDF files, which may not necessarily follow the IMRAD 
format  or  require  OCR  (Optical  Character  Recognition)  pro-
cessing,  the  workflow  ensures  the  extraction  of  the  entire  text  
content of the document. This approach is designed for diverse 
document structures and formats where no predefined headings 
or layouts are available.
The image mode is employed when documents contain complex 
layouts  or  significant  non-  textual  elements  such  as  images  and  
graphs.  This  mode  involves  converting  PDF  pages  into  images,  
followed by preprocessing steps to standardize and enhance these 
images  for  further  analysis.  The  prepared  images  are  used  as  
input for multimodal large language models (MLLMs), i.e., LLMs 
with abilities in natural language and visual information (image) 
modalities [37, 38], to extract textual and visual information. This 
mode  is  particularly  effective  for  documents  where  traditional  
text extraction methods are insufficient due to the complexity of 
the layout or the visually graphical nature of the content.
Following  the  initial  parsing  and  preprocessing  of  documents  
through text and image modes, LLMs and prompt engineering 
are  applied  for  data  extraction.  In  the  context  of  textual  data  
obtained  from  text  mode,  LLMs  analyze  the  text  to  detect  and  
classify words or sentences into categories relevant to toxicolog-
ical research, such as chemical identifiers, dosages, and testing 
results.  By  leveraging  their  extensive  pre-  trained  knowledge  
and  contextual  understanding,  LLMs  can  discern  nuances  in  
language,  differentiate  between  homonyms  based  on  context,  
and  identify  entities  that  are  not  explicitly  stated  but  are  im-
plied through complex linguistic structures. For data extracted 
through image mode, MLLMs are used to process and interpret 
the full multimodal context of PDFs, including textual content, 
layout,  formatting,  and  graphical  elements.  The  models  are  
prompted  to  output  a  JavaScript  Object  Notation  (JSON)  file,  
which  can  be  directly  downloaded  or  converted  at  the  end  of  
the workflow to a comma- separated file (CSV) and/or Excel file 
(XLSX).
After  a  workflow  finishes,  the  system  captures  the  chosen  set-
tings  and  prompts  as  “flow  variables”,  which  can  be  exported  
to  a  configuration  file.  That  file  can  be  used  with  the  “New  
Analysis with Prior Configuration” mode to reproduce settings 
for new input files, ensuring consistent and efficient runs.
2.3   |   Workflow Input and PDF Parsing
The data extraction KNIME workflow starts by the selection of 
one  of  two  different  running  modes:  “New  Analysis”  or  “New   17590884, 2025, 5, Downloaded from https://wires.onlinelibrary.wiley.com/doi/10.1002/wcms.70047 by Capes, Wiley Online Library on [26/04/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
4 of 16 Wiley Interdisciplinary Reviews: Computational Molecular Science, 2025
FIGURE 1    |    Overview of the data extraction workflow. 17590884, 2025, 5, Downloaded from https://wires.onlinelibrary.wiley.com/doi/10.1002/wcms.70047 by Capes, Wiley Online Library on [26/04/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
5 of 16
Analysis with Prior Configuration” and with the input of a ZIP 
file  containing  the  scientific  literature  or  general  PDF  files  for  
data extraction. The ZIP file serves as a centralized repository, 
enabling  efficient  handling  of  multiple  documents  in  a  single  
workflow  execution.  Each  PDF  file  within  the  archive  is  ex-
pected to represent an individual document, such as a scientific 
article, regulatory report, or other text resource. The workflow 
extracts  the  ZIP  file's  contents  into  a  designated  directory,  and  
then the PDF files are parsed using the methods available in the 
text  or  image  mode.  The  parsing  mode  is  selected  by  the  user  
based on the document type and extraction task; it is not an au-
tomated decision made by the tool.
After inputting PDF files, the text extraction process con-
verts  the  documents  into  a  machine-  readable  format.  In  the  
text  mode  for  scientific  articles,  the  GROBID  [39]  tool  is  em-
ployed to extract the complete text, including section titles and 
their  corresponding  content.  The  output  consists  of  TEI  (Text  
Encoding  Initiative)  XML  files,  parsed  using  a  custom-  built  
parser implemented with the ElementTree Python library [40]. 
The  parser  specifically  processes  elements  within  the  <body>  
tag  of  the  TEI  XML  structure,  capturing  the  main  sections  of  
the  document,  such  as  the  title,  abstract,  introduction,  meth-
ods, results, and conclusions. For publications lacking a formal 
IMRAD  structure  (e.g.,  letters  or  communications),  the  entire  
body  text  is  extracted  as  a  single  section.  The  output  does  not  
include sections such as references, author lists, and Supporting 
Information  to  reduce  token  usage.  Finally,  the  parsed  XML  
data is converted into a structured JSON format containing the 
document title and a list of sections, each represented by a title 
and its associated text content. In addition to the main body text 
of  the  scientific  publications,  specialized  tools  are  needed  for  
extracting  tables.  Tabular  data  in  PDF  files  can  be  structured  
in different formats, oriented horizontally or vertically, and can 
vary from simple flat structures to complex hierarchical layouts, 
presenting  unique  challenges  to  table  extraction  [35,  41,  42]. 
Here,  we  tested  different  tools  for  extracting  tabular  data  from  
PDF files: pdfplumber [43], tabula- py [44], Nougat [45], Marker 
[46], Docling [47], and Camelot [48]. After our tests, we selected 
tabula- py and Docling for our final implementation (details are 
in  the  Supporting  Information:  1.  Details  on  the  evaluation  of  
tabular  data  extraction  tools).  All  the  tables  in  an  article  were  
extracted, converted to JSON, and combined with the GROBID 
output JSON file.
In  the  text  mode,  we  implemented  a  second  option  for  general  
PDF  files  that  do  not  necessarily  follow  the  IMRAD  format  
or  need  OCR.  In  these  cases,  the  extraction  of  the  whole  text  
content of the file is needed. The Python libraries Marker [46], 
Docling [47], or PyMuPDF4LLM [49] were used in this option to 
automate the parsing of PDF files into Markdown format, facil-
itating further data extraction. Marker [46] is a pipeline of deep 
learning  models  that  extracts  textual  data  from  the  PDF  files  
and performs OCR using the Surya toolkit [50]. Using the Surya 
toolkit, Marker identifies and classifies various layout elements 
within the document, including titles, captions, tables, figures, 
textual  blocks,  and  column  and  text  order.  Identifying  these  
components  is  vital  for  accurately  structuring  the  Markdown  
output  and  preserving  the  document's  original  layout  and  se-
mantic structure. In the final stage, Marker employs a model for 
post- processing the text, ensuring that the Markdown output is 
clean  and  maintains  the  original  document's  intent  and  accu-
racy [51]. Docling [47] uses PDF backends based on qpdf [52] or 
pypdfium [53] to extract text tokens such as string content and 
its coordinates on the page, as well as rendering bitmap images 
of each page. Docling then employs two AI models to enhance 
the document's structure recognition. The first, a layout analysis 
model, uses advanced object detection to classify page elements 
from  page  images,  such  as  text  blocks  and  tables.  The  second,  
TableFormer, is adept at analyzing and reconstructing the struc-
ture  of  tables,  even  those  with  complex  layouts.  Optional  OCR  
capabilities  are  also  available  through  EasyOCR  [54]  to  han-
dle  content  from  scanned  images.  The  extractions  are  passed  
through  a  post-  processing  model  to  detect  the  document  lan-
guage,  correct  the  reading  order,  match  figures  with  captions,  
and  label  metadata  to  output  a  structured  Markdown  file  [47]. 
PyMuPDF4LLM [49] begins by opening the desired PDF docu-
ment using PyMuPDF [55] and extracting text, text orientation, 
font properties, and designated clipping areas for multi- column 
layouts. This ensures the extraction process respects the 
natural reading order and layout specifics. Furthermore, 
PyMuPDF4LLM performs OCR to convert image- based text into 
editable  text  formats  using  Tesseract  [56,  57].  The  result  of  the  
parsing stage is a structured Markdown file that retains critical 
formatting and layout details. The output Markdown files gener-
ated serve as a standardized input for the LLMs for subsequent 
text analysis and data extraction.
In the image mode, the first step is to convert the PDF pages 
into  images  using  the  PyMuPDF  [55]  and  the  OpenCV  [58] 
Python  libraries.  Once  the  PDF  page  images  are  obtained,  
their orientation is corrected to standardize the layout for text 
recognition.  This  involves  converting  the  image  to  grayscale  
and  detecting  edges  using  the  Canny  algorithm  [59],  imple-
mented through the OpenCV library. The resulting edges are 
then used to identify lines in the image using the Hough Line 
Transform.  The  angles  of  these  lines  are  calculated  to  deter-
mine the dominant orientation of the text. Depending on the 
identified  angle,  the  image  is  rotated  to  ensure  that  the  text  
is aligned horizontally, enhancing the accuracy of subsequent 
text  extraction.  Following  orientation  correction,  images  are  
resized  to  ensure  dimension  uniformity,  facilitating  faster  
processing  in  later  stages.  The  resizing  uses  the  Pillow  [60] 
Python  library,  which  adjusts  the  image  dimensions  while  
maintaining  the  aspect  ratio,  using  the  Lanczos  resampling  
method  for  high-  quality  output.  The  correctly  oriented  and  
resized  images  are  converted  to  JPEG  format  before  being  
encoded  into  base64  strings.  This  conversion  is  necessary  to  
prepare  the  images  for  submission  to  a  LLM  provider  API,  
which accepts base64- encoded images. The encoding process 
enables  image  data  to  be  embedded  directly  within  API  re-
quests, eliminating the need for external file storage [23, 61]. It 
is important to clarify that “image mode” refers to the process 
of  converting  entire  PDF  pages  into  images  for  analysis  by  a  
MLLM; this decision is not based on the number of figures or 
images the document contains.
To address the diverse challenges posed by different document 
types,  we  integrate  two  different  approaches  for  PDF  pars-
ing:  rule-  based  and  learning-  based.  Rule-  based  tools,  such  as  
PyMuPDF4LLM, analyze PDF bytecode, including coordinates, 
fonts, and drawing commands, to extract structured content. In  17590884, 2025, 5, Downloaded from https://wires.onlinelibrary.wiley.com/doi/10.1002/wcms.70047 by Capes, Wiley Online Library on [26/04/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
6 of 16 Wiley Interdisciplinary Reviews: Computational Molecular Science, 2025
contrast,  learning-  based  tools  employ  machine  learning  mod-
els, including deep learning and MLLMs, to interpret document 
structure and content.
Learning- based approaches can be further subdivided into mod-
ular and end- to- end systems. In this workflow, both categories 
are  implemented.  Modular  systems  used  in  the  workflow  in-
clude GROBID, Marker, and Docling, which break down docu-
ment parsing into specialized subtasks, such as layout analysis, 
OCR, and table or equation detection. End- to- end systems were 
employed  in  the  image  mode  with  MLLMs  to  process  entire  
document  pages  or  substantial  regions  within  a  unified  neural  
network.  Together,  rule-  based  and  learning-  based  approaches  
provide  the  flexibility  necessary  to  navigate  the  complexity  of  
heterogeneous  scientific  and  technical  documents.  To  support  
the  evaluation  of  the  PDF  parsing  step,  our  workflow  enables  
users  to  review  and  download  intermediate  outputs,  such  as  
Markdown or JSON files, before LLM- based extraction.
After executing a data extraction analysis using the “New 
Analysis”  mode,  all  selected  options  and  prompts  are  stored  
as  “flow  variables”  and  exported  as  a  configuration  file  (.vari-
ables),  generated  by  the  “Write  Variables”  node  [62].  The  con-
figuration file is used as input for the “New Analysis with Prior 
Configuration” running mode. This mode uses all the configu-
rations and prompts from a past analysis in a new set of files. The 
configuration file is read with the “Read Variables” node [63].
2.4   |   Prompt Input and Large Language Models
Two  prompt  input  options  are  available  in  the  workflow  to  ac-
commodate different user needs and levels of expertise: “Write 
custom  prompt”  and  “Build  schema  visually”.  In  both  modes,  
the  interaction  with  LLMs  is  structured  through  interaction  
with the system prompt and the user prompt. The system prompt 
provides  initial  instructions  to  the  model,  setting  the  context  
and  defining  expected  behavior  (e.g.,  “You  are  an  expert  data  
extraction assistant”). The user prompt specifies the extraction 
instructions  for  each  document,  guiding  the  model  in  identify-
ing and extracting the desired data from the PDFs. In the “Write 
custom  prompt”  mode,  the  workflow  provides  pre-  populated  
text  fields  for  both  the  system  and  user  prompts,  which  users  
can edit to suit their specific needs. This mode offers maximum 
flexibility  and  control,  allowing  advanced  users  to  compose  
free-  form  instructions  tailored  to  complex  or  highly  special-
ized  extraction  tasks.  In  our  case  studies,  this  mode  was  used.  
Alternatively,  the  “Build  schema  visually”  mode  enables  users  
to define the variables to extract from PDFs through an intuitive 
graphical interface, eliminating the need to manually craft long 
or detailed prompts (Figure S1). Users can add, edit, remove, and 
nest variables (including strings, numbers, booleans, arrays, and 
objects) and provide human- readable descriptions for each field. 
The interface automatically generates a JSON schema based on 
the user's selections, which is then passed to the LLM as struc-
tured guidance for extraction. In this mode, both the system and 
user  prompts  are  optional;  if  left  blank,  defaults  are  applied  to  
ensure consistent model behavior. The schema can also be im-
ported or pasted if the user already has a predefined structure, 
further  streamlining  the  setup  for  recurring  tasks.  The  gener-
ated JSON schema, along with any optional prompts, is included 
in the API call to the LLM, which is instructed to return only the 
extracted field names and their values in a clean JSON format.
In the text mode for scientific publications, the user prompts are 
combined with the JSON output generated by GROBID and one 
of the table extraction tools (tabula- py or Docling). In contrast, 
in the text mode for general PDF files, the Markdown file gen-
erated  by  one  of  the  text  extraction  tools  (Marker,  Docling,  or  
PyMuPDF4LLM)  is  combined  with  the  user  prompt  before  the  
input  for  the  LLM.  The  base64-  encoded  images  from  the  PDF  
pages are combined with the user prompt for the image mode.
The  LLMs  implemented  in  the  workflow  for  text  mode  were  
Llama  3.1  (70B  and  8B),  Claude  3.5  Sonnet,  Claude  3  Opus,  
Claude  3  Haiku,  GPT-  4o,  and  GPT-  4o  mini.  In  image  mode,  
MLLMs,  including  Claude  3.5  Sonnet,  Claude  3  Opus,  Claude  
3  Haiku,  GPT-  4o,  and  GPT-  4o  mini,  were  implemented.  These  
models are accessed via APIs implemented through the LiteLLM 
[64]  Python  library.  This  framework  facilitates  integrating  dif-
ferent models by calling all LLM APIs using the OpenAI format. 
Under the NIH network, the models' APIs are accessed through 
the  ToxPipe  [65]  framework,  which  hosts  the  free  and  local  
models (Llama 3.1 70B and 8B) and covers the costs for the API 
calls  for  the  paid  providers.  For  use  outside  the  NIH  network,  
the users must provide their API keys to the LLM providers. A 
detailed  description  of  the  models'  context  window  (maximum  
number  of  input  tokens),  the  maximum  number  of  output  to-
kens, and current pricing is available in Table S1. For all models, 
the temperature parameter was set to 0. This parameter governs 
the randomness of the models' predictions, with a value of 0 pro-
ducing  completely  deterministic  results  and  values  closer  to  1  
or  higher  generating  increasingly  random  and  diverse  outputs.  
The temperature setting is configured to 0 to minimize response 
variability  and  limit  the  models'  tendency  toward  creative  out-
puts or hallucinations. This ensures more stable and predictable 
outputs, which is especially crucial for data extraction tasks that 
require high precision and consistency [66]. For all workflow ex-
ecution options, the output of the extractions is in JSON format 
in  a  key-  value  organization,  where  the  entities  the  user  wants  
to  extract  are  the  keys  and  the  extractions  are  the  values.  The  
JSON format was chosen because it is machine- readable and can 
be easily manipulated and converted to other formats [13]. The 
APIs  of  GPT-  4o  and  GPT-  4o  mini  models  have  the  parameter  
“response_format”  that  can  be  defined  as  “{“type”:  “json_ob-
ject”}” to force the output as a valid JSON. For the other models, 
the output in JSON is defined in the user prompt.
2.5   |   Report and Download of Results
After  one  of  the  available  LLMs  performs  the  data  extraction,  
the  JSON  output  is  directly  available  for  download  and,  when  
possible, converted to a dataframe using the Pandas [67] Python 
library.  Then,  the  Pandas  dataframe  is  displayed  on  the  work-
flow report screen of the user interface and converted to a down-
loadable CSV or XLSX file. The report and download of results 
page also provides the configuration file (.variables), helpful for 
those  wishing  to  replicate  the  configurations  and  prompts  of  a  
past analysis, and a CSV file with details of the workflow execu-
tion  including  the  PDF  type  (scientific  publications  or  general  
PDFs), PDF extraction mode (text or image mode), the extraction  17590884, 2025, 5, Downloaded from https://wires.onlinelibrary.wiley.com/doi/10.1002/wcms.70047 by Capes, Wiley Online Library on [26/04/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
7 of 16
library for general PDFs (PyMuPDF4LLM, Marker, or Docling), 
and the LLM selected.
The  workflow  also  allows  highlighting  the  extracted  variables  
in the original PDF file to facilitate human evaluation of the ex-
tractions. The texts of the extracted variables are compiled into 
a list of search targets, and the script iterates through each page 
of the PDF file, searching for occurrences of these target texts. 
When  matches  are  found,  the  PyMuPDF  [55]  Python  library  
creates yellow- highlight annotations over the identified text re-
gions and attaches corresponding comments with the variable's 
name  to  provide  contextual  information.  The  modified  PDF  is  
saved as a new file that can be downloaded, producing a docu-
ment enriched with clear and visually accessible highlights and 
comments corresponding to the extracted data.
2.6   |   Documentation and User Guides
To help the user select the best options for their specific needs, 
we  embedded  guides  directly  within  the  KNIME  workflow.  
Detailed  comments  were  provided  for  every  node,  metanode,  
component, and Python script in the workflow, explaining their 
specific functions and purposes. Each step in the workflow ex-
ecution  included  interactive  user  interface  screens  to  improve  
user  guidance  and  ease  of  use.  Informative  text  boxes  were  in-
corporated  at  every  stage  to  deliver  clear  and  concise  instruc-
tions,  ensuring  users  were  guided  systematically  through  the  
different phases of the data extraction workflow.
2.7   |   Case Studies
To showcase and test the options available in our workflow, we 
designed two case studies: (1) extraction of variables from peer- reviewed publications of toxicological studies and (2) extraction 
of variables from publicly available SDSs.
For  the  case  study  of  peer-  reviewed  publications  of  toxico-
logical  studies,  we  evaluated  the  workf low  using  three  ran-
domly chosen publications [68–70]. The targeted variables for 
extraction  included  parameters  such  as  animal  information  
(e.g.,  species,  age  at  treatment),  administered  doses,  clinical  
observations  during  treatment  (e.g.,  body  weights,  food  con-
sumption),  and  necropsy  findings  (e.g.,  organ  weights,  fetal  
examinations).  The  full  list  of  extracted  variables  and  their  
descriptions  is  available  in  the  Table  S2.  For  each  variable,  
we  prompted  the  LLMs  in  the  workf low  to  determine  its  
presence  in  the  publication's  text,  extract  the  relevant  entity,  
and  record  the  source  text  from  which  the  information  was  
obtained.  Using  the  text  mode  (GROBID  for  text  extraction  
and  tabula-  py  for  table  extraction),  we  tested  the  extractions  
using the models Claude 3 Opus, Claude 3.5 Sonnet, Claude 3 
Haiku,  GPT-  4o,  GPT-  4o  mini,  Llama  3.1  70B,  and  Llama  3.1  
8B.  Using  the  image  mode,  we  tested  the  extractions  using  
the  MLLMs  Claude  3.5  Sonnet  and  GPT-  4o.  We  engineered  
the prompts using 10 main core parts: (1) task definition: the 
opening  statement  explicitly  defines  the  task;  (2)  output  for-
mat:  enforces  strict  JSON  formatting;  (3)  JSON  structure:  de-
tailed  guidelines  on  how  variables  should  be  represented;  (4)  
data  handling:  rules  for  handling  missing  or  null  values  and  
combining related variables into coherent strings; (5) value ex-
traction  guidelines:  instructions  for  extracting  specific  types  
of variables; (6) specific variable handling: examples for com-
plex variables (e.g., combining multiple related pieces of infor-
mation such as species); (7) consistency: emphasizes uniform 
formatting;  (8)  error  handling  and  reporting:  instructions  for  
ambiguous  or  missing  data;  (9)  examples:  examples  illustrat-
ing expected outputs; and (10) variables: the list of variables to 
extract. The prompts used are available in the Table S3.
For the SDSs, we chose target variables related to mixture for-
mulations  (CAS  numbers  and  active  ingredient  composition  
percentages)  and  six  toxicity  endpoints  (e.g.,  skin  sensitiza-
tion,  eye  irritation,  acute  oral  toxicity)  as  objects  to  extract.  
The  full  list  of  extracted  variables  from  SDSs  and  their  de-
scriptions are available in the Table S4. We obtained the SDSs 
from  the  publicly  accessible  BASF  Hub  (https:// downl oadce nter. basf. com/ search),  accessed  on  25  June  2024)  using  the  
filters:  “Safety  Data  Sheet,”  “English,”  “Agriculture  (129),”  
and “USA,” which resulted in 110 PDFs that were compressed 
into a ZIP file. The SDSs encompass 88 unique agrochemical 
substances, each SDS representing a mixture formulation that 
contains  between  one  and  nine  active  ingredients  combined  
with excipients. Extractions were performed using the GPT- 
4o 
and  Claude  3.5  Sonnet  models  for  both  the  text  and  image  
modes. In this case study, PDF parsing for the text mode was 
done  using  Docling.  The  prompts  used  in  both  modes  pro-
vided  example  outputs,  available  in  Table  S5.  The  prompts  
were partially engineered using OpenAI's API “beta” prompt 
generator [71], which can transform a complex task into sim-
ple steps for LLMs.
To evaluate the quality of the extractions and compare results 
across  different  models,  we  employed  manual  scoring.  This  
approach  was  chosen  because,  to  the  best  of  our  knowledge,  
no standardized dataset exists to benchmark NER approaches 
in  the  toxicology  field.  Additionally,  NER  in  toxicology  is  in-
herently a fuzzy task, and relying solely on automated scoring 
methods, such as word matching, could underestimate model 
performance [20]. For example, in the extraction of the variable 
“route of administration”, if a model identifies “oral” while the 
publication specifies “gavage”, the extraction remains correct. 
However,  an  automated  word-  match  validation  would  incor-
rectly  f lag  it  as  an  error.  We  adopted  a  scoring  methodology  
based on work of Gartlehner et al. [72]. Specifically, we cate-
gorized  the  extractions  as  follows:  true  positives  (TP),  where  
entities were correctly extracted by the LLM from the original 
file;  true  negatives  (TN),  where  the  LLM  accurately  identi-
fied  that  the  entity  was  not  present  in  the  original  file;  false  
positives (FP), where the LLM generated fabricated data that 
did  not  exist  in  the  original  file  (i.e.,  hallucinated  data);  and  
false negatives (FN), where the LLM failed to extract or incor-
rectly extracted an entity from the original file. Subsequently, 
for  each  model's  extractions,  we  calculated  the  total  counts  
of  TP,  TN,  FP,  and  FN  and  used  these  to  derive  the  evalua-
tion  metrics:  accuracy  (Equation  1),  precision  (Equation  2), 
recall  (Equation 3),  and  F1  (Equation 4).  Accuracy  measures  
the  overall  correctness  of  the  extractions  by  the  LLM.  It  cal-
culates the proportion of correct extractions (both TP and TN) 
out  of  all  extractions.  Precision  measures  how  well  the  LLM  
avoids  generating  false  positives  (hallucinated  entities),  i.e.,   17590884, 2025, 5, Downloaded from https://wires.onlinelibrary.wiley.com/doi/10.1002/wcms.70047 by Capes, Wiley Online Library on [26/04/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
8 of 16 Wiley Interdisciplinary Reviews: Computational Molecular Science, 2025
theproportion of correctly extracted entities (TP) out of all en-
tities the LLM identified as present (TP + FP). Recall measures 
how well the LLM identifies entities that are actually present 
in  the  original  file,  i.e.,  the  proportion  of  correctly  extracted  
entities  (TP)  out  of  all  actual  entities  that  should  have  been  
extracted (TP + FN). F1 is the harmonic mean of precision and 
recall,  balancing  the  trade-  off  between  the  two  metrics  with  
a  single  score  that  ref lects  the  LLM's  performance  in  terms  
of  both  avoiding  hallucinations  (precision)  and  minimizing  
missed entities (recall).
3   |   Results and Discussion
3.1   |   Workflow Overview
The  data  extraction  workflow  is  executed  in  5  main  steps:  (1)  
ZIP file input containing the PDF files; (2) selection of the PDF 
type (scientific publication or general PDFs); (3) selection of ex-
traction  mode  (text  or  image);  (4)  prompt  input;  and  (5)  results  
visualization and download. In the desktop version, the graphi-
cal user interfaces for each step are accessed through interaction 
with the KNIME components developed (Figure 2). The graph-
ical user interfaces for steps 1 through 3 are shown in Figure 3. 
Prompt  input  and  results  visualization  are  shown  in  Figures  4 
and 5, respectively.
The  workflow  is  designed  for  use  through  its  GUI,  guided  by  
in-  workflow  documentation.  This  documentation  aims  to  pro-
vide  clear  and  concise  instructions,  including  the  logic  behind  
each step, required user input, and any potential parameter ad-
justments. Each user interface screen of the workflow includes 
a  text  box  on  the  right  side,  providing  instructions  for  execut-
ing the workflow and guidance for interpreting the output. This 
structured  guidance  ensures  that  users  can  easily  navigate  the  
workflow and understand the methodology being applied. Thus, 
the documentation strategy not only ensures ease of use but also 
supports  reproducibility  and  potential  future  modifications  or  
extensions to the workflow.
3.2   |   Data Extraction From Scientific Publications
3.2.1   |   Workf low Execution
To  test  the  workflow  on  extracting  data  from  scientific  publi-
cations,  we  used  three  published  toxicological  studies  [68–70]. 
The three English- language publications described reproductive 
or  developmental  toxicity  studies  in  small  animal  models  (i.e.,  
mice, rats, or rabbits) and each was published in a different jour-
nal and on a different chemical. This relatively focused dataset 
was appropriate for the goals of this study. However, we recog-
nize that the studies represent a small subset of the diversity of 
study designs, endpoints, chemicals, and analytical approaches 
that are relevant to the field of toxicology.
In  our  case  studies,  the  “New  Analysis”  mode  was  selected  
(Figure  3).  On  the  initial  screen  of  the  data  extraction  work-
f low, we then uploaded the ZIP file containing the PDF 
publications.  Then,  in  the  “PDF  type”  field,  we  selected  the  
“Scientific publications” option. When this option is selected, 
the  “Table  extraction  method”  is  displayed  in  the  user  inter-
face screen. For our case study, we used Tabula- py to extract 
the  tabular  data  from  the  publications.  After  this,  the  next  
field  available  is  the  “PDF  extraction  mode”  with  the  “text  
mode”  and  “image  mode”  options.  Here,  we  made  different  
executions of the workf low to test both text and image modes. 
When  selecting  the  “text  mode”,  the  LLM  options  available  
are “GPT- 4o”, “GPT- 4o mini”, “Claude 3.5 Sonnet”, “Claude 3 
Opus”, “Claude 3 Haiku”, “Llama 3.1 70B”, and “Llama 3.1 8B”. 
All these models were used in our case study. When selecting 
the  “image  mode”,  the  MLLM  options  available  are  “Claude  
3.5  Sonnet”,  “Claude  3  Opus”,  “Claude  3  Haiku”,  “GPT-  4o”,  
and “GPT- 4o mini” (Figure S2). In our case study, the MLLMs 
tested were “Claude 3.5 Sonnet” and “GPT- 4o”.
After selecting the “PDF type”, “PDF extraction mode”, “Table 
extraction  method”  (only  for  the  text  mode),  and  the  LLM  
model, the following user interface screen is the prompt input 
(Figure  4).  Prompt  engineering  is  one  of  the  most  important  
components  in  the  application  of  LLMs  for  automated  data  
extraction [66]. The design and structure of a prompt signifi-
cantly  inf luence  the  accuracy,  consistency,  and  reliability  of  
the  model's  outputs.  A  well-  crafted  prompt  ensures  that  the  
LLM focuses on the specified task while reducing ambiguity, 
thus  enhancing  the  precision  and  relevance  of  the  extracted  
data.  Furthermore,  including  explicit  instructions  for  han-
dling  missing  or  unclear  data  in  the  prompt  mitigates  uncer-
tainties  and  contributes  to  the  robustness  of  the  extraction  
process [73, 74].
(1)Accuracy=
TP+TN
TP+FP+TN+FN

(2)Precision=
TP
TP+FP

(3)Recall=
TP
TP+FN

(4)F1=

2⋅Precision⋅Recall
Precision+Recall

FIGURE 2    |    Desktop version of the data extraction workflow. 17590884, 2025, 5, Downloaded from https://wires.onlinelibrary.wiley.com/doi/10.1002/wcms.70047 by Capes, Wiley Online Library on [26/04/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
16 of 16 Wiley Interdisciplinary Reviews: Computational Molecular Science, 2025
42. D. Circi, G. Khalighinejad, A. Chen, B. Dhingra, and L. C. Brinson, 
“How  Well  Do  Large  Language  Models  Understand  Tables  in  Materi-
als  Science?,”  Integrating  Materials  and  Manufacturing  Innovation  13  
(2024): 669–687.
43.  “pdfplumber,”  accessed  December  5,  2024,  https:// github. com/ js-
vine/ pdfpl umber .
44. “tabula- py,” accessed December 5, 2024, https:// github. com/ chezou/ tabul a-  py/ tree/ master.
45.  “nougat,”  accessed  May  12,  2025,  https:// github. com/ faceb ookre search/ nougat.
46.  “marker,”  accessed  December  5,  2024,  https:// github. com/ VikPa ruchu ri/ marker.
47.  “docling,”  accessed  May  12,  2025,  https:// github. com/ docli ng-  proje ct/ docling.
48. “Camelot,” accessed December 5, 2024, https:// github. com/ atlan hq/ camelot.
49. “PyMuPDF4LLM,” accessed December 12, 2024, https:// github. com/ pymup df/ RAG/ tree/ main/ pymup df4llm.
50.  “Surya,”  accessed  December  16,  2024,  https:// github. com/ VikPa ruchu ri/ surya .
51. “Inside Marker: A Guided Source Code Tour for an AI- Powered PDF 
Layout Detection Engine,” accessed December 15, 2024, https:// journ al. hexmos. com/ marke r-  pdf-  docum ent-  ai/ .
52.  J.  Berkenbilt,  “Qpdf:  A  Content-  Preserving  PDF  Document  Trans-
former,” accessed December 16, 2024, https:// github. com/ qpdf/ qpdf.
53. “pypdfium,” accessed December 16, 2024, https:// github. com/ Yinli nHu/ pypdfium.
54. “EasyOCR,” accessed December 16, 2024, https:// github. com/ Jaide dAI/ EasyOCR.
55. “PyMuPDF,” accessed December 10, 2024, https:// github. com/ pymup df/ PyMuPDF.
56.  “Tesseract,”  accessed  December  16,  2024,  https:// github. com/ tesse ract-  ocr/ tesse ract.
57. R. Smith, “An Overview of the Tesseract OCR Engine,” in Ninth In-
ternational Conference on Document Analysis and Recognition (ICDAR 
2007),  vol.  2  (Institute  of  Electrical  and  Electronics  Engineers,  2007),  
629–633.
58. “OpenCV,” accessed December 10, 2024, https:// github. com/ opencv/ openc v-  python.
59.  J.  Canny,  “A  Computational  Approach  to  Edge  Detection,”  IEEE 
Transactions  on  Pattern  Analysis  and  Machine  Intelligence  6  (1986):  
679–698.
60.  “Pillow,”  accessed  December  10,  2024,  https:// github. com/ pytho n-  pillow/ Pillow? tab= readm e-  ov-  file.
61.  “Beyond  Text,”  accessed  December  11,  2024,  https:// matex tract. pub/ conte nt/ beyond_ text/ beyond_ images. html.
62.  KNIME,  “Write  Variables,”  accessed  June  27,  2023,  https://  hub. knime. com/ verna lis/ exten sions/  com. verna lis. knime. featu re/ latest/ com. verna lis. knime. f low v ar. nodes. io. write. Write Varia blesN odeFa ctory .
63. KNIME, “Read Variables,” accessed June 4, 2023, https://  hub. knime. com/ verna lis/ exten sions/  com. verna lis. knime. featu re/ latest/ com. verna lis. knime. flowv ar. nodes. io. read. ReadV ariab lesNo deFac tory.
64.  “LiteLLM,”  accessed  December  19,  2024,  https:// github. com/ Berri AI/ litellm.
65. T. Saddler, “ToxPipe,” accessed December 19, 2024, https:// toxpi pe. niehs. nih. gov.
66. Y. Hu, Q. Chen, J. Du, et al., “Improving Large Language Models for 
Clinical  Named  Entity  Recognition  via  Prompt  Engineering,”  Journal 
of the American Medical Informatics Association 31 (2024): 1812–1820.
67.  T.  Pandas,  “Pandas  Development  Team,”  2020  pandas-dev/pandas,  
https:// pandas. pydata. org/ .
68.  W.  Xuying,  Z.  Jiangbo,  Z.  Yuping,  et  al.,  “Effect  of  Astragaloside  
IV  on  the  General  and  Peripartum  Reproductive  Toxicity  in  Sprague-  Dawley Rats,” International Journal of Toxicology 29 (2010): 505–516.
69. F. F. Heuschmid, S. Schneider, P. Schuster, B. Lauer, and B. Ravenz-
waay, “Developmental Toxicity of Polyethylene Glycol- g- Polyvinyl 
Alcohol  Grafted  Copolymer  in  Rats  and  Rabbits,”  Food  and  Chemical  
Toxicology 51 (2013): S14–S23.
70.  N.  J.  Althali,  A.  M.  Hassan,  and  M.  A.  Abdel-  Wahhab,  “Effect  of  
Grape Seed Extract on Maternal Toxicity and in Utero Development in 
Mice Treated With Zearalenone,” Environmental Science and Pollution 
Research 26 (2019): 5990–5999.
71. “Playground,” accessed December 24 2024, https:// platf orm. openai. com/ playg round/  chat.
72.  G.  Gartlehner,  L.  Kahwati,  R.  Hilscher,  et  al.,  “Data  Extraction  for  
Evidence Synthesis Using a Large Language Model: A Proof- Of- Concept 
Study,” Research Synthesis Methods 15 (2024): 576–589.
73.  B.  Alawaji,  M.  Hakami,  and  B.  Alshemaimri,  “Evaluating  Genera-
tive Language Models With Prompt Engineering for Categorizing User 
Stories  to  its  Sector  Domains,”  in  2024  IEEE  9th  International  Confer-
ence  for  Convergence  in  Technology  (I2CT)  (Institute  of  Electrical  and  
Electronics Engineers, 2024), 1–8.
74. L. Reynolds and K. McDonell, “Prompt Programming for Large Lan-
guage Models: Beyond the Few- Shot Paradigm,” in Extended Abstracts 
of  the  2021  CHI  Conference  on  Human  Factors  in  Computing  Systems 
(Association for Computing Machinery, 2021), 1–7.
Supporting Information
Additional supporting information can be found online in the 
Supporting  Information  section.  Data  S1:  Supporting  Information.  
Data S2: File S1. Data S3: File S2.  17590884, 2025, 5, Downloaded from https://wires.onlinelibrary.wiley.com/doi/10.1002/wcms.70047 by Capes, Wiley Online Library on [26/04/2026]. See the Terms and Conditions (https://onlinelibrary.wiley.com/terms-and-conditions) on Wiley Online Library for rules of use; OA articles are governed by the applicable Creative Commons License
