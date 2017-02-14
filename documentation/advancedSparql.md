## Example SPARQL queries



Here you can find some examples of the kinds of questions that our SPARQL endpoints can help to answer. 

    How are the protein targets of the gleevec drug differentially expressed, which pathways are they involved in?
    Which genes are differentially expressed in asthma, which pathways are they involved in and which compounds target them?
    Which expression analysis experiments involved treatment of a cell line with a compound?
    Find the proteins whose genes are very over expressed (fold change > 10) where a cell line has been treated with a compound.

1. How are the protein targets of the gleevec drug differentially expressed, which pathways are they involved in?

Click here to run this query on the ChEMBL SPARQL endpoint.
SPARQL

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX cco: <http://rdf.ebi.ac.uk/terms/chembl#>
PREFIX chembl_molecule: <http://rdf.ebi.ac.uk/resource/chembl/molecule/>
PREFIX biopax3:<http://www.biopax.org/release/biopax-level3.owl#>
PREFIX atlasterms: <http://rdf.ebi.ac.uk/terms/atlas/>
PREFIX sio: <http://semanticscience.org/resource/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT distinct ?dbXref (str(?pathwayname) as ?pathname) ?factorLabel 
WHERE { 

  # query chembl for gleevec (CHEMBL941) protein targets
  ?act a cco:Activity; 
    cco:hasMolecule chembl_molecule:CHEMBL941 ;  
    cco:hasAssay ?assay .
  ?assay cco:hasTarget ?target .
  ?target cco:hasTargetComponent ?targetcmpt .
  ?targetcmpt cco:targetCmptXref ?dbXref .
  ?targetcmpt cco:taxonomy  .
  ?dbXref a cco:UniprotRef

  # query for pathways by those protein targets
  SERVICE <http://www.ebi.ac.uk/rdf/services/reactome/sparql> {
    ?protein rdf:type biopax3:Protein .
    ?protein biopax3:memberPhysicalEntity 
      [biopax3:entityReference ?dbXref] .
    ?pathway biopax3:displayName ?pathwayname .
    ?pathway biopax3:pathwayComponent ?reaction .
    ?reaction ?rel ?protein .
  }

  # get Atlas experiment plus experimental factor where protein is expressed
  SERVICE <http://www.ebi.ac.uk/rdf/services/atlas/sparql> {
    ?probe atlasterms:dbXref ?dbXref .
    ?value atlasterms:isMeasurementOf ?probe . 
    ?value atlasterms:hasFactorValue ?factor .  
    ?value rdfs:label ?factorLabel . 
  }
}

2. Which genes are differentially expressed in asthma, which pathways are they involved in and which compounds target them?

Click here to run this query on the Gene Expression Atlas SPARQL endpoint.
SPARQL

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX obo: <http://purl.obolibrary.org/obo/>
PREFIX sio: <http://semanticscience.org/resource/>
PREFIX efo: <http://www.ebi.ac.uk/efo/>
PREFIX atlas: <http://rdf.ebi.ac.uk/resource/atlas/>
PREFIX atlasterms: <http://rdf.ebi.ac.uk/terms/atlas/>
PREFIX biopax3:<http://www.biopax.org/release/biopax-level3.owl#>
PREFIX cco: <http://rdf.ebi.ac.uk/terms/chembl#>

SELECT distinct ?dbXrefProt ?pathwayname ?moleculeLabel ?expressionValue ?propertyValue
WHERE {
  #Get differentially expressed genes (and proteins) where factor is asthma
  ?value atlasterms:pValue ?pvalue .
  ?value atlasterms:hasFactorValue ?factor .
  ?value rdfs:label ?expressionValue .
  ?value atlasterms:isMeasurementOf ?probe .
  ?probe atlasterms:dbXref ?dbXrefProt .
  ?dbXrefProt a atlasterms:UniprotDatabaseReference .
  ?factor atlasterms:propertyType ?propertyType .
  ?factor atlasterms:propertyValue ?propertyValue .
  ?factor rdf:type efo:EFO_0000270 .

  #Compounds target them
  SERVICE <http://www.ebi.ac.uk/rdf/services/chembl/sparql> {
    ?act a cco:Activity ;
    cco:hasMolecule ?molecule ;
    cco:hasAssay ?assay .
    ?molecule rdfs:label ?moleculeLabel .
    ?assay cco:hasTarget ?target .
    ?target cco:hasTargetComponent ?targetcmpt .
    ?targetcmpt cco:targetCmptXref ?dbXrefProt .
    ?targetcmpt cco:taxonomy <http://identifiers.org/taxonomy/9606> .
    ?dbXrefProt a cco:UniprotRef .
  }
  SERVICE <http://www.ebi.ac.uk/rdf/services/reactome/sparql> {
    ?protein rdf:type biopax3:Protein .
    ?protein biopax3:memberPhysicalEntity [biopax3:entityReference ?dbXrefProt] .
    ?pathway biopax3:displayName ?pathwayname .
    ?pathway biopax3:pathwayComponent ?reaction .
    ?reaction ?rel ?protein
  }
}

3. Which expression analysis experiments involved treatment of a cell line with a compound?

Click here to run this query on the Gene Expression Atlas SPARQL endpoint.
SPARQL

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

4. Find the proteins whose genes are very over expressed (fold change > 10) where a cell line has been treated with a compound.

Click here to run this query on the Gene Expression Atlas SPARQL endpoint.
SPARQL

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

SELECT distinct ?protein ?pvalue ?sample ?compound ?chebi 
WHERE {
 ?value a atlasterms:IncreasedDifferentialExpressionRatio .
 ?value atlasterms:pValue ?pvalue .
 ?value atlasterms:tStatistic ?tstat .
 ?value atlasterms:hasFactorValue ?factor .
 ?value atlasterms:isMeasurementOf ?probe .
 ?probe atlasterms:dbXref ?protein .
 ?factor atlasterms:propertyType ?propertyType .
 ?factor atlasterms:propertyValue ?compound . 
 ?factor a ?chebi .
 filter (str(?chebi) != "http://www.w3.org/2002/07/owl#NamedIndividual")
 filter regex (?propertyType, "compound", "i") 
 filter regex (?protein, "uniprot") 
 filter (?compound != "none"^^xsd:string)
 filter (?tstat > 10)
 ?analysis atlasterms:hasExpressionValue ?value . 
 ?exp atlasterms:hasAnalysis ?analysis . 
 ?exp atlasterms:hasAssay [atlasterms:hasSample ?sid] .
 ?sid atlasterms:hasSampleCharacteristic [atlasterms:propertyValue ?propertyValue] .
 ?sid atlasterms:hasSampleCharacteristic [atlasterms:propertyType ?samplePropertyType ; atlasterms:propertyValue ?sample] 
 filter regex (?samplePropertyType, "cell line", "i")
}

