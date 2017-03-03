---
layout: default
title: advancedSparql
permalink: RDF-platform/documentation/advancedSparql.html
---
## Example SPARQL queries
For every Datasource there are example SPARQL Queries available, see our SPARQL Endpoint for more information. This page should demonstrate some more advanced SPARQL queries including an explanation how they work - this should demonstrate in general what kind of questions the RDF platform can help you to answer.  

#### How are the protein targets of the gleevec drug differentially expressed, which pathways are they involved in?
>PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> <br>
>PREFIX cco: <http://rdf.ebi.ac.uk/terms/chembl#> <br>
>PREFIX chembl_molecule: <http://rdf.ebi.ac.uk/resource/chembl/molecule/> <br>
>PREFIX biopax3:<http://www.biopax.org/release/biopax-level3.owl#> <br>
>PREFIX atlasterms: <http://rdf.ebi.ac.uk/terms/atlas/> <br>
>PREFIX sio: <http://semanticscience.org/resource/> <br>
>PREFIX dcterms: <http://purl.org/dc/terms/> <br>
>PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> <br>
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
>  SERVICE <http://www.ebi.ac.uk/rdf/services/reactome/sparql> { <br>
>    ?protein rdf:type biopax3:Protein . <br>
>    ?protein biopax3:memberPhysicalEntity <br>
>      [biopax3:entityReference ?dbXref] . <br>
>    ?pathway biopax3:displayName ?pathwayname . <br>
>    ?pathway biopax3:pathwayComponent ?reaction . <br>
>    ?reaction ?rel ?protein . <br>
>  } <br>
>
>  # get Atlas experiment plus experimental factor where protein is expressed <br>
>  SERVICE <http://www.ebi.ac.uk/rdf/services/atlas/sparql> { <br>
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
```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX sio: <http://semanticscience.org/resource/>
PREFIX efo: <http://www.ebi.ac.uk/efo/>
PREFIX atlas: <http://rdf.ebi.ac.uk/resource/atlas/>
PREFIX atlasterms: <http://rdf.ebi.ac.uk/terms/atlas/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT distinct ?experiment ?sample ?compound ?chebi
WHERE {
 ?value a atlasterms:IncreasedDifferentialExpressionRatio .
 ?value atlasterms:hasFactorValue ?factor .
 ?factor atlasterms:propertyType ?propertyType .
 ?factor atlasterms:propertyValue ?compound .
 ?factor a ?chebi .
 filter (str(?chebi) != "http://www.w3.org/2002/07/owl#NamedIndividual")
 filter regex (?propertyType, "compound", "i")
 filter (?compound != "none"^^xsd:string)

 ?analysis atlasterms:hasExpressionValue ?value .
 ?experiment atlasterms:hasAnalysis ?analysis .
 ?experiment atlasterms:hasAssay [atlasterms:hasSample ?sid] .
 ?sid atlasterms:hasSampleCharacteristic [atlasterms:propertyValue ?compound] .
 ?sid atlasterms:hasSampleCharacteristic [atlasterms:propertyType ?samplePropertyType ; atlasterms:propertyValue ?sample]
 filter regex (?samplePropertyType, "cell line", "i")
}
```

#### Find the proteins whose genes are very over expressed (fold change > 10) where a cell line has been treated with a compound.
```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX sio: <http://semanticscience.org/resource/>
PREFIX efo: <http://www.ebi.ac.uk/efo/>
PREFIX atlas: <http://rdf.ebi.ac.uk/resource/atlas/>
>PREFIX atlasterms: <http://rdf.ebi.ac.uk/terms/atlas/>
>PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
>
>SELECT distinct ?protein ?pvalue ?sample ?compound ?chebi
>WHERE {
> ?value a atlasterms:IncreasedDifferentialExpressionRatio .
> ?value atlasterms:pValue ?pvalue .
> ?value atlasterms:tStatistic ?tstat .
> ?value atlasterms:hasFactorValue ?factor .
> ?value atlasterms:isMeasurementOf ?probe .
> ?probe atlasterms:dbXref ?protein .
> ?factor atlasterms:propertyType ?propertyType .
> ?factor atlasterms:propertyValue ?compound .
> ?factor a ?chebi .
> filter (str(?chebi) != "http://www.w3.org/2002/07/owl#NamedIndividual")
> filter regex (?propertyType, "compound", "i")
> filter regex (?protein, "uniprot")
> filter (?compound != "none"^^xsd:string)
> filter (?tstat > 10)
> ?analysis atlasterms:hasExpressionValue ?value .
> ?exp atlasterms:hasAnalysis ?analysis .
> ?exp atlasterms:hasAssay [atlasterms:hasSample ?sid] .
> ?sid atlasterms:hasSampleCharacteristic [atlasterms:propertyValue ?propertyValue] .
> ?sid atlasterms:hasSampleCharacteristic [atlasterms:propertyType ?samplePropertyType ; atlasterms:propertyValue ?sample]
> filter regex (?samplePropertyType, "cell line", "i")
>}
