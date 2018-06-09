import React, { Component } from "react";

class ReactYoutube extends Component {
    constructor(props) {
        super();
        // this.state = {
        //     playPress: false,
        //     UUID: "ReactYoutube" + Math.floor(Math.random() * 10000000),
        //     fadePostFix: "",
        //     URL: props.URL,
        //     videoID: props.videoID,
        //     lazyload: props.lazyload,
        //     lazyloadSize: props.lazyloadSize,
        //     thumbnailRes: props.thumbnailRes,
        //     thumbnailId: props.thumbnailId,
        //     youtubeOptions: props.youtubeOptions,
        //     transition: props.transition,
        //     duration: props.duration
        // }

        // this._handleInit(props);
        // let videoID = this._handleVideo(props);
        // this._handleThumbnail(props, videoID);
        // this._handleOther(props);
        this.state = { ...this._handleInit(props), UUID: "ReactYoutube" + Math.floor(Math.random() * 10000000), playPress: false};
    }

    _handleInit(props){
        let allObjects = {};
        let handleVideoObject = this._handleVideoV2(props);
        allObjects = {...allObjects, 
            ...handleVideoObject, 
            ...this._handleThumbnailV2(props, handleVideoObject.videoID),
            ...this._handleOtherV2(props)};
        return allObjects;
    }

    _handleOtherV2(props){
        let {
            height,
            width,
            lazyload,
            lazyloadSize,
            transition,
            duration
        } = props;

        let css = "";
        if (!height)
            height = 450;
        height += "px";

        if (!width)
            width = 800;
        width += "px";

        if (lazyload === "false") {
            lazyload = false;
        } else if (lazyload === "true") {
            lazyload = true;
        } else {
            lazyload = false;
        }

        if (lazyload) {
            if (!lazyloadSize) {
                lazyloadSize = 300;
            }
            switch (transition) {
                case "ease-out":
                    transition = "ease-out";
                    break;
                case "ease-in-out":
                    transition = "ease-in-out";
                    break;
                case "none":
                    transition = "none;"
                    break;
                default:
                    transition = "ease-in";
            }
            if (transition !== "none") {
                if (!duration) {
                    duration = 300;
                }
                duration = (duration / 1000) + "s";
                css =
                    `.ReactYoutube-initFade{
                    opacity: 0;
                }
                .ReactYoutube-startFade{
                    opacity: 0;
                }
                .ReactYoutube-fadeDone{
                    opacity: 1;
                    transition: opacity ${duration} ${transition};
                }`;
            }
        } else {
            lazyloadSize = null;
            transition = null;
        }
        return{ height: height, width: width, lazyload: lazyload, lazyloadSize: lazyloadSize, transition: transition, transCSS: css, duration: duration };
    }

    _handleThumbnailV2(props, videoID){
        let urlEnding = "";
        switch (props.thumbnailRes) {
            case "hq":
                urlEnding += "hq";
                break;
            case "mq":
                urlEnding += "mq";
                break;
            case "sd":
                urlEnding += "sd";
                break;
            default:
                urlEnding += "maxres";
        }

        switch (props.thumbnailId) {
            case "0":
                urlEnding += "0";
                break;
            case "1":
                urlEnding += "1";
                break;
            case "2":
                urlEnding += "2";
                break;
            case "3":
                urlEnding += "3";
                break;
            default:
                urlEnding += "default";
        }

        return { thumbnail: `https://img.youtube.com/vi/${videoID}/${urlEnding}.jpg` };
    }

    _handleVideoV2(props){
        let query = "";
        for (let key in props.youtubeOptions) {
            if (query.length === 0) {
                query += `${key}=${props.youtubeOptions[key]}`
            } else {
                query += `&${key}=${props.youtubeOptions[key]}`
            }
        }
        if (props.videoID) {
            return {videoID: props.videoID, URL: `https://www.youtube.com/embed/${props.videoID}?${query}`};
        } else if (props.URL) {
            let videoID = props.URL.substr(props.URL.indexOf("v=") + 2, props.URL.length);
            let endOf = videoID.indexOf("&");
            if (endOf === -1)
                endOf = videoID.length;
            videoID = videoID.substr(0, endOf);
            return { videoID: videoID, URL: `https://www.youtube.com/embed/${videoID}?${query}` };
        } else {
            return {videoID: null, URL: null}
        }
    }

    _handleThumbnail(props, videoID){
        let urlEnding = "";
        switch(props.thumbnailRes){
            case "hq":
                urlEnding += "hq";
                break;
            case "mq":
                urlEnding += "mq";
                break;
            case "sd":
                urlEnding += "sd";
                break;
            default:
                urlEnding += "maxres";
        }

        switch(props.thumbnailId){
            case "0":
                urlEnding += "0";
                break;
            case "1":
                urlEnding += "1";
                break;
            case "2":
                urlEnding += "2";
                break;
            case "3":
                urlEnding += "3";
                break;
            default:
                urlEnding += "default";
        }
        
        this.setState({thumbnail: `https://img.youtube.com/vi/${videoID}/${urlEnding}.jpg`});
    }

    _handleVideo(props){
        let query = "";
        for(let key in props.youtubeOptions){
            if(query.length === 0){
                query += `${key}=${props.youtubeOptions[key]}`
            }else{
                query += `&${key}=${props.youtubeOptions[key]}`
            }
        }
        if(props.videoID){
            this.setState({videoID: props.videoID, URL: `https://www.youtube.com/embed/${props.videoID}?${query}`});
            return props.videoID;
        }else if(props.URL){
            let videoID = props.URL.substr(props.URL.indexOf("v=") + 2, props.URL.length);
            let endOf = videoID.indexOf("&");
            if(endOf === -1)
                endOf = videoID.length;
            videoID = videoID.substr(0, endOf);
            this.setState({videoID: videoID, URL: `https://www.youtube.com/embed/${videoID}?${query}`});
            return videoID;
        }else{
            this.setState({videoID: null, URL: null})
            return null;
        }
    }

    _handleOther(props){
        let {
            height,
            width,
            lazyload,
            lazyloadSize,
            transition,
            duration
        } = props;

        let css = "";
        if(!height)
            height = 450;
        height += "px";

        if(!width)
            width = 800;
        width += "px";

        if(lazyload === "false"){
            lazyload = false;
        }else if(lazyload === "true"){
            lazyload = true;
        }else{
            lazyload = false;
        }

        if(lazyload){
            if(!lazyloadSize){
                lazyloadSize = 300;
            }
            switch(transition){
                case "ease-out":
                    transition = "ease-out";
                    break;
                case "ease-in-out":
                    transition = "ease-in-out";
                    break;
                case "none":
                    transition = "none;"
                    break;
                default:
                    transition = "ease-in";
            }
            if(transition !== "none"){
                if(!duration){
                    duration = 300;
                }
                duration = (duration / 1000) + "s";
                css = 
                `.ReactYoutube-initFade{
                    opacity: 0;
                }
                .ReactYoutube-startFade{
                    opacity: 0;
                }
                .ReactYoutube-fadeDone{
                    opacity: 1;
                    transition: opacity ${duration} ${transition};
                }`;
            }
        }else{
            lazyloadSize = null;
            transition = null;
        }
        this.setState({height: height, width: width, lazyload: lazyload, lazyloadSize: lazyloadSize, transition: transition, transCSS: css, duration: duration});
    }

    componentWillReceiveProps(props){
        // let videoID = this._handleVideo(props);
        // this._handleThumbnail(props, videoID);
        // this._handleOther(props);
    }

    componentDidMount(){
        window.addEventListener("scroll", this._scrollHandler);
    }

    componentDidUpdate(){
        if(!this.state.startLazy)
            this._scrollHandler("init")
    }

    _elementShouldShow(element, distance){
        let topOff = window.innerHeight - element.y;
        let botOff = element.top - element.height;
        if((topOff > -(distance) && botOff > -(element.height * 2)) || (botOff + element.height * 2 > -(distance) && topOff > 0)){
            return true;
        }
        return false;
    }

    _scrollHandler = (y) => {
        if(!this.state.videoID && y !== "init"){
            return;
        }
        let element = this.refs[this.state.UUID].getBoundingClientRect();
        let x = this._elementShouldShow(element, this.state.lazyloadSize);
        if(x){
            this.setState({startLazy: true});
            window.removeEventListener("scroll", this._scrollHandler);
            this._startFade();
        }
    }

    _startFade = () => {
        this.setState({fadePostFix: " ReactYoutube-initFade"});
        this.forceUpdate();
        this.setState({fadePostFix: " ReactYoutube-startFade"});
        let x = setInterval(() => {
            this.setState({fadePostFix: " ReactYoutube-fadeDone"});
            clearInterval(x);
        }, this.state.duration || 0)
    }

    _playHandler = (props) => {
        if(!this.state.playPress){
            let stylePlayAwait = {
                height: this.state.height,
                width: this.state.width,
                position: "relative",
                backgroundColor: "black"
            }, styleBG = {
                maxWidth: "100%",
                maxHeight: "100%",
                cursor: "pointer",
                position: "absolute",
                transform: "translateY(-50%) translateX(-50%)",
                top: "50%",
                left: "50%"
            }, stylePlayButton = {
                position: "absolute",
                height: "20%",
                maxHeight: "50px",
                width: "100%",
                transform: "translateY(-50%)",
                top: "50%"
            }
            
            return (
                <div className={`ReactYoutube-PlayAwait${this.state.fadePostFix}`} style={stylePlayAwait} onMouseUp={() => this.setState({playPress: true})}>
                    <img src={this.state.thumbnail} alt="Youtube Thumbnail" style={styleBG}/>
                    <svg style={stylePlayButton} version="1.1" viewBox="0 0 68 48"><path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill={this.color} fillOpacity="0.8"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>
                    <style>
                        {`.ReactYoutube-PlayAwait:hover{
                            fill: red;
                        }`}
                    </style>
                </div>
            )
        }else{
            return (
                <iframe title="Youtube Video" id="ytplayer" type="text/html" width={this.state.width} height={this.state.height}
                    src={this.state.URL}
                    frameBorder="0">
                </iframe>
            )
        }
    }

    _lazyWait = () => {
        if(this.state.lazyload && this.state.startLazy !== true){
            let style = {
                width: this.state.width,
                height: this.state.height
            }
            return <div className="ReactYoutube-LazyLoad" style={style}></div>
        }else{
            return <this._playHandler/>;
        }
    }

    render(){
        console.log(this.state);
        if(this.state.videoID == null)
            return <div className="ReactYoutube-NoID"></div>
        return (
            <div ref={this.state.UUID} className="ReactYoutube">
                <style>
                    {this.state.transCSS}
                </style>
                <this._lazyWait/>
            </div>
        )
    }
}

export default ReactYoutube;