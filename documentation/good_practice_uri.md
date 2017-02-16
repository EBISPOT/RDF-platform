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
