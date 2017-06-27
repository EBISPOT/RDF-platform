---
layout: default
title: The role of identifiers.org
---
## The role of identifiers.org <a name="The-role-of-identifiers.org"></a>
#### About Identifiers.org
Identifiers.org is a service hosted by EMBL-EBI for providing re-usable identifiers for any data used in the biomedical sciences. It provides resolvable (dereferenceable) URIs for existing database identifiers, which are intended to be stable over time and independent of the provider. This allows the data to "live on" should the provider change, move, or cease support. Many biological databases therefore choose to use identifiers.org for their "official" URIs - for example, Reactome. For database providers, this route can be a easy and maintenance-free way of providing persistent URIs for your data so that they can be used whenever those data need to be referred to in any Linked Dataset. You can read more about identifiers.org on its website.

#### EBI Linked Data and Identifiers.org
As described elsewhere, EMBL-EBI has elected to use the rdf.ebi.ac.uk domain for the Linked Data URIs of its own databases. This allows us to offer a more consistent and clear user experience, separating out the RDF data from the regular database webpage. Usually, these URIs are simple transformations or existing database identifiers. These database identifiers are also all available in identifiers.org (if you find one that isn't, please let us know!). For example:


| key  | value |
| -------- | ----------- |
| Database Identifier  | E-GEOD-20266 |
| Database Webpage | http://www.ebi.ac.uk/gxa/experiment/E-GEOD-20266 |
| Primary Linked Data URI | http://www.ebi.ac.uk/gxa/experiment/E-GEOD-20266 |
| Identifiers.org URI | http://www.ebi.ac.uk/gxa/experiment/E-GEOD-20266 |


In addition, several databases available through this RDF platform that EMBL-EBI helps produce use identifiers.org exclusively for their Linked Data URIs. These are typically collaborations with other institudes (i.e. EMBL-EBI does not "own" the data).

#### Persistence
It is important for the URIs used in Linked Data to be persistent - that is, to continue to resolve in the future. This may be especially important if you are considering using identifiers.org as a source of primary Linked Data URIs for your data.

Whilst we would like to be able to offer a guarantee that all rdf.ebi.ac.uk and identifiers.org URIs will always resolve, all of our services are inevitably dependent on their funding and this is therefore not possible. However, we aim for this to be the case for as long as our resources allow and demand exists. All of our databases have different funding cycles, and all are least partially dependent on external grants. In addition, all URIs provided by the datasets available on the RDF Platform will be maintained throughout the project lifecycle, at a minimum.

#### URIs for EBI data
RDF data is of most value when it can be linked to other datasets. Sometimes this is harder than it needs to be because it is not always clear which URIs to use when referring to a particular piece of data. This might be because there are multiple representations of a dataset produced by different people at the same time, for example. In order to try to make this easier where we can, this page describes how URIs for EMBL-EBI datasets are constructed, and what they resolve to.

##### EMBL-EBI branded data
Many of the databases that EMBL-EBI makes available carry the EMBL-EBI-brand, and the primary web address for the database is on the ebi.ac.uk domain. For any new RDF data produced from these databases, we apply a consistent format to the URIs that are minted. So far, this includes:

* Gene Expression Atlas
* ChEMBL

**Resource URIs**
All URIs for Resources in these datasets will have a URI like this:

>http://rdf.ebi.ac.uk/resource/<dataset>/<something>

For example:

>http://rdf.ebi.ac.uk/resource/chembl/molecule/CHEMBL325441


All resource URIs are expected to resolve to a document of some form describing that concept, the format of which will depend on the content type that is negotiated by the web client. This means that software clients can request RDF-XML data, and web browsers will receive an HTML representation of the RDF data. Other datasets on the RDF platform may only link to these data using these URIs. For example, ChEMBL must only link to GXA using the URIs defined by the GXA dataset.

All of these concepts must also have equivalent URIs in identifiers.org.

**Dataset URIs**
There are also URI patterns for datasets:

>http://rdf.ebi.ac.uk/dataset/atlas/13.07

These URIs identify the datasets themselves, and are used to represent the provenance of the data (versions, dates, etc). The URIs can be dereferenced in the same way as Resource URIs. That is, web clients can negotiate the content type of the document that is returned, receiving either RDF provenance data or an HTML representation of that RDF.

**Vocabulary URIs**
The datasets within the RDF Platform make use of several ontologies and external vocabularies to describe the instance data. They also make use of vocabularies that are specific to the dataset. These vocabularies can provide classes and predicates that have a narrow focus (i.e. are specific to the data), and provide a way to map the data onto one or more external ontologies such as the [Semantic Science Integrated Ontology](https://github.com/micheldumontier/semanticscience). Examples of the URIs used for these vocabularies include:

>http://rdf.ebi.ac.uk/terms/atlas
>http://rdf.ebi.ac.uk/terms/atlas/Experiment

**Data from our collaborations**
Other datasets that EMBL-EBI is involved in the production of are collaborations with other institutes, and have their own domain name. We treat these collaborations in the same way we treat external datasets: we allow them to determine their own URI formats.

So far, this includes:
* UniProt (using purl.uniprot.org/)
* Reactome (using identifiers.org/reactome/)
* BioModels (using identifiers.org/biomodels.db/)
