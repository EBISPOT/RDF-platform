---
layout: default
title: advancedSparql
permalink: documentation/advancedSparql.html
---
## Example SPARQL queries
For every Datasource there are example SPARQL Queries available, see our SPARQL Endpoint for more information.

<!---
This page should demonstrate some more advanced SPARQL queries including an explanation how they work - this should demonstrate in general what kind of questions the RDF platform can help you to answer.  

##### How are the protein targets of the gleevec drug differentially expressed, which pathways are they involved in?
>PREFIX rdf: &#60;http://www.w3.org/1999/02/22-rdf-syntax-ns#> <br>
>PREFIX cco: &#60;http://rdf.ebi.ac.uk/terms/chembl#> <br>
>PREFIX chembl_molecule: &#60;http://rdf.ebi.ac.uk/resource/chembl/molecule/> <br>
>PREFIX biopax3:&#60;http://www.biopax.org/release/biopax-level3.owl#> <br>
>PREFIX atlasterms: &#60;http://rdf.ebi.ac.uk/terms/atlas/> <br>
>PREFIX sio: &#60;http://semanticscience.org/resource/> <br>
>PREFIX dcterms: &#60;http://purl.org/dc/terms/> <br>
>PREFIX rdfs: &#60;http://www.w3.org/2000/01/rdf-schema#> <br>
>
>SELECT distinct ?dbXref (str(?pathwayname) as ?pathname) ?factorLabel <br>
>WHERE { <br>
>
>  # query chembl for gleevec (CHEMBL941) protein targets <br>
>  ?act a cco:Activity; <br>
>    cco:hasMolecule chembl_molecule:CHEMBL941 ;  <br>
>    cco:hasAssay ?assay . <br>
>  ?assay cco:hasTarget ?target . <br>
>  ?target cco:hasTargetComponent ?targetcmpt . <br>
>  ?targetcmpt cco:targetCmptXref ?dbXref . <br>
>  ?targetcmpt cco:taxonomy  . <br>
>  ?dbXref a cco:UniprotRef <br>
>
>  # query for pathways by those protein targets <br>
>  SERVICE &#60;http://www.ebi.ac.uk/rdf/services/reactome/sparql> { <br>
>    ?protein rdf:type biopax3:Protein . <br>
>    ?protein biopax3:memberPhysicalEntity <br>
>      [biopax3:entityReference ?dbXref] . <br>
>    ?pathway biopax3:displayName ?pathwayname . <br>
>    ?pathway biopax3:pathwayComponent ?reaction . <br>
>    ?reaction ?rel ?protein . <br>
>  } <br>
>
>  # get Atlas experiment plus experimental factor where protein is expressed <br>
>  SERVICE &#60;http://www.ebi.ac.uk/rdf/services/atlas/sparql> { <br>
>    ?probe atlasterms:dbXref ?dbXref . <br>
>    ?value atlasterms:isMeasurementOf ?probe . <br>
>    ?value atlasterms:hasFactorValue ?factor . <br>
>    ?value rdfs:label ?factorLabel . <br>
>  } <br>
>} <br>


#### Which genes are differentially expressed in asthma, which pathways are they involved in and which compounds target them?

> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> <br>
> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> <br>
> PREFIX owl: <http://www.w3.org/2002/07/owl#> <br>
> PREFIX dcterms: <http://purl.org/dc/terms/> <br>
> PREFIX obo: <http://purl.obolibrary.org/obo/> <br>
> PREFIX sio: <http://semanticscience.org/resource/> <br>
> PREFIX efo: <http://www.ebi.ac.uk/efo/> <br>
> PREFIX atlas: <http://rdf.ebi.ac.uk/resource/atlas/> <br>
> PREFIX atlasterms: <http://rdf.ebi.ac.uk/terms/atlas/> <br>
> PREFIX biopax3:<http://www.biopax.org/release/biopax-level3.owl#> <br>
> PREFIX cco: <http://rdf.ebi.ac.uk/terms/chembl#> <br>

>SELECT distinct ?dbXrefProt ?pathwayname ?moleculeLabel ?expressionValue ?propertyValue <br>
>WHERE { <br>
>  #Get differentially expressed genes (and proteins) where factor is asthma <br>
>  ?value atlasterms:pValue ?pvalue . <br>
>  ?value atlasterms:hasFactorValue ?factor . <br>
>  ?value rdfs:label ?expressionValue . <br>
>  ?value atlasterms:isMeasurementOf ?probe . <br>
>  ?probe atlasterms:dbXref ?dbXrefProt . <br>
>  ?dbXrefProt a atlasterms:UniprotDatabaseReference . <br>
>  ?factor atlasterms:propertyType ?propertyType . <br>
v  ?factor atlasterms:propertyValue ?propertyValue . <br>
>  ?factor rdf:type efo:EFO_0000270 . <br>
>
>  #Compounds target them <br>
>  SERVICE <http://www.ebi.ac.uk/rdf/services/chembl/sparql> { <br>
>    ?act a cco:Activity ; <br>
>    cco:hasMolecule ?molecule ; <br>
>    cco:hasAssay ?assay . <br>
>    ?molecule rdfs:label ?moleculeLabel . <br>
>    ?assay cco:hasTarget ?target . <br>
>    ?target cco:hasTargetComponent ?targetcmpt . <br>
>    ?targetcmpt cco:targetCmptXref ?dbXrefProt . <br>
>    ?targetcmpt cco:taxonomy <http://identifiers.org/taxonomy/9606> . <br>
>    ?dbXrefProt a cco:UniprotRef . <br>
>  }<br>
>  SERVICE <http://www.ebi.ac.uk/rdf/services/reactome/sparql> { <br>
>    ?protein rdf:type biopax3:Protein . <br>
>    ?protein biopax3:memberPhysicalEntity [biopax3:entityReference ?dbXrefProt] . <br>
>    ?pathway biopax3:displayName ?pathwayname . <br>
>    ?pathway biopax3:pathwayComponent ?reaction . <br>
>    ?reaction ?rel ?protein <br>
>  } <br>
>}


#### Which expression analysis experiments involved treatment of a cell line with a compound?
>PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> <br>
>PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> <br>
>PREFIX owl: <http://www.w3.org/2002/07/owl#> <br>
>PREFIX dcterms: <http://purl.org/dc/terms/> <br>
>PREFIX obo: <http://purl.obolibrary.org/obo/> <br>
>PREFIX sio: <http://semanticscience.org/resource/> <br>
>PREFIX efo: <http://www.ebi.ac.uk/efo/> <br>
>PREFIX atlas: <http://rdf.ebi.ac.uk/resource/atlas/> <br>
>PREFIX atlasterms: <http://rdf.ebi.ac.uk/terms/atlas/> <br>
>PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> <br>
>
>SELECT distinct ?experiment ?sample ?compound ?chebi <br>
>WHERE { <br>
> ?value a atlasterms:IncreasedDifferentialExpressionRatio . <br>
> ?value atlasterms:hasFactorValue ?factor . <br>
> ?factor atlasterms:propertyType ?propertyType . <br>
> ?factor atlasterms:propertyValue ?compound . <br>
> ?factor a ?chebi . <br>
> filter (str(?chebi) != "http://www.w3.org/2002/07/owl#NamedIndividual") <br>
> filter regex (?propertyType, "compound", "i") <br>
> filter (?compound != "none"^^xsd:string) <br>

> ?analysis atlasterms:hasExpressionValue ?value . <br>
> ?experiment atlasterms:hasAnalysis ?analysis . <br>
> ?experiment atlasterms:hasAssay [atlasterms:hasSample ?sid] . <br>
> ?sid atlasterms:hasSampleCharacteristic [atlasterms:propertyValue ?compound] . <br>
> ?sid atlasterms:hasSampleCharacteristic [atlasterms:propertyType ?samplePropertyType ; atlasterms:propertyValue ?sample] <br>
> filter regex (?samplePropertyType, "cell line", "i") <br>
>}


#### Find the proteins whose genes are very over expressed (fold change > 10) where a cell line has been treated with a compound.
>PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> <br>
>PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> <br>
>PREFIX owl: <http://www.w3.org/2002/07/owl#> <br>
>PREFIX dcterms: <http://purl.org/dc/terms/> <br>
>PREFIX obo: <http://purl.obolibrary.org/obo/> <br>
>PREFIX sio: <http://semanticscience.org/resource/> <br>
>PREFIX efo: <http://www.ebi.ac.uk/efo/> <br>
>PREFIX atlas: <http://rdf.ebi.ac.uk/resource/atlas/> <br>
>PREFIX atlasterms: <http://rdf.ebi.ac.uk/terms/atlas/> <br>
>PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> <br>
>
>SELECT distinct ?protein ?pvalue ?sample ?compound ?chebi <br>
>WHERE { <br>
> ?value a atlasterms:IncreasedDifferentialExpressionRatio . <br>
> ?value atlasterms:pValue ?pvalue . <br>
> ?value atlasterms:tStatistic ?tstat . <br>
> ?value atlasterms:hasFactorValue ?factor . <br>
> ?value atlasterms:isMeasurementOf ?probe . <br>
> ?probe atlasterms:dbXref ?protein . <br>
> ?factor atlasterms:propertyType ?propertyType . <br>
> ?factor atlasterms:propertyValue ?compound . <br>
> ?factor a ?chebi . <br>
> filter (str(?chebi) != "http://www.w3.org/2002/07/owl#NamedIndividual") <br>
> filter regex (?propertyType, "compound", "i") <br>
> filter regex (?protein, "uniprot") <br>
> filter (?compound != "none"^^xsd:string) <br>
> filter (?tstat > 10) <br>
> ?analysis atlasterms:hasExpressionValue ?value . <br>
> ?exp atlasterms:hasAnalysis ?analysis . <br>
> ?exp atlasterms:hasAssay [atlasterms:hasSample ?sid] . <br>
> ?sid atlasterms:hasSampleCharacteristic [atlasterms:propertyValue ?propertyValue] . <br>
> ?sid atlasterms:hasSampleCharacteristic [atlasterms:propertyType ?samplePropertyType ; atlasterms:propertyValue ?sample] <br>
> filter regex (?samplePropertyType, "cell line", "i") <br>
>}
-->
