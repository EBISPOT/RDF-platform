---
layout: default
title: Infrastructure
---
## Infrastructure

The RDF platform is hosted by EMBL-EBI ([UniProt SPARQL endpoint](http://sparql.uniprot.org/) is hosted by [SIB](http://www.sib.swiss/)). This page gives an overview of the major components of the EMBL-EBI RDF infrastructure.

We serve all requests through a load-balanced redundant stack of software and hardware components. Thus, should a fault occur in one of the hardware or software components, service can be maintained. We use a virtualised infrastructure.


#### SPARQL Endpoint

The SPARQL endpoint comprises two separate software components - the LodeStar web application and the triple store.

The LodeStar application is a Java and Javascript web application designed to serve two functions:

* A SPARQL endpoint proxy for the backend triple store. This abstraction layer provides some control over the executed SPARQL queries, along with a graphical frontend.
* A graphical user interface on top of generic RDF data, providing a human-readable HTML-based representation of an RDF resource. The data presented for a resource are essentially the product of a SPARQL DESCRIBE query.

The triple store is currently using an in-memory Virtuoso implementation, backed by a hybrid flash-disk storage array.

#### URL Resolver

The URL resolver is very simple. It handles HTTP requests for data on the rdf.ebi.ac.uk domain, inspects the request headers to determine the content type, and responds with a redirect to the appropriate resource (HTML, RDF-XML or N3). That resource is ultimately served by the LodeStar web application.
