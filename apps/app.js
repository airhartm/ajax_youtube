var data;

$(document).ready(function(){

$(function(){
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});
});

function getRequest(searchTerm){
  var params = {
    s: searchTerm,
    r: 'json'
  };
  url = 'http://www.omdbapi.com';

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
}

function showResults(results){
	var html = "";
  $.each(results, function(index,value){
    html+= '<p>'+value.Title+'</p>';
  });
  $('#search-results').html(html);
};

});
//AIzaSyBPk-mJCa-5iFi_6mzOzNiV5A839BVcJX8