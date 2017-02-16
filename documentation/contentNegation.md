## Content Negotiation
#### Persistent URIs
We provide persistent URIs for the resources described within our RDF datasets. This means that the URIs within our RDF downloads and SPARQL endpoints are intended to be stable, and guaranteed to resolve to a document describing the entity in question.

Each dataset has its own namespace for its resource URIs, and the domain name that is used depends on the database:

* Expression Atlas and ChEMBL are EMBL-EBI databases, and use URIs in the rdf.ebi.ac.uk domain
* UniProt uses the domain name of the UniProt consortium: purl.uniprot.org
* Reactome and BioModels use identifiers.org

#### Content Negotiation on rdf.ebi.ac.uk
The URL resolver on the rdf.ebi.ac.uk domain supports HTTP Content Negotiation. You can use this to request either HTML or RDF representations.

To explain by example, you can do any of the following using the Linux curl command line utility:
```
curl -L -H "Accept: text/html" \
http://rdf.ebi.ac.uk/resource/atlas/E-GEOD-14539
```
The above example redirects to the Linked Data browser, which returns an HTML document describing an experiment in the Gene Expression Atlas.
```
curl -L -H "Accept: application/rdf+xml" \
http://rdf.ebi.ac.uk/resource/atlas/E-GEOD-14539
```
The above example redirects to an RDF document describing the experiment.
```
curl -L -H "Accept: application/rdf+xml" \
http://rdf.ebi.ac.uk/dataset/atlas/13.07
```
The above example redirects to an RDF document containing dataset provenance and statistics.

#### Content Negotiation on purl.uniprot.org
You can do content negotiation in the same way:
```
curl -L -H "Accept: text/html" \
http://purl.uniprot.org/uniprot/P15056
```
The above example redirects to an HTML document.
```
curl -L -H "Accept: application/rdf+xml" \
http://purl.uniprot.org/uniprot/P15056
```
The above example redirects to an RDF/XML document.

#### Content Negotiation on identifiers.org
Whilst it is possible to obtain RDF data from identifiers.org URIs via content negotiation, at present this will return RDF as published by identifiers.org, rather than the database content. A solution is under development.
