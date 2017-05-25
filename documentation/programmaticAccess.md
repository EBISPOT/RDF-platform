---
layout: default
title: Programmatic access
permalink: documentation/programmaticAccess.html
---
## Programmatic access

The SPARQL services can be access programmatically over HTTP. Query results are available in a variety of standard formats including SPARQL XML, SPARQL, JSON, CSV and TSV.

Luckily you don't have to worry about the low level details of connecting and parsing the output from your favourite programming language because a wide range of libraries are available for interacting with a SPARQL endpoint. Here we list some popular APIs for a given programming language.

>Please note that we will be reviewing the level of public access to these endpoints that is feasible. It may be necessary to restrict certain queries in order to maintain a consistent level of service, for example.

#### Perl APIs

[Perl SPARQL client](https://github.com/swh/Perl-SPARQL-client-library) (see example [here](/static/pearl_example.txt))

#### Java APIs

[Jena](http://jena.apache.org/) (see example [here](/static/jena_example.txt))

#### R packages
[R SPARQL package](https://cran.r-project.org/web/packages/SPARQL/) (see example [here](/static/r_example.txt))

#### Generic HTTP requests
Via HTTP requests it is relativly easy to access the SPARQL endpoint in many other programming languages (e.g. javascript). Below we describe such HTTP requests, more information is available on the documentation page about [content negation](/RDF-platform/documentation/contentNegation).

##### Example: Select Query
>www.ebi.ac.uk/rdf/services/sparql?query=**queryString**&render=**renderOption**&limit=**limit**&offset=**offset**

* queryString: Your SPARQL query. Please note that the query string has to be encoded!
* renderOption: Specifies the format of the reply. The Options are: HTML, JSON, CSV, XML, TSV, RDF/JSON, RDF/N3, RDF/XML
* limit: Number of returned results.
* offset: Via the offset you can page through SPARQL results. It is defined as number that 'control where the solutions start from in the overall sequence of solutions'

##### Example: Describe Query
>http://wwwdev.ebi.ac.uk/rdf/services/describe?uri=**uri**

* uri: encoded uri of the entitiy you want to inspect
