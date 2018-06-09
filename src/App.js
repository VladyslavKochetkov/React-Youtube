import React, { Component } from 'react';

import ReactYoutube from "./component/ReactYoutube";

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentURL: undefined,
      videoID: undefined
    }
  }

  sourceStyle = {
    width: "100%",
    textAlign: "center"
  }

  setVideo = (x) => {
    if(x.key === "Enter"){
      let URL = this.refs.input.value;
      let videoID = URL.split("v=")[1];
      if(!videoID){
        return this.setState({videoID: URL, currentURL: undefined})
      }
      let endOf = videoID.indexOf("&");
      if(endOf === -1)
        endOf = videoID.length;
      videoID = videoID.substr(0, videoID.indexOf("&"));
      this.setState({videoID: videoID, currentURL: URL});
    }
  }

  render() {
    return (
      <div>
        <div className="source" style={this.sourceStyle}>
          Play Video: <input ref="input" placeholder="Youtube URL" onKeyPress={this.setVideo}/>
        </div>
        {/* <ReactYoutube
          URL={this.state.currentURL} //video link on youtube, either this of videoID
          // videoID={this.state.videoID} // video id on youtube, either this of currentURL
          lazyload="true" // enable lazy load true or false
          lazyloadSize={400} // options any amount of pixels before viewport
          height={450} //  options any height in pixels
          width={800} // options any width in pixels
          duration={300} // options any time in ms
          transition="ease-in-out" // options ease-in ease-out ease-in-out none
          // thumbnailRes="hq" // options hq mq sd maxres (empty string)
          // thumbnailId="default" // options default 0 1 2 3
          youtubeOptions={{
            autoplay: "1", //autoplay should always be 1 because this component naturally disables autoplay
            rel: "0"
          }} // Allows all of these https://developers.google.com/youtube/player_parameters
        /> */}
        <ReactYoutube
          URL="https://www.youtube.com/watch?v=A71aqufiNtQ"
          lazyload="true"
          lazyloadSize={300}
          youtubeOptions={{
            autoplay: "1",
            red: "0"
          }}/>
      </div>
    );
  }
}

export default App;
