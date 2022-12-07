

### Protocol

Type: `ProtocolDTO`

Each project can have one to many Protocols. The protocol concept introduce 2 main capabilities in impact projects management :

 - To generate several issuable assets form one project by defining different methodologies for each protocole. For exemple SDGs evaluations, Biodversity assets, etc…
 - To track serparate stakeholders activities involvement and incentivization. For exemple, différenciante access to activities for a stakeholders involved in biodiversity protocol or in carbon credits.
  
<article>

***baseScenario*** `String?` 

Description important hypothesis of the baseline senario justifying project’s additionnality for the issuable asset

</article>
<article>

***context*** `String?` 

Allow to define important information about the protocol execution.

</article>
<article>

***creationDate*** `DateTime?` 

Date of creation.

</article>
<article>

***expectedValue*** `Double?` 

Potential quantity of issuable asset

</article>
<article>

***expectedValueUnit*** `String?` 

Unit of issuable asset

</article>
<article>

***id*** [`ProtocolId`](#protocolid) 

</article>
<article>

***lastModificationDate*** `DateTime?` 

Date of last modification of the asset.

</article>
<article>

***methodology*** `String?` 

Reference to the reference methodology. A Methodology registry allows to manage validated methodologies and version used in the project.

</article>
<article>

***monitoringPeriodEnd*** `DateTime?` 

Date of the end of monitoring period

</article>
<article>

***monitoringPeriodStart*** `DateTime?` 

Date of the Start of monitoring period

</article>
<article>

***name*** `String?` 

Name of the protocol

</article>
<article>

***poaId*** `String?` 

ID of the Program Of Activity (GS compatibility)

</article>
<article>

***productType*** `String?` 

Type of issuable asset

</article>
<article>

***programOfActivities*** `String?` 

Name of the Program of Activities or Name of the project

</article>
<article>

***project*** `ProjectRef?` 

Link to the protocol’s project

</article>
<article>

***projectVVB*** `String?` 

Name of the VVB organization

</article>
<article>

***protocolType*** `String?` 

Type of protocol in the list {Emissions, Avoided Emissions, Sequestration, Renewable Energy Credits, Biodiversity Credits}

</article>
<article>

***sdg*** `List<String>?` 

Link to SDG list

</article>
<article>

***slug*** `String?` 

Unique short text to access via protocol’s url

</article>
<article>

***status*** `ProtocolState` 

</article>

