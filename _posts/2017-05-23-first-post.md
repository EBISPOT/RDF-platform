---
layout: post
title: "New RDF platform released!"
date: 2017-05-22
---
EBI's RDF platform gets a major update! This is the beta release, which will soon replace the old platform. Read on for more information:

* **New infrastructure:** The new platform has one SPARQL Endpoint that unifies all the data (except for UniProt, which remains in the SPARQL endpoint mainatined by SIB). All SPARQL requests must now go to */services/sparql*, and queries to the proevious *services/<datasource>/sparql* will get redirected. Having all the data together will make exploring connections between resources possible without query federation. Each dataset is loaded into separate named graphs - so be sure to ony query the subset you need to get the best performance. 

* **Updated Data:** Some RDF data in our old platform was out of data, we celebrate the release of the new platform with updated data across the whole platform. We simplified our update process a lot so you can expect more frequent updates to the platform in sync with the source databases.

* **New datasources:** Until now the platform contained data from Ensembl, ChEMBL, Reactome, Biosamples, Biomodels and ExpressionAtlas. The RDF platform now host data from the *Ontology Lookup Service (OLS)*, which means that more than 150 ontologies are now available in the platform with each ontology available in its own graph. We plan to add new EBI datasource in the future.

* **New layout and content:** We've given the platform a face lift to be inline iwth the latest EBI styles. The documentation pages have also been updated to refelect the changes in some of the RDF schemas. 

* **Updates to Lodestar:** We added new functionality to our Linked Data Browser, we offer a *query history* that should help you while playing around with queries.  We also provide a tab that conveniently lists all the named graphs. 

* **New data export:** Be aware that the existing data exports for some datasources (ExpressionAtlas) was re-written and therefore also the RDF Model changed slightly! We hope to improve the models in the future and if there are bigger changes, we will let you know.
