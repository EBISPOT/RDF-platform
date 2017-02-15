## Introduction  

#### What are RDF, Linked Data and the Semantic Web?
The Resource Description Framework (RDF) is a family of web standards maintained by the World Wide Web Consortium (W3C). It can be used as a way to represent, share and interact with data on the web. Broadly, data that can be linked together by their use of RDF technologies are referred to as Linked Data, and taken together they are often referred to as the Semantic Web or sometimes Web 3.0. RDF encompasses a number of different technologies including a mechanism to model data, formats to store it, and a language to query it (SPARQL).

#### What is the Point?
The World Wide Web has transformed the way information can shared, discovered and consumed by humans. Its success was made possible largely because of the ubiquity of the technologies used to build it: these technologies abstract out the network protocols and physical location of information, allowing web content to appear to be seamlessly interconnected by hyperlinks. The Semantic Web seeks to extend this abstraction to the documents in which content is encoded, as well as the software applications that can consume them.

What does this mean? The vision of a Semantic Web is one in which a web client is not only able to understand how to communicate with web servers, parse documents and present them on a screen, but also to process and understand the information that is contained within them. By following the semantic rules specified by those documents, the client will be able to answer complex questions from a user, without the user needing to specify any logic for how to understand a particular document/file.

#### What Does This Mean for Bioinformatics?
In practice, today's Semantic implementations are perhaps rather less seamless and automatic than envisioned, but expressing data available via RDF still has some value in contexts where it is necessary to make use of abundant and varied information.

In bioinformatics, the process of data integration is a large component of research effort and time - parsing and converting files, and understanding their contents. If information is made available via Semantic Web technologies, the hope is that these syntactic elements are eliminated, reducing the process down to the semantics - i.e. framing the question. The downside is that the understanding of how to make use of the technology - both in creating content and making use of it - is not widespread.

## RDF First Principles

#### Triples and Graphs

The RDF data model is based around the central idea of representing all information as a collection of statements, each of which has three components: a subject, a predicate (relationship), and an object. These statements are called triples.

![Diagram of an RDF statement](https://github.com/EBISPOT/RDF-platform/blob/gh-pages/static/introduction/example1.png?raw=true)


The subject can be any concept to which some sort of property or annotation can be attached. They do not have to be real-world things. For example, "London" is a concept representing a real-world place, and "summer" is an abstract concept. The object in a triple can also be a concept, or alternatively it may be a simple data type such as a number or piece of text. The predicate is the relationship between the subject and the object, for example "colour". A common predicate is "type", which provides a useful way to classify concepts so that they can be referred to as a group.

![Diagram of an RDF statement example2](https://github.com/EBISPOT/RDF-platform/blob/gh-pages/static/introduction/example2.png?raw=true)

Each of the three components of a triple can itself be used in other triples. When a collection of triples are linked together in this way they form a directed graph.

![Diagram showing a more complex example of an RDF graph](https://github.com/EBISPOT/RDF-platform/blob/gh-pages/static/introduction/example3.png?raw=true)

By representing data as RDF, the relationships between components and properties are made explicit. The schema or data model does not need to be defined separately - it is inherent in the data themselves. This makes it possible for a computer to "understand" the data without needing to be taught the meanings of every field. A benefit of organising the data in a semantic manner such as this is that it becomes possible to answer a wide variety of questions about the data without needing to format the data to match beforehand. For example, from the above diagram you may be able to see that, by following the links within the data, it should be possible to answer questions like "what are the names of all animals with four legs?" and more besides.

#### Storing RDF Data

In order for RDF data to link together properly, it is necessary for every concept - everything that can be referred to in some way - to use a unique identifier. It is also important to use the same identifiers to refer to the same concepts. In RDF, this is accomplished by using Uniform Resource Identifiers (URIs).

![Diagram showing the use of URIs in RDF data](https://github.com/EBISPOT/RDF-platform/blob/gh-pages/static/introduction/example4.png?raw=true)

When it comes to communicating and storing (serialising) RDF data, there are several standard formats. Despite there being more than one format, they are inherently interchangeable because all of the differences between datasets are in the data themselves, and not the file format. One example of a format is N-Triples, which uses a simple 3-column representation:

```
<http://creatures.com/animals/1234> <http://xmlns.com/foaf/0.1/name> "Rex"
```
 

The RDF-XML format is very commonly used, and provides some additional features. Note the use of XML namespaces to make long URIs more readable:

```
<rdf:RDF
 xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
 xmlns:animals="http://creatures.com/animals/"
 xmlns:terms="http://creatures.com/terms/"
 xmlns:foaf="http://xmlns.com/foaf/0.1/">
    <rdf:Description rdf:about="animals:1234">
        <foaf:name>Rex</foaf:name>
        <rdf:type rdf:resource="terms:dog" />
    </rdf:Description>
</rdf:RDF>
```

#### Querying the data

Like most data, RDF data can be stored in databases and queried in order to extract subsets and answer targeted questions. A triple store is a type of database that is especially designed to store RDF data. These are analogous to traditional relational databases, which store table-based data. Triple stores usually support a programmatic interface for querying the data called SPARQL. SPARQL has some similarity in its syntax to SQL, but is specific to RDF data and uses HTTP as its communication protocol.

HTTP is the transport layer of the Web, and SPARQL endpoints are able to communicate with each other using it. It is therefore possible to execute SPARQL queries over the Web that make use of multiple SPARQL endpoints. This is called federation.

This is an example of a SPARQL query:

```
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?name
WHERE {
    ?animal foaf:name ?name .
}
```

#### Further Reading 
There are many resources on the web where you can learn more about the philosophy and structure of RDF data. One example is the  [Semantic University](http://www.cambridgesemantics.com/semantic-university/getting-started-semantics), from Cambridge Semantics.


