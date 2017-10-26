// $.get(URL,data,function(data,status,xhr),dataType)


// URL: "https://www.googleapis.com/youtube/v3"

// 

var searchYouTube = (options, callback) => {
/*
  options = {
    key: 'API',
    query: 'SEARCH',
    max: '5'
  }
*/
  var url = 'https://www.googleapis.com/youtube/v3/search';
  var data = {
    key: options.key,
    maxResults: options.max,
    part: 'snippet',
    q: options.query
  };

  var result = $.get(url, data, (data) => callback(data.items));

  // console.log(result)
};

window.searchYouTube = searchYouTube;






// OLD GET REQUEST
// var result = $.get(url, data, (data) => callback(data.items));















