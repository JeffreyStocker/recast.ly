class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoObject: window.exampleVideoData[0],
      videosArray: window.exampleVideoData,
      inputValue: ''
    };
  }

  handleTitleClick(currentSelectedItemURL) {
    this.setState({
      videoObject: currentSelectedItemURL
    });
  }
  
  inputHandler(evt) {
    this.state.inputValue = evt.target.value;
    console.log(this.state.inputValue);
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
            <div><VideoPlayer video={this.state.videoObject}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videosArray} handleTitleClick={this.handleTitleClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}


// INPUT FORM: form-control
// $('input').val()






// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
//<VidePlayer />
//<Search />
// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><VideoPlayer video={window.exampleVideoData[0]}/></div>
//       </div>
//       <div className="col-md-5">
//         <div><VideoList videos={window.exampleVideoData}/></div>
//       </div>
//     </div>
//   </div>
// );
// window.App = App;