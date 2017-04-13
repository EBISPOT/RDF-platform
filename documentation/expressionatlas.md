---
layout: default
title: Atlas
permalink: RDF-platform/documentation/expressionatlas.html
---

# Expression Atlas RDF

The [Gene Expression Atlas](https://www.ebi.ac.uk/gxa/home) provides information on gene expression patterns under different biological conditions. Gene expression data is re-analysed in-house to detect genes showing interesting baseline and differential expression patterns. You can read more about the expression atlas data [here](https://www.ebi.ac.uk/gxa/about.html). 

This RDF version is generated from the Expression Atlas database with the [following scripts](https://github.com/gxa/atlas-rdf). The RDF version is still experimental and may not always reflect the latest data in the live expression atlas. We welcome feedback on the utility of this dataset so please [get in touch](https://www.ebi.ac.uk/gxa/)

Please note: this version of the expression atlas is different from the gene expression atlas data that was previoulsy loaded into the RDF platform in 2013. That dataset represented the onld GXA data that has since been retired in 2013. This new version contains both baseline and differential expression data and the RDF schema has changed to reflect this. The final release of the ols GXA data was 13.07 and is available to download from the [FTP site](ftp://ftp.ebi.ac.uk/pub/databases//microarray/data/gxa/rdf)

# Contact

Contact us via the feedback button on the [GXA homepage](https://www.ebi.ac.uk/gxa/) or submit an issue to our [issue tracker](https://github.com/gxa/atlas-rdf/issues)

# Schema 

The schema for the atlas datasets is depicted below. It shows how resources are connected in the RDF graph. Each resource is types accoring to the atlas terms ontology. The stable URI for the latest version of this ontology is http://rdf.ebi.ac.uk/terms/expressionatlas.

This ontology acts as our internal schema and provides a basic description of the resources in the Atlas RDF dataset. In order to facilitate integration of the Atlas RDF data with other datasets, we provide an additional ontology that maps the atlas terms ontology to several external ontology development projects. We currently map to the Semantic Science Integration Ontology (SIO), the Ontology for Biomedical Investigations (OBI), the Experimental Factor Ontology (EFO) and the ontology of bioinformatics operations, topics, types of data including identifiers, and formats (EDAM). A table of the mappings can be seen here. The full atlas terms mapping ontology can be found at http://rdf.ebi.ac.uk/terms/expressionatlas-mapping. We are happy to extend our mapping to other relevant ontologies and are keen to discuss the integration of this dataset with other similar resources.

The source for the schema ontologies are in GitHub https://github.com/gxa/atlas-rdf/ontology

The atlas RDF contains both baseline expression and differential gene expression data. The assay and analysis type are different in the schema and the way expression values are reported is also different. For more information on the different types of data in atlas see https://www.ebi.ac.uk/gxa/about.html

# Baseline schema

![](https://github.com/EBISPOT/RDF-platform/raw/gh-pages/static/atlas/Baseline%20Atlas%20RDF%20Schema.png)

# Differential schema

![](https://github.com/EBISPOT/RDF-platform/raw/gh-pages/static/atlas/Microarray%20Atlas%20RDF%20Schema.png)

# Example queries

# Show expression for the CYP51 gene

```
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX atlasterms: <http://rdf.ebi.ac.uk/terms/expressionatlas/>
PREFIX atlas: <http://rdf.ebi.ac.uk/resource/expressionatlas/>

SELECT distinct ?diffValue ?expUri ?propertyType ?propertyValue ?pvalue 
FROM <http://rdf.ebi.ac.uk/dataset/expressionatlas>
WHERE {             
?expUri atlasterms:hasPart ?analysis .       
?analysis atlasterms:hasOutput ?value .   
?analysis atlasterms:hasFactorValue ?factor .   
?factor atlasterms:propertyType ?propertyType .    
?factor atlasterms:propertyValue ?propertyValue .  
?value rdfs:label ?diffValue .       
?value atlasterms:pValue ?pvalue .      
?value atlasterms:refersTo ?gene .    
?gene rdfs:label ?genesymbol .
filter regex (?genesymbol, "cyp51", "i")
}           
```

# What human protein coding genes are expressed where the experimental factor is asthma (EFO_0000270)?

```
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX atlasterms: <http://rdf.ebi.ac.uk/terms/expressionatlas/>
PREFIX atlas: <http://rdf.ebi.ac.uk/resource/expressionatlas/>
PREFIX ensembl: <http://rdf.ebi.ac.uk/terms/ensembl/>
PREFIX efo: <http://www.ebi.ac.uk/efo/>

SELECT distinct ?expUri ?diffValue ?gene ?pvalue
FROM <http://rdf.ebi.ac.uk/dataset/expressionatlas>
FROM <http://rdf.ebi.ac.uk/dataset/homo_sapiens>
WHERE {            
?expUri atlasterms:hasPart ?analysis .     
?analysis atlasterms:hasOutput ?value .   
?analysis atlasterms:hasFactorValue ?factor .   
?value rdfs:label ?diffValue .
?value atlasterms:pValue ?pvalue .      
?value atlasterms:refersTo ?gene . 
?gene a ensembl:protein_coding .
?factor a efo:EFO_0000270 .       
    
} 
```

# What reactome pathways are associated to human protein coding genes expressed where the experimental factor is asthma (EFO_0000270)?

```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX efo: <http://www.ebi.ac.uk/efo/>
PREFIX atlasterms: <http://rdf.ebi.ac.uk/terms/expressionatlas/>
PREFIX atlas: <http://rdf.ebi.ac.uk/resource/expressionatlas/>
PREFIX ensembl:<http://rdf.ebi.ac.uk/terms/ensembl/>
PREFIX biopax3:<http://www.biopax.org/release/biopax-level3.owl#>


SELECT distinct ?expUri ?diffValue ?gene ?pvalue ?pathwayname
FROM <http://rdf.ebi.ac.uk/dataset/expressionatlas>
FROM <http://rdf.ebi.ac.uk/dataset/homo_sapiens>
FROM <http://rdf.ebi.ac.uk/dataset/reactome>
WHERE {            
?expUri atlasterms:hasPart ?analysis .     
?analysis atlasterms:hasOutput ?value .   
?analysis atlasterms:hasFactorValue ?factor .   
?value rdfs:label ?diffValue .
?value atlasterms:pValue ?pvalue .      
?value atlasterms:refersTo ?gene . 
?gene a ensembl:protein_coding .
?factor a efo:EFO_0000270 .       
    
# get gene to protein from ensembl
?gene ensembl:DEPENDENT ?dbXref .
  
# query reactome for protein 
?protein rdf:type biopax3:Protein .
    ?protein biopax3:memberPhysicalEntity 
             [biopax3:entityReference ?dbXref] .
    ?pathway rdf:type biopax3:Pathway .
    ?pathway biopax3:displayName ?pathwayname .
    ?pathway biopax3:pathwayComponent ?reaction .
    ?reaction rdf:type biopax3:BiochemicalReaction .
    {
      {?reaction biopax3:left ?protein .}
      UNION 
      {?reaction biopax3:right ?protein .}
      UNION 
      {?reaction biopax3:left
                  [a biopax3:Complex ; biopax3:component ?protein ].}
      UNION 
      {?reaction biopax3:right
                 [a biopax3:Complex ; biopax3:component ?protein ].} 
    }   
  
}  
```

# Show baseline expression in liver for Illumina body map data 

```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX atlasterms: <http://rdf.ebi.ac.uk/terms/expressionatlas/>
PREFIX atlas: <http://rdf.ebi.ac.uk/resource/expressionatlas/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX obo: <http://purl.obolibrary.org/obo/>

SELECT distinct ?desc ?diffValue ?gene ?fpkm
FROM <http://rdf.ebi.ac.uk/dataset/expressionatlas>
WHERE {            
atlas:E-MTAB-513 atlasterms:hasPart ?analysis .     
atlas:E-MTAB-513 dcterms:description ?desc .
?analysis atlasterms:hasOutput ?value .   
?analysis atlasterms:hasFactorValue ?factor .   
?value rdfs:label ?diffValue .
?value atlasterms:fpkm ?fpkm . 
?value atlasterms:refersTo ?gene . 
?factor rdf:type obo:UBERON_0002107 .       
    
}  
```
