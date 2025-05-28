# DCAT-AP 3.0

14 June 2024

More details about this documentLatest published version:[https://semiceu.github.io/DCAT-AP/releases/3.0.0](https://semiceu.github.io/DCAT-AP/releases/3.0.0)Latest editor's draft:[https://semiceu.github.io/DCAT-AP/releases/3.0.1-draft](https://semiceu.github.io/DCAT-AP/releases/3.0.1-draft)History:[Commit history](https://github.com/SEMICeu/DCAT-AP/commits/)Editors:Jitse De Cock (PwC EU Services)Makx DekkersPavlina Fragkou (DG DIGIT)Arthur Schiltz (PwC EU Services)Anastasia Sofou (Trasys International)Author:[Bert Van Nuffelen](mailto:bert.vannuffelen@vlaanderen.be) (Digitaal Vlaanderen)Feedback:[GitHub SEMICeu/DCAT-AP](https://github.com/SEMICeu/DCAT-AP/)
( [pull requests](https://github.com/SEMICeu/DCAT-AP/pulls/),
[new issue](https://github.com/SEMICeu/DCAT-AP/issues/new/choose),
[open issues](https://github.com/SEMICeu/DCAT-AP/issues/))
Owners:[SEMIC](https://joinup.ec.europa.eu/collection/semic-support-centre)
Pavlina Fragkou (DG DIGIT)Previous version:[https://semiceu.github.io/DCAT-AP/releases/2.1.1/](https://semiceu.github.io/DCAT-AP/releases/2.1.1/)This version:[https://semiceu.github.io/DCAT-AP/releases/3.0.0](https://semiceu.github.io/DCAT-AP/releases/3.0.0)

Copyright © 2024


* * *

## Abstract


DCAT-AP is a DCAT profile for sharing information about Catalogues containing Datasets and Data Services descriptions in Europe, under maintenance by the SEMIC action, Interoperable Europe.

This Application Profile provides a minimal common basis within Europe to share Datasets and Data Services cross-border and cross-domain.

## 1.  Introduction

[Permalink for Section 1.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#specintro)

### 1.1Context

[Permalink for Section 1.1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#context)

Around 2010, on behalf of the European Commission the access to public sector information was studied. These studies showed that businesses and citizens faced many difficulties in finding and reusing public sector information.
The studies indicated that the availability of the information in a machine-readable format as well as a thin layer of commonly agreed metadata could facilitate data cross-reference and interoperability and therefore considerably enhance its value for reuse.
Therefore, to overcome these hurdles, the European Commission invested in policies \[[PSI](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-psi "Directive on open data and the re-use of public sector information (recast)")\], data interoperability \[[SEMIC](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-semic "JoinUp welcomes Interoperable Europe")\] and infrastructure \[[DEU](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-deu "The official portal for European data")\].

Interoperable Europe, within its mission to stimulate the data interoperability in Europe, manages this specification on the metadata agreements for sharing dataset descriptions between data portals.
The governance is taken care by the SEMIC action within Interoperable Europe.
Initially, the scope of the specification was the exchange between Open Data Portals in Europa.
Although this is still at the core of the specification, DCAT-AP is not limited to public accessible Open Data, but can be applied to any kind of datasets.
In the past decade, DCAT-AP has grown from a single specification to a whole ecosystem of related and interconnected specifications.

### 1.2Scope of the Application Profile

[Permalink for Section 1.2](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#scope-of-the-application-profile)

The Application Profile specified in this document is based on the specification of the Data Catalog Vocabulary (DCAT) \[[vocab-dcat-3](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-vocab-dcat-3 "Data Catalog Vocabulary (DCAT) - Version 3")\] developed under the responsibility of the [Dataset Exchange Working Group](https://www.w3.org/2017/dxwg/wiki/Main_Page) (DXWG) at W3C.

The objective of this work is to produce a profile of DCAT based on numerous requests for change coming from real-world implementations of the specification listed on GitHub since the previous release. For that the DCAT specification is extended with improved definitions, usage notes and usages constraints such as cardinalities for properties and the usage of controlled vocabularies. Additional classes and properties from other well-known vocabularies are re-used where necessary.

The work does not cover implementation issues like mechanisms for exchange of data and expected behaviour of systems implementing the Application Profile other than what is defined in the Conformance Statement in section [4\. Conformance](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#conformance).
The section [17\. Validation of DCAT-AP](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#validation-of-dcat-ap) provides SHACL templates and references to the Interoperability Testbed tool for validating a catalogue for compliance with DCAT-AP.

The Application Profile is intended to facilitate data exchange and therefore the classes and properties defined in this document are only relevant for the data to be exchanged; there are no requirements for communicating systems to implement specific technical environments. The only requirement is that the systems can export and import data in RDF in conformance with this Application Profile.

As mentioned in the context, the prime objective of the Application Profile is to enhance data findability and promote reusability.
To achieve this goal, datasets should be coherently documented.
To enable this, the Application Profile considers several essential aspects, including among others:

- Understanding the data or service structure, and how to get access to the data
- Information on scope or purpose of the data
- Legal information
- Knowledge on data publishers, and any other agents involved
- Knowledge of data availability and change policies

These are addressed with the aim to facilitate effective data reuse, allowing users to locate, understand and utilise the available data resources more efficiently.

### 1.3Revision history

[Permalink for Section 1.3](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#revision-history)

The first DCAT-AP specification was released in September 2013. The subsequent releases 1.1, 1.2 and 1.2.1 improved the specification. These specifications are in line with the first release of the W3C DCAT 1 recommendation \[[vocab-dcat-1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-vocab-dcat-1 "Data Catalog Vocabulary (DCAT)")\]. They express DCAT-AP in terms of Catalogue, Datasets and Distributions.
With the adoption of the W3C DCAT 2 recommendation \[[vocab-dcat-2](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-vocab-dcat-2 "Data Catalog Vocabulary (DCAT) - Version 2")\], an alignment process for DCAT-AP was initiated. This resulted in a new release DCAT-AP 2.0.0.
The years after this specification was further elaborated in new release 2.0.1, 2.1.0 and 2.1.1.
W3C DCAT 2 restructured DCAT by introducing the notions of a generic Catalogued Resource of which Datasets and Data Services are special cases.
In 2023, the adoption of W3C DCAT 3 \[[vocab-dcat-3](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-vocab-dcat-3 "Data Catalog Vocabulary (DCAT) - Version 3")\] triggered a new alignment for DCAT-AP.
W3C DCAT 3 extends the profile with the Dataset Series notion.
This document is the combination of addressing issues raised by the community and this alignment.

#### 1.3.1Notes on alignment with DCAT 3

[Permalink for Section 1.3.1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#notes-on-alignment-with-dcat-3)

The introduction of Dataset Series in DCAT is an additive operation from semantical, data modeling perspective.
Therefore the impact on existing DCAT-AP 2.x exchanges is limited.
Nevertheless, publishers may face substantial impact on the existing catalogues as the new terminology for Dataset Series may require to revisit the publisher's metadata guidelines.
For instance, if the publisher had chosen to document a Dataset Series as a Dataset with multiple Distributions, then the alignment with Dataset Series as expressed in this specification will require a substantial effort.
This impact goes beyond the specification and dependent on the usage of the shared information.
In the context of DCAT-AP and in line with the conformance expectations, the term Dataset Series will be solely used for resources that are explicitly identified by the class Dataset Series.
The situation, as mentioned, where a Dataset has multiple Distributions, will be considered as a Dataset with multiple Distributions and not as a Dataset Series.
This way, receivers of DCAT-AP metadata can rely on the classes to process the metadata.

The sole data model impact DCAT 3 creates, is by deprecating the use of some URIs and introducing new URIs in the DCAT namespace for the use case of Dataset versioning.
As these properties are optional and since there is an equivalence between the deprecated and the new ones, catalogue owners can easily realign.

Editor's note: Data model adaptations

- Added class Dataset Series, alignment with DCAT 3.0
- Replaced the URI mapping for the Dataset properties hasVersion, isVersionOf and version, alignment with DCAT 3.0
- Fixed the range for Distribution bytesize, alignment with DCAT 3.0
- Changed the range for Location geometry, alignment with DCAT 3.0
- Add the properties publisher and format to Data Service
- Replaced mandatory Distribution status controlled vocabulary
- Adapted the definition for property type of Agent
- Adapted the definition for property access rights for Dataset
- Lift the max cardinality for property application profile for Catalogue Record
- Add new property applicable legislation as generic approach to indicate the legislation under which a dataset is made available.

To support the review, the changes are also highlighted on the diagram below.



[![](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/overview-annotated.jpg)](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/overview-annotated.jpg)

### 1.4Meeting minutes

[Permalink for Section 1.4](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#meeting-minutes)

The following webinars have been held for the creation of this release


- Webinar 25 November 2022 ( [Meeting Minutes](https://joinup.ec.europa.eu/sites/default/files/inline-files/MeetingMinutes.pdf), [recording](https://www.youtube.com/watch?v=vpCu3wrBeso), [slides](https://joinup.ec.europa.eu/sites/default/files/inline-files/Slides.pdf))
- Webinar 2 February 2023 ( [Meeting Minutes](https://joinup.ec.europa.eu/sites/default/files/inline-files/20230202%20Webinar%20DCAT-AP.pdf), [recording](https://www.youtube.com/watch?v=teUeMLwv4Ks), [slides](https://joinup.ec.europa.eu/sites/default/files/inline-files/webinar_2_feb_2022_DCAT-AP_v.0.3.pdf))
- Webinar 4 October 2023 ( [Meeting Minutes](https://joinup.ec.europa.eu/sites/default/files/inline-files/20231004%20Webinar%20DCAT-AP%20for%20Data%20Spaces_Incorporated_Comments.pdf), [recording](https://youtu.be/HIQ-xFtZcxY), [slides](https://joinup.ec.europa.eu/sites/default/files/event/attachment/2023-10/DCAT-AP%20for%20Data%20Spaces%20Webinar.pdf))
- Webinar 7 November 2023 ( [Meeting Minutes](https://joinup.ec.europa.eu/sites/default/files/event/attachment/2023-12/20231107%20Webinar%20dedicated%20to%20the%20status%20and%20governance%20of%20DCAT-AP%20%281%29.pdf), [recording](https://www.youtube.com/watch?v=lMMaUa4mrQE), [slides](https://joinup.ec.europa.eu/sites/default/files/event/attachment/2023-11/Webinar%20DCAT-AP%20Status%20%26%20Governance_0.pdf))
- Webinar 21 November 2023 ( [Meeting Minutes](https://joinup.ec.europa.eu/sites/default/files/event/attachment/2023-12/20231121%20Webinar%20DCAT-AP%20Technical%20Issues.pdf), [recording](https://www.youtube.com/watch?v=X2rw2HWm23w), [slides](https://joinup.ec.europa.eu/sites/default/files/event/attachment/2023-11/Webinar%20DCAT-AP%2020231121%20v1.0.pdf))
- Webinar 16 January 2024 ( [Meeting Minutes](https://joinup.ec.europa.eu/sites/default/files/event/attachment/2023-12/20231107%20Webinar%20dedicated%20to%20the%20status%20and%20governance%20of%20DCAT-AP%20%281%29.pdf), [recording](https://www.youtube.com/watch?v=lMMaUa4mrQE), [slides](https://joinup.ec.europa.eu/sites/default/files/event/attachment/2023-11/Webinar%20DCAT-AP%20Status%20%26%20Governance_0.pdf))

## 2.Status

[Permalink for Section 2.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#specstatus)

This application profile has the status SEMIC Recommendation published at 2024-06-14.


Information about the process and the decisions involved in the creation of this specification are consultable at the [Changelog](https://semiceu.github.io/DCAT-AP/releases/3.0.0/CHANGELOG.html).


## 3.  License

[Permalink for Section 3.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#speclicence)

Copyright © 2023 European Union. All material in this repository is published under the license CC-BY 4.0, unless explicitly otherwise mentioned.


## 4.Conformance

[Permalink for Section 4.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#conformance)

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key words _MAY_, _MUST_, _SHOULD_, and _SHOULD NOT_ in this document
are to be interpreted as described in
[BCP 14](https://www.rfc-editor.org/info/bcp14)
\[[RFC2119](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-rfc2119 "Key words for use in RFCs to Indicate Requirement Levels")\] \[[RFC8174](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-rfc8174 "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words")\]
when, and only when, they appear in all
capitals, as shown here.


### 4.1Conformance Statement

[Permalink for Section 4.1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#conformance-statement)

#### 4.1.1Provider requirements

[Permalink for Section 4.1.1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#provider-requirements)

In order to conform to this Application Profile, an application that provides metadata _MUST_:

- Provide a description of the Catalogue, including at least the mandatory properties specified for the class [Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue).
- Provide information for the mandatory properties for [Catalogue Records](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord), if descriptions of Catalogue Records are provided – please note that the provision of descriptions of Catalogue Records is optional.
- Provide descriptions of Datasets in the Catalogue, including at least the mandatory properties for the class [Dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset).
- Provide descriptions of Distributions, if any, of Datasets in the Catalogue, including at least the mandatory properties for the class [Distribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution).
- Provide descriptions of Data Services, if any, of Datasets in the Catalogue, including at least the mandatory properties for the class [Data Service](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService).
- Provide descriptions of all organisations involved in the descriptions of Catalogue and Datasets, including at least the mandatory properties for the class [Agent](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent).
- Apply the publication requirements for the controlled vocabularies as mentioned in section [10\. Controlled Vocabularies](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#controlled-vocs).

For the properties listed in the table in section [10\. Controlled Vocabularies](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#controlled-vocs), the associated controlled vocabularies _MUST_ be used. Additional controlled vocabularies _MAY_ be used.
In addition to the mandatory properties, any of the recommended and optional properties defined in section [A. Quick Reference of Classes and Properties](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#quick-reference) _MAY_ be provided.

#### 4.1.2Receiver requirements

[Permalink for Section 4.1.2](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#receiver-requirements)

In order to conform to this Application Profile, an application that receives metadata _MUST_ be able to:
Process information for all classes and properties specified in section [A. Quick Reference of Classes and Properties](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#quick-reference).
Process information for all controlled vocabularies specified in section [10\. Controlled Vocabularies](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#controlled-vocs).

"Processing" means that receivers must accept incoming data and transparently provide these data to applications and services.
It does neither imply nor prescribe what applications and services finally do with the data (parse, convert, store, make searchable, display to users, etc.).

## 5.Terminology

[Permalink for Section 5.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#specterminology)

An **Application Profile** is a specification that reuses terms from one or more base standards, adding more specificity by identifying mandatory, recommended and optional elements to be used for a particular application, as well as recommendations for controlled vocabularies to be used.

A **Dataset** is a collection of data, published or curated by a single source, and available for access or download in one or more formats.
A **Data Portal** is a Web-based system that contains a data catalogue with descriptions of datasets and provides services enabling discovery and reuse of the datasets.

### 5.1Used Prefixes

[Permalink for Section 5.1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#used-prefixes)

| Prefix | Namespace IRI |
| --- | --- |
| `adms` | `http://www.w3.org/ns/adms#` |
| `dcat` | `http://www.w3.org/ns/dcat#` |
| `dcatap` | `http://data.europa.eu/r5r/` |
| `dct` | `http://purl.org/dc/terms/` |
| `dctype` | `http://purl.org/dc/dcmitype/` |
| `foaf` | `http://xmlns.com/foaf/0.1/` |
| `locn` | `http://www.w3.org/ns/locn#` |
| `odrl` | `http://www.w3.org/ns/odrl/2/` |
| `owl` | `http://www.w3.org/2002/07/owl#` |
| `prov` | `http://www.w3.org/ns/prov#` |
| `rdf` | `http://www.w3.org/1999/02/22-rdf-syntax-ns#` |
| `rdfs` | `http://www.w3.org/2000/01/rdf-schema#` |
| `skos` | `http://www.w3.org/2004/02/skos/core#` |
| `spdx` | `http://spdx.org/rdf/terms#` |
| `time` | `http://www.w3.org/2006/time#` |
| `vcard` | `http://www.w3.org/2006/vcard/ns#` |
| `xsd` | `http://www.w3.org/2001/XMLSchema#` |

## 6.Overview

[Permalink for Section 6.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#specoverview)

DCAT-AP is a DCAT profile for sharing information about Catalogues containing Datasets and Data Services descriptions in Europe. The core classes of the Application Profile are thus the classes Catalogue, Dataset, Distribution and Data Service. DCAT-AP allows Catalogues of only Datasets, but also Catalogues of only Data Services, but usually it will be a mixture of both. Dataset Series are introduced to further organise the Datasets within a Catalogue.

The properties of the core classes may enforce the existence of other classes. One such important class is the class Agent. However in contrast to the core classes, DCAT-AP leaves a lot of freedom to the implementors to shape them to their needs. Only minimal expectations are expressed by DCAT-AP.

Elaborated statements about the expectations are found in section [4\. Conformance](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#conformance) describing DCAT-AP conformance.

To improve the coherency between shared Dataset, Distribution and Data Service, section [14.1 Usage guide on Datasets, Distributions and Data Services](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#usage-guide-on-datasets-distributions-and-data-services) provides additional guidelines.

The list of included properties contain a selection of the properties from the W3C DCAT 3 specification \[[vocab-dcat-3](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-vocab-dcat-3 "Data Catalog Vocabulary (DCAT) - Version 3")\] on which DCAT-AP expresses additional constraints or on which DCAT-AP wants to emphasise their usage. Any property that is mentioned in DCAT applicable to a class but not explicitly is listed DCAT-AP is considered an optional field for DCAT-AP for that class. It means that for these properties DCAT-AP has no use cases that require additional usage considerations beyond ‘use the property as DCAT specifies’.
Properties that are not explicitly listed in this specification have no conformance expectation.
From that perspective these are ignored. DCAT-AP acts in this way as a filter for all the possibilities DCAT offers.
Nevertheless, to keep the DCAT-AP concise and to the point optional DCAT-AP properties that have no additional usage notes to DCAT may become subject for removal if the usage in the practice is sporadic.

### 6.1Application profile diagram

[Permalink for Section 6.1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#application-profile-diagram)

An overview of DCAT-AP is shown by the UML diagram below. The UML diagram illustrates the specification described in this document. For readability purposes, the representation has been condensed as follows:

- no ranges for data properties are shown, because some of them are expressed as unions of XSD types
- The figure contain the key classes with some important supporting classes. Other object properties (relationships) are listed as properties on the UML class with their target range.
- The class dcat:Resource has been included to ease to see the connection with W3C DCAT. DCAT-AP treats it as an abstract notion.

The cardinalities and qualifications are included in the figure.



This document describes the usage of the following main entities for a correct usage of the Application Profile:


\|
[Agent](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent) \|
[Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue) \|
[Catalogue Record](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord) \|
[Catalogued Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CataloguedResource) \|
[Checksum](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Checksum) \|
[Data Service](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService) \|
[Dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset) \|
[Dataset Series](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries) \|
[Distribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution) \|
[Kind](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Kind) \|
[Licence Document](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#LicenceDocument) \|
[Location](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Location) \|
[Relationship](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Relationship) \|


The main entities are supported by:


\|
[Activity](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Activity) \|
[Attribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Attribution) \|
[Checksum Algorithm](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#ChecksumAlgorithm) \|
[Concept](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Concept) \|
[Concept Scheme](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#ConceptScheme) \|
[Document](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Document) \|
[Frequency](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Frequency) \|
[Geometry](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Geometry) \|
[Identifier](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Identifier) \|
[Legal Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#LegalResource) \|
[Linguistic system](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Linguisticsystem) \|
[Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) \|
[Media type](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Mediatype) \|
[Media Type](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#MediaType) \|
[Media Type or Extent](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#MediaTypeorExtent) \|
[Period of time](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Periodoftime) \|
[Policy](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Policy) \|
[Provenance Statement](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#ProvenanceStatement) \|
[Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Resource) \|
[Rights statement](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Rightsstatement) \|
[Role](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Role) \|
[Standard](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Standard) \|


And supported by these datatypes:


\| [Temporal Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral) \| [Time instant](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Timeinstant) \| [xsd:dateTime](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#xsd%3AdateTime) \| [xsd:decimal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#xsd%3Adecimal) \| [xsd:duration](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#xsd%3Aduration) \| [xsd:hexBinary](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#xsd%3AhexBinary) \| [xsd:nonNegativeInteger](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#xsd%3AnonNegativeInteger) \|


[![](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/overview.jpg)](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/overview.jpg)

## 7.  Main Entities

[Permalink for Section 7.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#main-entities)

The main entities are those that form the core of the Application Profile.
The properties and their associated constraints that apply in the context of this profile are listed in a tabular form.
Each row corresponds to one property.
In addition to the constraints also cross-references are provided to DCAT. To save space, the following abbreviations are used to indicate in short the difference with DCAT:

- A: reused as-is defined and expressed in DCAT
- E: reused with additional usage notes or additional restrictions compared to DCAT
- P: DCAT-AP profile specific extension where DCAT had no requirements earlier on specified

This reuse qualification assessement is w.r.t. a specific version of DCAT.
Therefore it may vary over time when new versions of DCAT-AP are created.




### 7.1[Agent](http://xmlns.com/foaf/0.1/Agent)

[Permalink for Section 7.1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent)

Definition

Any entity carrying out actions with respect to the entities Catalogue and the Catalogued Resources.

Reference in DCAT
[Link](https://www.w3.org/TR/vocab-dcat-3/#Class:Organization_Person)
Usage Note

If the Agent is an organisation, the use of the [Organization Ontology](https://www.w3.org/TR/vocab-org/) is recommended.

Properties

For this entity the following properties are defined: [name](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent.name)
, [type](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent.type)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [name](http://xmlns.com/foaf/0.1/name) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 1..\* | A name of the agent. | This property can be repeated for different versions of the name (e.g. the name in different languages). |  | P |
| [type](http://purl.org/dc/terms/type) | [Concept](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Concept) | 0..1 | The nature of the agent. |  |  | P |

### 7.2[Catalogue](http://www.w3.org/ns/dcat\#Catalog)

[Permalink for Section 7.2](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue)

Definition

A catalogue or repository that hosts the Datasets or Data Services being described.

Reference in DCAT
[Link](https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog)
Properties

For this entity the following properties are defined: [applicable legislation](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.applicablelegislation)
, [catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.catalogue)
, [creator](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.creator)
, [dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.dataset)
, [description](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.description)
, [geographical coverage](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.geographicalcoverage)
, [has part](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.haspart)
, [homepage](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.homepage)
, [language](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.language)
, [licence](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.licence)
, [modification date](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.modificationdate)
, [publisher](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.publisher)
, [record](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.record)
, [release date](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.releasedate)
, [rights](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.rights)
, [service](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.service)
, [temporal coverage](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.temporalcoverage)
, [themes](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.themes)
, [title](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.title)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [applicable legislation](http://data.europa.eu/r5r/applicableLegislation) | [Legal Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#LegalResource) | 0..\* | The legislation that mandates the creation or management of the Catalog. |  |  | P |
| [catalogue](http://www.w3.org/ns/dcat#catalog) | [Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue) | 0..\* | A catalogue whose contents are of interest in the context of this catalogue. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog) |
| [creator](http://purl.org/dc/terms/creator) | [Agent](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent) | 0..1 | An entity responsible for the creation of the catalogue. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator) |
| [dataset](http://www.w3.org/ns/dcat#dataset) | [Dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset) | 0..\* | A Dataset that is part of the Catalogue. | As empty Catalogues are usually indications of problems, this property should be combined with the property [service](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.service) to implement an empty Catalogue check. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_dataset) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_dataset) |
| [description](http://purl.org/dc/terms/description) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 1..\* | A free-text account of the Catalogue. | This property can be repeated for parallel language versions of the description. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description) |
| [geographical coverage](http://purl.org/dc/terms/spatial) | [Location](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Location) | 0..\* | A geographical area covered by the Catalogue. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial) |
| [has part](http://purl.org/dc/terms/hasPart) | [Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue) | 0..\* | A related Catalogue that is part of the described Catalogue. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_part) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_has_part) |
| [homepage](http://xmlns.com/foaf/0.1/homepage) | [Document](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Document) | 0..1 | A web page that acts as the main page for the Catalogue. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_homepage) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_homepage) |
| [language](http://purl.org/dc/terms/language) | [Linguistic system](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Linguisticsystem) | 0..\* | A language used in the textual metadata describing titles, descriptions, etc. of the Datasets in the Catalogue. | This property can be repeated if the metadata is provided in multiple languages. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language) |
| [licence](http://purl.org/dc/terms/license) | [Licence Document](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#LicenceDocument) | 0..1 | A licence under which the Catalogue can be used or reused. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license) |
| [modification date](http://purl.org/dc/terms/modified) | [Temporal Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral) | 0..1 | The most recent date on which the Catalogue was modified. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date) |
| [publisher](http://purl.org/dc/terms/publisher) | [Agent](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent) | 1 | An entity (organisation) responsible for making the Catalogue available. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher) |
| [record](http://www.w3.org/ns/dcat#record) | [Catalogue Record](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord) | 0..\* | A Catalogue Record that is part of the Catalogue. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog_record) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_catalog_record) |
| [release date](http://purl.org/dc/terms/issued) | [Temporal Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral) | 0..1 | The date of formal issuance (e.g., publication) of the Catalogue. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date) |
| [rights](http://purl.org/dc/terms/rights) | [Rights statement](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Rightsstatement) | 0..1 | A statement that specifies rights associated with the Catalogue. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_rights) |
| [service](http://www.w3.org/ns/dcat#service) | [Data Service](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService) | 0..\* | A site or end-point (Data Service) that is listed in the Catalogue. | As empty Catalogues are usually indications of problems, this property should be combined with the property [dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.dataset) to implement an empty Catalogue check. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_service) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_service) |
| [temporal coverage](http://purl.org/dc/terms/temporal) | [Period of time](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Periodoftime) | 0..\* | A temporal period that the Catalogue covers. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal_resolution) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal_resolution) |
| [themes](http://www.w3.org/ns/dcat#themeTaxonomy) | [Concept Scheme](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#ConceptScheme) | 0..\* | A knowledge organization system used to classify the Resources that are in the Catalogue. | This property refers to a knowledge organization system used to classify the Catalogue's Datasets. It must have at least the value NAL:data-theme as this is the manatory controlled vocabulary for dcat:theme. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_themes) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:catalog_themes) |
| [title](http://purl.org/dc/terms/title) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 1..\* | A name given to the Catalogue. | This property can be repeated for parallel language versions of the name. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title) |

### 7.3[Catalogue Record](http://www.w3.org/ns/dcat\#CatalogRecord)

[Permalink for Section 7.3](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord)

Definition

A description of a Catalogued Resource's entry in the Catalogue.

Reference in DCAT
[Link](https://www.w3.org/TR/vocab-dcat-3/#Class:Catalog_Record)
Properties

For this entity the following properties are defined: [application profile](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord.applicationprofile)
, [change type](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord.changetype)
, [description](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord.description)
, [language](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord.language)
, [listing date](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord.listingdate)
, [modification date](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord.modificationdate)
, [primary topic](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord.primarytopic)
, [source metadata](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord.sourcemetadata)
, [title](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord.title)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [application profile](http://purl.org/dc/terms/conformsTo) | [Standard](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Standard) | 0..\* | An Application Profile that the Catalogued Resource's metadata conforms to. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:record_conforms_to) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:record_conforms_to) |
| [change type](http://www.w3.org/ns/adms#status) | [Concept](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Concept) | 0..1 | The status of the catalogue record in the context of editorial flow of the dataset and data service descriptions. |  |  | P |
| [description](http://purl.org/dc/terms/description) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 0..\* | A free-text account of the record. This property can be repeated for parallel language versions of the description. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:record_description) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:record_description) |
| [language](http://purl.org/dc/terms/language) | [Linguistic system](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Linguisticsystem) | 0..\* | A language used in the textual metadata describing titles, descriptions, etc. of the Catalogued Resource. | This property can be repeated if the metadata is provided in multiple languages. |  | P |
| [listing date](http://purl.org/dc/terms/issued) | [Temporal Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral) | 0..1 | The date on which the description of the Resource was included in the Catalogue. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:record_listing_date) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:record_listing_date) |
| [modification date](http://purl.org/dc/terms/modified) | [Temporal Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral) | 1 | The most recent date on which the Catalogue entry was changed or modified. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:record_update_date) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:record_update_date) |
| [primary topic](http://xmlns.com/foaf/0.1/primaryTopic) | [Catalogued Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CataloguedResource) | 1 | A link to the Dataset, Data service or Catalog described in the record. | A catalogue record will refer to one entity in a catalogue. This can be either a Dataset or a Data Service. To ensure an unambigous reading of the cardinality the range is set to Catalogued Resource. However it is not the intend with this range to require the explicit use of the class Catalogued Record. As abstract class, an subclass should be used. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:record_primary_topic) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:record_primary_topic) |
| [source metadata](http://purl.org/dc/terms/source) | [Catalogue Record](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord) | 0..1 | The original metadata that was used in creating metadata for the Dataset, Data Service or Dataset Series. |  |  | P |
| [title](http://purl.org/dc/terms/title) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 0..\* | A name given to the Catalogue Record. | This property can be repeated for parallel language versions of the name. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:record_title) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:record_title) |

### 7.4[Catalogued Resource](http://www.w3.org/ns/dcat\#Resource)

[Permalink for Section 7.4](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CataloguedResource)

Definition

Resource published or curated by a single agent.

Reference in DCAT
[Link](https://www.w3.org/TR/vocab-dcat-3/#Class:Resource)
Usage Note

This class Catalogued Record is an abstract class for DCAT-AP. Therefore only subclasses should be used in a data exchange.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 7.5[Checksum](http://spdx.org/rdf/terms\#Checksum)

[Permalink for Section 7.5](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Checksum)

Definition

A value that allows the contents of a file to be authenticated.

Reference in DCAT
[Link](https://w3c.github.io/dxwg/dcat/#Class:Checksum)
Usage Note

This class allows the results of a variety of checksum and cryptographic message digest algorithms to be represented.

Properties

For this entity the following properties are defined: [algorithm](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Checksum.algorithm)
, [checksum value](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Checksum.checksumvalue)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [algorithm](http://spdx.org/rdf/terms#algorithm) | [Checksum Algorithm](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#ChecksumAlgorithm) | 1 | The algorithm used to produce the subject Checksum. |  | [Link](https://w3c.github.io/dxwg/dcat/#Property:checksum_algorithm) | [E](https://w3c.github.io/dxwg/dcat/#Property:checksum_algorithm) |
| [checksum value](http://spdx.org/rdf/terms#checksumValue) | [xsd:hexBinary](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#xsd%3AhexBinary) | 1 | A lower case hexadecimal encoded digest value produced using a specific algorithm. |  | [Link](https://w3c.github.io/dxwg/dcat/#Property:checksum_checksum_value) | [E](https://w3c.github.io/dxwg/dcat/#Property:checksum_checksum_value) |

### 7.6[Data Service](http://www.w3.org/ns/dcat\#DataService)

[Permalink for Section 7.6](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService)

Definition

A collection of operations that provides access to one or more datasets or data processing functions.

Reference in DCAT
[Link](https://www.w3.org/TR/vocab-dcat-3/#Class:Data_Service)
Subclass of
[Catalogued Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CataloguedResource)
Properties

For this entity the following properties are defined: [access rights](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.accessrights)
, [applicable legislation](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.applicablelegislation)
, [conforms to](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.conformsto)
, [contact point](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.contactpoint)
, [description](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.description)
, [documentation](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.documentation)
, [endpoint description](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.endpointdescription)
, [endpoint URL](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.endpointURL)
, [format](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.format)
, [keyword](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.keyword)
, [landing page](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.landingpage)
, [licence](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.licence)
, [publisher](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.publisher)
, [serves dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.servesdataset)
, [theme](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.theme)
, [title](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.title)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [access rights](http://purl.org/dc/terms/accessRights) | [Rights statement](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Rightsstatement) | 0..1 | Information regarding access or restrictions based on privacy, security, or other policies. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights) |
| [applicable legislation](http://data.europa.eu/r5r/applicableLegislation) | [Legal Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#LegalResource) | 0..\* | The legislation that mandates the creation or management of the Data Service. |  |  | P |
| [conforms to](http://purl.org/dc/terms/conformsTo) | [Standard](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Standard) | 0..\* | An established (technical) standard to which the Data Service conforms. | The standards referred here _SHOULD_ describe the Data Service and not the data it serves. The latter is provided by the dataset with which this Data Service is connected.<br>For instance the data service adheres to the OGC WFS API standard, while the associated dataset adheres to the [INSPIRE](https://knowledge-base.inspire.ec.europa.eu/index_en) Address data model. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:record_conforms_to) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:record_conforms_to) |
| [contact point](http://www.w3.org/ns/dcat#contactPoint) | [Kind](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Kind) | 0..\* | Contact information that can be used for sending comments about the Data Service. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point) |
| [description](http://purl.org/dc/terms/description) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 0..\* | A free-text account of the Data Service. | This property can be repeated for parallel language versions of the description. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description) |
| [documentation](http://xmlns.com/foaf/0.1/page) | [Document](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Document) | 0..\* | A page or document about this Data Service |  |  | P |
| [endpoint description](http://www.w3.org/ns/dcat#endpointDescription) | [Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Resource) | 0..\* | A description of the services available via the end-points, including their operations, parameters etc. | The property gives specific details of the actual endpoint instances, while the property application profile (dct:conformsTo) is used to indicate the general standard or specification that the endpoints implement. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_endpoint_description) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_endpoint_description) |
| [endpoint URL](http://www.w3.org/ns/dcat#endpointURL) | [Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Resource) | 1..\* | The root location or primary endpoint of the service (an IRI). |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_endpoint_url) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_endpoint_url) |
| [format](http://purl.org/dc/terms/format) | [Media Type or Extent](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#MediaTypeorExtent) | 0..\* | The structure that can be returned by querying the endpointURL. |  |  | P |
| [keyword](http://www.w3.org/ns/dcat#keyword) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 0..\* | A keyword or tag describing the Data Service. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword) |
| [landing page](http://www.w3.org/ns/dcat#landingPage) | [Document](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Document) | 0..\* | A web page that provides access to the Data Service and/or additional information. | It is intended to point to a landing page at the original data service provider, not to a page on a site of a third party, such as an aggregator. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page) |
| [licence](http://purl.org/dc/terms/license) | [Licence Document](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#LicenceDocument) | 0..1 | A licence under which the Data service is made available. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_license) |
| [publisher](http://purl.org/dc/terms/publisher) | [Agent](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent) | 0..1 | An entity (organisation) responsible for making the Data Service available. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher) |
| [serves dataset](http://www.w3.org/ns/dcat#servesDataset) | [Dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset) | 0..\* | This property refers to a collection of data that this data service can distribute. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_serves_dataset) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:data_service_serves_dataset) |
| [theme](http://www.w3.org/ns/dcat#theme) | [Concept](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Concept) | 0..\* | A category of the Data Service. | A Data Service may be associated with multiple themes. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme) |
| [title](http://purl.org/dc/terms/title) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 1..\* | A name given to the Data Service. | This property can be repeated for parallel language versions of the name. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title) |

### 7.7[Dataset](http://www.w3.org/ns/dcat\#Dataset)

[Permalink for Section 7.7](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset)

Definition

A conceptual entity that represents the information published.

Reference in DCAT
[Link](https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset)
Usage Note

If a Dataset is used as part of a Dataset Series, the usage of the properties listed below must be coherent with the associated Dataset Series.
For this usage, consult the guidelines in section [14\. General usage guidelines](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#UsageGuidelines).

Subclass of
[Catalogued Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CataloguedResource)
Properties

For this entity the following properties are defined: [access rights](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.accessrights)
, [applicable legislation](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.applicablelegislation)
, [conforms to](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.conformsto)
, [contact point](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.contactpoint)
, [creator](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.creator)
, [dataset distribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.datasetdistribution)
, [description](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.description)
, [documentation](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.documentation)
, [frequency](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.frequency)
, [geographical coverage](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.geographicalcoverage)
, [has version](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.hasversion)
, [identifier](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.identifier)
, [in series](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.inseries)
, [is referenced by](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.isreferencedby)
, [keyword](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.keyword)
, [landing page](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.landingpage)
, [language](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.language)
, [modification date](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.modificationdate)
, [other identifier](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.otheridentifier)
, [provenance](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.provenance)
, [publisher](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.publisher)
, [qualified attribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.qualifiedattribution)
, [qualified relation](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.qualifiedrelation)
, [related resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.relatedresource)
, [release date](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.releasedate)
, [sample](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.sample)
, [source](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.source)
, [spatial resolution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.spatialresolution)
, [temporal coverage](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.temporalcoverage)
, [temporal resolution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.temporalresolution)
, [theme](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.theme)
, [title](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.title)
, [type](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.type)
, [version](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.version)
, [version notes](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.versionnotes)
, [was generated by](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.wasgeneratedby)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [access rights](http://purl.org/dc/terms/accessRights) | [Rights statement](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Rightsstatement) | 0..1 | Information that indicates whether the Dataset is publicly accessible, has access restrictions or is not public. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_access_rights) |
| [applicable legislation](http://data.europa.eu/r5r/applicableLegislation) | [Legal Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#LegalResource) | 0..\* | The legislation that mandates the creation or management of the Dataset. |  |  | P |
| [conforms to](http://purl.org/dc/terms/conformsTo) | [Standard](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Standard) | 0..\* | An implementing rule or other specification. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_conforms_to) |
| [contact point](http://www.w3.org/ns/dcat#contactPoint) | [Kind](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Kind) | 0..\* | Contact information that can be used for sending comments about the Dataset. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point) |
| [creator](http://purl.org/dc/terms/creator) | [Agent](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent) | 0..\* | An entity responsible for producing the dataset. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_creator) |
| [dataset distribution](http://www.w3.org/ns/dcat#distribution) | [Distribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution) | 0..\* | An available Distribution for the Dataset. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_distribution) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_distribution) |
| [description](http://purl.org/dc/terms/description) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 1..\* | A free-text account of the Dataset. | This property can be repeated for parallel language versions of the description. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description) |
| [documentation](http://xmlns.com/foaf/0.1/page) | [Document](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Document) | 0..\* | A page or document about this Dataset. |  |  | P |
| [frequency](http://purl.org/dc/terms/accrualPeriodicity) | [Frequency](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Frequency) | 0..1 | The frequency at which the Dataset is updated. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_frequency) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_frequency) |
| [geographical coverage](http://purl.org/dc/terms/spatial) | [Location](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Location) | 0..\* | A geographic region that is covered by the Dataset. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial) |
| [has version](http://www.w3.org/ns/dcat#hasVersion) | [Dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset) | 0..\* | A related Dataset that is a version, edition, or adaptation of the described Dataset. |  |  | P |
| [identifier](http://purl.org/dc/terms/identifier) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 0..\* | The main identifier for the Dataset, e.g. the URI or other unique identifier in the context of the Catalogue. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_identifier) |
| [in series](http://www.w3.org/ns/dcat#inSeries) | [Dataset Series](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries) | 0..\* | A dataset series of which the dataset is part. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_in_series) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_in_series) |
| [is referenced by](http://purl.org/dc/terms/isReferencedBy) | [Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Resource) | 0..\* | A related resource, such as a publication, that references, cites, or otherwise points to the dataset. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_is_referenced_by) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_is_referenced_by) |
| [keyword](http://www.w3.org/ns/dcat#keyword) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 0..\* | A keyword or tag describing the Dataset. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_keyword) |
| [landing page](http://www.w3.org/ns/dcat#landingPage) | [Document](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Document) | 0..\* | A web page that provides access to the Dataset, its Distributions and/or additional information. | It is intended to point to a landing page at the original data provider, not to a page on a site of a third party, such as an aggregator. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_landing_page) |
| [language](http://purl.org/dc/terms/language) | [Linguistic system](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Linguisticsystem) | 0..\* | A language of the Dataset. | This property can be repeated if there are multiple languages in the Dataset. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_language) |
| [modification date](http://purl.org/dc/terms/modified) | [Temporal Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral) | 0..1 | The most recent date on which the Dataset was changed or modified. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date) |
| [other identifier](http://www.w3.org/ns/adms#identifier) | [Identifier](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Identifier) | 0..\* | A secondary identifier of the Dataset | Examples are MAST/ADS \[[MASTADS](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-mastads "Referencing Data Sets in Astronomical Literature")\], DOI \[[DOI](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-doi "Digital Object Identifier")\], EZID \[[EZID](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-ezid "EZID")\] or W3ID \[[W3ID](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-w3id "Permanent Identifiers for the Web")\]. | [Link](https://www.w3.org/TR/vocab-dcat-3/#dereferenceable-identifiers) | [E](https://www.w3.org/TR/vocab-dcat-3/#dereferenceable-identifiers) |
| [provenance](http://purl.org/dc/terms/provenance) | [Provenance Statement](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#ProvenanceStatement) | 0..\* | A statement about the lineage of a Dataset. |  |  | P |
| [publisher](http://purl.org/dc/terms/publisher) | [Agent](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent) | 0..1 | An entity (organisation) responsible for making the Dataset available. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher) |
| [qualified attribution](http://www.w3.org/ns/prov#qualifiedAttribution) | [Attribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Attribution) | 0..\* | An Agent having some form of responsibility for the resource. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_attribution) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_attribution) |
| [qualified relation](http://www.w3.org/ns/dcat#qualifiedRelation) | [Relationship](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Relationship) | 0..\* | A description of a relationship with another resource. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_qualified_relation) |
| [related resource](http://purl.org/dc/terms/relation) | [Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Resource) | 0..\* | A related resource. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_relation) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_relation) |
| [release date](http://purl.org/dc/terms/issued) | [Temporal Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral) | 0..1 | The date of formal issuance (e.g., publication) of the Dataset. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date) |
| [sample](http://www.w3.org/ns/adms#sample) | [Distribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution) | 0..\* | A sample distribution of the dataset. |  |  | P |
| [source](http://purl.org/dc/terms/source) | [Dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset) | 0..\* | A related Dataset from which the described Dataset is derived. |  |  | P |
| [spatial resolution](http://www.w3.org/ns/dcat#spatialResolutionInMeters) | [xsd:decimal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#xsd%3Adecimal) | 0..1 | The minimum spatial separation resolvable in a dataset, measured in meters. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial_resolution) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial_resolution) |
| [temporal coverage](http://purl.org/dc/terms/temporal) | [Period of time](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Periodoftime) | 0..\* | A temporal period that the Dataset covers. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal) |
| [temporal resolution](http://www.w3.org/ns/dcat#temporalResolution) | [xsd:duration](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#xsd%3Aduration) | 0..1 | The minimum time period resolvable in the dataset. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal_resolution) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal_resolution) |
| [theme](http://www.w3.org/ns/dcat#theme) | [Concept](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Concept) | 0..\* | A category of the Dataset. | A Dataset may be associated with multiple themes. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_theme) |
| [title](http://purl.org/dc/terms/title) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 1..\* | A name given to the Dataset. | This property can be repeated for parallel language versions of the name. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title) |
| [type](http://purl.org/dc/terms/type) | [Concept](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Concept) | 0..\* | A type of the Dataset. | A recommended controlled vocabulary data-type is foreseen. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_type) |
| [version](http://www.w3.org/ns/dcat#version) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 0..1 | The version indicator (name or identifier) of a resource. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_version) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_version) |
| [version notes](http://www.w3.org/ns/adms#versionNotes) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 0..\* | A description of the differences between this version and a previous version of the Dataset. | This property can be repeated for parallel language versions of the version notes. |  | P |
| [was generated by](http://www.w3.org/ns/prov#wasGeneratedBy) | [Activity](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Activity) | 0..\* | An activity that generated, or provides the business context for, the creation of the dataset. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_was_generated_by) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_was_generated_by) |

### 7.8[Dataset Series](http://www.w3.org/ns/dcat\#DatasetSeries)

[Permalink for Section 7.8](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries)

Definition

A collection of datasets that are published separately, but share some characteristics that group them.

Reference in DCAT
[Link](https://www.w3.org/TR/vocab-dcat-3/#Class:Dataset_Series)
Usage Note

It is recommended to avoid Dataset Series without a dataset in the collection. Therefore at least one Dataset should refer to a Dataset Series using the property in series (dcat:inSeries).

Subclass of
[Catalogued Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CataloguedResource)
Properties

For this entity the following properties are defined: [applicable legislation](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries.applicablelegislation)
, [contact point](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries.contactpoint)
, [description](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries.description)
, [frequency](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries.frequency)
, [geographical coverage](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries.geographicalcoverage)
, [modification date](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries.modificationdate)
, [publisher](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries.publisher)
, [release date](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries.releasedate)
, [temporal coverage](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries.temporalcoverage)
, [title](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries.title)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [applicable legislation](http://data.europa.eu/r5r/applicableLegislation) | [Legal Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#LegalResource) | 0..\* | The legislation that mandates the creation or management of the Dataset Series. |  |  | P |
| [contact point](http://www.w3.org/ns/dcat#contactPoint) | [Kind](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Kind) | 0..\* | Contact information that can be used for sending comments about the Dataset Series. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_contact_point) |
| [description](http://purl.org/dc/terms/description) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 1..\* | A free-text account of the Dataset Series. | This property can be repeated for parallel language versions.<br>It is recommended to provide an indication about the dimensions the Dataset Series evolves. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_description) |
| [frequency](http://purl.org/dc/terms/accrualPeriodicity) | [Frequency](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Frequency) | 0..1 | The frequency at which the Dataset Series is updated. | The frequency of a dataset series is not equal to the frequency of the dataset in the collection. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_frequency) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_frequency) |
| [geographical coverage](http://purl.org/dc/terms/spatial) | [Location](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Location) | 0..\* | A geographic region that is covered by the Dataset Series. | When spatial coverage is a dimension in the dataset series then the spatial coverage of each dataset in the collection should be part of the spatial coverage. In that case, an open ended value is recommended, e.g. EU or a broad bounding box covering the expected values. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_spatial) |
| [modification date](http://purl.org/dc/terms/modified) | [Temporal Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral) | 0..1 | The most recent date on which the Dataset Series was changed or modified. | This is not equal to the most recent modified dataset in the collection of the dataset series. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_update_date) |
| [publisher](http://purl.org/dc/terms/publisher) | [Agent](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent) | 0..1 | An entity (organisation) responsible for ensuring the coherency of the Dataset Series | The publisher of the dataset series may not be the publisher of all datasets. <br>E.g. a digital archive could take over the publishing of older datasets in the series. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_publisher) |
| [release date](http://purl.org/dc/terms/issued) | [Temporal Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral) | 0..1 | The date of formal issuance (e.g., publication) of the Dataset Series. | The moment when the dataset series was established as a managed resource.<br>This is not equal to the release date of the oldest dataset in the collection of the dataset series. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_release_date) |
| [temporal coverage](http://purl.org/dc/terms/temporal) | [Period of time](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Periodoftime) | 0..\* | A temporal period that the Dataset Series covers. | When temporal coverage is a dimension in the dataset series then the temporal coverage of each dataset in the collection should be part of the temporal coverage. In that case, an open ended value is recommended, e.g. after 2012. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:dataset_temporal) |
| [title](http://purl.org/dc/terms/title) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 1..\* | A name given to the Dataset Series. | This property can be repeated for parallel language versions of the name. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:resource_title) |

### 7.9[Distribution](http://www.w3.org/ns/dcat\#Distribution)

[Permalink for Section 7.9](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution)

Definition

A physical embodiment of the Dataset in a particular format.

Reference in DCAT
[Link](https://www.w3.org/TR/vocab-dcat-3/#Class:Distribution)
Properties

For this entity the following properties are defined: [access service](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.accessservice)
, [access URL](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.accessURL)
, [applicable legislation](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.applicablelegislation)
, [availability](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.availability)
, [byte size](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.bytesize)
, [checksum](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.checksum)
, [compression format](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.compressionformat)
, [description](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.description)
, [documentation](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.documentation)
, [download URL](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.downloadURL)
, [format](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.format)
, [has policy](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.haspolicy)
, [language](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.language)
, [licence](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.licence)
, [linked schemas](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.linkedschemas)
, [media type](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.mediatype)
, [modification date](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.modificationdate)
, [packaging format](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.packagingformat)
, [release date](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.releasedate)
, [rights](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.rights)
, [spatial resolution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.spatialresolution)
, [status](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.status)
, [temporal resolution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.temporalresolution)
, [title](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution.title)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [access service](http://www.w3.org/ns/dcat#accessService) | [Data Service](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService) | 0..\* | A data service that gives access to the distribution of the dataset. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_service) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_service) |
| [access URL](http://www.w3.org/ns/dcat#accessURL) | [Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Resource) | 1..\* | A URL that gives access to a Distribution of the Dataset. | The resource at the access URL may contain information about how to get the Dataset. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_url) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_access_url) |
| [applicable legislation](http://data.europa.eu/r5r/applicableLegislation) | [Legal Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#LegalResource) | 0..\* | The legislation that mandates the creation or management of the Distribution. |  |  | P |
| [availability](http://data.europa.eu/r5r/availability) | [Concept](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Concept) | 0..1 | An indication how long it is planned to keep the Distribution of the Dataset available. |  |  | P |
| [byte size](http://www.w3.org/ns/dcat#byteSize) | [xsd:nonNegativeInteger](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#xsd%3AnonNegativeInteger) | 0..1 | The size of a Distribution in bytes. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_size) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_size) |
| [checksum](http://spdx.org/rdf/terms#checksum) | [Checksum](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Checksum) | 0..1 | A mechanism that can be used to verify that the contents of a distribution have not changed. | The checksum is related to the downloadURL. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_checksum) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_checksum) |
| [compression format](http://www.w3.org/ns/dcat#compressFormat) | [Media Type](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#MediaType) | 0..1 | The format of the file in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file. | It _SHOULD_ be expressed using a media type as defined in the official register of media types managed by [IANA](https://www.iana.org/). | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_compression_format) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_compression_format) |
| [description](http://purl.org/dc/terms/description) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 0..\* | A free-text account of the Distribution. | This property can be repeated for parallel language versions of the description. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_description) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_description) |
| [documentation](http://xmlns.com/foaf/0.1/page) | [Document](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Document) | 0..\* | A page or document about this Distribution. |  |  | P |
| [download URL](http://www.w3.org/ns/dcat#downloadURL) | [Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Resource) | 0..\* | A URL that is a direct link to a downloadable file in a given format. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_download_url) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_download_url) |
| [format](http://purl.org/dc/terms/format) | [Media Type or Extent](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#MediaTypeorExtent) | 0..1 | The file format of the Distribution. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_format) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_format) |
| [has policy](http://www.w3.org/ns/odrl/2/hasPolicy) | [Policy](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Policy) | 0..1 | The policy expressing the rights associated with the distribution if using the \[[ODRL](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-odrl "The Open Digital Rights Language Ontology Version 2.2")\] vocabulary. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_has_policy) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_has_policy) |
| [language](http://purl.org/dc/terms/language) | [Linguistic system](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Linguisticsystem) | 0..\* | A language used in the Distribution. | This property can be repeated if the metadata is provided in multiple languages. |  | P |
| [licence](http://purl.org/dc/terms/license) | [Licence Document](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#LicenceDocument) | 0..1 | A licence under which the Distribution is made available. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_license) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_license) |
| [linked schemas](http://purl.org/dc/terms/conformsTo) | [Standard](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Standard) | 0..\* | An established schema to which the described Distribution conforms. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_conforms_to) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_conforms_to) |
| [media type](http://www.w3.org/ns/dcat#mediaType) | [Media Type](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#MediaType) | 0..1 | The media type of the Distribution as defined in the official register of media types managed by IANA. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_media_type) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_media_type) |
| [modification date](http://purl.org/dc/terms/modified) | [Temporal Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral) | 0..1 | The most recent date on which the Distribution was changed or modified. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_update_date) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_update_date) |
| [packaging format](http://www.w3.org/ns/dcat#packageFormat) | [Media Type](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#MediaType) | 0..1 | The format of the file in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together. | It _SHOULD_ be expressed using a media type as defined in the official register of media types managed by [IANA](https://www.iana.org/). | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_packaging_format) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_packaging_format) |
| [release date](http://purl.org/dc/terms/issued) | [Temporal Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral) | 0..1 | The date of formal issuance (e.g., publication) of the Distribution. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_release_date) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_release_date) |
| [rights](http://purl.org/dc/terms/rights) | [Rights statement](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Rightsstatement) | 0..1 | A statement that specifies rights associated with the Distribution. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_rights) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_rights) |
| [spatial resolution](http://www.w3.org/ns/dcat#spatialResolutionInMeters) | [xsd:decimal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#xsd%3Adecimal) | 0..1 | The minimum spatial separation resolvable in a dataset distribution, measured in meters. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_spatial_resolution) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_spatial_resolution) |
| [status](http://www.w3.org/ns/adms#status) | [Concept](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Concept) | 0..1 | The status of the distribution in the context of maturity lifecycle. | It _MUST_ take one of the values Completed, Deprecated, Under Development, Withdrawn. |  | P |
| [temporal resolution](http://www.w3.org/ns/dcat#temporalResolution) | [xsd:duration](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#xsd%3Aduration) | 0..1 | The minimum time period resolvable in the dataset distribution. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_temporal_resolution) | [A](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_temporal_resolution) |
| [title](http://purl.org/dc/terms/title) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 0..\* | A name given to the Distribution. | This property can be repeated for parallel language versions of the description. | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_title) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:distribution_title) |

### 7.10[Kind](http://www.w3.org/2006/vcard/ns\#Kind)

[Permalink for Section 7.10](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Kind)

Definition

A description following the vCard specification, e.g. to provide telephone number and e-mail address for a contact point.

Usage Note

Note that the class Kind is the parent class for the four explicit types of [vCard](https://www.rfc-editor.org/rfc/rfc6350.html) (Individual, Organization, Location, Group).

Properties

This specification does not impose any additional requirements to properties for this entity.


### 7.11[Licence Document](http://purl.org/dc/terms/LicenseDocument)

[Permalink for Section 7.11](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#LicenceDocument)

Definition

A legal document giving official permission to do something with a resource.

Properties

For this entity the following properties are defined: [type](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#LicenceDocument.type)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [type](http://purl.org/dc/terms/type) | [Concept](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Concept) | 0..\* | A type of licence, e.g. indicating 'public domain' or 'royalties required'. |  |  | P |

### 7.12[Location](http://purl.org/dc/terms/Location)

[Permalink for Section 7.12](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Location)

Definition

A spatial region or named place.

Reference in DCAT
[Link](https://www.w3.org/TR/vocab-dcat-3/#Class:Location)
Usage Note

It can be represented using a controlled vocabulary or with geographic coordinates. In the latter case, the use of the [Core Location Vocabulary](https://semiceu.github.io/Core-Location-Vocabulary/) is recommended, following the approach described in the GeoDCAT-AP specification.

Properties

For this entity the following properties are defined: [bbox](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Location.bbox)
, [centroid](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Location.centroid)
, [geometry](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Location.geometry)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [bbox](http://www.w3.org/ns/dcat#bbox) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 0..1 | The geographic bounding box of a resource. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:location_bbox) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:location_bbox) |
| [centroid](http://www.w3.org/ns/dcat#centroid) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 0..1 | The geographic center (centroid) of a resource. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:location_centroid) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:location_centroid) |
| [geometry](http://www.w3.org/ns/locn#geometry) | [Geometry](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Geometry) | 0..1 | The corresponding geometry for a resource. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:location_geometry) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:location_geometry) |

### 7.13[Relationship](http://www.w3.org/ns/dcat\#Relationship)

[Permalink for Section 7.13](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Relationship)

Definition

An association class for attaching additional information to a relationship between DCAT Resources.

Reference in DCAT
[Link](https://w3c.github.io/dxwg/dcat/#Class:Relationship)
Properties

For this entity the following properties are defined: [had role](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Relationship.hadrole)
, [relation](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Relationship.relation)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [had role](http://www.w3.org/ns/dcat#hadRole) | [Role](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Role) | 1..n | A function of an entity or agent with respect to another entity or resource. |  | [Link](https://w3c.github.io/dxwg/dcat/#Property:relationship_hadRole) | [E](https://w3c.github.io/dxwg/dcat/#Property:relationship_hadRole) |
| [relation](http://purl.org/dc/terms/relation) | [Resource](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Resource) | 1..n | A resource related to the source resource. |  | [Link](https://w3c.github.io/dxwg/dcat/#Property:relationship_relation) | [E](https://w3c.github.io/dxwg/dcat/#Property:relationship_relation) |

## 8.  Supportive Entities

[Permalink for Section 8.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#supportive-entities)

The supportive entities are supporting the main entities in the Application Profile.
They are included in the Application Profile because they form the range of properties.




### 8.1[Activity](http://www.w3.org/ns/prov\#Activity)

[Permalink for Section 8.1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Activity)

Definition

An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.2[Attribution](http://www.w3.org/ns/prov\#Attribution)

[Permalink for Section 8.2](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Attribution)

Definition

Attribution is the ascribing of an entity to an agent.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.3[Checksum Algorithm](http://spdx.org/rdf/terms\#ChecksumAlgorithm)

[Permalink for Section 8.3](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#ChecksumAlgorithm)

Definition

Algorithm for Checksums.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.4[Concept](http://www.w3.org/2004/02/skos/core\#Concept)

[Permalink for Section 8.4](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Concept)

Definition

An idea or notion; a unit of thought.

Usage Note

In DCAT-AP, a Concept is used to denote codes within a codelist. In section [10\. Controlled Vocabularies](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#controlled-vocs) the expectations are elaborated in more detail.

Properties

For this entity the following properties are defined: [preferred label](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Concept.preferredlabel)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [preferred label](http://www.w3.org/2004/02/skos/core#prefLabel) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 1..n | A preferred label of the concept. | This property can be repeated for parallel language versions of the label. |  | P |

### 8.5[Concept Scheme](http://www.w3.org/2004/02/skos/core\#ConceptScheme)

[Permalink for Section 8.5](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#ConceptScheme)

Definition

An aggregation of one or more SKOS concepts.

Usage Note

In DCAT-AP, a Concept Scheme is used to denote a codelist. In section [10\. Controlled Vocabularies](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#controlled-vocs) the expectations are elaborated in more detail.

Properties

For this entity the following properties are defined: [title](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#ConceptScheme.title)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [title](http://purl.org/dc/terms/title) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 1..n | A name of the concept scheme. | May be repeated for different versions of the name |  | P |

### 8.6[Document](http://xmlns.com/foaf/0.1/Document)

[Permalink for Section 8.6](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Document)

Definition

A textual resource intended for human consumption that contains information, e.g. a web page about a Dataset.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.7[Frequency](http://purl.org/dc/terms/Frequency)

[Permalink for Section 8.7](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Frequency)

Definition

A rate at which something recurs, e.g. the publication of a Dataset.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.8[Geometry](http://www.w3.org/ns/locn\#Geometry)

[Permalink for Section 8.8](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Geometry)

Definition

The locn:Geometry class provides the means to identify a location as a point, line, polygon, etc. expressed using coordinates in some coordinate reference system.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.9[Identifier](http://www.w3.org/ns/adms\#Identifier)

[Permalink for Section 8.9](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Identifier)

Definition


This is based on the UN/CEFACT Identifier class.

Usage Note

An identifier in a particular context, consisting of the

- content string that is the identifier;
- an optional identifier for the identifier scheme;
- an optional identifier for the version of the identifier scheme;
- an optional identifier for the agency that manages the identifier scheme.

Properties

For this entity the following properties are defined: [notation](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Identifier.notation)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [notation](http://www.w3.org/2004/02/skos/core#notation) | [Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal) | 1 | A string that is an identifier in the context of the identifier scheme referenced by its datatype. |  |  | P |

### 8.10[Legal Resource](http://data.europa.eu/eli/ontology\#LegalResource)

[Permalink for Section 8.10](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#LegalResource)

Definition

This class represents the legislation,policy or policies that lie behind the Rules that govern the service.

Usage Note

The definition and properties of the Legal Resource class are aligned with the ontology included in "Council conclusions inviting the introduction of the European Legislation Identifier ( [ELI](https://eur-lex.europa.eu/eli-register/about.html))". For describing the attributes of a Legal Resource (labels, preferred labels, alternative labels, definition, etc.) we refer to the ( [ELI](https://op.europa.eu/en/web/eu-vocabularies/eli)) ontology.

In this data specification the use is restricted to instances of this class that follow the ( [ELI](https://op.europa.eu/en/web/eu-vocabularies/eli)) URI guidelines.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.11[Linguistic system](http://purl.org/dc/terms/LinguisticSystem)

[Permalink for Section 8.11](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Linguisticsystem)

Definition

A system of signs, symbols, sounds, gestures, or rules used in communication, e.g. a language.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.12[Literal](http://www.w3.org/2000/01/rdf-schema\#Literal)

[Permalink for Section 8.12](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Literal)

Definition

A literal value such as a string or integer; Literals may be typed, e.g. as a date according to xsd:date. Literals that contain human-readable text have an optional language tag as defined by BCP 47 \[[rfc5646](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-rfc5646 "Tags for Identifying Languages")\].

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.13[Media type](http://purl.org/dc/terms/MediaType)

[Permalink for Section 8.13](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Mediatype)

Definition

A media type, e.g. the format of a computer file.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.14[Media Type](http://purl.org/dc/terms/MediaType)

[Permalink for Section 8.14](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#MediaType)

Definition

A file format or physical medium.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.15[Media Type or Extent](http://purl.org/dc/terms/MediaTypeOrExtent)

[Permalink for Section 8.15](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#MediaTypeorExtent)

Definition

A media type or extent.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.16[Period of time](http://purl.org/dc/terms/PeriodOfTime)

[Permalink for Section 8.16](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Periodoftime)

Definition

An interval of time that is named or defined by its start and end dates.

Reference in DCAT
[Link](https://www.w3.org/TR/vocab-dcat-3/#Class:Period_of_Time)
Properties

For this entity the following properties are defined: [beginning](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Periodoftime.beginning)
, [end](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Periodoftime.end)
, [end date](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Periodoftime.enddate)
, [start date](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Periodoftime.startdate)
.


| Property | Range | Card | Definition | Usage | DCAT | Reuse |
| --- | --- | --- | --- | --- | --- | --- |
| [beginning](http://www.w3.org/2006/time#hasBeginning) | [Time instant](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Timeinstant) | 0..1 | The beginning of a period or interval. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:period_has_beginning) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:period_has_beginning) |
| [end](http://www.w3.org/2006/time#hasEnd) | [Time instant](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Timeinstant) | 0..1 | The end of a period or interval. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:period_has_end) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:period_has_end) |
| [end date](http://www.w3.org/ns/dcat#endDate) | [Temporal Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral) | 0..1 | The end of the period. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:period_end_date) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:period_end_date) |
| [start date](http://www.w3.org/ns/dcat#startDate) | [Temporal Literal](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#TemporalLiteral) | 0..1 | The start of the period. |  | [Link](https://www.w3.org/TR/vocab-dcat-3/#Property:period_start_date) | [E](https://www.w3.org/TR/vocab-dcat-3/#Property:period_start_date) |

### 8.17[Policy](http://www.w3.org/ns/odrl/2/Policy)

[Permalink for Section 8.17](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Policy)

Definition

A non-empty group of Permissions and/or Prohibitions.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.18[Provenance Statement](http://purl.org/dc/terms/ProvenanceStatement)

[Permalink for Section 8.18](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#ProvenanceStatement)

Definition

A statement of any changes in ownership and custody of a resource since its creation that are significant for its authenticity, integrity, and interpretation.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.19[Resource](http://www.w3.org/2000/01/rdf-schema\#Resource)

[Permalink for Section 8.19](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Resource)

Definition

Anything described by RDF.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.20[Rights statement](http://purl.org/dc/terms/RightsStatement)

[Permalink for Section 8.20](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Rightsstatement)

Definition

A statement about the intellectual property rights (IPR) held in or over a resource, a legal document giving official permission to do something with a resource, or a statement about access rights.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.21[Role](http://www.w3.org/ns/dcat\#Role)

[Permalink for Section 8.21](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Role)

Definition

A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships.

Reference in DCAT
[Link](https://w3c.github.io/dxwg/dcat/#Class:Role)
Usage Note

Note it is a subclass of skos:Concept.

Properties

This specification does not impose any additional requirements to properties for this entity.


### 8.22[Standard](http://purl.org/dc/terms/Standard)

[Permalink for Section 8.22](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Standard)

Definition

A standard or other specification to which a resource conforms.

Properties

This specification does not impose any additional requirements to properties for this entity.


## 9.  Datatypes

[Permalink for Section 9.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#datatypes)



The following datatypes are used within this specification.



|  | Class | Definition |
| --- | --- | --- |
| [![(create issue)](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/callout.png)](https://github.com/SEMICeu/DCAT-AP/issues/new?title=Issue%20for%20TemporalLiteral&body=Explain%20your%20issue) | [Temporal Literal](http://www.w3.org/2000/01/rdf-schema#Literal) | rdfs:Literal encoded using the relevant \[[ISO8601](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-iso8601 "Representation of dates and times. ISO 8601:2004.")\] Date and Time compliant string and typed using the appropriate XML Schema datatype (xsd:gYear, xsd:gYearMonth, xsd:date, or xsd:dateTime). |
| [![(create issue)](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/callout.png)](https://github.com/SEMICeu/DCAT-AP/issues/new?title=Issue%20for%20TimeInstant&body=Explain%20your%20issue) | [Time instant](http://www.w3.org/2006/time#Instant) | A temporal entity with zero extent or duration. |
| [![(create issue)](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/callout.png)](https://github.com/SEMICeu/DCAT-AP/issues/new?title=Issue%20for%20Xsd:datetime&body=Explain%20your%20issue) | [xsd:dateTime](http://www.w3.org/2001/XMLSchema#dateTime) | Object with integer-valued year, month, day, hour and minute properties, a decimal-valued second property, and a boolean timezoned property. |
| [![(create issue)](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/callout.png)](https://github.com/SEMICeu/DCAT-AP/issues/new?title=Issue%20for%20Xsd:decimal&body=Explain%20your%20issue) | [xsd:decimal](http://www.w3.org/2001/XMLSchema#decimal) | Decimal represents a subset of the real numbers, which can be represented by decimal numerals. The ·value space· of decimal is the set of numbers that can be obtained by multiplying an integer by a non-positive power of ten, i.e., expressible as i × 10^-n where i and n are integers and n >= 0. |
| [![(create issue)](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/callout.png)](https://github.com/SEMICeu/DCAT-AP/issues/new?title=Issue%20for%20Xsd:duration&body=Explain%20your%20issue) | [xsd:duration](http://www.w3.org/2001/XMLSchema#duration) | Duration represents a duration of time. The ·value space· of duration is a six-dimensional space where the coordinates designate the Gregorian year, month, day, hour, minute, and second components defined in § 5.5.3.2 of \[[ISO8601](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-iso8601 "Representation of dates and times. ISO 8601:2004.")\], respectively. |
| [![(create issue)](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/callout.png)](https://github.com/SEMICeu/DCAT-AP/issues/new?title=Issue%20for%20Xsd:hexbinary&body=Explain%20your%20issue) | [xsd:hexBinary](http://www.w3.org/2001/XMLSchema#hexBinary) | Hex-encoded binary data. The ·value space· of hexBinary is the set of finite-length sequences of binary octets. |
| [![(create issue)](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/callout.png)](https://github.com/SEMICeu/DCAT-AP/issues/new?title=Issue%20for%20Xsd:nonnegativeinteger&body=Explain%20your%20issue) | [xsd:nonNegativeInteger](http://www.w3.org/2001/XMLSchema#nonNegativeInteger) | Number derived from integer by setting the value of minInclusive to be 0. |

## 10.Controlled Vocabularies

[Permalink for Section 10.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#controlled-vocs)

_This section is non-normative._

### 10.1Requirements for controlled vocabularies

[Permalink for Section 10.1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#requirements-for-controlled-vocabularies)

The following is a list of requirements that were identified for the controlled vocabularies to be recommended in this Application Profile.
Controlled vocabularies _SHOULD_:

- Be published under an open licence.
- Be operated and/or maintained by an institution of the European Union, by a recognised standards organisation or another trusted organisation.
- Be properly documented.
- Have labels in multiple languages, ideally in all official languages of the European Union.
- Contain a relatively small number of terms (e.g. 10-25) that are general enough to enable a wide range of resources to be classified.
- Have terms that are identified by URIs with each URI resolving to documentation about the term.
- Have associated persistence and versioning policies.

These criteria do not intend to define a set of requirements for controlled vocabularies in general; they are only intended to be used for the selection of the controlled vocabularies that are proposed for this Application Profile.

### 10.2Controlled vocabularies to be used

[Permalink for Section 10.2](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#controlled-vocabularies-to-be-used)

In the table below, a number of properties are listed with controlled vocabularies that _MUST_ be used for the listed properties. The declaration of the following controlled vocabularies as mandatory ensures a minimum level of interoperability.

| Property URI | Used for Class | Vocabulary name | Usage note |
| --- | --- | --- | --- |
| dcat:mediaType | [Distribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution) | [IANA Media Types](http://www.iana.org/assignments/media-types/media-types.xhtml) |  |
| dcat:theme | [Dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset), [Data Service](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService), [Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue) | [Dataset Theme Vocabulary](http://publications.europa.eu/resource/authority/data-theme) | The values to be used for this property are the URIs of the concepts in the vocabulary. |
| dct:accrualPeriodicity | [Dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset), [Dataset Series](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries) | [EU Vocabularies Frequency Named Authority List](http://publications.europa.eu/resource/authority/frequency) |  |
| dct:format | [Distribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution), [Data Service](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService) | [EU Vocabularies File Type Named Authority List](http://publications.europa.eu/resource/authority/file-type) |  |
| dct:language | [Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue), [Dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset), [Catalogue Records](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#CatalogueRecord), [Distribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution) | [EU Vocabularies Languages Named Authority List](http://publications.europa.eu/resource/authority/language) |  |
| dct:publisher | [Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue), [Dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset), [Dataset Series](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries), [Data Service](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService) | [EU Vocabularies Corporate bodies Named Authority List](http://publications.europa.eu/resource/authority/corporate-body) | The Corporate bodies NAL must be used for European institutions and a small set of international organisations. In case of other types of organisations, national, regional or local vocabularies should be used. |
| dct:spatial | [Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue), [Dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset), [Dataset Series](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DatasetSeries) | [EU Vocabularies Continents Named Authority List](http://publications.europa.eu/resource/authority/continent/), [EU Vocabularies Countries Named Authority List](http://publications.europa.eu/resource/authority/country), [EU Vocabularies Places Named Authority List](http://publications.europa.eu/resource/authority/place/), [Geonames](http://sws.geonames.org/) | The EU Vocabularies Name Authority Lists must be used for continents, countries and places that are in those lists; if a particular location is not in one of the mentioned Named Authority Lists, Geonames URIs must be used. |
| adms:status | [Distribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution) | [EU Vocabularies Distribution Status](http://publications.europa.eu/resource/authority/distribution-status) |  |
| dct:type | [Agent](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent) | [ADMS publisher type](http://purl.org/adms/publishertype/1.0) vocabulary | The list of terms in the ADMS publisher type vocabulary is included in the ADMS specification |
| dct:type | [Licence Document](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#LicenceDocument) | [ADMS licence type vocabulary](http://purl.org/adms/licencetype/1.0) | The list of terms in the ADMS licence type vocabulary is included in the ADMS specification |
| dcatap:availability | [Distribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Distribution) | [Distribution availability vocabulary](http://publications.europa.eu/resource/authority/planned-availability) | The list of terms for the avalability levels of a dataset distribution in the DCAT-AP specification. |
| spdx:algorithm | [Checksum](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Checksum) | [Checksum algorithm members](https://spdx.org/rdf/terms/#d4e2129) | The members listed are considered a controlled vocabulary of supported checksum algorithms. |
| dct:accessRights | [Dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset), [Data Service](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService) | [Access Rights Named Authority List](http://publications.europa.eu/resource/authority/access-right) | Use one of the following values (:PUBLIC, :RESTRICTED, :NON\_PUBLIC). |

In the table below, a number of properties are listed with controlled vocabularies that _MAY_ be used for the listed properties. The declaration of the following controlled vocabularies as recommended stimulates interoperability.

| Property URI | Used for Class | Vocabulary name | Usage note |
| --- | --- | --- | --- |
| dct:type | [Dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset) | [Dataset-type authority table](http://publications.europa.eu/resource/authority/dataset-type) | This list of terms provide types of datasets. Its main scope is to support dataset categorisation of the EU Open Data Portal. |

### 10.3Other controlled vocabularies

[Permalink for Section 10.3](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#other-controlled-vocabularies)

In addition to the proposed common controlled vocabularies, which are mandatory to ensure minimal interoperability, implementers are encouraged to publish and to use further region or domain-specific vocabularies that are available online. While those may not be recognised by general implementations of the Application Profile, they may serve to increase interoperability across applications in the same region or domain. Examples are the full set of concepts in [EuroVoc](https://op.europa.eu/en/web/eu-vocabularies/dataset/-/resource?uri=http://publications.europa.eu/resource/dataset/eurovoc), [the CERIF standard vocabularies](https://dspacecris.eurocris.org/), [the Dewey Decimal Classification](http://www.oclc.org/content/dam/oclc/dewey/versions/print/intro.pdf) and numerous other schemes.

## 11.Legal information

[Permalink for Section 11.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#legal-information)

_This section is non-normative._

Providing correct and sufficient legal information is important to create trust by candidate reusers.
Without explicit legal information there is a risk involved in the reuse of data, because one has no way of knowing what is allowed.
While in the past legislation and initiatives such as Findable, Accessible, Interoperable and Reusable \[[FAIR](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-fair "How to make your data FAIR")\] data stress the importance of this information,
recent legislations, such as the [High Value Datasets regulation](https://eur-lex.europa.eu/eli/reg_impl/2023/138/oj), have become more demanding by imposing a minimum level of reuse.
As a general principle, it is recommended that publishers consult their legal services to provide the appropriate values.

Within DCAT-AP properties licence, rights and access rights are used to share this information.
The basic guidelines for their usage are expressed in the [License and Rights statements](https://w3c.github.io/dxwg/dcat/#license-rights) guideline in DCAT.
DCAT-AP implementers _SHOULD_ consult these, in addition with the additional advices for the DCAT-AP usage context provided in this section.

The general principle is that licences, rights and access rights are expressions in the context of a legislation.
It is possible (and allowed) that a EU Member State prescribes specific licences to be used for data published by the public sector.
And thus, publishers of that EU Member State will use that in the metadata descriptions.
This diversity can be considered a hurdle for cross-border reuse, as the implications of the licence might not be understood by users from another EU Member State.

This creates a natural tendency to use licences (or rights) which have a wider adoption than national legislation.
Unless restricted by national legislation, implementers are encouraged for that reason to use widely recognised licences such as Creative Commons licences.
In particular it is advised for \[[FAIR](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-fair "How to make your data FAIR")\] data to consider CC BY 4.0 (the minimum limit set by the HVD implementing regulation) or more permissive such as licences CC Zero.

An assessment of data.europa.eu \[[DEU](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-deu "The official portal for European data")\] in 2023 showed that there are different representations to indicate the same licence.
To create a more harmonised experience throughout Europe, it is recommended to use the [NAL licence](https://publications.europa.eu/resource/authority/licence)
maintained by the Publications Office if allowed by national legislation.
If local representations are used, then the equivalence with a licence in this NAL should be provided.
This mapping is expressed as metadata to local representation.
Note that this mapping is not determining the reuse conditions; the legal binding reuse conditions are those that are directly associated with the Distribution or Data Service.
Nevertheless, by applying this recommendation, it is possible for a cross-border reuser to get an insight in the reuse conditions without a detailed understanding the local legislation.

To encourage publishers to provide legal information DCAT-AP recommends to provide licence information.
However, in some EU Member States, the term licence has a specific interpretation; in that interpretation the to-be provided legal information cannot be supplied as a document for property [licence](https://semiceu.github.io/uri.semic.eu-generated/DCAT-AP/releases/3.0.0/#Distribution.licence).
In those legislative contexts it is advised to translate this encouragement in appropriate metadata guidelines for the targeted publishers.
For instance, such guidelines could state that one must use a set of rights to document the reuse conditions.

Since legal information may vary per distribution or service, DCAT-AP has adopted from its conception, the strategy to **only** express legal information at the most concrete level of sharing, i.e. Distribution or Data Service.
Suppose licensing information is also given on the Dataset level, there is a possibility that this is in conflict with licensing information on the Distribution, in which case it cannot be established which licence takes precedence.
By this strategy, the need for a conflict resolution between legal information at the level of a Dataset (or Dataset Series) and its associated Distributions or Data Services is avoided.

Despite the above examples provided here are a perfect fit for those that are in scope of 'Open Data', they apply also for data that is beyond the scope of 'Open Data'.
E.g. the Data Governance Act requires to provide sufficient legal reuse information such as the fees that apply.

## 12.Agent Roles

[Permalink for Section 12.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#agent-roles)

_This section is non-normative._

The first version of DCAT Application Profile \[[vocab-dcat-1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-vocab-dcat-1 "Data Catalog Vocabulary (DCAT)")\] had a single property to relate an Agent (typically, an organisation) to a Dataset.
The only such ‘agent role’ that could be expressed in that version of the profile is through the property [publisher](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.publisher), defined as “An entity responsible for making the dataset available”.
A second property is available in that DCAT recommendation \[[vocab-dcat-1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-vocab-dcat-1 "Data Catalog Vocabulary (DCAT)")\], [contact point](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.contactpoint), defined as “Link a dataset to relevant contact information which is provided using [vCard](https://www.rfc-editor.org/rfc/rfc6350.html)”, but this is not an agent role as the value of this property is contact data, rather than a representation of the organisation as such.
In specific cases, for example in exchanging data among domain-specific portals, it may be useful to express other, more specific agent roles.
In such cases, extensions to DCAT-AP may be defined using additional properties with more specific meanings.

Two possible approaches have been discussed, particular in the context of the development of the domain-specific GeoDCAT Application Profile \[[geodcat-ap](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-geodcat-ap "GeoDCAT-AP: A geospatial extension for the DCAT application profile for data portals in Europe")\].
The first possible approach is based on the use of a predicate vocabulary that provides a set of properties that represent additional types of relationships between Datasets and Agents.
For example, properties could be defined, such as foo:owner, foo:curator or foo:responsibleParty, in addition to the use of existing well-known properties, such as dct:creator and dct:rightsHolder.
A possible source for such additional properties is the Roles Named Authority List maintained by the Publications Office of the EU.
Other domain-specific sources for additional properties are the [INSPIRE](https://knowledge-base.inspire.ec.europa.eu/index_en) Responsible Party roles , [the Library of Congress’ MARC relators](https://www.loc.gov/marc/relators/relaterm.html) and [DataCite’s contributor types](https://support.datacite.org/docs/datacite-metadata-schema-v44-recommended-and-optional-properties#:~:text=Foo%20Data%20Center-,7.a%20contributorType,-Occurrence%3A%201).
To enable the use of such properties, they must be defined as RDF properties with URIs in a well-managed namespace.

A second approach is based on the use of W3C’s PROV ontology \[[prov-o](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-prov-o "PROV-O: The PROV Ontology")\] which provides a powerful mechanism to express a set of classes, properties, and restrictions that can be used to represent and interchange provenance information generated in different systems and under different contexts. In the context of work on GeoDCAT-AP, a PROV-conformant solution for expressing agent roles was agreed . This solution uses prov:qualifiedAttribution in combination with a dct:type assertion pointing to the code list for Responsible Party Role in the [INSPIRE](https://knowledge-base.inspire.ec.europa.eu/index_en) registry. To enable the use of such types, they must be defined with URIs in a well-managed namespace.

Based on the experience gained with the use of domain-specific extensions for additional ‘agent roles’ in the exchange of information about Datasets and on the requests of implementors and stakeholders, the DCAT Application Profile release 2.0.0 is extended with additional roles as proposed by DCAT Version 2 \[[vocab-dcat-2](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-vocab-dcat-2 "Data Catalog Vocabulary (DCAT) - Version 2")\] that have proven to be useful across domains. Precisely, properties [creator](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.creator), [qualified attribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.qualifiedattribution) and [qualified relation](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset.qualifiedrelation) have been added to [Dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Dataset) class to further facilitate relationships between datasets and agents.

In the most recent DCAT Version 3 \[[vocab-dcat-3](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-vocab-dcat-3 "Data Catalog Vocabulary (DCAT) - Version 3")\] a dedicated [section on the relationship with Agents](https://w3c.github.io/dxwg/dcat/#qualified-forms) is provided.
The DCAT-AP guidelines for Agents Roles are conformant to this.

It should be noted that, even if a more expressive approach is used in a particular implementation, the provision of information using dct:publisher for the Catalogue is still mandatory under the rules laid down in the Conformance Statement in section [4\. Conformance](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#conformance), while the provision of information using dct:publisher is strongly recommended for Dataset. The provision of such information using dct:publisher will ensure interoperability with implementations that use the basic approach of DCAT-AP.

## 13.Accessibility and Multilingual Aspects

[Permalink for Section 13.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#accessibility-and-multilingual-aspects)

_This section is non-normative._

Accessibility in the context of this Application Profile is limited to information about the technical format of distributions of datasets. The properties dcat:mediaType and dct:format provide information that can be used to determine what software can be deployed to process the data. The accessibility of the data within the datasets needs to be taken care of by the software that processes the data and is outside of the scope of this Application Profile.

Multilingual aspects related to this Application Profile concern all properties whose contents are expressed as strings (i.e. rdfs:Literal) with human-readable text. Wherever such properties are used, the string values are of one of two types:

- The string is free text. Examples are descriptions and labels. Such text may be translated into several languages.
- The string is an appellation of a ‘named entity’. Examples are names of organisations or persons. These names may have parallel versions in other languages but those versions don’t need to be literal translations.

Wherever values of properties are expressed with either type of string, the property can be repeated with translations in the case of free text and with parallel versions in case of named entities. For free text, e.g. in the cases of titles, descriptions and keywords, the language tag is mandatory.

Language tags to be used with rdfs:Literal are defined by BCP47 \[[rfc5646](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-rfc5646 "Tags for Identifying Languages")\], which allows the use of the "t" extension for text transformations defined in RFC6497 \[[rfc6497](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-rfc6497 "BCP 47 Extension T - Transformed Content")\] with the field "t0" indicating a machine translation.

A language tag will look like: "en-t-es-t0-abcd", which conveys the information that the string is in English, translated from Spanish by machine translation using a tool named "abcd".

For named entities, the language tag is optional and should only be provided if the parallel version of the name is strictly associated with a particular language. For example, the name ‘European Union’ has parallel versions in all official languages of the union, while a name like ‘W3C’ is not associated with a particular language and has no parallel versions.

For linking to different language versions of associated web pages (e.g. landing pages) or documentation, a content negotiation mechanism may be used whereby different content is served based on the Accept-Languages indicated by the browser. Using such a mechanism, the link to the page or document can resolve to different language versions of the page or document.

All the occurrences of the property dct:language, which can be repeated if the metadata is provided in multiple languages, _MUST_ have a URI \[[rfc3986](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-rfc3986 "Uniform Resource Identifier (URI): Generic Syntax")\] as their object, not a literal string from the ISO 639 code list.

How multilingual information is handled in systems, for example in indexing and user interfaces, is outside of the scope of this Application Profile.

## 14.General usage guidelines

[Permalink for Section 14.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#UsageGuidelines)

_This section is non-normative._

### 14.1Usage guide on Datasets, Distributions and Data Services

[Permalink for Section 14.1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#usage-guide-on-datasets-distributions-and-data-services)

The introduction of Data Services as first class citizens in DCAT 2.0 raised questions about the usage of Data Services and Distributions. This section provides a guideline for publishers what to consider as a Distribution and what as a Data Service.

A first distinction between distributions and data services is their dependency on a dataset for their existence. A distribution cannot exist without its dataset. It is a specific representation of a dataset (cfr definition W3C [Distribution](https://w3c.github.io/dxwg/dcat/#Class:Distribution)). Whereas a data service is an entity in its own right. It provides access to datasets or it provides data processing functions. The independence also holds between the distributions of a dataset, and the data service which provides access to that dataset. The distributions are not required to be the result of the data service operations. However, they may.

Many of the properties of distributions are file oriented (downloadURL, format, byte size, checksum, modification date, ...). The relevance of this information is reduced for data services, related information is present in a very different form and thus under different terminology. For instance, data services do and can provide format transformations, language transformations and schema transformations on request. Also the handling of trust is different. While tampering of downloadable content is detected by e.g. checksums, data services create often a trusted channel using security measures such as authentication and encryption. This reduces the need for additional trust checks on the data.

The difference between downloading a file or accessing the data through a service have resulted in the following guidelines:

- Datasets are the conceptual entity denoting a collection of data.
- Distributions are specific representations of a dataset, described with the intend to facilitate the delivery of the data as file to a reuser. The access URL (preferably download URL) will provide a simple way to obtain (download) the content of the dataset in the representation specified by the distribution. The obtained (downloaded) content is fully determined by the publisher of the distribution. Only after obtaining the data the (re)user can change the data according to its needs.
- Anything that has not the intend to provide a downloadable representation of a dataset is a data service. Data services offer smarter, more interactive ways to the data.

Orthogonal to the nature clarification of distributions and data services, there might be need for a granularity clarification between datasets and distributions. Commonly, at first sight, it is expected that all distributions of a dataset are identical in content, only differing in the representation of the data. But when considering dataset series, this interpretation seems not valid anymore. In the upcoming release of DCAT 3.0, dataset series and dataset versioning are addressed. Implementors are advised to already take this proposal into account when creating guidelines for distributions. Note that this is less an issue between datasets and data services as both are independent entities. Data services usually address the granularity by providing the necessary query interface language so that the user can get the data according its needs.

These guidelines will be able to capture many access patterns, corresponding to most users' expectations. However there might be cases that are more vague. In that case the DCAT(-AP) community can be questioned for a recommended approach.

### 14.2Usage guide on Dataset Series

[Permalink for Section 14.2](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#usage-guide-on-dataset-series)

Dataset Series can be considered as message from the publisher that the data of a dataset evolves according to one or more dimensions and that this evolution is available via a collection of independent, yet closely related, datasets.

The need for sharing this grouping explicitly is strongly use case dependent, and therefore as this will require additional metadata management effort by the publisher, the use of Dataset Series is optional.
It should fit the objectives.
For instance, if a publisher is sharing an active updated dataset accessible via an API, that provides current as historic data, then it is not mandatory to created metadata records for each snapshot per year. Only if these snapshots are created intentionally and the publisher wants to share the life cycle of them with the public, then Dataset Series come into the picture.

In order to harmonise the use of Dataset Series, the following guidelines are to be considered:

- To introduce a Dataset Series only if the publisher has the intend to manage a collection of datasets. Dataset Series with a single dataset in the collection should be avoided.

- Dataset Series without a dataset in the collection should be avoided. In that case, publishers should ensure that the metadata, in particular, the life cycle metadata is up to date.
  For instance, if dataset get retracted and as consequence the collection becomes empty, then publishers should consider to retract also the Dataset Series.
  In case, publishers use persistent identifiers, then this should be reflected in the status of the Dataset Series.

- A Dataset Series is an conceptual dataset without distributions.
  When interpreting a Dataset Series as a Dataset, then it is expected that the directly associated Distributions contain the data that is the union of all Datasets in the collection.
  But the presence of these Distributions raise semantical conflicts such as whether the property of the Dataset Series `frequency` refers to the update frequency of the associated Distributions or the update frequency of the collection. To avoid these semantical conflicts, it is recommended not to associate distributions with a Dataset Series.

- The members of a Dataset Series should be described in such a way that without the knowledge of the Dataset Series, the metadata is interpreted correctly. The existence of a dataset should not be based on the membership in a Dataset Series. The interpretation of a member with its associated Distributions and Data Services is conform the above guidelines.

- Whenever a Data Service is providing access to all the data of a Dataset Series, i.e. the union of all datasets in the collection of the Dataset Series,
  then the Data Service may refer to the Dataset Series using [serves dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#DataService.servesdataset).
  The ensures that whenever in the future the Dataset Series is extended with new Datasets the Data Service description does not need to be adapted.
  In that case the Dataset Series should also be considered as a DCAT-AP Dataset.

- Keep the usage simple. Complex nesting such as Dataset Series being a member of Dataset Series, or Dataset belonging to multiple Dataset Series are to be handled with care.
  While from a data knowlegde graph these nestings are feasible and not so problematic, it must be realised that these complicate the presentation on a webpage.
  Since data portal representations are the main communication from metadata owners to potential data consumers and there is no clear expectations
  on how to present the members of a Dataset Series in a UI (e.g. because orderning is not imposed), DCAT-AP users may not expect from other portals which harvest and process their Dataset Series, that these are more than a collection of Datasets.
  Any interpretation, such as the collection is ordered, or grouped according to time or any wellknown dimension, is a specific expectation beyond the agreemenents made in DCAT-AP.

- Conceptually, a Dataset Series is a special kind of Dataset. It is recommended to apply the same metadata quality of Datasets to Dataset Series (see [A. Quick Reference of Classes and Properties](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#quick-reference) ). The dedicated usage guidelines for Dataset Series and the Dataset members of a Dataset Series take priority over the generic DCAT-AP Dataset guidelines.


In general it is expected that the members of Dataset Series are strongly connected.
However, there are no common criteria or rules how this connection could be determined.
Usually, the shared characteristics are expressed as a data domain, e.g. the population of bees, and some evolution in space and time, e.g. in Greece for the period of 2019-2023, and published by a single publisher.
Nevertheless, other characteristics could give raise to the creation of a Dataset Series.

The DCAT-AP working group has investigated to find and express unique characteristics of Datasets that are members of a Dataset Series.
Over time, during the exchanges it became clear that today no consensus exists on restricting the use of Dataset Series to a more limited use.
Therefore the DCAT-AP working group has decided to retract the notion of a Dataset Member of a Dataset Series (a subclass of DCAT-AP Datasets).
Profile builders may reintroduce this notion when they want to express specific constraints for that usage scope.

In case the connection is very strong or the result of an automated process, versioning terminology is a natural way to express the connection between the Datasets in the Dataset Series collection.
For guidelines on expressing versioning information in DCAT-AP, consult the [DCAT guidelines on versioning](https://w3c.github.io/dxwg/dcat/#version-history).
As versioning is not always the most appropriate terminology, DCAT introduces properties [(e.g. next, previous, inSeries, last, etc.)](https://w3c.github.io/dxwg/dcat/#ex-dataset-series-containment) to interconnect the Dataset Series with its members and among the members themselves.
It is recommended to use always these properties in combination with Dataset Series, and versioning when appropriate.

The membership in a Dataset Series may influence the (descriptive) metadata to highlight differences from other Datasets in the collection.
For instance, a usual adaption is the addition of the release data in the title.

## 15.High Value Datasets

[Permalink for Section 15.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#high-value-datasets)

_This section is non-normative._

In light of the growing importance of data, the European Commission has adopted an implementing regulation focused on high-value datasets on 21 December 2022 \[[HVD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-hvd "Implementing Regulation for High Value Datasets")\].
The ambition of the High-Value Datasets implementing regulation (HVD IR) is to improve the quality, the accessibility and use of a selective number of core datasets within the public sector.
To achieve this the HVD IR sets, among others, requirements on the metadata associated with the disclosed datasets.
These requirements can be expressed as additional constraints and usage notes on DCAT-AP and are collected in an annex dedicated to the implementation of the HVD IR \[[DCAT-AP-HVD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-dcat-ap-hvd "Usage Guidelines of DCAT-AP for High-Value Datasets")\].

## 16.Support for implementation

[Permalink for Section 16.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#support-for-implementation)

_This section is non-normative._



Implementing the DCAT-AP data specification in a data exchange between two systems raises also technical questions.

### 16.1JSON-LD context file

[Permalink for Section 16.1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#json-ld-context-file)

One common technical question is the format in which the data is being exchanged.
For DCAT-AP conformance, it is not mandatory that this happens in a RDF serialisation, but the exchanged format _SHOULD_ be unambiguously be transformable into RDF.
For the format JSON, a popular format to exchange data between systems, DCAT-AP provides a [JSON-LD context file](https://semiceu.github.io/DCAT-AP/releases/3.0.0/context/dcat-ap.jsonld).
JSON-LD is a W3C Recommendation [JSON-LD 1.1](https://www.w3.org/TR/json-ld11/) that provided a standard approach to interpret JSON structures as RDF.
The provided JSON-LD context file can be used by implementers to base their data exchange upon, and so create a DCAT-AP conformant data exchange.
This JSON-LD context is not normative, i.e. other JSON-LD contexts are allowed to create a a conformant DCAT-AP data exchange.

The JSON-LD context file downloadable [here](https://semiceu.github.io/DCAT-AP/releases/3.0.0/context/dcat-ap.jsonld).

### 16.2Identifiers

[Permalink for Section 16.2](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#identifiers)

For implementers, the requirement to being able to exchange data as RDF impacts the design of the exchange format and the data management.
One aspect, the use of identifiers, needs special attention as it influences the interpretation by others.
DCAT-AP is used mostly in a harvesting network: where one catalogue harvests from other.
By this process, the DCAT-AP metadata descriptions spread through the harvesting network.
In contrast to "classical" data exchange patterns where by default identifiers are locally scoped to the exchange context, the RDF format implicitly assumes global, public accessible identifiers (URIs).
Harvesting enforces the latter.
More on this identifier challenge and possible solution approaches are documented in the [the guidelines on identifier management in DCAT-AP](https://github.com/SEMICeu/DCAT-AP/blob/2.x.y-draft/releases/2.x.y/usageguide-identifiers.md).

### 16.3Validation

[Permalink for Section 16.3](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#validation)

To verify if the data exchange is (technically) conformant to DCAT-AP, the exchanged data can be validated using the provided SHACL shapes.
SHACL is a W3C Recommendation to express constraints on a RDF knowledge graph.
The provided SHACL shapes allow to check whether an DCAT-AP catalogue expressed in a RDF serialization is valid.
As it should be possible for DCAT-AP conformance to transform the data exchange in RDF, these SHACL shapes can be used in any data exchange context.
However, likewise the use of the JSON-LD context, the provided SHACL shapes provide only a start point for implementers.

The shapes that can be derived from the DCAT-AP specification have the following usage limitations.
Shapes may check situations that never occur in the implemented data exchange and result in messages that confuse publishers, or they are too general and more detailed checks should be implemented.
For example, the nature of a licence is recommended by DCAT-AP, but most DCAT-AP exchanges assume that based on the URI of the licence this information is known.
Thus the check that a licence should have a licence type is considered often not relevant for the individual publishers.
However they might support catalogue maintainers to guide individual publishers to use well-documented licence URIs.
The case that a title cannot be an empty string and must have a value in a specific language are examples of more detailed constraints that are not present in the provided DCAT-AP SHACL shapes.

More on the validation and the provided SHACL shapes can be found in section [17\. Validation of DCAT-AP](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#validation-of-dcat-ap).

## 17.Validation of DCAT-AP

[Permalink for Section 17.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#validation-of-dcat-ap)

_This section is non-normative._

To support the check whether or not a catalogue satisfies the expressed constraints in this Application Profile, the constraints in this specification are expressed using SHACL \[[shacl](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-shacl "Shapes Constraint Language (SHACL)")\].
Each constraint in this specification that could be converted into a SHACL expression has been included.
As such this collection of SHACL expressions that can be used to build a validation check for a data exchange between two systems.
A typical use case is the harvesting of one catalogue into another.

It is up to the implementers of the data exchange to define the validation they expect.
Each data exchange happens within a context, and that context is beyond the SHACL expressions here.

For instance, it might be known that the exchanged data does not contain the details of the organisations, as they are all uniquely identified by a deferenceable URI.
In such case, the rules regarding the check of the mandatory existence of a name for each organisation is probably not relevant.
A strict execution of the DCAT-AP SHACL expressions will raise errors, although the data is available through a different channel.
In this example, it is valid to not include this check in this validation step.

The example illustrates that in order to get the right user experience of a validation process, one has to consider what is actually transferred between the systems.
And use the constraints that are in scope of the data exchange.
To assist this process the SHACL expressions are grouped in distinct files, matching already typical validation setups.

- [shapes.ttl](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/shacl/shapes.ttl): constraints concerning existence, domain and literal range, and cardinalities.
- [range.ttl](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/shacl/range.ttl): constraints concerning object range.
- [mdr-vocabularies.shape.ttl](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/shacl/mdr-vocabularies.shape.ttl): constraints concerning the usage of controlled vocabularies.

The first file provides for each class mentioned in DCAT-AP, and having additional properties defined, a template with the corresponding constraints.
Class membership constraints are not present in the first file.
These are collected in the second file.

- [shapes\_recommended.ttl](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/shacl/shapes_recommended.ttl): constraints concerning existence of recommended properties.

In order to validate a catalogue additional data might be required to import into the validator, such as the controlled vocabularies. These have to be retrieved from the appropriate places. As support, the following files express the imports (not transitive) according to the SHACL specification, which can be loaded into the Interoperable Europe Testbed.

- [imports.ttl](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/shacl/imports.ttl): imports the vocabulary knowledge.
- [mdr\_imports.ttl](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/shacl/mdr_imports.ttl): imports the recommended codelists.

The shacl files are configured in this instance of the Interoperable Europe testbed: [https://www.itb.ec.europa.eu/shacl/dcat-ap/upload](https://www.itb.ec.europa.eu/shacl/dcat-ap/upload). More information about the configured validation profiles is [https://github.com/ISAITB/validator-resources-dcat-ap](https://github.com/ISAITB/validator-resources-dcat-ap).

In addition to these SHACL shapes extending the approach from DCAT-AP 2.x, the constraints are also provided in a new design where each constraint has got a unique identifier.
This new shape is addressing the request for having a design in which DCAT-AP implementers could cherry pick the constraints they want.
The shape is downloadable [here](https://semiceu.github.io/DCAT-AP/releases/3.0.0/shacl/dcat-ap-SHACL.ttl).

## 18.Example Dataset Series

[Permalink for Section 18.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-dataset-series)

_This section is non-normative._

This section describes the use of Dataset Series via examples.
All examples are fictitious and are created to facilitate the understanding of Dataset Series.
This section complements the usage explained in section [Dataset series](https://w3c.github.io/dxwg/dcat/#dataset-series) in DCAT 3 \[[vocab-dcat-3](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-vocab-dcat-3 "Data Catalog Vocabulary (DCAT) - Version 3")\], because it
illustrates the decision making process when switching from publishing a single Dataset to a Dataset Series.

Consider the dataset 'Bee population in Greece" published by the Greek Environment Agency.
Users can download the data as a CSV or an RDF file.

Example 1 - Bee population dataset

- [Turtle](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-tabs-1)
- [JSON-LD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-tabs-2)

```hljs
xxxxxxxxxx
```

1

```hljs
@prefix dcat: <http://www.w3.org/ns/dcat#> .
```

2

```hljs
@prefix dct: <http://purl.org/dc/terms/> .
```

3

```hljs
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
```

4

```hljs
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
```

5

```hljs
​
```

6

```hljs
example-ds:BeePopulation a dcat:Dataset;
```

7

```hljs
  dct:title "Bee population"@en;
```

8

```hljs
  dct:description "A dataset about bee population in Greece"@en;
```

9

```hljs
  dct:publisher <https://agencies.gov.gr/id/GreekEnvironmentAgency> .
```

10

```hljs
​
```

CopyOpen in ConverterValidate

1

```hljs
{
```

1

```hljs
​
```

CopyOpen in PlaygroundOpen in ConverterValidate

To see the evolution in the bee population, the Greek Environment Agency publishes an update each year.
This update can be reflected in the DCAT-AP description in various ways.

The first option is to update and renew the metadata each update.
For instance, the temporal coverage changes from the period "2020 - 2022" to "2020 - 2023".

This solution has as benefit that new information is shared with a minimal effort of publisher.
However, this approach removes the previous state of affairs from the metadata and also does not reflect the aggregation and publishing effort for the dataset in the metadata.
In some cases this is a desired outcome.

The alternative option is the creation of a new dataset description.
Often this choice is a voluntary decision, however it might be enforced by legislation.
Legislation can impose to share an audited dataset reflecting the state of affairs on a reference date.

The creation of new dataset also impacts the metadata, as the generic title "Bee population" cannot be maintained for both.
A publisher must perform a minimal disambiguation effort to make the two datasets distinct.

Example 2 - Bee population datasets for 2022 and 2023

- [Turtle](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-2022-2023-tabs-1)
- [JSON-LD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-2022-2023-tabs-2)

```hljs
xxxxxxxxxx
```

1

```hljs
@prefix dcat: <http://www.w3.org/ns/dcat#> .
```

2

```hljs
@prefix dct: <http://purl.org/dc/terms/> .
```

3

```hljs
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
```

4

```hljs
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
```

5

```hljs
​
```

6

```hljs
example-ds:BeePopulation2022 a dcat:Dataset;
```

7

```hljs
  dct:title "Bee population 2022"@en;
```

8

```hljs
  dct:description "A dataset about bee population in Greece in 2022"@en;
```

9

```hljs
  dct:publisher <https://agencies.gov.gr/id/GreekEnvironmentAgency> .
```

10

```hljs
​
```

11

```hljs
example-ds:BeePopulation2023 a dcat:Dataset;
```

12

```hljs
  dct:title "Bee population 2023"@en;
```

13

```hljs
  dct:description "A dataset about bee population in Greece in 2023"@en;
```

14

```hljs
  dct:publisher <https://agencies.gov.gr/id/GreekEnvironmentAgency> .
```

15

```hljs
​
```

CopyOpen in ConverterValidate

1

```hljs
{
```

1

```hljs
​
```

CopyOpen in PlaygroundOpen in ConverterValidate

Independent of the metadata descriptions, a core decision to take is whether the dataset `BeePopulation2022` is also contained in the dataset `BeePopulation2023`.
Either case is valuable and seen in practice.

However, without expressing any relationships between the datasets this approach has a major drawback: a search on the catalogue for bee population will result in several variants of the same dataset.
The catalogue user is not provided with any guidance to select the most recent or most appropriate one.
To address that use case, Dataset Series come into the picture.
Dataset Series offer a structured approach to order or organise the datasets by the publisher for the catalogue user.

To support the data portal users, the Greek Environment Agency starts managing a Dataset Series `BeePopulation`.

Example 3 - Bee population datasets series

- [Turtle](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-tabs-1)
- [JSON-LD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-tabs-2)

```hljs
xxxxxxxxxx
```

1

```hljs
@prefix dcat: <http://www.w3.org/ns/dcat#> .
```

2

```hljs
@prefix dct: <http://purl.org/dc/terms/> .
```

3

```hljs
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
```

4

```hljs
@prefix example-ser: <https://data.gov.gr/id/datasetseries/> .
```

5

```hljs
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
```

6

```hljs
​
```

7

```hljs
example-ds:BeePopulation2022 a dcat:Dataset;
```

8

```hljs
  dcat:inSeries example-ser:BeePopulation .
```

9

```hljs
​
```

10

```hljs
example-ds:BeePopulation2023 a dcat:Dataset;
```

11

```hljs
  dcat:inSeries example-ser:BeePopulation .
```

12

```hljs
​
```

13

```hljs
example-ser:BeePopulation a dcat:DatasetSeries;
```

14

```hljs
  dct:title "Bee population"@en .
```

15

```hljs
​
```

CopyOpen in ConverterValidate

1

```hljs
{
```

1

```hljs
​
```

CopyOpen in PlaygroundOpen in ConverterValidate

As the dataset `BeePopulation2023` is more recent than `BeePopulation2022`, a navigation ordering is added.

Example 4 - Bee population datasets series ordered

- [Turtle](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-ordered-tabs-1)
- [JSON-LD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-ordered-tabs-2)

```hljs
xxxxxxxxxx
```

1

```hljs
@prefix dcat: <http://www.w3.org/ns/dcat#> .
```

2

```hljs
@prefix dct: <http://purl.org/dc/terms/> .
```

3

```hljs
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
```

4

```hljs
@prefix example-ser: <https://data.gov.gr/id/datasetseries/> .
```

5

```hljs
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
```

6

```hljs
​
```

7

```hljs
example-ds:BeePopulation2022 a dcat:Dataset;
```

8

```hljs
  dcat:inSeries example-ser:BeePopulation .
```

9

```hljs
​
```

10

```hljs
example-ds:BeePopulation2023 a dcat:Dataset;
```

11

```hljs
  dcat:inSeries example-ser:BeePopulation;
```

12

```hljs
  dcat:prev example-ds:BeePopulation2022 .
```

13

```hljs
​
```

14

```hljs
example-ser:BeePopulation a dcat:DatasetSeries;
```

15

```hljs
  dct:title "Bee population"@en;
```

16

```hljs
  dcat:last example-ds:BeePopulation2023 .
```

17

```hljs
​
```

CopyOpen in ConverterValidate

1

```hljs
{
```

1

```hljs
​
```

CopyOpen in PlaygroundOpen in ConverterValidate

In most cases, the navigation is a single chain sequence, although tree organised structures are not prohibited.

Similarly as the introduction of a new dataset description, the introduction of a Dataset Series impacts the metadata of the involved datasets.

For instance the notion of the update frequency becomes more precise.
In case of a single dataset description, the statement, in the example below, means that the dataset is updated each year.

Example 5 - Bee population dataset frequency

- [Turtle](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-frequency-tabs-1)
- [JSON-LD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-frequency-tabs-2)

```hljs
xxxxxxxxxx
```

1

```hljs
@prefix dcat: <http://www.w3.org/ns/dcat#> .
```

2

```hljs
@prefix dct: <http://purl.org/dc/terms/> .
```

3

```hljs
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
```

4

```hljs
@prefix nal-frequency: <http://publications.europa.eu/resource/authority/frequency/> .
```

5

```hljs
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
```

6

```hljs
​
```

7

```hljs
example-ds:BeePopulation a dcat:Dataset;
```

8

```hljs
  dct:accrualPeriodicity nal-frequency:ANNUAL .
```

9

```hljs
​
```

CopyOpen in ConverterValidate

1

```hljs
{
```

1

```hljs
​
```

CopyOpen in PlaygroundOpen in ConverterValidate

So each year the actual data to which this dataset provides access to changes, and the most recent information can be found via this metadata.

However; when the publisher will introduce a new dataset description each year, the update frequency of an existing dataset is none. Namely it will not be updated.
Without a Dataset Series notion the information of the yearly update is lost.

Example 6 - Bee population dataset series frequency

- [Turtle](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-frequency-tabs-1)
- [JSON-LD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-frequency-tabs-2)

```hljs
xxxxxxxxxx
```

1

```hljs
@prefix dcat: <http://www.w3.org/ns/dcat#> .
```

2

```hljs
@prefix dct: <http://purl.org/dc/terms/> .
```

3

```hljs
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
```

4

```hljs
@prefix example-ser: <https://data.gov.gr/id/datasetseries/> .
```

5

```hljs
@prefix nal-frequency: <http://publications.europa.eu/resource/authority/frequency/> .
```

6

```hljs
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
```

7

```hljs
​
```

8

```hljs
example-ds:BeePopulation2022 a dcat:Dataset;
```

9

```hljs
  dct:accrualPeriodicity nal-frequency:NEVER;
```

10

```hljs
  dcat:inSeries example-ser:BeePopulation .
```

11

```hljs
​
```

12

```hljs
example-ds:BeePopulation2023 a dcat:Dataset;
```

13

```hljs
  dct:accrualPeriodicity nal-frequency:NEVER;
```

14

```hljs
  dcat:inSeries example-ser:BeePopulation;
```

15

```hljs
  dcat:prev example-ds:BeePopulation2022 .
```

16

```hljs
​
```

17

```hljs
example-ser:BeePopulation a dcat:DatasetSeries;
```

18

```hljs
  dct:title "Bee population"@en;
```

19

```hljs
  dct:accrualPeriodicity nal-frequency:ANNUAL;
```

20

```hljs
  dcat:last example-ds:BeePopulation2023 .
```

21

```hljs
​
```

CopyOpen in ConverterValidate

1

```hljs
{
```

1

```hljs
​
```

CopyOpen in PlaygroundOpen in ConverterValidate

Users expect that metadata of Dataset Series is coherent with the collection of datasets it refers to.
Up to 2022, the Greek Environment Agency only had the ability to provide the information for the region of Thessaloniki, and shared that via the spatial coverage.

Example 7 - Bee population dataset series about Thessaloniki

- [Turtle](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-spatial-thessaloniki-tabs-1)
- [JSON-LD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-spatial-thessaloniki-tabs-2)

```hljs
xxxxxxxxxx
```

1

```hljs
@prefix dcat: <http://www.w3.org/ns/dcat#> .
```

2

```hljs
@prefix dct: <http://purl.org/dc/terms/> .
```

3

```hljs
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
```

4

```hljs
@prefix example-ser: <https://data.gov.gr/id/datasetseries/> .
```

5

```hljs
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
```

6

```hljs
​
```

7

```hljs
example-ds:BeePopulation2022 a dcat:Dataset;
```

8

```hljs
  dct:title "Bee population 2022 in the region of Thessaloniki"@en;
```

9

```hljs
  dct:spatial <https://sws.geonames.org/734077>;
```

10

```hljs
  dcat:inSeries example-ser:BeePopulation .
```

11

```hljs
​
```

12

```hljs
example-ser:BeePopulation a dcat:DatasetSeries;
```

13

```hljs
  dct:title "Bee population"@en;
```

14

```hljs
  dct:spatial <https://www.geonames.org/734077>;
```

15

```hljs
  dcat:last example-ds:BeePopulation2023 .
```

16

```hljs
​
```

CopyOpen in ConverterValidate

1

```hljs
{
```

1

```hljs
​
```

CopyOpen in PlaygroundOpen in ConverterValidate

From 2023 onwards, data for the region of Athens is also provided. As a consequence, not only the spatial coverage of the new dataset `BeePopulation2023` will reflect that, but also the one of the Dataset Series.
Namely the geographical coverage of a dataset series will cover the union of all places of each dataset associated with the Dataset Series.

Example 8 - Bee population dataset series about Thessaloniki and Athens

- [Turtle](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-spatial-thessaloniki-athens-tabs-1)
- [JSON-LD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-spatial-thessaloniki-athens-tabs-2)

```hljs
xxxxxxxxxx
```

1

```hljs
@prefix dcat: <http://www.w3.org/ns/dcat#> .
```

2

```hljs
@prefix dct: <http://purl.org/dc/terms/> .
```

3

```hljs
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
```

4

```hljs
@prefix example-ser: <https://data.gov.gr/id/datasetseries/> .
```

5

```hljs
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
```

6

```hljs
​
```

7

```hljs
example-ds:BeePopulation2022 a dcat:Dataset;
```

8

```hljs
  dct:title "Bee population 2022 in the region of Thessaloniki"@en;
```

9

```hljs
  dct:spatial <https://sws.geonames.org/734077>;
```

10

```hljs
  dcat:inSeries example-ser:BeePopulation .
```

11

```hljs
​
```

12

```hljs
example-ds:BeePopulation2023 a dcat:Dataset;
```

13

```hljs
  dct:title "Bee population 2023 in the region of Thessaloniki and Athens"@en;
```

14

```hljs
  dct:spatial <https://sws.geonames.org/734077>,
```

15

```hljs
    <https://sws.geonames.org/264371>;
```

16

```hljs
  dcat:inSeries example-ser:BeePopulation;
```

17

```hljs
  dcat:prev example-ds:BeePopulation2022 .
```

18

```hljs
​
```

19

```hljs
example-ser:BeePopulation a dcat:DatasetSeries;
```

20

```hljs
  dct:title "Bee population"@en;
```

21

```hljs
  dct:spatial <https://sws.geonames.org/734077>,
```

22

```hljs
    <https://sws.geonames.org/264371>;
```

23

```hljs
  dcat:last example-ds:BeePopulation2023 .
```

24

```hljs
​
```

CopyOpen in ConverterValidate

1

```hljs
{
```

1

```hljs
​
```

CopyOpen in PlaygroundOpen in ConverterValidate

A similar coherency concern applies to the temporal coverage of datasets.
Publisher are advised to verify the properties title and description to match any reference to temporal and geographical coverage information with the properties.

The metadata descriptions of a Dataset Series provide insight in how this collection of datasets evolves.
The release date of the Dataset Series `BeePopulation` correspond to the moment the collection has been issued for the first time.
In many cases this moment corresponds to the earliest release date of the dataset in the collection.
In the example, the Dataset `BeePopulation2022` was first issued on `2022-04-01` while shortly after, the Dataset Series was created.

Example 9 - Bee population dataset series issuing

- [Turtle](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-issued-tabs-1)
- [JSON-LD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-issued-tabs-2)

```hljs
xxxxxxxxxx
```

1

```hljs
@prefix dcat: <http://www.w3.org/ns/dcat#> .
```

2

```hljs
@prefix dct: <http://purl.org/dc/terms/> .
```

3

```hljs
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
```

4

```hljs
@prefix example-ser: <https://data.gov.gr/id/datasetseries/> .
```

5

```hljs
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
```

6

```hljs
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
```

7

```hljs
​
```

8

```hljs
​
```

9

```hljs
example-ds:BeePopulation2022 a dcat:Dataset;
```

10

```hljs
  dct:title "Bee population 2022 in the region of Thessaloniki"@en;
```

11

```hljs
  dct:issued "2022-03-01"^^xsd:date;
```

12

```hljs
  dct:spatial <https://sws.geonames.org/734077>;
```

13

```hljs
  dcat:inSeries example-ser:BeePopulation;
```

14

```hljs
  dcat:prev example-ds:BeePopulation2000 .
```

15

```hljs
​
```

16

```hljs
example-ds:BeePopulation2023 a dcat:Dataset;
```

17

```hljs
  dct:title "Bee population 2023 in the region of Thessaloniki and Athens"@en;
```

18

```hljs
  dct:issued "2023-03-21"^^xsd:date;
```

19

```hljs
  dct:spatial <https://sws.geonames.org/734077>,
```

20

```hljs
    <https://sws.geonames.org/264371>;
```

21

```hljs
  dcat:inSeries example-ser:BeePopulation;
```

22

```hljs
  dcat:prev example-ds:BeePopulation2022 .
```

23

```hljs
​
```

24

```hljs
example-ser:BeePopulation a dcat:DatasetSeries;
```

25

```hljs
  dct:title "Bee population"@en;
```

26

```hljs
  dct:issued "2022-04-01"^^xsd:date;
```

27

```hljs
  dct:spatial <https://sws.geonames.org/734077>,
```

28

```hljs
    <https://sws.geonames.org/264371>;
```

29

```hljs
  dcat:last example-ds:BeePopulation2023 .
```

30

```hljs
​
```

CopyOpen in ConverterValidate

1

```hljs
{
```

1

```hljs
​
```

CopyOpen in PlaygroundOpen in ConverterValidate

This relationship between the issuing date and the oldest dataset in the collection can reduce over time.
The Greek Environment Agency and the National History Archives start to collaborate on the use and production of honey.
That project results in new datasets on bee populations predating 2022.
To make that information visible, the Dataset Series collection is updated with these historic datasets.

Example 10 - Bee population dataset series with National History Archive

- [Turtle](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-gea-nha-tabs-1)
- [JSON-LD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-gea-nha-tabs-2)

```hljs
xxxxxxxxxx
```

1

```hljs
@prefix dcat: <http://www.w3.org/ns/dcat#> .
```

2

```hljs
@prefix dct: <http://purl.org/dc/terms/> .
```

3

```hljs
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
```

4

```hljs
@prefix example-ser: <https://data.gov.gr/id/datasetseries/> .
```

5

```hljs
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
```

6

```hljs
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
```

7

```hljs
​
```

8

```hljs
​
```

9

```hljs
example-ds:BeePopulation2000 a dcat:Dataset;
```

10

```hljs
  dct:title "Bee population 2000 in Greece"@en;
```

11

```hljs
  dct:issued "2023-06-01"^^xsd:date;
```

12

```hljs
  dct:spatial <https://www.geonames.org/390903>;
```

13

```hljs
  dcat:inSeries example-ser:BeePopulation .
```

14

```hljs
​
```

15

```hljs
example-ds:BeePopulation2022 a dcat:Dataset;
```

16

```hljs
  dct:title "Bee population 2022 in the region of Thessaloniki"@en;
```

17

```hljs
  dct:issued "2022-03-01"^^xsd:date;
```

18

```hljs
  dct:spatial <https://sws.geonames.org/734077>;
```

19

```hljs
  dcat:inSeries example-ser:BeePopulation;
```

20

```hljs
  dcat:prev example-ds:BeePopulation2000 .
```

21

```hljs
​
```

22

```hljs
example-ds:BeePopulation2023 a dcat:Dataset;
```

23

```hljs
  dct:title "Bee population 2023 in the region of Thessaloniki and Athens"@en;
```

24

```hljs
  dct:issued "2023-03-21"^^xsd:date;
```

25

```hljs
  dct:spatial <https://sws.geonames.org/734077>,
```

26

```hljs
    <https://sws.geonames.org/264371>;
```

27

```hljs
  dcat:inSeries example-ser:BeePopulation;
```

28

```hljs
  dcat:prev example-ds:BeePopulation2022 .
```

29

```hljs
​
```

30

```hljs
example-ser:BeePopulation a dcat:DatasetSeries;
```

31

```hljs
  dct:title "Bee population"@en;
```

32

```hljs
  dct:issued "2022-04-01"^^xsd:date;
```

33

```hljs
  dct:spatial <https://www.geonames.org/390903>;
```

34

```hljs
  dcat:last example-ds:BeePopulation2023 .
```

35

```hljs
​
```

CopyOpen in ConverterValidate

1

```hljs
{
```

1

```hljs
​
```

CopyOpen in PlaygroundOpen in ConverterValidate

The modification date of the Dataset Series is the moment the collection has changed.
The addition of the historic datasets changes the collection, and thus the modification date of the Dataset Series is set to `2023-06-01`.

Example 11 - Bee population dataset series with modification date

- [Turtle](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-modified-tabs-1)
- [JSON-LD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-modified-tabs-2)

```hljs
xxxxxxxxxx
```

1

```hljs
@prefix dcat: <http://www.w3.org/ns/dcat#> .
```

2

```hljs
@prefix dct: <http://purl.org/dc/terms/> .
```

3

```hljs
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
```

4

```hljs
@prefix example-ser: <https://data.gov.gr/id/datasetseries/> .
```

5

```hljs
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
```

6

```hljs
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
```

7

```hljs
​
```

8

```hljs
example-ds:BeePopulation2000 a dcat:Dataset;
```

9

```hljs
  dct:title "Bee population 2000 in Greece"@en;
```

10

```hljs
  dct:issued "2023-06-01"^^xsd:date;
```

11

```hljs
  dct:modified "2023-06-01"^^xsd:date;
```

12

```hljs
  dct:spatial <https://www.geonames.org/390903>;
```

13

```hljs
  dcat:inSeries example-ser:BeePopulation .
```

14

```hljs
​
```

15

```hljs
example-ds:BeePopulation2022 a dcat:Dataset;
```

16

```hljs
  dct:title "Bee population 2022 in the region of Thessaloniki"@en;
```

17

```hljs
  dct:issued "2022-03-01"^^xsd:date;
```

18

```hljs
  dct:modified "2022-03-20"^^xsd:date;
```

19

```hljs
  dct:spatial <https://sws.geonames.org/734077>;
```

20

```hljs
  dcat:inSeries example-ser:BeePopulation;
```

21

```hljs
  dcat:prev example-ds:BeePopulation2000 .
```

22

```hljs
​
```

23

```hljs
example-ds:BeePopulation2023 a dcat:Dataset;
```

24

```hljs
  dct:title "Bee population 2023 in the region of Thessaloniki and Athens"@en;
```

25

```hljs
  dct:issued "2023-03-21"^^xsd:date;
```

26

```hljs
  dct:modified "2023-03-21"^^xsd:date;
```

27

```hljs
  dct:spatial <https://sws.geonames.org/734077>,
```

28

```hljs
    <https://sws.geonames.org/264371>;
```

29

```hljs
  dcat:inSeries example-ser:BeePopulation;
```

30

```hljs
  dcat:prev example-ds:BeePopulation2022 .
```

31

```hljs
​
```

32

```hljs
example-ser:BeePopulation a dcat:DatasetSeries;
```

33

```hljs
  dct:title "Bee population"@en;
```

34

```hljs
  dct:issued "2022-04-01"^^xsd:date;
```

35

```hljs
  dct:modified "2023-06-01"^^xsd:date;
```

36

```hljs
  dct:spatial <https://www.geonames.org/390903>;
```

37

```hljs
  dcat:last example-ds:BeePopulation2023 .
```

38

```hljs
​
```

CopyOpen in ConverterValidate

1

```hljs
{
```

1

```hljs
​
```

CopyOpen in PlaygroundOpen in ConverterValidate

To make the datasets easier to use, the Greek Environment Agency introduces a new API platform. Via this API platform the datasets are not only downloadable in tabular format, but also in the international Biodiversity JSON format.

Example 11 - Bee population available in new format

- [Turtle](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-api-tabs-1)
- [JSON-LD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-api-tabs-2)

```hljs
xxxxxxxxxx
```

1

```hljs
@prefix dcat: <http://www.w3.org/ns/dcat#> .
```

2

```hljs
@prefix dct: <http://purl.org/dc/terms/> .
```

3

```hljs
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
```

4

```hljs
@prefix example-ser: <https://data.gov.gr/id/datasetseries/> .
```

5

```hljs
@prefix example-dist: <https://data.gov.gr/id/distribution/> .
```

6

```hljs
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
```

7

```hljs
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
```

8

```hljs
​
```

9

```hljs
example-ds:BeePopulation2023 a dcat:Dataset;
```

10

```hljs
  dct:title "Bee population 2023 in the region of Thessaloniki and Athens"@en;
```

11

```hljs
  dct:issued "2023-03-21"^^xsd:date;
```

12

```hljs
  dct:modified "2023-03-21"^^xsd:date;
```

13

```hljs
  dct:spatial <https://sws.geonames.org/734077>,
```

14

```hljs
    <https://sws.geonames.org/264371>;
```

15

```hljs
  dcat:distribution <example-dist:BeePopulation2023/csv>,
```

16

```hljs
    <example-dist:BeePopulation2023/biojson>;
```

17

```hljs
  dcat:inSeries example-ser:BeePopulation;
```

18

```hljs
  dcat:prev example-ds:BeePopulation2022 .
```

19

```hljs
​
```

20

```hljs
example-dist:BeePopulation2023/biojson a dcat:Distribution .
```

21

```hljs
​
```

22

```hljs
example-dist:BeePopulation2023/csv a dcat:Distribution .
```

23

```hljs
​
```

CopyOpen in ConverterValidate

1

```hljs
{
```

1

```hljs
​
```

CopyOpen in PlaygroundOpen in ConverterValidate

As such the use of a new API platform has not changed the data denoted by the dataset `BeePopulation2023`, and so it is not necessary to adapt the modification date of the dataset.
Similarly adding or removing distributions to a dataset did not affected the membership of dataset `BeePopulation2023` in the Dataset Series.
And thus the modification date of the Dataset Series is not adapted.

To support the users even more, the API platform is extended with a possibility to get life counts of the bee population.
This means that there is a dataset which data is updated very frequently, eg. every second.
In that case providing a modification date for the dataset becomes a technical challenge, but also it reduces it value.
Namely one gets the data at query time.

Example 12 - Bee population dataset series API life count

- [Turtle](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-life-count-tabs-1)
- [JSON-LD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-life-count-tabs-2)

```hljs
xxxxxxxxxx
```

1

```hljs
@prefix dcat: <http://www.w3.org/ns/dcat#> .
```

2

```hljs
@prefix dct: <http://purl.org/dc/terms/> .
```

3

```hljs
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
```

4

```hljs
@prefix example-ser: <https://data.gov.gr/id/datasetseries/> .
```

5

```hljs
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
```

6

```hljs
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
```

7

```hljs
​
```

8

```hljs
​
```

9

```hljs
example-ds:BeePopulationLive a dcat:Dataset;
```

10

```hljs
  dct:title "life counts of the Bee population in Greece"@en;
```

11

```hljs
  dct:issued "2023-03-21"^^xsd:date;
```

12

```hljs
  dct:spatial <https://www.geonames.org/390903>;
```

13

```hljs
  dcat:inSeries example-ser:BeePopulation;
```

14

```hljs
  dcat:prev example-ds:BeePopulation2023 .
```

15

```hljs
​
```

16

```hljs
<example-api:EA-API-Platform> a dcat:DataService;
```

17

```hljs
  dct:title "API platform for biodiversity data"@en;
```

18

```hljs
  dct:description "This data platform offers access to data related to biodiversity collected and published by the Greek Environment Agency"@en;
```

19

```hljs
  dcat:endpointURL <https://ea.gov.gr/api/v2/biodiversity>;
```

20

```hljs
  dcat:servesDataset example-ds:BeePopulationLive .
```

21

```hljs
​
```

CopyOpen in ConverterValidate

1

```hljs
{
```

1

```hljs
​
```

CopyOpen in PlaygroundOpen in ConverterValidate

All this can be combined in one dataset series about the Bee population. Doing so, the Bee population dataset series becomes
less a structured sequence of yearly snapshots of the Bee population data, but more a collection of datasets around the same topic.
Likewise DCAT, DCAT-AP does not limit the use of dataset series to a strict interpretation. Making this approach acceptable.
Nevertheless users usually expect that the datasets of a Dataset Series are strongly related, and the notion of a series or sequence is somehow present in the collection.
Diverging too far from this interpretation is not recommended.
The alternative for dataset series for grouping datasets are catalogues.

Thus to conclude the example of maintaining a Dataset Series, the Greek Environment Agency has created a Dataset Series about the Bee population in Greece.
It contains the dataset with actual life data, the yearly snapshots for 2023 and 2022 and also the historic data of 2000 maintained by the National History Archives.

Example 13 - Bee population dataset series

- [Turtle](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-combined-tabs-1)
- [JSON-LD](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#example-bee-population-dataset-series-combined-tabs-2)

```hljs
xxxxxxxxxx
```

1

```hljs
@prefix dcat: <http://www.w3.org/ns/dcat#> .
```

2

```hljs
@prefix dct: <http://purl.org/dc/terms/> .
```

3

```hljs
@prefix example-ds: <https://data.gov.gr/id/dataset/> .
```

4

```hljs
@prefix example-ser: <https://data.gov.gr/id/datasetseries/> .
```

5

```hljs
@prefix example-dist: <https://data.gov.gr/id/distribution/> .
```

6

```hljs
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
```

7

```hljs
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
```

8

```hljs
​
```

9

```hljs
example-ds:BeePopulationLive a dcat:Dataset;
```

10

```hljs
  dct:title "life counts of the Bee population in Greece"@en;
```

11

```hljs
  dct:issued "2023-03-21"^^xsd:date;
```

12

```hljs
  dct:spatial <https://www.geonames.org/390903>;
```

13

```hljs
  dcat:inSeries example-ser:BeePopulation .
```

14

```hljs
​
```

15

```hljs
<example-api:EA-API-Platform> a dcat:DataService;
```

16

```hljs
  dct:title "API platform for biodiversity data"@en;
```

17

```hljs
  dct:description "This data platform offers access to data related to biodiversity collected and published by the Greek Environment Agency"@en;
```

18

```hljs
  dcat:endpointURL <https://ea.gov.gr/api/v2/biodiversity>;
```

19

```hljs
  dcat:servesDataset example-ds:BeePopulationLive .
```

20

```hljs
​
```

21

```hljs
example-ds:BeePopulation2023 a dcat:Dataset;
```

22

```hljs
  dct:title "Bee population 2023 in the region of Thessaloniki and Athens"@en;
```

23

```hljs
  dct:issued "2023-03-21"^^xsd:date;
```

24

```hljs
  dct:modified "2023-03-21"^^xsd:date;
```

25

```hljs
  dct:spatial <https://sws.geonames.org/734077>,
```

26

```hljs
    <https://sws.geonames.org/264371>;
```

27

```hljs
  dcat:distribution <example-dist:BeePopulation2023/csv>,
```

28

```hljs
    <example-dist:BeePopulation2023/biojson>;
```

29

```hljs
  dcat:inSeries example-ser:BeePopulation;
```

30

```hljs
  dcat:prev example-ds:BeePopulation2022 .
```

31

```hljs
​
```

32

```hljs
example-dist:BeePopulation2023/biojson a dcat:Distribution .
```

33

```hljs
​
```

34

```hljs
example-dist:BeePopulation2023/csv a dcat:Distribution .
```

35

```hljs
​
```

36

```hljs
example-ds:BeePopulation2022 a dcat:Dataset;
```

37

```hljs
  dct:title "Bee population 2022 in the region of Thessaloniki"@en;
```

38

```hljs
  dct:issued "2022-03-01"^^xsd:date;
```

39

```hljs
  dct:modified "2022-03-20"^^xsd:date;
```

40

```hljs
  dct:spatial <https://sws.geonames.org/734077>;
```

41

```hljs
  dcat:inSeries example-ser:BeePopulation;
```

42

```hljs
  dcat:prev example-ds:BeePopulation2000 .
```

43

```hljs
​
```

44

```hljs
example-ds:BeePopulation2000 a dcat:Dataset;
```

45

```hljs
  dct:title "Bee population 2000 in Greece"@en;
```

46

```hljs
  dct:issued "2023-06-01"^^xsd:date;
```

47

```hljs
  dct:modified "2023-06-01"^^xsd:date;
```

48

```hljs
  dct:spatial <https://www.geonames.org/390903>;
```

49

```hljs
  dcat:inSeries example-ser:BeePopulation .
```

50

```hljs
​
```

51

```hljs
example-ser:BeePopulation a dcat:DatasetSeries;
```

52

```hljs
  dct:title "Bee population"@en;
```

53

```hljs
  dct:issued "2022-04-01"^^xsd:date;
```

54

```hljs
  dct:modified "2023-06-01"^^xsd:date;
```

55

```hljs
  dct:spatial <https://www.geonames.org/390903>;
```

56

```hljs
  dcat:last example-ds:BeePopulation2023 .
```

57

```hljs
​
```

CopyOpen in ConverterValidate

1

```hljs
{
```

1

```hljs
​
```

CopyOpen in PlaygroundOpen in ConverterValidate

## 19.Inverse properties

[Permalink for Section 19.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#inverse-properties)

_This section is non-normative._



The W3C DCAT specification introduces for some relationships two properties which are each other's inverse.
In general, this may lead to situations that data exchanges based on different DCAT profiles require reasoning to align.

To harmonise the exchange of DCAT based data and reduce the need for inference engines,
W3C DCAT imposes [implementation guidelines](https://w3c.github.io/dxwg/dcat/#inverse-properties) expressing a preference in use.
The guidelines state which property must be used while the other, called the inverse, may be used.
In a proper DCAT profile the inverse property cannot be used to replace completely the property.

In line with these guidelines with the objective to reduce the burden of implementers DCAT-AP will follow the W3C guidelines in a more strict way.
When a property is subject to this W3C guideline then DCAT-AP will include only the use of this property and not the inverse.
Implementers are still free to use the inverse to optimise their data management.

As note to this discussion: when exchanging DCAT as an RDF graph the impact of the directionality is reduced because

- RDF statements are non-ordered and grouping according to directionality is more for human readibility than technically enforced.

- SPARQL allows to query in any direction simply by switching the subject and object variables.


## A.Quick Reference of Classes and Properties

[Permalink for Appendix A.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#quick-reference)

This section provides a condensed tabular overview of the mentioned classes and properties in this specification.
The properties are grouped under headings mandatory, recommended, optional and deprecated. These terms have the following meaning.

- Mandatory property: a receiver _MUST_ be able to process the information for that property; a sender _MUST_ provide the information for that property.
- Recommended property: a receiver _MUST_ be able to process the information for that property; a sender _SHOULD_ provide the information for that property if it is available.
- Optional property: a receiver _MUST_ be able to process the information for that property; a sender _MAY_ provide the information for that property but is not obliged to do so.
- Deprecated property: a receiver _SHOULD_ be able to process information about instances of that property; a sender _SHOULD NOT_ provide the information about instances of that property.

Show 102550100 entries

Search:

| Class | Class IRI | Property Type | Property | Property IRI |
| --- | --- | --- | --- | --- |
| [Activity](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Activity) | prov:Activity |  |  |  |
| [Agent](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent) | foaf:Agent | Mandatory | [name](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent.name) | foaf:name |
| [Agent](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent) | foaf:Agent | Recommended | [type](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Agent.type) | dct:type |
| [Attribution](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Attribution) | prov:Attribution |  |  |  |
| [Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue) | dcat:Catalog | Mandatory | [description](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.description) | dct:description |
| [Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue) | dcat:Catalog | Mandatory | [publisher](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.publisher) | dct:publisher |
| [Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue) | dcat:Catalog | Mandatory | [title](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.title) | dct:title |
| [Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue) | dcat:Catalog | Recommended | [dataset](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.dataset) | dcat:dataset |
| [Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue) | dcat:Catalog | Recommended | [geographical coverage](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.geographicalcoverage) | dct:spatial |
| [Catalogue](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue) | dcat:Catalog | Recommended | [homepage](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#Catalogue.homepage) | foaf:homepage |

Showing 1 to 10 of 151 entries

Previous12345…16Next

### A.1Deprecated properties and classes

[Permalink for Appendix A.1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#deprecated-properties-and-classes)

The following URIs used in DCAT-AP release 2.x for properties have been deprecated in DCAT-AP 3.0 \[[vocab-dcat-3](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#bib-vocab-dcat-3 "Data Catalog Vocabulary (DCAT) - Version 3")\] in favor for the URIs within the DCAT namespace.

- dct:hasVersion is replaced by dcat:hasVersion.
- dct:isVersionOf is replaced by dcat:isVersionOf.
- owl:versionInfo is replaced by dcat:version.

To identify these deprecations, a [SHACL shape](https://semiceu.github.io/DCAT-AP/releases/3.0.0/html/shacl/deprecateduris.ttl) is provided.

## B.Acknowledgments

[Permalink for Appendix B.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#acknowledgments)

The editors gratefully acknowledge the contributions made to this document by all members of the working group.

This work was elaborated by a Working Group under SEMIC by Interoperable Europe.
Interoperable Europe of the European Commission was represented by Pavlina Fragkou.
Bert Van Nuffelen, Makx Dekkers, Pavlina Fragkou, Jitse De Cock, Arthur Schiltz, Anastasia Sofou were the editors of the specification.

Past and current contributors are :




Ludger A. Rinsche
,

Kuldar Aasaga
,

Anssi Ahlberg
,

Matej Alic
,

Miguel Alvarez
,

Martin Alvarez-Espinar
,

Stefano Ambrogio
,

Oystein Asnes
,

Peter Burian
,

Luis Daniel Ibáñez
,

Ine De Visser
,

Makx Dekkers
,

Jean Delahousse
,

Ulrika Domellöf Mattsson
,

Adina Dragan
,

Dietmar Gattwinkel
,

Stijn Goedertier
,

Casper Gras
,

Bart Hanssens
,

Agnieszka Jasiczek
,

Fabian Kirstein
,

Jakub Klímek
,

Nataliia Kovalchuk
,

Andreas Kuckartz
,

Christine Laaboudi-Spoiden
,

Christoph Lange
,

Petros Likidis
,

Anja Loddenkemper
,

Giorgia Lodi
,

Hagar Lowenthal
,

Peter Lubrich
,

Lina Molinas Comet
,

Anastasija Nikiforova
,

Geraldine Nolf
,

Frederik Nordlander
,

Matthias Palmer
,

Andrea Perego
,

Taavi Ploompuu
,

Ludger Rinsche
,

Daniele Rizzi
,

Maik Roth
,

Fabian Santi
,

Giampaolo Sellitto
,

Maxime Servais
,

Sebastian Sklarß
,

Michele Spichtig
,

Emidio Stani
,

Igor Stefelin
,

Kees Trautwein
,

Thomas Tursics
,

Kristine Ulander
,

Joeri van der Velde
,

Sander Van Dooren
,

Bert Van Nuffelen
,

William Verbeeck
,

Thomas Weber
,

Suzanne Wigard
,

Christian Wittig
,

Agnieszka Zajac
,

Øystein Åsnes




.

Validation ResultClose

## C.References

[Permalink for Appendix C.](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#references)

### C.1Normative references

[Permalink for Appendix C.1](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#normative-references)

\[DEU\][The official portal for European data](https://data.europa.eu/). European Commission. URL: [https://data.europa.eu](https://data.europa.eu/)\[DOI\][Digital Object Identifier](http://www.doi.org/). DOI Foundation. URL: [http://www.doi.org/](http://www.doi.org/)\[DXWG\][Dataset Exchange Working Group](https://www.w3.org/2017/dxwg/wiki/Main_Page). W3C. URL: [https://www.w3.org/2017/dxwg/wiki/Main\_Page](https://www.w3.org/2017/dxwg/wiki/Main_Page)\[EZID\][EZID](https://ezid.cdlib.org/). California Digital Library. URL: [https://ezid.cdlib.org/](https://ezid.cdlib.org/)\[ISO8601\][Representation of dates and times. ISO 8601:2004.](http://www.iso.org/iso/catalogue_detail?csnumber=40874). International Organization for Standardization (ISO). 2004. ISO 8601:2004. URL: [http://www.iso.org/iso/catalogue\_detail?csnumber=40874](http://www.iso.org/iso/catalogue_detail?csnumber=40874)\[MASTADS\][Referencing Data Sets in Astronomical Literature](https://archive.stsci.edu/pub_dsn.html). MAST. URL: [https://archive.stsci.edu/pub\_dsn.html](https://archive.stsci.edu/pub_dsn.html)\[ODRL\][The Open Digital Rights Language Ontology Version 2.2](https://www.w3.org/ns/odrl/2/). W3C POE Working Group. URL: [https://www.w3.org/ns/odrl/2/](https://www.w3.org/ns/odrl/2/)\[PSI\][Directive on open data and the re-use of public sector information (recast)](https://eur-lex.europa.eu/eli/dir/2019/1024/oj). European Union. URL: [https://eur-lex.europa.eu/eli/dir/2019/1024/oj](https://eur-lex.europa.eu/eli/dir/2019/1024/oj)\[RFC2119\][Key words for use in RFCs to Indicate Requirement Levels](https://www.rfc-editor.org/rfc/rfc2119). S. Bradner. IETF. March 1997. Best Current Practice. URL: [https://www.rfc-editor.org/rfc/rfc2119](https://www.rfc-editor.org/rfc/rfc2119)\[rfc5646\][Tags for Identifying Languages](https://www.rfc-editor.org/rfc/rfc5646). A. Phillips, Ed.; M. Davis, Ed. IETF. September 2009. Best Current Practice. URL: [https://www.rfc-editor.org/rfc/rfc5646](https://www.rfc-editor.org/rfc/rfc5646)\[RFC8174\][Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words](https://www.rfc-editor.org/rfc/rfc8174). B. Leiba. IETF. May 2017. Best Current Practice. URL: [https://www.rfc-editor.org/rfc/rfc8174](https://www.rfc-editor.org/rfc/rfc8174)\[SEMIC\][JoinUp welcomes Interoperable Europe](https://joinup.ec.europa.eu/). European Commission. URL: [https://joinup.ec.europa.eu/](https://joinup.ec.europa.eu/)\[vocab-dcat-1\][Data Catalog Vocabulary (DCAT)](https://www.w3.org/TR/vocab-dcat-1/). Fadi Maali; John Erickson. W3C. 4 February 2020. W3C Recommendation. URL: [https://www.w3.org/TR/vocab-dcat-1/](https://www.w3.org/TR/vocab-dcat-1/)\[vocab-dcat-2\][Data Catalog Vocabulary (DCAT) - Version 2](https://www.w3.org/TR/vocab-dcat-2/). Riccardo Albertoni; David Browning; Simon Cox; Alejandra Gonzalez Beltran; Andrea Perego; Peter Winstanley. W3C. 22 August 2024. W3C Recommendation. URL: [https://www.w3.org/TR/vocab-dcat-2/](https://www.w3.org/TR/vocab-dcat-2/)\[vocab-dcat-3\][Data Catalog Vocabulary (DCAT) - Version 3](https://www.w3.org/TR/vocab-dcat-3/). Simon Cox; Andrea Perego; Alejandra Gonzalez Beltran; Peter Winstanley; Riccardo Albertoni; David Browning. W3C. 22 August 2024. W3C Recommendation. URL: [https://www.w3.org/TR/vocab-dcat-3/](https://www.w3.org/TR/vocab-dcat-3/)\[W3ID\][Permanent Identifiers for the Web](https://w3id.org/). W3C Permanent Identifier Community Group. URL: [https://w3id.org/](https://w3id.org/)

### C.2Informative references

[Permalink for Appendix C.2](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#informative-references)

\[DCAT-AP-HVD\][Usage Guidelines of DCAT-AP for High-Value Datasets](https://semiceu.github.io/uri.semic.eu-generated/DCAT-AP/releases/2.2.0-hvd/). European Commission. URL: [https://semiceu.github.io/uri.semic.eu-generated/DCAT-AP/releases/2.2.0-hvd/](https://semiceu.github.io/uri.semic.eu-generated/DCAT-AP/releases/2.2.0-hvd/)\[FAIR\][How to make your data FAIR](https://www.openaire.eu/how-to-make-your-data-fair). OpenAire. URL: [https://www.openaire.eu/how-to-make-your-data-fair](https://www.openaire.eu/how-to-make-your-data-fair)\[geodcat-ap\][GeoDCAT-AP: A geospatial extension for the DCAT application profile for data portals in Europe](https://semiceu.github.io/GeoDCAT-AP/releases/). European Commission. 23 December 2020. URL: [https://semiceu.github.io/GeoDCAT-AP/releases/](https://semiceu.github.io/GeoDCAT-AP/releases/)\[HVD\][Implementing Regulation for High Value Datasets](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0138). European Union. URL: [https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0138](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0138)\[json-ld11\][JSON-LD 1.1](https://www.w3.org/TR/json-ld11/). Gregg Kellogg; Pierre-Antoine Champin; Dave Longley. W3C. 16 July 2020. W3C Recommendation. URL: [https://www.w3.org/TR/json-ld11/](https://www.w3.org/TR/json-ld11/)\[prov-o\][PROV-O: The PROV Ontology](https://www.w3.org/TR/prov-o/). Timothy Lebo; Satya Sahoo; Deborah McGuinness. W3C. 30 April 2013. W3C Recommendation. URL: [https://www.w3.org/TR/prov-o/](https://www.w3.org/TR/prov-o/)\[rfc3986\][Uniform Resource Identifier (URI): Generic Syntax](https://www.rfc-editor.org/rfc/rfc3986). T. Berners-Lee; R. Fielding; L. Masinter. IETF. January 2005. Internet Standard. URL: [https://www.rfc-editor.org/rfc/rfc3986](https://www.rfc-editor.org/rfc/rfc3986)\[rfc6497\][BCP 47 Extension T - Transformed Content](https://www.rfc-editor.org/rfc/rfc6497). M. Davis; A. Phillips; Y. Umaoka; C. Falk. IETF. February 2012. Informational. URL: [https://www.rfc-editor.org/rfc/rfc6497](https://www.rfc-editor.org/rfc/rfc6497)\[shacl\][Shapes Constraint Language (SHACL)](https://www.w3.org/TR/shacl/). Holger Knublauch; Dimitris Kontokostas. W3C. 20 July 2017. W3C Recommendation. URL: [https://www.w3.org/TR/shacl/](https://www.w3.org/TR/shacl/)

[↑](https://semiceu.github.io/DCAT-AP/releases/3.0.0/#title)