---
layout: default
title: Biosamples
permalink: RDF-platform/documentation/biosamples.html
---
## Documentation Biosamples

The schema for the Biosamples dataset, shown below mostly reflects the SampleTab format and the entities that can be seen on the Biosamples web site. We tried to reuse existing ontologies as much as possible. However, we have defined a small application ontology for covering those concepts and relationships specific to the Biosamples dataset.

Beyond ontologies used for the core entities, there is a number of biomedical ontologies which are automatically assigned to textual elements by the Zooma tool. For instance, if a sample record in the Biosamples Database is annotated with a 'Characteristic[Organism]' having the value of mus-musculus, Zooma creates a property value that is an OWL individual and is instance of the term 10090 from the NCBI Taxon ontology.

## Schema, Core elements
![biosamples_schema](https://github.com/EBISPOT/RDF-platform/blob/gh-pages/static/biosamples/biosd_samples.png?raw=true)

![biosamples_schema](https://github.com/EBISPOT/RDF-platform/blob/gh-pages/static/biosamples/biosd_attributes.png?raw=true)

#### Relevant Ontologies

* Definitions specific to Biosamples RDF dataset
* Experimental Factor Ontology (EFO)
* Biomedical Investigation Ontology (OBI)
* Information Artifact Ontology (IAO)
* Semantic Science Ontology (SIO)
* NCBI Taxonomy
* Chemical Entities of Biological Interest (ChEBI)


#### Further Documentation
* Slides from the SWAT4LS 2014 tutorial
* Webminar given on 23/6/2015
* BioSD Linked Data, lessons learned (BiomedBridges Symposium, 17/11/2015)
