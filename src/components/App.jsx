class App extends React.Component {
  constructor(props) {
    super(props);
    searchYouTube(this.constructYoutubeOptions(props), this.renderAJAXData.bind(this));



    // this.getYoutubeDataFromServer('javascript');
    this.state = {
      videoObject: window.exampleVideoData[0],
      videosArray: window.exampleVideoData,
      autoplayVideo: 0
    };


  }

  //allows remote triggering of app's methods
  //either in the context of app or current place
  //WIP
  // remoteTrigger (triggerName, args, oldThis) {
  //   oldThis = oldThis || this;
  //   this[triggerName].apply(oldThis, args);
  // }

  // remoteGetValue (key) {
  //   return this.state[key];
  // }


  //allows remote setting of state
  //sigh, still need to all .bind(this) when passing into props
  remoteSetState(key, value) {
    var obj = {};
    obj[key] = value;
    this.setState(obj);
  }

  constructYoutubeOptions (target, maxResults = 5) {
    return {    
      key: window.YOUTUBE_API_KEY,
      max: maxResults,
      query: target
    };
  }

  handleTitleClick(currentSelectedItemURL) {
    this.setState({
      videoObject: currentSelectedItemURL
    });
  }

  renderAJAXData(data) {
    // console.log (data);
    this.setState({
      videoObject: data[0],
      videosArray: data
    });
  }

  getYoutubeDataFromServer (searchString) {
    var options = this.constructYoutubeOptions(searchString);
    window.searchYouTube(options, this.renderAJAXData.bind(this));
  }  

  inputHandler(evt) { 
    props.debounceYoutube(evt.target.value).bind(this);
    // this.getYoutubeDataFromServer(evt.target.value);  
  } 

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search onChange={this.inputHandler.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.videoObject} autoplay={this.state.autoplayVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videosArray} handleTitleClick={this.handleTitleClick.bind(this)} remoteSetState = {this.remoteSetState.bind(this)} autoplay = {this.state.autoplayVideo} /></div>
          </div>
        </div>
      </div>
    );
  }
}
