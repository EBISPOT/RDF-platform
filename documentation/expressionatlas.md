---
layout: default
title: Atlas
permalink: RDF-platform/documentation/expressionatlas.html
---

# Expression Atlas RDF

The [Gene Expression Atlas](https://www.ebi.ac.uk/gxa/home) provides information on gene expression patterns under different biological conditions. Gene expression data is re-analysed in-house to detect genes showing interesting baseline and differential expression patterns. You can read more about the expression atlas data [here](https://www.ebi.ac.uk/gxa/about.html). 

This RDF version is generated from the Expression Atlas database with the [following scripts](https://github.com/simonjupp/atlas-rdf). The RDF version is still experimental and may not always reflect the latest data in the live expression atlas. We welcome feedback on the utility of this dataset so please [get in touch](https://www.ebi.ac.uk/gxa/)

Please note: this version of the expression atlas is different from the gene expression atlas data that was previoulsy loaded into the RDF platform in 2013. That dataset represented the onld GXA data that has since been retired in 2013. This new version contains both baseline and differential expression data and the RDF schema has changed to reflect this. The final release of the ols GXA data was 13.07 and is available to download from the [FTP site](ftp://ftp.ebi.ac.uk/pub/databases//microarray/data/gxa/rdf)

# Contact

Contact us via the feedback button on the [GXA homepage](https://www.ebi.ac.uk/gxa/) or submit an issue to our [issue tracker](https://github.com/simonjupp/atlas-rdf/issues)

# Schema 

The schema for the atlas datasets is depicted below. It shows how resources are connected in the RDF graph. Each resource is types accoring to the atlas terms ontology. The stable URI for the latest version of this ontology is http://rdf.ebi.ac.uk/terms/expressionatlas.

This ontology acts as our internal schema and provides a basic description of the resources in the Atlas RDF dataset. In order to facilitate integration of the Atlas RDF data with other datasets, we provide an additional ontology that maps the atlas terms ontology to several external ontology development projects. We currently map to the Semantic Science Integration Ontology (SIO), the Ontology for Biomedical Investigations (OBI), the Experimental Factor Ontology (EFO) and the ontology of bioinformatics operations, topics, types of data including identifiers, and formats (EDAM). A table of the mappings can be seen here. The full atlas terms mapping ontology can be found at http://rdf.ebi.ac.uk/terms/expressionatlas-mapping. We are happy to extend our mapping to other relevant ontologies and are keen to discuss the integration of this dataset with other similar resources.

The source for the schema ontologies are in GitHub https://github.com/simonjupp/atlas-rdf/ontology

The atlas RDF contains both baseline expression and differential gene expression data. The assay and analysis type are different in the schema and the way expression values are reported is also different. For more information on the different types of data in atlas see https://www.ebi.ac.uk/gxa/about.html

# Baseline schema

![](https://github.com/EBISPOT/RDF-platform/raw/gh-pages/static/atlas/Baseline%20Atlas%20RDF%20Schema.png)

# Differential schema

![](https://github.com/EBISPOT/RDF-platform/raw/gh-pages/static/atlas/Microarray%20Atlas%20RDF%20Schema.png)

RDF-platform/static/atlas/Microarray Atlas RDF Schema.png
