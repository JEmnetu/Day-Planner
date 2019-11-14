console.log(moment());
var timeDiv = $('<p>');

timeDiv.text(moment()._d);
$('#head').append(timeDiv);