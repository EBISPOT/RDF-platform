console.log("Executing services.js")
  
element=$("#table")
  
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
            var _json = json;
            var _variables = _json.head.vars;
            var _results = _json.results.bindings;

            var datasetURI = _results[0].dataset.value;
            var title = _results[0].title.value;
            var desc = _results[0].description.value;
            var version = _results[0].version.value;
            var triples = _results[0].triples.value;
            var created = $.datepicker.formatDate('MM dd yy', new Date(_results[0].created.value.replace(/T.*/, '')));

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

