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
![toplevelclassstructure](../static/biomodels/topLevelClassStructure-424x557.jpeg)

### Top level property structure
![toplevelproperty](../static/biomodels/topLevelPropertyStructure-851x648.jpeg)

### Common properties
![commonProperties](../static/biomodels/commonProperties.jpeg)

### SBMLModel
![SBMLmodel](../static/biomodels/sbmlModelProperties.jpeg)

### FunctionDef
![FunctionDef](../static/biomodels/functionDefProperties.jpeg)

### UnitsDef
![UnitDef](../static/biomodels/unitsDefProperties.jpeg)

### Compartment
![Compartment](../static/biomodels/compartmentProperties.jpeg)

### Species
![Species](../static/biomodels/speciesProperties.jpeg)

### Parameter
![Parameter](../static/biomodels/parameterProperties.jpeg)

### Initial Assignment
![initialAssignment](../static/biomodels/initAssignProperties.jpeg)

### Rule
![Rule](../static/biomodels/ruleProperties.jpeg)

### Constraint
![Constraint](../static/biomodels/constraintProperties.jpeg)

### Reaction
![Reaction](../static/biomodels/reaction.jpeg)

### Event
![Event](https://github.com/EBISPOT/RDF-platform/blob/gh-pages/static/biomodels/eventProperties.jpeg?raw=true)
