---
layout: default
title: Using Sparql
---
## Using the SPARQL Endpoint

We provide a SPARQL endpoint with free public access for users to explore our data using SPARQL queries.

#### Graphs
<strong>Data</strong>: All data is stored in one database, therefore all entries can be access through the endpoint. However, the database contains many different named graphs to organize the data. Named Graphs can be used to speed up your search by excluding the data that you do not care about - this can be done by using the **from** statement in your SPARQL query (see examples on this page). Some resources like Reactome, ChEMBL or Biosamples store their data in one named graph, while larger datasets are split up into multiple graphs. For example every ontology from the Ontology Lookup Service in stored in an own named graph, or data from Ensemble is split up on species level. The naming schema for named graphs follows a certain structure:
> &#60;http://ebi.rdf.ac.uk/dataset/**DatasetName**>

Some examples for named Graphs are:
> &#60;http://ebi.rdf.ac.uk/dataset/chembl> <br>
> &#60;http://ebi.rdf.ac.uk/dataset/reactome> <br>
> &#60;http://rdf.ebi.ac.uk/dataset/homo_sapiens>

A list of all named graphs in the database can be viewed at our SPARQL endpoint. Please note that named graphs for void files are not included in that list. The following paragraph explains more about dataset descriptions.


<strong>Provenance</strong>: We also provide provenance metadata about the dataset in a separate graph. The dataset description, also called VoID files, includes information about for example versioning, dataset descriptions or publisher. The structure of the VoID files are defined by the w3c standard for dataset descriptions in Health Care and Life Science which can be found [here](https://www.w3.org/TR/hcls-dataset/). The naming schema for named graphs for Void files is to add *_void.ttl* after the resource name:

> http://rdf.ebi.ac.uk/dataset/dataset_void.ttl

So for example the void file information for &#60;http://rdf.ebi.ac.uk/dataset/homo_sapiens> can be found
> &#60;http://rdf.ebi.ac.uk/dataset/homo_sapiens_void.ttl>

You can find out more about the metadata stored in these VoID files and how we use it on our [provenance page](/RDF-platform/documentation/provenance).


#### Basic Queries
By default, queries are not restricted to any graph. If you want to run a basic query for a single dataset, you do not need to do anything special. For example:

> DESCRIBE &#60;http://rdf.ebi.ac.uk/resource/atlas/E-GEOD-20266>


You can also choose to limit a SPARQL query to a specific graph using the FROM keyword. This can speed up your query and is therefore recommended:

> SELECT * <br>
> FROM &#60;http://rdf.ebi.ac.uk/dataset/reactome> <br>
> WHERE { <br>
> &nbsp;&nbsp; ?subject ?predicate ?object <br>
> }

#### Prefixes

For convenience, our endpoints are configured with some namespace prefixes by default:

* *rdf* -	http://www.w3.org/1999/02/22-rdf-syntax-ns#
* *rdfs* - http://www.w3.org/2000/01/rdf-schema#
* *owl* - http://www.w3.org/2002/07/owl#
* *skos* - http://www.w3.org/2004/02/skos/core#
* *dc* - http://purl.org/dc/elements/1.1/
* *dcterms* - http://purl.org/dc/terms/
* *void* - http://rdfs.org/ns/void#
* *pav* - http://purl.org/pav/2.0/
* *obo* - http://purl.obolibrary.org/obo/
* *sio* - http://semanticscience.org/resource/

You can use these prefixes in SPARQL queries without needing to specify them.

#### Federated Queries

SPARQL allows to execute queries that span over multiple endpoints - so called federated queries. Such queries can be accomplished by using the SERVICE keyword. The example below combines results from the EBI RDF platform and the Uniprot sparql endpoint and asks the question: *"Get protein information from Uniprot that Ensembl has associated with ENSG00000139618 via a federated query"*

>PREFIX rdf: &#60;http://www.w3.org/1999/02/22-rdf-syntax-ns#> <br>
>PREFIX dc: &#60;http://purl.org/dc/elements/1.1/> <br>
>PREFIX ensembl: &#60;http://rdf.ebi.ac.uk/resource/ensembl/> <br>
>PREFIX ensemblterms: &#60;http://rdf.ebi.ac.uk/terms/ensembl/> <br>
>PREFIX core: &#60;http://purl.uniprot.org/core/> <br><br>
>SELECT ?uniprot_id ?uniprot_uri ?isoform ?seq { <br>
>&nbsp;&nbsp;&nbsp;ensembl:ENSG00000128573 ensemblterms:DEPENDENT ?uniprot_uri . <br>
>&nbsp;&nbsp;&nbsp;?uniprot_uri dc:identifier ?uniprot_id . <br>
>&nbsp;&nbsp;&nbsp;&nbsp;SERVICE &#60;http://sparql.uniprot.org/sparql> { <br>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?uniprot_uri core:sequence ?isoform . <br>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?isoform rdf:value ?seq . <br>
>&nbsp;&nbsp;&nbsp;   } <br>
> }
