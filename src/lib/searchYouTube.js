
// this works, but needs work
//after the user stops, it is not update the last input
var flag = false;
var searchYouTube = (options, callback) => {
  var url = 'https://www.googleapis.com/youtube/v3/search';
  var data = {
    key: options.key,
    maxResults: options.max,
    part: 'snippet',
    q: options.query
  };
  if (!flag) {
    $.get(url, data, (data) => callback(data.items));
    flag = true;
    setTimeout(() => flag = false, 500);
  }
  return;
};

window.searchYouTube = searchYouTube;



// OLD GET REQUEST
// var result = $.get(url, data, (data) => callback(data.items));















