//Edit this file to add more sources to the website e.g. the table
//Add a specific sparql Query to 'ftplink' if the standard query is not good enough (e.g. for ensembl)
var content={
    "biomodels": {
      "logo": "biomodels_service_logo.gif",
      "exampleText" : "All model elements with annotations to acetylcholine-gated channel complex (GO:0005892)",
      "exampleQuery" : "query=PREFIX%20rdf%3A%20%3Chttp%3A//www.w3.org/1999/02/22-rdf-syntax-ns%23%3E%0D%0APREFIX%20rdfs%3A%20%3Chttp%3A//www.w3.org/2000/01/rdf-schema%23%3E%0D%0APREFIX%20owl%3A%20%3Chttp%3A//www.w3.org/2002/07/owl%23%3E%0D%0APREFIX%20xsd%3A%20%3Chttp%3A//www.w3.org/2001/XMLSchema%23%3E%0D%0APREFIX%20dc%3A%20%3Chttp%3A//purl.org/dc/elements/1.1/%3E%0D%0APREFIX%20dcterms%3A%20%3Chttp%3A//purl.org/dc/terms/%3E%0D%0APREFIX%20foaf%3A%20%3Chttp%3A//xmlns.com/foaf/0.1/%3E%0D%0APREFIX%20skos%3A%20%3Chttp%3A//www.w3.org/2004/02/skos/core%23%3E%0D%0APREFIX%20sbmlrdf%3A%20%3Chttp%3A//identifiers.org/biomodels.vocabulary%23%3E%0D%0A%0D%0ASELECT%20%3FmodelElement%20%3FelementType%20%3Fqualifier%20WHERE%20%7B%20%0D%0A%3FmodelElement%20%3Fqualifier%20%3Chttp%3A//identifiers.org/go/GO%3A0005892%3E%20.%20%20%0D%0A%3Fqualifier%20rdfs%3AsubPropertyOf%20sbmlrdf%3AsbmlAnnotation%20.%20%0D%0A%3FmodelElement%20rdf%3Atype%20%3FelementType%20%0D%0A%7D&amp;render=HTML&amp;limit=25&amp;offset=0"
  },
    "biosamples": {
      "logo": "bsd_service_logo.gif",
      "exampleText" : "Samples treated with alcohol",
      "exampleQuery": "query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dcterms%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+obo%3A+%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2F%3E%0D%0APREFIX+efo%3A+%3Chttp%3A%2F%2Fwww.ebi.ac.uk%2Fefo%2F%3E%0D%0APREFIX+biosd-terms%3A+%3Chttp%3A%2F%2Frdf.ebi.ac.uk%2Fterms%2Fbiosd%2F%3E%0D%0APREFIX+pav%3A+%3Chttp%3A%2F%2Fpurl.org%2Fpav%2F2.0%2F%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+sio%3A+%3Chttp%3A%2F%2Fsemanticscience.org%2Fresource%2F%3E%0D%0APREFIX+atlas%3A+%3Chttp%3A%2F%2Frdf.ebi.ac.uk%2Fterms%2Fatlas%2F%3E%0D%0APREFIX+oac%3A+%3Chttp%3A%2F%2Fwww.openannotation.org%2Fns%2F%3E%0D%0A%0D%0A%23%0D%0A%23%23+All+samples+treated+with+a+compound+of+%27alcohol%27+type+or+a+more+specific+alcohol+type%0D%0A%23++this+is+made+through+a+query+over+the+bioportal+sparql+endpoint+%28ie%2C+a+federated+query%29%0D%0A%23%0D%0ASELECT+DISTINCT+%3Fsmp+%3FpvLabel+%3FpvTypeLabel+%3FpvTypeClass+%3FpvTypeClassLabel%0D%0AWHERE+%7B%0D%0A++SERVICE+%3Chttp%3A%2F%2Fsparql.bioontology.org%2Fontologies%2Fsparql%2F%3Fapikey%3Dc6ae1b27-9f86-4e3c-9dcf-087e1156eabe%3E%0D%0A++%7B%0D%0A%09%3FpvTypeClass%0D%0A%09++rdfs%3AsubClassOf+%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHEBI_30879%3E%3B%0D%0A%09++rdfs%3Alabel+%3FpvTypeClassLabel.%0D%0A++%7D%0D%0A%0D%0A++%3Fpv%0D%0A%09a+%3FpvTypeClass%3B%0D%0A%09atlas%3ApropertyValue+%3FpvLabel%3B+%23+equivalent+to+rdfs%3Alabel%2C+dc%3Atitle%0D%0A%09atlas%3ApropertyType+%3FpvTypeLabel.+%23+equivalent+to+dc%3Atype%0D%0A%0D%0A++%3Fsmp%0D%0A%09a+biosd-terms%3ASample%3B%0D%0A%09biosd-terms%3Ahas-bio-characteristic+%3Fpv.%0D%0A%7D%0D%0A&render=HTML&limit=25&offset=0#loadstar-results-section"
    },
    "chembl" :{
      "logo": "chembl_service.gif",
      "exampleText" : "Find drug-like (but currently not approved) molecules which bind 7TM1 GPCRs with high affinity",
      "exampleQuery": "query=PREFIX%20cco%3A%20%3Chttp%3A//rdf.ebi.ac.uk/terms/chembl%23%3E%0D%0APREFIX%20sio%3A%20%3Chttp%3A//semanticscience.org/resource/%3E%0D%0A%0D%0ASELECT%20%3Fmolecule%0D%0AWHERE%7B%0D%0A%3Chttp%3A//rdf.ebi.ac.uk/resource/chembl/protclass/CHEMBL_PC_1020%3E%20cco%3AhasTargetDescendant%20%3Ftarget%20.%0D%0A%3Ftarget%20cco%3AhasAssay%20%3Fassay%20.%0D%0A%3Fassay%20cco%3AhasActivity%20%3Factivity%20.%0D%0A%3Factivity%20cco%3AhasMolecule%20%3Fmolecule%20%3B%0D%0A%20%20cco%3ApChembl%20%3Fpchembl%20.%0D%0A%3Fmolecule%20%20cco%3AhighestDevelopmentPhase%20%3Fphase%20%3B%0D%0A%20%20sio%3ASIO_000008%20%3Fprop_ro5%20.%0D%0A%3Fprop_ro5%20a%20sio%3ACHEMINF_000312%20%3B%0D%0Asio%3ASIO_000300%20%3Fprop_ro5_val%20.%0D%0AFILTER%28%3Fpchembl%20%3E%206%20%29%0D%0AFILTER%28%3Fphase%20%3C%204%20%29%0D%0AFILTER%28%3Fprop_ro5_val%20%3D%200%20%29%0D%0A%7D%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A&amp;render=HTML&amp;limit=25&amp;offset=0"
    },
    "expressionatlas" : {
      "logo": "atlas_service_logo.gif",
      "exampleText" : "Under what experimental conditions is Ensembl gene ENSG00000129991 (TNNI3) expressed?",
      "exampleQuery": "query=PREFIX%20rdf%3A%20%3Chttp%3A//www.w3.org/1999/02/22-rdf-syntax-ns%23%3E%0D%0APREFIX%20rdfs%3A%20%3Chttp%3A//www.w3.org/2000/01/rdf-schema%23%3E%0D%0APREFIX%20owl%3A%20%3Chttp%3A//www.w3.org/2002/07/owl%23%3E%0D%0APREFIX%20dcterms%3A%20%3Chttp%3A//purl.org/dc/terms/%3E%0D%0APREFIX%20obo%3A%20%3Chttp%3A//purl.obolibrary.org/obo/%3E%0D%0APREFIX%20sio%3A%20%3Chttp%3A//semanticscience.org/resource/%3E%0D%0APREFIX%20efo%3A%20%3Chttp%3A//wwwdev.ebi.ac.uk/efo/%3E%0D%0APREFIX%20atlas%3A%20%3Chttp%3A//rdf.ebi.ac.uk/resource/atlas/%3E%0D%0APREFIX%20atlasterms%3A%20%3Chttp%3A//rdf.ebi.ac.uk/terms/atlas/%3E%0D%0A%0D%0APREFIX%20identifiers%3A%3Chttp%3A//identifiers.org/ensembl/%3E%0D%0A%0D%0ASELECT%20distinct%20%3FdiffValue%20%3FexpUri%20%3FpropertyType%20%3FpropertyValue%20%3Fpvalue%20%20%20%0D%0AWHERE%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%3FexpUri%20atlasterms%3AhasAnalysis%20%3Fanalysis%20.%20%20%20%20%20%20%20%0D%0A%3Fanalysis%20atlasterms%3AhasExpressionValue%20%3Fvalue%20.%20%20%20%0D%0A%3Fvalue%20rdfs%3Alabel%20%3FdiffValue%20.%20%20%20%20%20%20%20%0D%0A%3Fvalue%20atlasterms%3AhasFactorValue%20%3Ffactor%20.%20%20%20%0D%0A%3Ffactor%20atlasterms%3ApropertyType%20%3FpropertyType%20.%20%20%20%20%0D%0A%3Ffactor%20atlasterms%3ApropertyValue%20%3FpropertyValue%20.%20%20%0D%0A%3Fvalue%20atlasterms%3ApValue%20%3Fpvalue%20.%20%20%20%20%20%20%0D%0A%3Fvalue%20atlasterms%3AisMeasurementOf%20%3Fprobe%20.%20%20%20%20%0D%0A%3Fprobe%20atlasterms%3AdbXref%20identifiers%3AENSG00000129991%20.%20%20%0D%0A%7D%20%20%20%20%20%20%20%20%20%20%20%0D%0AORDER%20BY%20ASC%20%28%3Fpvalue%29&render=HTML&limit=25&offset=0#lodestart-sparql-results"
    },
    "reactome" : {
      "logo": "reactome_service.gif",
      "exampleText" : "Pathways that references Insulin (P01308)",
      "exampleQuery": "query=PREFIX%20rdf%3A%20%3Chttp%3A//www.w3.org/1999/02/22-rdf-syntax-ns%23%3E%0D%0APREFIX%20rdfs%3A%20%3Chttp%3A//www.w3.org/2000/01/rdf-schema%23%3E%0D%0APREFIX%20owl%3A%20%3Chttp%3A//www.w3.org/2002/07/owl%23%3E%0D%0APREFIX%20xsd%3A%20%3Chttp%3A//www.w3.org/2001/XMLSchema%23%3E%0D%0APREFIX%20dc%3A%20%3Chttp%3A//purl.org/dc/elements/1.1/%3E%0D%0APREFIX%20dcterms%3A%20%3Chttp%3A//purl.org/dc/terms/%3E%0D%0APREFIX%20foaf%3A%20%3Chttp%3A//xmlns.com/foaf/0.1/%3E%0D%0APREFIX%20skos%3A%20%3Chttp%3A//www.w3.org/2004/02/skos/core%23%3E%0D%0APREFIX%20biopax3%3A%20%3Chttp%3A//www.biopax.org/release/biopax-level3.owl%23%3E%0D%0A%0D%0ASELECT%20DISTINCT%20%3Fpathway%20%3Fpathwayname%20%0D%0AWHERE%20%0D%0A%7B%3Fpathway%20rdf%3Atype%20biopax3%3APathway%20.%20%20%0D%0A%3Fpathway%20biopax3%3AdisplayName%20%3Fpathwayname%20.%0D%0A%3Fpathway%20biopax3%3ApathwayComponent%20%3Freaction%20.%20%0D%0A%3Freaction%20rdf%3Atype%20biopax3%3ABiochemicalReaction%20.%20%0D%0A%7B%20%20%20%20%20%20%20%20%20%20%0D%0A%7B%3Freaction%20%3Frel%20%3Fprotein%20.%7D%20%20%20%0D%0AUNION%20%20%0D%0A%7B%20%20%0D%0A%3Freaction%20%20%3Frel%20%20%3Fcomplex%20.%20%0D%0A%3Fcomplex%20rdf%3Atype%20biopax3%3AComplex%20.%20%20%0D%0A%3Fcomplex%20%3Fcomp%20%3Fprotein%20.%20%0D%0A%7D%7D%20%0D%0A%3Fprotein%20rdf%3Atype%20biopax3%3AProtein%20.%20%0D%0A%3Fprotein%20biopax3%3AentityReference%20%3Chttp%3A//purl.uniprot.org/uniprot/P01308%3E%20%0D%0A%7D%20%20%20%20%0D%0ALIMIT%20100%20%20%0D%0A&render=HTML&limit=25&offset=0#lodestart-sparql-results"
    },
    "ensembl":{
      "logo": "ensembl_full.png",
      "exampleText": "Get all the genes, transcripts and exons on a chromosome",
      "exampleQuery": "query=PREFIX%20rdf%3A%20%3Chttp%3A//www.w3.org/1999/02/22-rdf-syntax-ns%23%3E%0D%0APREFIX%20rdfs%3A%20%3Chttp%3A//www.w3.org/2000/01/rdf-schema%23%3E%0D%0APREFIX%20dcterms%3A%20%3Chttp%3A//purl.org/dc/terms/%3E%0D%0APREFIX%20obo%3A%20%3Chttp%3A//purl.obolibrary.org/obo/%3E%0D%0APREFIX%20sio%3A%20%3Chttp%3A//semanticscience.org/resource/%3E%0D%0APREFIX%20faldo%3A%20%3Chttp%3A//biohackathon.org/resource/faldo%23%3E%0D%0APREFIX%20ensembl%3A%20%3Chttp%3A//rdf.ebi.ac.uk/resource/ensembl/%3E%0D%0APREFIX%20ensembltranscript%3A%20%3Chttp%3A//rdf.ebi.ac.uk/resource/ensembl.transcript/%3E%0D%0APREFIX%20ensemblexon%3A%20%3Chttp%3A//rdf.ebi.ac.uk/resource/ensembl.exon/%3E%0D%0APREFIX%20ensemblprotein%3A%20%3Chttp%3A//rdf.ebi.ac.uk/resource/ensembl.protein/%3E%0D%0APREFIX%20ensemblterms%3A%20%3Chttp%3A//rdf.ebi.ac.uk/terms/ensembl/%3E%0D%0A%0D%0ASELECT%20%3Ffeature%20%3Fregion%20%3Fstart%20%3Fend%20%3Fstrand%20WHERE%20%7B%0D%0A%3Ffeature%20faldo%3Alocation%20%3Fregion%20.%0D%0A%3Fregion%20faldo%3Abegin%20%3Fstart%20.%0D%0A%3Fstart%20faldo%3Aposition%20%3Fstart_value%20.%0D%0A%3Fstart%20rdf%3Atype%20%3Fstrand%20.%0D%0A%3Fregion%20faldo%3Aend%20%3Fend%20.%0D%0A%3Fend%20faldo%3Aposition%20%3Fend_value%20.%0D%0A%3Fregion%20faldo%3Areference%20%3Fseqregion%20.%0D%0AVALUES%20%3Fseqregion%20%7B%20%3Chttp%3A//rdf.ebi.ac.uk/resource/ensembl/87/homo_sapiens/GRCh38/20%3E%20%7D%0D%0AFILTER%20%28%20%3Fstrand%20%3D%20faldo%3AForwardStrandPosition%20%7C%7C%20%3Fstrand%20%3D%20faldo%3AReverseStrandPosition%20%29%0D%0A%7D%0D%0ALIMIT%20200&render=HTML&limit=25&offset=0#lodestart-sparql-results",
      "ftplink" : "SELECT DISTINCT ?ftplink WHERE{ <http://rdf.ebi.ac.uk/dataset/ensembl> <http://purl.org/dc/terms/hasPart> ?subgraph . ?subgraph <http://purl.org/pav/hasCurrentVersion> ?subversion .  ?subversion <http://purl.org/dc/terms/hasDistribution> ?dist. 	?dist <http://rdfs.org/ns/void#subset> ?subset .  ?subset <http://rdfs.org/ns/void#dataDump> ?ftplink }"
  },
    "ols" : {
      "logo": "ols-logo.jpeg",
      "exampleText" : "Show all subgraphs (ontologies) that are loaded to the platform via OLS ",
      "exampleQuery": "query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dcterms%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+dbpedia2%3A+%3Chttp%3A%2F%2Fdbpedia.org%2Fproperty%2F%3E%0D%0APREFIX+dbpedia%3A+%3Chttp%3A%2F%2Fdbpedia.org%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0A%0D%0ASELECT+%3Fontologies%0D%0Afrom+%3Chttp%3A%2F%2Frdf.ebi.ac.uk%2Fdataset%2Fols_void.ttl%3E+%0D%0AWHERE+%7B+%0D%0A+%3Fa+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2FhasPart%3E+%3Fontologies%0D%0A%7D&render=HTML&limit=25&offset=0#loadstar-results-section"
    }
}


var table_rdf_view=$("#summary-table") //Select only once, use it more often. That's why it's global
var pathArray = location.href.split( '/' ); // contains baseurl
//console.log(pathArray) // parses path for dynamic links


function getVersion(name){
  var uri="http://rdf.ebi.ac.uk/dataset/"+name
  var versionQuery="SELECT ?version where{<"+uri+"> <http://purl.org/pav/hasCurrentVersion> ?a.?a <http://purl.org/pav/version> ?version} #noLog"
  var query="http://wwwdev.ebi.ac.uk/rdf/services/sparql?query=" + encodeURIComponent(versionQuery)

$.ajax ( {
    type: 'GET',
    url: query,
    headers: {
        Accept: "application/sparql-results+json"
    },
    success: function (json) {

      tablecontent="<tr><td style='width: 150px;'><a title='Jump to the RDF documentation of "+name+"' class='hideLink' href='../RDF-platform/documentation/"+name+".html'><img src='https://"+pathArray[2]+"/rdf/static/logos/"+content[name]["logo"]+"'/></a></td>"
      if (json['results']['bindings'][0] === undefined) {
        tablecontent+="<td>-</td>"
      }
      else {
        tablecontent+="<td style='width: 100px;'>"+json['results']['bindings'][0]['version']['value']+"</td>"
      }

      tablecontent+="<td><a title='Dataset description of "+name+"' href='http://wwwdev.ebi.ac.uk/rdf/services/describe?uri="+uri+"'>VoID file</a></td><td><a title='Download "+name+" data via bulk download' href='#BulkDownloads'>Download</a></td>"
      //tablecontent+="<td><a href='"+content[name]['exampleQuery']+"'>"+content[name]['exampleText']+"</a></td>"
      tablecontent+="<td><a href='https://"+pathArray[2]+"/rdf/services/sparql?"+content[name]['exampleQuery']+"'>"+content[name]['exampleText']+"</a></td>"

      tablecontent+="</tr>"
      table_rdf_view.append(tablecontent)
    }
  })
}

//This function build dynamically a sparql query showing the datadum links for each resource in context
function buildFTPLinks(namedGraph){
  namedGraphURI="http://rdf.ebi.ac.uk/dataset/"+namedGraph+"_void.ttl"
  var query="SELECT ?ftplink \nfrom <"+namedGraphURI+"> \nWHERE{ ?a <http://rdfs.org/ns/void#dataDump> ?ftplink}"

  if (content[namedGraph]['ftplink'] === undefined) {
  query="https://"+pathArray[2]+"/rdf/services/sparql?query="+encodeURIComponent(query)
  }
  else{
  query="https://"+pathArray[2]+"/rdf/services/sparql?query="+encodeURIComponent(content[namedGraph]['ftplink'])
  }

  // Need a if here, to cover hasPart relationships and show the correct links aka query here
  $("#ListOfFTPLinks").append("<li><a href='"+query+"'>Show me ftp links for "+namedGraph+"</li>")
}

//This for loop start all the dynamic actions on the site per entry in content
for (x in content){
  getVersion(x)
  buildFTPLinks(x)
}
