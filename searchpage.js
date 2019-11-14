var query_string = location.search;
var value = (query_string.split('?')[1]).split('=')[1];
value = decodeURIComponent(value);
$('#inText').val(value);

$("#show").click(function() {
    $("#unfold").toggle();
})

$("#touch").click(function() {
    $("#display").toggle();
})