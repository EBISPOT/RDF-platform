---
layout: default
title: Running locally
permalink: RDF-platform/documentation/runLocally.html
---
## Running our SPARQL endpoints locally <a name="Running-our-SPARQL-endpoints-locally"></a>

If you would like more control over access to the EMBL-EBI RDF data, or perhaps to combine it with other RDF data, you can run your own SPARQL endpoint. This page will help you through the steps of compiling and installing the Virtuoso open source database, loading our RDF data, and running a basic query using the default web interface.

#### Download Virtuoso
We recommend version 6.1.7.2, available in source form from OpenLink's git repository:

> cd ~/src <br>
> wget https://github.com/openlink/virtuoso-opensource/archive/v6.1.7.2.zip <br>
> unzip v6.1.7.2.zip <br>
> cd ~/src/virtuoso-opensource-6.1.7.2 <br>
> ./configure --prefix=/usr/local/virtuoso <br>
> ./autogen.sh <br>
> make <br>
> make install

#### Start Virtuoso
> /usr/local/virtuoso/bin/virtuoso-t

#### Load the Data
This example would work for loading version 13.07 of the "atlas" dataset:

<blockquote>
/usr/local/virtuoso/bin/isql <br>
SQL> ld_dir('/data/atlas/13.07', '*void*', 'http://rdf.ebi.ac.uk/dataset/atlas/description'); <br>
SQL> ld_dir('/data/atlas/13.07', '*.rdf', 'http://rdf.ebi.ac.uk/dataset/atlas/13.07'); <br>
SQL> ld_dir('/data/atlas/13.07', '*.ttl', 'http://rdf.ebi.ac.uk/dataset/atlas/13.07'); <br>
SQL> ld_dir('/data/atlas/13.07', '*.owl', 'http://rdf.ebi.ac.uk/dataset/atlas/13.07'); <br>
SQL> rdf_loader_run(); <br>
SQL> checkpoint; <br>
</blockquote>

Update the description graph with the number of triples, and enable RDFS inferencing (optional)
Again, for version 13.07 of the "atlas" dataset:

<blockquote>
/usr/local/virtuoso/bin/isql <br>
SQL> SPARQL INSERT INTO <http://rdf.ebi.ac.uk/dataset/atlas/description> { <br>
          <http://rdf.ebi.ac.uk/dataset/atlas/13.07> <http://rdfs.org/ns/void#triples> ?count <br>
        } WHERE { <br>
          { <br>
            select count(*) as ?count where { <br>
              GRAPH <http://rdf.ebi.ac.uk/dataset/atlas/13.07> { <br>
                ?s ?p ?o <br>
              } <br>
            } <br>
          } <br>
        }; <br>
SQL> rdfs_rule_set ('default-rules', 'http://rdf.ebi.ac.uk/dataset/atlas/13.07'); <br>
SQL> checkpoint; <br>
</blockquote>
