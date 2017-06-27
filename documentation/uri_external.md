---
layout: default
title: URI for external data
---
## URIs for external data
#### Introduction
One of the strengths of Semantic Web technologies is the implicit linkability of separate datasets. However, the utility of this link depends on the use of appropriate URIs - both for the subject/object and the predicate. It is important for two datasets to use the same URI when referring to the same concept, to use different URIs for concepts that are not the same, and to represent links between concepts in a semantically correct way.

Often it may make sense to link to an important concept outside your own dataset, but that concept does not have an obvious URI. This could be because the authority (owner) for a data item may not have an RDF representation, or there may be candidate URIs but they do not seem "official" or follow good practices. At EMBL-EBI we have developed a policy for how we will handle such cases on an ongoing basis.

#### Ask the Authority
It is important to give thought to the URIs you use both for a piece of data or class that belongs to someone else, and the predicate used to link to it. If there is already a good URI for a concept, you should endeavour to use it, thus benefiting from the inherent linkability of RDF. However, if the URI is provided by one or more third parties or there is no such URI, here at EBI our policy is:

> Ask the authority for a suitable URI scheme (see "Good URIs" below), either provided by themselves or a third party.
If they are unable to provide one, use identifiers.org.

#### Good URIs
When we approach data providers for guidance on their preferred URI schemes, we ask that the URIs be:

* *Globally unique:* One URI should never refer to two different concepts at the same time, even ones that may seem equivalent.
* *Persistent:* A URI should continue to resolve for the forseeable future. The URI should survive between website re-engineering exercises, for example.
* *Stable:* A URI should never be re-used for different things between data releases, even if the original is deleted.
* *Resolvable (dereferenceable):* Simply, when a user clicks on a URI in their browser, we want them to be redirected to a suitable document. That doesn't necessarily mean it should be capable of returning RDF content.

There are other aspect that third parties may be encouraged to consider around the selection and use of URIs, including various best practices.

#### Using Third Party URIs
When choosing predicates, we try to:

* Avoid re-inventing the wheel. Use existing standard ontologies/vocabularies where possible.
* Be sure the semantics are accurate. It is important not to make assumptions about the meaning of a concept, especially if it is not "your" concept. The authority may have additional insight that is of use to you here. If in doubt, err on the side of a weaker semantic. In particular, be very careful of transitive properties and especially owl:sameAs.
