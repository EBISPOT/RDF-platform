---
layout: post
title: "New RDF platform released!"
date: 2017-05-22
---
EBI's RDF platform gets a major update! This is the beta release, which will soon replace the old platform. Read on for more information:

* **New infrastructure:** The new platform has one SPARQL Endpoint that unifies all the data (except for uniprot, which is run from Switzerland). You might want to update your URLS to */services/sparql* from *services/Datasource/sparql*. Having all data combined should reduce the need of federated queries and therefore speed up many queries! In addition, the data is separated in named Graphs - make use of that fact to further speed up your queries if you only need a part of it!

* **Updated Data:** Some RDF data in our old platform was out of data, we celebrate the release of the new platform with updated data across the whole platform. We simplified our update process a lot, therefore you can expect to RDF platform to be in synch with our databases in the future.

* **New datasources:** Until now the platform contained data from Ensembl, ChEMBL, Reactome, Biosamples, Biomodels and ArrayAtlas. The RDF platform now host data from the *Ontology Lookup Service (OLS)*, which means that more than 150 ontologies are now available in the platform. We plan to add new EBI datasource is the future.

* **New layout and content:** The old platform was dated - the updated page gets new face and the documentation and help pages were updated to reflect the changed we made.

* **Updates to Lodestar:** We added new functionality to our Linked Data Browser, we offer a *query history* that should help you while playing around with queries.  

* **New data export:** Be aware that the existing data exports for some datasources (ExpressionAtlas) was re-written and therefore also the RDF Model changed slightly! We hope to improve the models in the future and if there are bigger changes, we will let you know.
