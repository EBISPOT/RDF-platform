console.log("services js called from the website")
//Edit this file to add more sources to the website e.g. the table
var content={
    "biomodels": {
      "logo": "/static/logos/biomodels_service_logo.gif",
      "exampleText" : "All model elements with annotations to acetylcholine-gated channel complex (GO:0005892)",
      "exampleQuery" : "//www.ebi.ac.uk/rdf/services/biomodels/sparql?query=PREFIX%20rdf%3A%20%3Chttp%3A//www.w3.org/1999/02/22-rdf-syntax-ns%23%3E%0D%0APREFIX%20rdfs%3A%20%3Chttp%3A//www.w3.org/2000/01/rdf-schema%23%3E%0D%0APREFIX%20owl%3A%20%3Chttp%3A//www.w3.org/2002/07/owl%23%3E%0D%0APREFIX%20xsd%3A%20%3Chttp%3A//www.w3.org/2001/XMLSchema%23%3E%0D%0APREFIX%20dc%3A%20%3Chttp%3A//purl.org/dc/elements/1.1/%3E%0D%0APREFIX%20dcterms%3A%20%3Chttp%3A//purl.org/dc/terms/%3E%0D%0APREFIX%20foaf%3A%20%3Chttp%3A//xmlns.com/foaf/0.1/%3E%0D%0APREFIX%20skos%3A%20%3Chttp%3A//www.w3.org/2004/02/skos/core%23%3E%0D%0APREFIX%20sbmlrdf%3A%20%3Chttp%3A//identifiers.org/biomodels.vocabulary%23%3E%0D%0A%0D%0ASELECT%20%3FmodelElement%20%3FelementType%20%3Fqualifier%20WHERE%20%7B%20%0D%0A%3FmodelElement%20%3Fqualifier%20%3Chttp%3A//identifiers.org/go/GO%3A0005892%3E%20.%20%20%0D%0A%3Fqualifier%20rdfs%3AsubPropertyOf%20sbmlrdf%3AsbmlAnnotation%20.%20%0D%0A%3FmodelElement%20rdf%3Atype%20%3FelementType%20%0D%0A%7D&amp;render=HTML&amp;limit=25&amp;offset=0"
  },
    "biosamples": {
      "logo": "/static/logos/bsd_service_logo.gif",
      "exampleText" : "Samples treated with alcohol",
      "exampleQuery": "http://www.ebi.ac.uk/rdf/services/biosamples/sparql?query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dcterms%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+obo%3A+%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2F%3E%0D%0APREFIX+efo%3A+%3Chttp%3A%2F%2Fwww.ebi.ac.uk%2Fefo%2F%3E%0D%0APREFIX+biosd-terms%3A+%3Chttp%3A%2F%2Frdf.ebi.ac.uk%2Fterms%2Fbiosd%2F%3E%0D%0APREFIX+pav%3A+%3Chttp%3A%2F%2Fpurl.org%2Fpav%2F2.0%2F%3E%0D%0APREFIX+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0APREFIX+sio%3A+%3Chttp%3A%2F%2Fsemanticscience.org%2Fresource%2F%3E%0D%0APREFIX+atlas%3A+%3Chttp%3A%2F%2Frdf.ebi.ac.uk%2Fterms%2Fatlas%2F%3E%0D%0APREFIX+oac%3A+%3Chttp%3A%2F%2Fwww.openannotation.org%2Fns%2F%3E%0D%0A%0D%0A%23%0D%0A%23%23+All+samples+treated+with+a+compound+of+%27alcohol%27+type+or+a+more+specific+alcohol+type%0D%0A%23++this+is+made+through+a+query+over+the+bioportal+sparql+endpoint+%28ie%2C+a+federated+query%29%0D%0A%23%0D%0ASELECT+DISTINCT+%3Fsmp+%3FpvLabel+%3FpvTypeLabel+%3FpvTypeClass+%3FpvTypeClassLabel%0D%0AWHERE+%7B%0D%0A++SERVICE+%3Chttp%3A%2F%2Fsparql.bioontology.org%2Fontologies%2Fsparql%2F%3Fapikey%3Dc6ae1b27-9f86-4e3c-9dcf-087e1156eabe%3E%0D%0A++%7B%0D%0A%09%3FpvTypeClass%0D%0A%09++rdfs%3AsubClassOf+%3Chttp%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FCHEBI_30879%3E%3B%0D%0A%09++rdfs%3Alabel+%3FpvTypeClassLabel.%0D%0A++%7D%0D%0A%0D%0A++%3Fpv%0D%0A%09a+%3FpvTypeClass%3B%0D%0A%09atlas%3ApropertyValue+%3FpvLabel%3B+%23+equivalent+to+rdfs%3Alabel%2C+dc%3Atitle%0D%0A%09atlas%3ApropertyType+%3FpvTypeLabel.+%23+equivalent+to+dc%3Atype%0D%0A%0D%0A++%3Fsmp%0D%0A%09a+biosd-terms%3ASample%3B%0D%0A%09biosd-terms%3Ahas-bio-characteristic+%3Fpv.%0D%0A%7D%0D%0A&render=HTML&limit=25&offset=0#loadstar-results-section"
    },
    "chembl" :{
      "logo": "/static/logos/chembl_service.gif",
      "exampleText" : "Find drug-like (but currently not approved) molecules which bind 7TM1 GPCRs with high affinity",
      "exampleQuery": "//www.ebi.ac.uk/rdf/services/chembl/sparql?query=PREFIX%20cco%3A%20%3Chttp%3A//rdf.ebi.ac.uk/terms/chembl%23%3E%0D%0APREFIX%20sio%3A%20%3Chttp%3A//semanticscience.org/resource/%3E%0D%0A%0D%0ASELECT%20%3Fmolecule%0D%0AWHERE%7B%0D%0A%3Chttp%3A//rdf.ebi.ac.uk/resource/chembl/protclass/CHEMBL_PC_1020%3E%20cco%3AhasTargetDescendant%20%3Ftarget%20.%0D%0A%3Ftarget%20cco%3AhasAssay%20%3Fassay%20.%0D%0A%3Fassay%20cco%3AhasActivity%20%3Factivity%20.%0D%0A%3Factivity%20cco%3AhasMolecule%20%3Fmolecule%20%3B%0D%0A%20%20cco%3ApChembl%20%3Fpchembl%20.%0D%0A%3Fmolecule%20%20cco%3AhighestDevelopmentPhase%20%3Fphase%20%3B%0D%0A%20%20sio%3ASIO_000008%20%3Fprop_ro5%20.%0D%0A%3Fprop_ro5%20a%20sio%3ACHEMINF_000312%20%3B%0D%0Asio%3ASIO_000300%20%3Fprop_ro5_val%20.%0D%0AFILTER%28%3Fpchembl%20%3E%206%20%29%0D%0AFILTER%28%3Fphase%20%3C%204%20%29%0D%0AFILTER%28%3Fprop_ro5_val%20%3D%200%20%29%0D%0A%7D%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A&amp;render=HTML&amp;limit=25&amp;offset=0"
    },
    "expressionatlas" : {
      "logo": "/static/logos/atlas_service_logo.gif",
      "exampleText" : "Under what experimental conditions is Ensembl gene ENSG00000129991 (TNNI3) expressed?",
      "exampleQuery": "http://ebi.ac.uk.rdf/rdf/services/atlas/sparql?query=PREFIX%20rdf%3A%20%3Chttp%3A//www.w3.org/1999/02/22-rdf-syntax-ns%23%3E%0D%0APREFIX%20rdfs%3A%20%3Chttp%3A//www.w3.org/2000/01/rdf-schema%23%3E%0D%0APREFIX%20owl%3A%20%3Chttp%3A//www.w3.org/2002/07/owl%23%3E%0D%0APREFIX%20dcterms%3A%20%3Chttp%3A//purl.org/dc/terms/%3E%0D%0APREFIX%20obo%3A%20%3Chttp%3A//purl.obolibrary.org/obo/%3E%0D%0APREFIX%20sio%3A%20%3Chttp%3A//semanticscience.org/resource/%3E%0D%0APREFIX%20efo%3A%20%3Chttp%3A//wwwdev.ebi.ac.uk/efo/%3E%0D%0APREFIX%20atlas%3A%20%3Chttp%3A//rdf.ebi.ac.uk/resource/atlas/%3E%0D%0APREFIX%20atlasterms%3A%20%3Chttp%3A//rdf.ebi.ac.uk/terms/atlas/%3E%0D%0A%0D%0APREFIX%20identifiers%3A%3Chttp%3A//identifiers.org/ensembl/%3E%0D%0A%0D%0ASELECT%20distinct%20%3FdiffValue%20%3FexpUri%20%3FpropertyType%20%3FpropertyValue%20%3Fpvalue%20%20%20%0D%0AWHERE%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%0D%0A%3FexpUri%20atlasterms%3AhasAnalysis%20%3Fanalysis%20.%20%20%20%20%20%20%20%0D%0A%3Fanalysis%20atlasterms%3AhasExpressionValue%20%3Fvalue%20.%20%20%20%0D%0A%3Fvalue%20rdfs%3Alabel%20%3FdiffValue%20.%20%20%20%20%20%20%20%0D%0A%3Fvalue%20atlasterms%3AhasFactorValue%20%3Ffactor%20.%20%20%20%0D%0A%3Ffactor%20atlasterms%3ApropertyType%20%3FpropertyType%20.%20%20%20%20%0D%0A%3Ffactor%20atlasterms%3ApropertyValue%20%3FpropertyValue%20.%20%20%0D%0A%3Fvalue%20atlasterms%3ApValue%20%3Fpvalue%20.%20%20%20%20%20%20%0D%0A%3Fvalue%20atlasterms%3AisMeasurementOf%20%3Fprobe%20.%20%20%20%20%0D%0A%3Fprobe%20atlasterms%3AdbXref%20identifiers%3AENSG00000129991%20.%20%20%0D%0A%7D%20%20%20%20%20%20%20%20%20%20%20%0D%0AORDER%20BY%20ASC%20%28%3Fpvalue%29&render=HTML&limit=25&offset=0#lodestart-sparql-results"
    },
    "reactome" : {
      "logo": "/static/logos/reactome_service.gif",
      "exampleText" : "-",
      "exampleQuery": "-"
    },
    "ensembl":{
      "logo": "/static/logos/ensembl_full.png",
      "exampleText": "Get all the genes, transcripts and exons on a chromosome",
      "exampleQuery": "http://www.ebi.ac.uk/rdf/services/ensembl/sparql?query=PREFIX%20rdf%3A%20%3Chttp%3A//www.w3.org/1999/02/22-rdf-syntax-ns%23%3E%0D%0APREFIX%20rdfs%3A%20%3Chttp%3A//www.w3.org/2000/01/rdf-schema%23%3E%0D%0APREFIX%20dcterms%3A%20%3Chttp%3A//purl.org/dc/terms/%3E%0D%0APREFIX%20obo%3A%20%3Chttp%3A//purl.obolibrary.org/obo/%3E%0D%0APREFIX%20sio%3A%20%3Chttp%3A//semanticscience.org/resource/%3E%0D%0APREFIX%20faldo%3A%20%3Chttp%3A//biohackathon.org/resource/faldo%23%3E%0D%0APREFIX%20ensembl%3A%20%3Chttp%3A//rdf.ebi.ac.uk/resource/ensembl/%3E%0D%0APREFIX%20ensembltranscript%3A%20%3Chttp%3A//rdf.ebi.ac.uk/resource/ensembl.transcript/%3E%0D%0APREFIX%20ensemblexon%3A%20%3Chttp%3A//rdf.ebi.ac.uk/resource/ensembl.exon/%3E%0D%0APREFIX%20ensemblprotein%3A%20%3Chttp%3A//rdf.ebi.ac.uk/resource/ensembl.protein/%3E%0D%0APREFIX%20ensemblterms%3A%20%3Chttp%3A//rdf.ebi.ac.uk/terms/ensembl/%3E%0D%0A%0D%0ASELECT%20%3Ffeature%20%3Fregion%20%3Fstart%20%3Fend%20%3Fstrand%20WHERE%20%7B%0D%0A%3Ffeature%20faldo%3Alocation%20%3Fregion%20.%0D%0A%3Fregion%20faldo%3Abegin%20%3Fstart%20.%0D%0A%3Fstart%20faldo%3Aposition%20%3Fstart_value%20.%0D%0A%3Fstart%20rdf%3Atype%20%3Fstrand%20.%0D%0A%3Fregion%20faldo%3Aend%20%3Fend%20.%0D%0A%3Fend%20faldo%3Aposition%20%3Fend_value%20.%0D%0A%3Fregion%20faldo%3Areference%20%3Fseqregion%20.%0D%0AVALUES%20%3Fseqregion%20%7B%20%3Chttp%3A//rdf.ebi.ac.uk/resource/ensembl/87/homo_sapiens/GRCh38/20%3E%20%7D%0D%0AFILTER%20%28%20%3Fstrand%20%3D%20faldo%3AForwardStrandPosition%20%7C%7C%20%3Fstrand%20%3D%20faldo%3AReverseStrandPosition%20%29%0D%0A%7D%0D%0ALIMIT%20200&render=HTML&limit=25&offset=0#lodestart-sparql-results"
  },
    "ols" : {
      "logo": "/static/logos/ols-logo.jpeg",
      "exampleText" : "-",
      "exampleQuery": "-"
    }
}


var table_rdf_view=$("#summary-table") //Select only once, use it more often. That's why it's global

function getVersion(name){
  var uri="http://rdf.ebi.ac.uk/dataset/"+name
  var versionQuery="select ?version where{<"+uri+"> <http://purl.org/pav/hasCurrentVersion> ?a.?a <http://purl.org/pav/version> ?version}"
  var query="https://wwwdev.ebi.ac.uk/rdf/services/sparql?query=" + encodeURIComponent(versionQuery)

$.ajax ( {
    type: 'GET',
    url: query,
    headers: {
        Accept: "application/sparql-results+json"
    },
    success: function (json) {

      tablecontent="<tr><td style='width: 150px;'><img src='{{site.domain}}{{site.baseurl}}/"+content[name]["logo"]+"'/></td>"
      if (json['results']['bindings'][0] === undefined) {
        tablecontent+="<td>-</td>"
      }
      else {
        tablecontent+="<td>"+json['results']['bindings'][0]['version']['value']+"</td>"
      }

      tablecontent+="<td><a href='http://wwwdev.ebi.ac.uk/rdf/services/describe?uri="+uri+"'>Void File</a></td>"
      tablecontent+="<td><a href='"+content[name]['exampleQuery']+"'>"+content[name]['exampleText']+"</a></td>"
      tablecontent+="</tr>"
      table_rdf_view.append(tablecontent)

    }
  })
}

//This function build dynamically a sparql query showing the datadum links for each resource in context
function buildFTPLinks(namedGraph){
  namedGraphURI="http://rdf.ebi.ac.uk/dataset/"+namedGraph
  var query="SELECT ?b from <"+namedGraphURI+"> WHERE{ ?a <http://rdfs.org/ns/void#dataDump> ?b}"
  query="https://wwwdev.ebi.ac.uk/rdf/services/sparql?query="+encodeURIComponent(query)
  $("#ListOfFTPLinks").append("<li><a href='"+query+"'>Show me ftp links for "+namedGraph+"</li>")
}


//This for loop start all the dynamic actions on the site per entry in content
for (x in content){
  getVersion(x)
  buildFTPLinks(x)
}


//var trs=$('#summary-table tbody tr')
//console.log(trs)

//trs.each(function(e){
//  console.log(trs[e])

//  var row = $('<tr>'+"Hm?"+'<tr>')

//  trs[e].append(row)

//console.log(e.attr('id'))
//console.log(trs[e][0])
//console.log($("#"+trs[e]).attr('id'))
//$("#"+trs[e]).append("<tr>TestRow</tr>")
//})



/*
var voidSparql = "PREFIX dcterms: <http://purl.org/dc/terms/> " +
        "PREFIX void: <http://rdfs.org/ns/void#> " +
        "PREFIX pav: <http://purl.org/pav/2.0/> " +
        "PREFIX prov: <http://www.w3.org/ns/prov#> " +
        "SELECT ?dataset ?title ?description ?version ?triples ?created " +
        "where { " +
        "?dataset a void:Dataset ; " +
        "dcterms:title ?title; " +
        "dcterms:description ?description ;  " +
        "pav:version ?version;      " +
        "dcterms:issued ?created;   " +
        "void:triples ?triples ;   " +
        "}";

    $.ajax ( {
        type: 'GET',
        url: "https://wwwdev.ebi.ac.uk/rdf/services/sparql?query=" + encodeURIComponent(voidSparql),
        headers: {
            Accept: "application/sparql-results+json"
        },
        success: function (json) {
            console.log("Did fetch a reply, it is: ")
            console.log(json)
            var _json = json;
            var _variables = _json.head.vars;
            var _results = _json.results.bindings;

            var datasetURI = _results[0].dataset.value;
            var title = _results[0].title.value;
            var desc = _results[0].description.value;
            var version = _results[0].version.value;
            var triples = _results[0].triples.value;
            var created = $.datepicker.formatDate('MM dd yy', new Date(_results[0].created.value.replace(/T.* /, ''))); <-- get rid of the space * / if u want to reuse this!

            var div = $("<div></div>");
            div.append($("<span style='font-weight:bold;'>Dataset description</span>"));
            div.append($("<br/>"));
//            div.append(datasetURI);
            var ea = $('<a>' + datasetURI + '</a>');
            ea.attr('href', datasetURI);
            div.append("(");
            div.append(ea);
            div.append(")");
            element.append(div);

            var table = $("<table cellpadding='0' cellspacing='0' width='100%'></table>")
            element.append(table);

            var row1 =$('<tr />');
            row1.append($('<td align="left">Title</td>'));
            row1.append($('<td align="right">' + title + '</td>'));
            table.append(row1);

            var row2 =$('<tr />');
            row2.append($('<td align="left">Description</td>'));
            row2.append($('<td align="right">' + desc + '</td>'));
            table.append(row2);

            var row3 =$('<tr />');
            row3.append($('<td align="left">Version</td>'));
            row3.append($('<td align="right">' + version + '</td>'));
            table.append(row3);

            var row4 =$('<tr />');
            row4.append($('<td align="left">Issued</td>'));
            row4.append($('<td align="right">' + created + '</td>'));
            table.append(row4);

            var row5 =$('<tr />');
            row5.append($('<td align="left">Number of triples</td>'));
            row5.append($('<td align="right">' + triples + '</td>'));
            table.append(row5);

            if (_results.length > 1) {
                var row6 =$('<tr />');
                row6.append($('<td align="left">Previous versions</td>'));

                var td6 = $("<td align='right'></td>");
                var ul6 = $("<ul></ul>");
                row6.append(td6);
                td6.append(ul6);
                for (var i = 1; i < _results.length; i++) {
                    var formattedNode = _formatNode(_results[i].previous, 'previous');
                    ul6.append($("<li></li>").append(formattedNode));
                }
                table.append(row6);
            }
        },
        error: function (request, status, error) {
            displayError(request.responseText);
        }
    })
*/
