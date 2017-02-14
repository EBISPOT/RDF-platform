##Documentation Ensembl

The data described by RDF is broadly similar to the concepts found in Ensembl APIs and services. In case of confusion, it can be helpful to look up a feature on www.ensembl.org

Where possible, we have attempted to use pre-existing vocabulary from other ontologies.

If you wish to download the RDF and use it directly, you will need to also download and import the supporting ontology files: https://github.com/Ensembl/VersioningService/tree/master/rdf-support-files

Without the supporting ontologies, certain types of query will not work, such as generalised external reference queries in our set of examples.


![ensembl_schema](https://github.com/EBISPOT/RDF-platform/blob/gh-pages/static/ensembl/ensembl_schema-1180x980.png?raw=true)

###Section by section
####Features

All features possess a dc:identifer link to the Ensembl stable identifier. rdfs:label is used to provide the favourite common name for the feature, while skos:altLabel is used to list synonyms. Exons can be treated as unordered using the has_part predicate, or ordered via has_ordered_part. The "in taxon" relation is sufficient for well annotated multi-cellular species, but taxonomy is insufficient to delineate features in all organisms. That being the case it is better to localise via assembly. See genomic locations below.

Homology is described via orthology and paralogy.

![ensembl_gene_model](https://github.com/EBISPOT/RDF-platform/blob/gh-pages/static/ensembl/ensembl_gene_model-760x539.png?raw=true)

####External References
Ensembl regularly recomputes the equivalence of entities described by many bioinformatics resources. Different measures of identity are used, including positional similarity, alignment scores, band-wagon identifiers known as dependent references from a trusted source, as well as manual assertions of identity. As a result there are many kinds of identity expressed in these references, so all predicates are subproperties of skos:related.


![ensembl_xref](https://github.com/EBISPOT/RDF-platform/blob/gh-pages/static/ensembl/ensembl_xref_section-396x467.png?raw=true)

####Genomic Locations
All features have a position specified by the FALDO vocabulary via the faldo:location predicate. Start positions respect the strand upon which a feature is found, differing from the Ensembl APIs. The FALDO positions reference a region which in almost all cases will be a chromosome given a URI of the form <base_uri>/<species_name>/<assembly>/<position_string>. The position string is a familiar combination of region name (e.g. chromsome), start, end and strand. The species name is what we call a production name and is unique for each species, but typically looks like a binomial latin name, e.g. <http://rdf.ebi.ac.uk/resource/ensembl/homo_sapiens/GRCh38/10>

![ensembl_xref](https://github.com/EBISPOT/RDF-platform/blob/gh-pages/static/ensembl/ensembl_faldo_section-628x442.png?raw=true)
