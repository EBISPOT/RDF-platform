---
layout: default
title: Biosamples
permalink: RDF-platform/documentation/biosamples.html
---
## Documentation Biosamples

The schema for the Biosamples dataset, shown below mostly reflects the [SampleTab format](https://www.ebi.ac.uk/biosamples/help/st.html) and the entities that can be seen on the Biosamples web site. We tried to reuse existing ontologies as much as possible. However, we have defined a small application ontology for covering those concepts and relationships specific to the Biosamples dataset.

Beyond ontologies used for the core entities, there is a number of biomedical ontologies which are automatically assigned to textual elements by [Zooma](http://www.ebi.ac.uk/spot/zooma/). For instance, if a sample record in the Biosamples Database is annotated with a 'Characteristic[Organism]' having the value of mus-musculus, Zooma creates a property value that is an OWL individual and is instance of the term 10090 from the NCBI Taxon ontology.

## Schema, Core elements
* Follow this link for the Biosamples sample schema: [biosamples_schema](https://github.com/EBISPOT/RDF-platform/blob/gh-pages/static/biosamples/biosd_samples.png?raw=true)
* Follow this link for the Biosamples attributes schema:
[biosamples_schema](https://github.com/EBISPOT/RDF-platform/blob/gh-pages/static/biosamples/biosd_attributes.png?raw=true)

#### Relevant Ontologies

* [Definitions specific to Biosamples RDF dataset](https://github.com/EBIBioSamples/biosd2rdf/blob/master/src/main/assembly/resources/rdf/biosd_terms.ttl)
* [Experimental Factor Ontology (EFO)](http://www.ebi.ac.uk/efo/)
* Biomedical Investigation Ontology (OBI)
* Information Artifact Ontology (IAO)
* Semantic Science Ontology (SIO)
* [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/taxonomy)
* Chemical Entities of Biological Interest ([ChEBI](http://www.ebi.ac.uk/chebi/))


#### Further Documentation
* Slides from the [SWAT4LS 2014 tutorial](https://www.slideshare.net/mbrandizi/biosd-tutorial-2014-editition)
* [Webminar](https://prezi.com/wbby6fk0bqrn/biomedbridges-webinar-2362015/) given on 23/6/2015
* [BioSD Linked Data, lessons learned](https://prezi.com/vxox0pgra6d7/biosd-linked-data-lessons-learned/) (BiomedBridges Symposium, 17/11/2015)
