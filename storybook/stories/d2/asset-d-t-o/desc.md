

### Asset

Type: `AssetDTO`

A unit issued by and held in the SmartB Registry representing the right of an account holder in whose account the unit is recorded to claim the achievement of an impact. <br/> For CO2, it is the amount of one (1) metric tonne of CO2 equivalent that has been verified by a validation/verification body in accordance with a protocol rules. Recordation of an asset in the account of the holder at the SmartB Registry is prima facie evidence of that holder’s entitlement to that asset.

  
<article>

***activity*** `ActivityRef?` 

Link to the activity that issued the asset.

</article>
<article>

***additionalCertifications*** `String?` 

Additional certification that add value to asset

</article>
<article>

***aeroplaneOperatorName*** `String?` 

Aeroplane Operator Name

</article>
<article>

***arbEligible*** `Boolean?` 

Air Ressource Board compatibility

</article>
<article>

***creationDate*** `DateTime` 

Date of creation.

</article>
<article>

***creditsIssuedToBufferPool*** `Double?` 

The number of credits that projects and programs must contribute to the AFOLU buffer pool, which is a reserve of non-tradable credits that functions as a shared insurance pool for all VCS AFOLU and JNR projects in case of reversals.

</article>
<article>

***creditStatus*** `String?` 

Credits status : Issued, Assigned, Retired

</article>
<article>

***eligibleForCORSIA*** `Boolean?` 

Eligible for CORSIA

</article>
<article>

***exAnteUnitPrice*** `Double?` 

Unit price of the asset when issued ex-ante

</article>
<article>

***exPostUnitPrice*** `Double?` 

Unit price of the asset when retired

</article>
<article>

***id*** [`AssetId`](#assetid) 

</article>
<article>

***issuanceDate*** `DateTime?` 

Date of asset issuance

</article>
<article>

***lastModificationDate*** `DateTime` 

Date of last modification of the asset.

</article>
<article>

***project*** `ProjectRef?` 

Link to the project the asset is issued from

</article>
<article>

***protocol*** `ProtocolRef?` 

Protocol of the project the asset is issued from.

</article>
<article>

***quantityIssued*** `Double?` 

Quantity issued

</article>
<article>

***retiredForCORSIA*** `Boolean?` 

Retired for CORSIA

</article>
<article>

***retirementBeneficiary*** `UserRef?` 

Date of the permanent removal of an Asset from circulation in the SmartB Registry system which represents an offset of one metric tonne of CO2 equivalent (retirement) or for an other reason (cancellation)

</article>
<article>

***retirementDate*** `DateTime?` 

Date of the permanent removal of an Asset from circulation in the SmartB Registry system which represents an offset of one metric tonne of CO2 equivalent (retirement) or for an other reason (cancellation).

</article>
<article>

***retirementDetails*** `String?` 

Details of the retirement if any

</article>
<article>

***retirementReason*** `String?` 

Details of the retirement if any

</article>
<article>

***serialNumber*** `String?` 

Public unique serial number of the asset

</article>
<article>

***slug*** `String?` 

Link to the asset in the root registry

</article>
<article>

***status*** `AssetState` 

Status of the asset

</article>
<article>

***totalVintageQuantity*** `Double?` 

Total amont of Assets issued for the same vintage

</article>
<article>

***verifiedRemoval*** `String?` 

Description

</article>
<article>

***vintageEnd*** `DateTime?` 

End date of the asset vintage

</article>
<article>

***vintageStart*** `DateTime?` 

Start date of the asset vintage

</article>

