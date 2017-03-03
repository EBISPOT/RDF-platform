---
layout: default
title: Provenance
permalink: RDF-platform/documentation/provenance.html
---
## Provenance
It is good practice to not only make RDF data available but also include a dataset description that provides metadata about the dataset itself, called VoID files. For datasets in Health Care and Life Science a [w3c standard](https://www.w3.org/TR/hcls-dataset/) defines the structure of these meta data files. We try to satisfy this standard with our dataset descriptions by enforcing the *MUST* and *MUST NOT* criteria while encouraging our data providers to provide even more information about the datasets in their dataset descriptions.  

### Structure of HCLS VoID files

Every dataset description consists of at least three levels: Summary, version and distribution level. The summary level provides a description of a dataset that is independent of a specific version or format. The version level captures version-specific characteristics of a dataset and the distribution level captures metadata about a specific form and version of a dataset.

#### Summary level
Mandatory fields for the summary level:
> &#60;http://purl.org/dc/terms/Dataset> <br>
> &#60;http://purl.org/pav/hasCurrentVersion> <br>
> &#60;http://purl.org/dc/terms/title> <br>
> &#60;http://purl.org/dc/terms/publisher> <br>
> &#60;http://purl.org/dc/terms/description> <br>

The summary level is NOT allowed to these fields:
> &#60;http://rdfs.org/ns/void#dataDump> <br>
> &#60;http://purl.org/dc/terms/creator> <br>

#### Version level
Mandatory fields for the version level:
> &#60;http://purl.org/dc/terms/Dataset> <br>
> &#60;http://purl.org/dc/terms/isVersionOf> <br>
> &#60;http://purl.org/dc/terms/hasDistribution> <br>
> &#60;http://purl.org/dc/terms/title> <br>
> &#60;http://purl.org/dc/terms/description> <br>
> &#60;http://purl.org/dc/terms/creator> <br>
> &#60;http://purl.org/dc/terms/publisher> <br>
> &#60;http://purl.org/pav/version> <br>

The version level is NOT allowed to have:
> &#60;http://rdfs.org/ns/void#dataDump>

#### Distribution level
Distribution Level is defined through
> &#60;http://rdfs.org/ns/void#Dataset> <br>
> &#60;http://rdfs.org/ns/void#dataDump> <br>
> &#60;http://www.w3.org/ns/dcat#Distribution> <br>
> &#60;http://purl.org/dc/terms/title> <br>
> &#60;http://purl.org/dc/terms/description> <br>
> &#60;http://purl.org/dc/terms/creator> <br>
> &#60;http://purl.org/dc/terms/format> <br>
> &#60;http://purl.org/dc/terms/license> <br>
> &#60;http://purl.org/dc/terms/publisher> <br>


### Additional information
This structure represents the *MUST* and *MUST NOT* fields described in the standard. We enforce these fields to be present in the descriptions of datasets that are part of the RDF platform. We encourage people to also implement the *SHOULD* and *MAY* requirements, even though we do not enforce this at the moment.

The VoID files can be accessed in our github repository or through the SPARQL endpoint. Each named graph in the database has a corresponding named graph with the \_void.ttl ending. For more information on the naming schema for named graphs read our page on [using Sparql](/usingSparql).

For more information on dataset descriptions, once more, we refer to the [w3c standard](https://www.w3.org/TR/hcls-dataset/) about HCLS dataset descriptions. An online validator of the standard can be found at [here](http://www.w3.org/2015/03/ShExValidata).
