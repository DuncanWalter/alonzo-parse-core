## **Alonzo Parsing Core**
__________________________
The Alonzo parsing core interprets arbitrary strings of Ascii or LaTeX into and from serializable syntax trees meant for consumption by computer algebra systems. The core parser itself knows almost no math. Functionality is added to the parser by importing Alonzo math domains. These domains work inside the parser to recognize and interpret instances of math objects and their operations. We believe this form of extensible parser qualifies as a "generative recursive parser," but can't really say for certain.

