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
