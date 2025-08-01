# Core Criterion and Core Evidence Vocabulary Api


## CCCEV
This document describes the Core Criterion and Core Evidence Vocabulary (CCCEV). Similarly to all the Core Vocabularies, CCCEV is "a context-neutral data model that captures the fundamental characteristics of an entity". A Core Vocabulary specifies a semantic data model covering a set of use cases across domains. The specification consists of terms with a minimal set of constraints (recommended codelists, usage guidelines, etc.).

The Core Criterion and Core Evidence Vocabulary is designed to support the exchange of information between organisations or persons (more generally Agents) defining Requirements and organisations or persons responding to these Requirements by means of structured or unstructured Evidences.

CCCEV contains two basic and complementary core concepts:

the Requirement, a broad notion encompassing all forms of requests for information, that is often, but not necessarily, made with the objective to use it as a basis for making a judgement or decision; and
the Evidence, the data proving or disproving that a specific Requirement is met by someone or something, and thus has been fulfilled.
Using these basic core concepts, CCCEV provides a generic setting to define Criteria, i.e. Requirements with an assessment or evaluation objective in mind. This is a key motivation for the existence of CCCEV.
Although CCCEV shapes a general framework around these core concepts, implementers have to make decisions on how the framework is actually used by further elaborating the Core Vocabulary to make it applicable in their specific context.

An explanatory example that helps the reader to better understand this specification can be found here.

## Domain
![Drag Racing](https://semiceu.github.io/CCCEV/releases/2.00/html/overview.jpg)


## Request score computation

Each InformationConcept has its own score. The total score of a request is the average score of all its
InformationConcepts.

**Computation rules per field**

- Score value goes from 0 to 100 included
- A field with an auto-computed value does not have a score
- Having no value blocks the score to 0, no matter if some other conditions are verified
- Having a value gives +50 score
- The rest is computed according to the provided evidences for the field (from 0 to 50 included)
    - Each EvidenceTypeList has its own score
    - The final score corresponds to the highest amongst the EvidenceTypeLists
    - The score of an ETL is `(numberOfFulfilledEvidenceTypes / totalEvidenceTypes) * 50`
