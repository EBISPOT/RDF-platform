---
layout: default
title: Biomodels

---

## BioModels documentation

Documentation for the BioModels Linked Dataset

BioModels linked data set contains all curated and non curated SBML models in the BioModels repository in RDF. Each SBML element is captured as a RDF class. The parent-child relationships between the elements and the attributes are captured using RDF properties. An additional property is introduced to capture the curated and non-curated status of each model. The diagrams below show a detailed representation of the schema.

Namespace prefixes:
   - sbmlRdf - http://identifiers.org/biomodels.vocabulary
   - bqbiol - http://biomodels.net/biology-qualifiers
   - bqmodel - http://biomodels.net/model-qualifiers


### Top level class structure
![toplevelclassstructure](/rdf/static/biomodels/topLevelClassStructure-424x557.jpeg)

### Top level property structure
![toplevelproperty](/rdf/static/biomodels/topLevelPropertyStructure-851x648.jpeg)

### Common properties
![commonProperties](/rdf/static/biomodels/commonProperties.jpeg)

### SBMLModel
![SBMLmodel](/rdf/static/biomodels/sbmlModelProperties.jpeg)

### FunctionDef
![FunctionDef](/rdf/static/biomodels/functionDefProperties.jpeg)

### UnitsDef
![UnitDef](/rdf/static/biomodels/unitsDefProperties.jpeg)

### Compartment
![Compartment](/rdf/static/biomodels/compartmentProperties.jpeg)

### Species
![Species](/rdf/static/biomodels/speciesProperties.jpeg)

### Parameter
![Parameter](/rdf/static/biomodels/parameterProperties.jpeg)

### Initial Assignment
![initialAssignment](/rdf/static/biomodels/initAssignProperties.jpeg)

### Rule
![Rule](/rdf/static/biomodels/ruleProperties.jpeg)

### Constraint
![Constraint](/rdf/static/biomodels/constraintProperties.jpeg)

### Reaction
![Reaction](/rdf/static/biomodels/reaction.jpeg)

### Event
![Event](/rdf/static/biomodels/eventProperties.jpeg)
