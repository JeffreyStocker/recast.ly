var VideoList = (props) => {
  var checkAutoPlay = function () {
    if (props.autoplay = 0) {
      return 'checked';
    }   
    return '';
  };
  
  var checked = () => {
    var valToSet;
    console.log ('autoplay: ', props.autoplay);
    if (props.autoplay === 0) { 
      valToSet = 1;
    } else {
      valToSet = 0;
    }
    props.remoteSetState('autoplayVideo', valToSet);
  };

  return (
    <div className="video-list">
      <label class = "switch">
        <input type = "checkbox" defaultChecked = {props.autoplay} onClick = {checked} >
        </input>
        <span class = "slider round"></span>
      </label>

      {
        props.videos.map(video => <VideoListEntry video={video} handleTitleClick={props.handleTitleClick}/>)
      }
    </div>
  );
};




// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
