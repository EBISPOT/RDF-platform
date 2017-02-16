## Using the SPARQL Endpoints

We provide a SPARQL endpoint with free public access for users to explore our data using SPARQL queries.

#### Graphs

Each endpoint contains two named graphs.

<strong>Data</strong>: The latest version of the dataset, along with any vocabulary terms that are specific to that dataset, is contained within a single graph. The name used for this graph looks like this:

> http://rdf.ebi.ac.uk/dataset/<dataset>/<version>


<strong>Provenance</strong>: We also provide provenance metadata about the dataset in a separate graph. This includes information about versioning, dataset descriptions and example resources. The name used for this graph looks like this:

```
http://rdf.ebi.ac.uk/dataset/<dataset>/description
```

You can find out more about the metadata contained in this graph on our provenance page.

#### Basic Queries

By default, queries are not restricted to any graph. If you want to run a basic query for a single dataset, you do not need to do anything special. For example:
```
DESCRIBE <http://rdf.ebi.ac.uk/resource/atlas/E-GEOD-20266>
```

You can also choose to limit a SPARQL query to a specific graph using the FROM keyword:

> SELECT * <br>
> FROM <http://rdf.ebi.ac.uk/dataset/atlas/description> <br>
> WHERE { <br>
> &nbsp;&nbsp; ?subject ?predicate ?object <br>
> } 

#### Prefixes

For convenience, our endpoints are configured with some namespace prefixes by default: 

* rdf -	http://www.w3.org/1999/02/22-rdf-syntax-ns#
* rdfs - http://www.w3.org/2000/01/rdf-schema#
* owl - http://www.w3.org/2002/07/owl#
* skos - http://www.w3.org/2004/02/skos/core#
* dc - http://purl.org/dc/elements/1.1/
* dcterms - http://purl.org/dc/terms/
* void - http://rdfs.org/ns/void#
* pav - http://purl.org/pav/2.0/
* obo - http://purl.obolibrary.org/obo/
* sio - http://semanticscience.org/resource/

You can use these prefixes in SPARQL queries without needing to specify them.

Each SPARQL endpoint may have additional prefixes configured that are more specific to the data.

#### Federated Queries

You can execute queries that use data from multiple datasets by federating the query across more than one SPARQL endpoint. This is accomplished with the SERVICE keyword. This example aggregates statistics about the size of datasets:
```
SELECT ?dataset ?triples
WHERE {
    {
        ?dataset <http://rdfs.org/ns/void#triples> ?triples .
    }
    UNION {
            SERVICE <http://www.ebi.ac.uk/rdf/services/atlas/sparql> {
            ?dataset <http://rdfs.org/ns/void#triples> ?triples .
        }
    }
}
````
