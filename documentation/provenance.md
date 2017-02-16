## Provenance <a name="Provenance"></a>
Included in our bulk RDF downloads and SPARQL endpoints are metadata describing the RDF datasets. These provide some basic information about the dataset and help you keep track of data releases. This includes:

* fBasic information such as the name, version and publication dates of the RDF dataset
* The FTP URL location for the bulk download
* The URL of the SPARQL endpoint
* The number of triples
* Details of the vocabularies referenced by the dataset
* Example resources (concepts) that can be used to start exploring the data
* Details of any subsets within the data

These metadata properties are themselves expressed as RDF, specifically by combining several standard vocabularies. Taken together, these vocabularies describe datasets and the links between them, versioning, and SPARQL endpoints:

* Vocabulary of Interlinked Datasets (VoID)
* Provenance, Authoring and Versioning (PAV)
* SPARQL Service Description

For EBI data, each dataset's SPARQL endpoint contains a separate graph specifically for provenance. For example, the ChEMBL SPARQL endpoint has a graph named:

```
http://rdf.ebi.ac.uk/dataset/chembl/description
```


## Running our SPARQL endpoints locally <a name="Running-our-SPARQL-endpoints-locally"></a>

If you would like more control over access to the EMBL-EBI RDF data, or perhaps to combine it with other RDF data, you can run your own SPARQL endpoint. This page will help you through the steps of compiling and installing the Virtuoso open source database, loading our RDF data, and running a basic query using the default web interface.

#### Download Virtuoso
We recommend version 6.1.7.2, available in source form from OpenLink's git repository:
```
> cd ~/src
> wget https://github.com/openlink/virtuoso-opensource/archive/v6.1.7.2.zip
> unzip v6.1.7.2.zip
2. Compile and Install Virtuoso
> cd ~/src/virtuoso-opensource-6.1.7.2
> ./configure --prefix=/usr/local/virtuoso
> ./autogen.sh
> make
> make install
```
#### Start Virtuoso
```
> /usr/local/virtuoso/bin/virtuoso-t
```
#### Load the Data
This example would work for loading version 13.07 of the "atlas" dataset:

```
> /usr/local/virtuoso/bin/isql
SQL> ld_dir('/data/atlas/13.07', '*void*', 'http://rdf.ebi.ac.uk/dataset/atlas/description');
SQL> ld_dir('/data/atlas/13.07', '*.rdf', 'http://rdf.ebi.ac.uk/dataset/atlas/13.07');
SQL> ld_dir('/data/atlas/13.07', '*.ttl', 'http://rdf.ebi.ac.uk/dataset/atlas/13.07');
SQL> ld_dir('/data/atlas/13.07', '*.owl', 'http://rdf.ebi.ac.uk/dataset/atlas/13.07');
SQL> rdf_loader_run();
SQL> checkpoint;
5. Update the description graph with the number of triples, and enable RDFS inferencing (optional)
Again, for version 13.07 of the "atlas" dataset:

> /usr/local/virtuoso/bin/isql
SQL> SPARQL INSERT INTO <http://rdf.ebi.ac.uk/dataset/atlas/description> {
          <http://rdf.ebi.ac.uk/dataset/atlas/13.07> <http://rdfs.org/ns/void#triples> ?count
        } WHERE {
          {
            select count(*) as ?count where {
              GRAPH <http://rdf.ebi.ac.uk/dataset/atlas/13.07> {
                ?s ?p ?o
              }
            }
          }
        };
SQL> rdfs_rule_set ('default-rules', 'http://rdf.ebi.ac.uk/dataset/atlas/13.07');
SQL> checkpoint;
```
