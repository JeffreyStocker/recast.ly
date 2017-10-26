class App extends React.Component {
  constructor(props) {
    super(props);
    // window.searchYouTube(this.constructYoutubeOptions('test').bind(this), this.renderAJAXData.bind(this))
    // this.getFirstLiveVideos('javascript');
    this.state = {
      videoObject: window.exampleVideoData[0],
      videosArray: window.exampleVideoData,
      autoplayVideo: 0
    };
  }


  // getFirstLiveVideos (initialSearchString) {
  //   this.inputHandler({target: {value: initialSearchString}});
  // }
  
  //allows remote triggering of app's methods
  //either in the context of app or current place
  //WIP
  remoteTrigger (triggerName, args, oldThis) {
    oldThis = oldThis || this;
    this[triggerName].apply(oldThis, args);
  }

  //allows remote setting of state
  //sigh, still need to all .bind(this) when passing into props
  remoteSetState(key, value) {
    var obj = {};
    obj[key] = value;
    this.setState(obj);
    console.log (this.state[key]);
  }

  remoteGetValue (key) {
    return this.state[key];
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
    this.setState({
      videoObject: data[0],
      videosArray: data
    });
  }
  
  inputHandler(evt) {    
    var options = {
      key: window.YOUTUBE_API_KEY,
      max: 5,
      query: evt.target.value
    };
    window.searchYouTube(options, this.renderAJAXData.bind(this));
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
