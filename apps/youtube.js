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
  	part: 'snippet',
    q: searchTerm,
    key: 'AIzaSyBPk-mJCa-5iFi_6mzOzNiV5A839BVcJX8'
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
	//console.log(data);
    showResults(data);
  });
}

function showResults(results){
	var html = "";
  var pubDate = "";
    html+= '<section id="searchResults">';
  $.each(results.items, function(index,value){
		console.log(value); 
    pubDate= new Date(value.snippet.publishedAt);
    html+= '<div id="videoWrapper">';
    html+= '<div class="videoThumbnail"><a href="http://youtube.com/watch?v='+value.id.videoId+'"><img src="'+value.snippet.thumbnails.default.url+'"></a></div>';
    html+= '<div class="videoAbout">';
    html+= '<p class="videoTitle"><strong>Title:</strong> <a href="http://youtube.com/watch?v='+value.id.videoId+'">'+value.snippet.title+'</a></p>';
    html+= '<p class="videoDescription"><strong>Description:</strong> '+value.snippet.description+'</p>';
    html+= '<p class="videoDate"><strong>Date:</strong> '+pubDate.toLocaleDateString()+'</p>';
    html+= '<p class="videoChannel"><strong>Channel:</strong> '+value.snippet.channelTitle+'</p>';
    html+= '<hr></div></div><p class="break">&nbsp;</p>';
  });
    html+= '</section>';
  $('#searchResults').html(html);

};

});

//tertiary function
