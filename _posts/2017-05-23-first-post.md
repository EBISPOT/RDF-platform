---
layout: post
title: "New RDF platform released!"
date: 2017-05-30
---
EBI's RDF platform gets a major update! This is the beta release, which will soon replace the old platform. Read on for more information:

* **New infrastructure:** The new platform has one SPARQL Endpoint that unifies all the data (except for UniProt, which remains in the SPARQL endpoint maintained by SIB). All SPARQL requests must now go to ***/services/sparql***, and queries to the previous *services/&#60;datasource>/sparql* will get redirected. Having all the data together will make exploring connections between resources possible without query federation. Each dataset is loaded into a [separate named graph](/rdf/documentation/sparql-endpoints), so be sure to only query the subset you need to get the best performance.  

* **Updated Data:** We celebrate the release of the new platform with [updated data](/rdf/datasets) across the whole platform.

* **Update Process:**  We simplified the process to update data a lot - so you can expect more frequent updates, the platform should be in sync with the source databases. The update process of the platform is driven by [VoID files](/rdf/documentation/provenance) that satisfy the [HCLS standard for Dataset Descriptions](https://www.w3.org/TR/hcls-dataset/).

* **New datasources:** Until now the platform contained data from Ensembl, ChEMBL, Reactome, Biosamples, Biomodels and ExpressionAtlas. The RDF platform now host data from the [Ontology Lookup Service (OLS)](http://www.ebi.ac.uk/ols/index), which means that more than 150 ontologies are now available in the platform with each ontology available in its own graph. We plan to add new EBI datasource in the future.

* **New layout and content:** We've given the platform a face lift to be inline with the latest EBI styles. The documentation pages have also been updated to reflect the changes in some of the RDF schemas.

* **Updates to Lodestar:** We added new functionality to our Linked Data Browser, we offer a *query history* that should help you while playing around with queries.  We also provide a tab that conveniently lists all the named graphs.

* **New data export:** Be aware that the data exports for some datasources changed! **ExpressionAtlas** data export was re-written and therefore also the RDF Model changed slightly! **Biomodels** decided to export only curated models! We hope to improve the models in the future and if there are bigger changes, we will let you know.
