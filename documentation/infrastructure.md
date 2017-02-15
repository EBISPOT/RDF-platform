1. [Technical documentation](#Technical-documentation)
2. [Provenance ](#Provenance)
3. [Running our SPARQL endpoints locally](#Running-our-SPARQL-endpoints-locally)
4. [The role of identifiers.org](#The-role-of-identifiers.org)

## Technical documentation <a name="Technical documentation"></a>

Most of the services on the RDF platform are hosted by EMBL-EBI (with the exception of the UniProt SPARQL endpoint, which is hosted by SIB). This page gives an overview of the major components of the EMBL-EBI RDF services.

We serve all requests through a load-balanced redundant stack of software and hardware components. Thus, should a fault occur in one of the hardware or software components, service can be maintained. We use a virtualised infrastructure.


#### SPARQL Endpoint

Each SPARQL endpoint comprises two separate software components - the LodeStar web application and the triple store.

This diagram illustrates the architecture of our SPARQL infrastructure.

The LodeStar application is a Java and Javascript web application designed to serve two functions:

    A SPARQL endpoint proxy for the backend triple store. This abstraction layer provides some control over the executed SPARQL queries, allong with a graphical frontend.
    A graphical user interface on top of generic RDF data, providing a human-readable HTML-based representation of an RDF resource. The data presented for a resource are essentially the product of a SPARQL DESCRIBE query.

The triple store is currently using an in-memory Virtuoso implementation, backed by a hybrid flash-disk storage array.

#### URL Resolver

The URL resolver is very simple. It handles HTTP requests for data on the rdf.ebi.ac.uk domain, inspects the request headers to determine the content type, and responds with a redirect to the appropriate resource (HTML, RDF-XML or N3). That resource is ultimately served by the LodeStar web application. 



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


## Running our SPARQL endpoints locally <a name="Running our SPARQL endpoints locally"></a>

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

## The role of identifiers.org
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

Whilst we would like to be able to offer a guarantee that all rdf.ebi.ac.uk and identifiers.org URIs will always resolve, all of our services are inevitably dependent on their funding and this is therefore not possible. However, we aim for this to be the case for as long as our resources allow and demand exists. All of our databases have different funding cycles, and all are least partially dependent on external grants. Identifiers.org is currently funded through ...IDENTIFIERS.ORG_FUNDING.... In addition, all URIs provided by the datasets available on the RDF Platform will be maintained throughout the project lifecycle, at a minimum.

#### URIs for EBI data
RDF data is of most value when it can be linked to other datasets. Sometimes this is harder than it needs to be because it is not always clear which URIs to use when referring to a particular piece of data. This might be because there are multiple representations of a dataset produced by different people at the same time, for example. In order to try to make this easier where we can, this page describes how URIs for EMBL-EBI datasets are constructed, and what they resolve to.

##### EMBL-EBI branded data
Many of the databases that EMBL-EBI makes available carry the EMBL-EBI-brand, and the primary web address for the database is on the ebi.ac.uk domain. For any new RDF data produced from these databases, we apply a consistent format to the URIs that are minted. So far, this includes:

* Gene Expression Atlas
* ChEMBL

**Resource URIs**
All URIs for Resources in these datasets will have a URI like this:
```
http://rdf.ebi.ac.uk/resource/<dataset>/<something> 
```
For example:
```
http://rdf.ebi.ac.uk/resource/chembl/molecule/CHEMBL325441
```

All resource URIs are expected to resolve to a document of some form describing that concept, the format of which will depend on the content type that is negotiated by the web client. This means that software clients can request RDF-XML data, and web browsers will receive an HTML representation of the RDF data. Other datasets on the RDF platform may only link to these data using these URIs. For example, ChEMBL must only link to GXA using the URIs defined by the GXA dataset.

All of these concepts must also have equivalent URIs in identifiers.org.

**Dataset URIs**
There are also URI patterns for datasets:
```
http://rdf.ebi.ac.uk/dataset/atlas/13.07 
```
These URIs identify the datasets themselves, and are used to represent the provenance of the data (versions, dates, etc). The URIs can be dereferenced in the same way as Resource URIs. That is, web clients can negotiate the content type of the document that is returned, receiving either RDF provenance data or an HTML representation of that RDF.

**Vocabulary URIs**
The datasets within the RDF Platform make use of several ontologies and external vocabularies to describe the instance data. They also make use of vocabularies that are specific to the dataset. These vocabularies can provide classes and predicates that have a narrow focus (i.e. are specific to the data), and provide a way to map the data onto one or more external ontologies such as the [Semantic Science Integrated Ontology](https://github.com/micheldumontier/semanticscience). Examples of the URIs used for these vocabularies include:
```
http://rdf.ebi.ac.uk/terms/atlas
http://rdf.ebi.ac.uk/terms/atlas/Experiment
```
**Data from our collaborations**
Other datasets that EMBL-EBI is involved in the production of are collaborations with other institutes, and have their own domain name. We treat these collaborations in the same way we treat external datasets: we allow them to determine their own URI formats.

So far, this includes:
* UniProt (using purl.uniprot.org/)
* Reactome (using identifiers.org/reactome/)
* BioModels (using identifiers.org/biomodels.db/)


## URIs for external data
#### Introduction
One of the strengths of Semantic Web technologies is the implicit linkability of separate datasets. However, the utility of this link depends on the use of appropriate URIs - both for the subject/object and the predicate. It is important for two datasets to use the same URI when referring to the same concept, to use different URIs for concepts that are not the same, and to represent links between concepts in a semantically correct way.

Often it may make sense to link to an important concept outside your own dataset, but that concept does not have an obvious URI. This could be because the authority (owner) for a data item may not have an RDF representation, or there may be candidate URIs but they do not seem "official" or follow good practices. At EMBL-EBI we have developed a policy for how we will handle such cases on an ongoing basis.

#### Ask the Authority
It is important to give thought to the URIs you use both for a piece of data or class that belongs to someone else, and the predicate used to link to it. If there is already a good URI for a concept, you should endeavour to use it, thus benefiting from the inherent linkability of RDF. However, if the URI is provided by one or more third parties or there is no such URI, here at EBI our policy is:

Ask the authority for a suitable URI scheme (see "Good URIs" below), either provided by themselves or a third party.
If they are unable to provide one, use identifiers.org.

#### Good URIs
When we approach data providers for guidance on their preferred URI schemes, we ask that the URIs be:

Globally unique. One URI should never refer to two different concepts at the same time, even ones that may seem equivalent.
Persistent. A URI should continue to resolve for the forseeable future. The URI should survive between website re-engineering exercises, for example.
Stable. A URI should never be re-used for different things between data releases, even if the original is deleted.
Resolvable (dereferenceable). Simply, when a user clicks on a URI in their browser, we want them to be redirected to a suitable document. That doesn't necessarily mean it should be capable of returning RDF content.
There are other aspect that third parties may be encouraged to consider around the selection and use of URIs, including various best practices.

#### Using Third Party URIs
When choosing predicates, we try to:

* Avoid re-inventing the wheel. Use existing standard ontologies/vocabularies where possible.
* Be sure the semantics are accurate. It is important not to make assumptions about the meaning of a concept, especially if it is not "your" concept. The authority may have additional insight that is of use to you here. If in doubt, err on the side of a weaker semantic. In particular, be very careful of transitive properties and especially owl:sameAs.

## Good Practice for URIs
#### Good URIs
We want the RDF that we make available to be as useful as possible. That means that we have certain standards for our own URIs, and as far as possible we would like to extend those to URIs we don't "own", for the benefit of the user experience.

When we approach data providers for guidance on their preferred URI schemes, we ask that the URIs be:

* Globally unique. One URI should never refer to two different concepts at the same time, even ones that may seem equivalent.
* Persistent. A URI should continue to resolve for the forseeable future. The URI should survive between website re-engineering exercises, for example.
* Stable. A URI should never be re-used for different things between data releases, even if the original is deleted.
* Resolvable (dereferenceable). Simply, when a user clicks on a URI in their browser, we want them to be redirected to a suitable document. That doesn't necessarily mean it should be capable of returning RDF content.

In practice, there are various principles that help in satisfying these conditions. For example, you can use purpose-made URIs that are served by simple PURL (persistent URL) software, or use third party services like identifiers.org. These methods will abstract out the identifier from a webpage describing it, and will let you change the URLs for your website later without affecting the RDF. PURL resolvers can also use HTTP redirects to automatically send browsers to a HTML page (or serve RDF to machines), making this a seamless user experience.

See also: http://www.w3.org/TR/cooluris/

#### URIs, Resources and Documents
Commonly debated in the Linked Data community is the issue of how to deal with URIs that are used to identify abstract concepts (resources) rather than web documents. In particular, what exactly should be returned in an HTTP request for that URI? Strictly speaking, neither physical objects (such as a person) nor abstract concepts (such as an organisation) should ever be given a URI in the HTTP namespace that can be directly dereferenced. In HTTP, only information resources (documents) should be dereferenceable. People cannot be downloaded, sadly. However the distinction is not obvious to the wider web community, and it is convenient to use HTTP URIs that resolve to a document describing the resource. Unfortunately this can cause problems, for example when it becomes necessary at a later date to distinguish between the resource itself (e.g. a person) and the resource that describes them (e.g. their social networking profile).

This is particularly relevant to Linked Data in the life sciences because a large number of the important URIs actually describe resources that are not really "on the web" - for example a UniProt protein, a systems model, or a microarray experiment.

The current W3C recommendation is that the URIs for these resources should use one of two methods to make them not directly dereferenceable:

* Use URIs containing hash fragments (e.g. http://example.com/things/thing1#realthing). This takes advantage of the fact that web browsers strip the fragment when they request documents over HTTP, meaning the server can return a document at http://example.com/things/thing1 that describes http://example.com/things/thing1#realthing.
* Use the HTTP 303 See Other status code to redirect to a separate document that describes the content.

EMBL-EBI datasets tend to use the latter approach. As described in the sections above, when you issue an HTTP request against a resource in the rdf.ebi.ac.uk domain, you will be redirected to a document that describes the resource. However, we are not strong advocates on either side of the debate.

#### Opaque URIs
A fundamental axiom of the Web is that URIs are opaque. That is, software should never try to derive any particular meaning from the URI string itself. It is important that software treats all URIs as opaque so as not to make assumptions about data (e.g. a document's content type), but it can also be helpful to consider whether a URI should also be opaque to humans, especially for Linked Data where correct semantics are important. The most common example of where this can be a problem is the conflation of concepts and their names.

Identifiers for data should never change their meaning over time, but names for things can and do change. Thus, if the name of a concept is somehow encoded in its identifier (in this case a URI), this can create a problem when that name is later changed. For example, imagine a dataset is published that contains this triple:
```
<http://example.com/people/janet.thornton> foaf:knows <http://example.com/people/sally.smith>
```
Suppose Sally changes her name, for example if she marries. Either the URI will be changed to include her new name, or Sally must continue using the URI with her old name in it. Depending on how the situation is handled, the link between two datasets published before Jane was married and afterwards may become disconnected, or there may be usability issues around having to know Jane's maiden name.

For this reason, many people advocate opaque URIs, such as:
```
<http://example.com/people/123456789> foaf:knows <http://example.com/people/987654321>
```
A human can infer that the above URIs refer to people, but not anything about those people that my change such as their name.

However, in reality there are downsides to this approach. Although Semantic Web technologies are consumable by machines, the uptake of the technology is likely to be dependent on whether humans can use it effectively. There is clearly a value to a human being able to recognise some meaning of a URI when it appears in its raw form, for the same reasons that programmers comment their code and why XML might be used in certain situations over binary file formats. At the same time, RDF does have other mechanisms to deal with URIs that change. For example, take these triples together:

```
<http://example.com/people/janet.thornton> foaf:knows <http://example.com/people/sally.smith> .
<http://example.com/people/sally.jones> foaf:knows <http://example.com/people/barack.obama> .
<http://example.com/people/sally.smith> owl:sameAs <http://example.com/people/sally.jones>
```

It is still possible to establish programmatically that Janet and Barack have a common acquaintance, but the URIs are "human readable".

For the above reasons, EMBL-EBI does not take an absolute position on whether URIs should be opaque or not. Rather, we consider this to be best resolved on case-by-case basis.

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
