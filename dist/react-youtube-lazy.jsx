"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactYoutube = function (_Component) {
  _inherits(ReactYoutube, _Component);

  function ReactYoutube(props) {
    var _this2 = this;

    _classCallCheck(this, ReactYoutube);

    var _this = _possibleConstructorReturn(this, (ReactYoutube.__proto__ || Object.getPrototypeOf(ReactYoutube)).call(this));

    _this._scrollHandler = function (y) {
      if (_this.state.videoID == null) {
        if (y === "init") {
          return;
        }
      }
      var element = _this.refs[_this.state.UUID].getBoundingClientRect();
      var x = _this._elementShouldShow(element, _this.state.lazyloadSize);
      if (x) {
        _this.setState({ startLazy: true });
        window.removeEventListener("scroll", _this._scrollHandler);
        _this._startFade();
      }
    };

    _this._startFade = function () {
      _this.setState({ fadePostFix: " ReactYoutube-initFade" });
      _this.forceUpdate();
      _this.setState({ fadePostFix: " ReactYoutube-startFade" });
      var x = setInterval(function () {
        _this.setState({ fadePostFix: " ReactYoutube-fadeDone" });
        clearInterval(x);
      }, _this.state.duration || 0);
    };

    _this._playHandler = function (props) {
      if (!_this.state.playPress) {
        var stylePlayAwait = {
          height: _this.state.height,
          width: _this.state.width,
          position: "relative",
          backgroundColor: "black"
        },
          styleBG = {
            maxWidth: "100%",
            maxHeight: "100%",
            cursor: "pointer",
            position: "absolute",
            transform: "translateY(-50%) translateX(-50%)",
            top: "50%",
            left: "50%"
          },
          stylePlayButton = {
            position: "absolute",
            height: "20%",
            maxHeight: "50px",
            width: "100%",
            transform: "translateY(-50%)",
            top: "50%"
          };

        return _react2.default.createElement(
          "div",
          {
            className: "ReactYoutube-PlayAwait" + _this.state.fadePostFix, style: stylePlayAwait, onMouseUp: function onMouseUp() {
              return _this.setState({ playPress: true });
            }
          },
          _react2.default.createElement("img", { src: _this.state.thumbnail, alt: "Youtube Thumbnail", style: styleBG }),
          _react2.default.createElement(
            "svg",
            { style: stylePlayButton, version: "1.1", viewBox: "0 0 68 48" },
            _react2.default.createElement("path", { d: "M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z", fill: _this.color, fillOpacity: "0.8" }),
            _react2.default.createElement("path", { d: "M 45,24 27,14 27,34", fill: "#fff" })
          ),
          _react2.default.createElement(
            "style",
            null,
            ".ReactYoutube-PlayAwait:hover{\n                            fill: red;\n                        }"
          )
        );
      } else {
        return _react2.default.createElement("iframe", {
          title: "Youtube Video", id: "ytplayer", type: "text/html", width: _this.state.width, height: _this.state.height,
          src: _this.state.URL,
          frameBorder: "0"
        });
      }
    };

    _this._lazyWait = function () {
      if (_this.state.lazyload && _this.state.startLazy !== true) {
        var style = {
          width: _this.state.width,
          height: _this.state.height
        };
        return _react2.default.createElement("div", { className: "ReactYoutube-LazyLoad", style: style });
      } else {
        return _react2.default.createElement(_this2._playHandler, null);
      }
    };

    _this.state = _extends({}, _this._handleInit(props), { UUID: "ReactYoutube" + Math.floor(Math.random() * 10000000), playPress: false });
    return _this;
  }

  _createClass(ReactYoutube, [{
    key: "_handleInit",
    value: function _handleInit(props) {
      var allObjects = {};
      var handleVideoObject = this._handleVideoV2(props);
      allObjects = _extends({}, allObjects, handleVideoObject, this._handleThumbnailV2(props, handleVideoObject.videoID), this._handleOtherV2(props));
      return allObjects;
    }
  }, {
    key: "_handleOtherV2",
    value: function _handleOtherV2(props) {
      var height = props.height,
        width = props.width,
        lazyload = props.lazyload,
        lazyloadSize = props.lazyloadSize,
        transition = props.transition,
        duration = props.duration;


      var css = "";
      if (!height) height = 450;
      height += "px";

      if (!width) width = 800;
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
            transition = "none;";
            break;
          default:
            transition = "ease-in";
        }
        if (transition !== "none") {
          if (!duration) {
            duration = 300;
          }
          duration = duration / 1000 + "s";
          css = ".ReactYoutube-initFade{\n                    opacity: 0;\n                }\n                .ReactYoutube-startFade{\n                    opacity: 0;\n                }\n                .ReactYoutube-fadeDone{\n                    opacity: 1;\n                    transition: opacity " + duration + " " + transition + ";\n                }";
        }
      } else {
        lazyloadSize = null;
        transition = null;
      }
      return { height: height, width: width, lazyload: lazyload, lazyloadSize: lazyloadSize, transition: transition, transCSS: css, duration: duration };
    }
  }, {
    key: "_handleThumbnailV2",
    value: function _handleThumbnailV2(props, videoID) {
      var urlEnding = "";
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

      return { thumbnail: "https://img.youtube.com/vi/" + videoID + "/" + urlEnding + ".jpg" };
    }
  }, {
    key: "_handleVideoV2",
    value: function _handleVideoV2(props) {
      var query = "";
      for (var key in props.youtubeOptions) {
        if (query.length === 0) {
          query += key + "=" + props.youtubeOptions[key];
        } else {
          query += "&" + key + "=" + props.youtubeOptions[key];
        }
      }
      if (props.videoID) {
        return { videoID: props.videoID, URL: "https://www.youtube.com/embed/" + props.videoID + "?" + query };
      } else if (props.URL) {
        var videoID = props.URL.substr(props.URL.indexOf("v=") + 2, props.URL.length);
        var endOf = videoID.indexOf("&");
        if (endOf === -1) endOf = videoID.length;
        videoID = videoID.substr(0, endOf);
        return { videoID: videoID, URL: "https://www.youtube.com/embed/" + videoID + "?" + query };
      } else {
        return { videoID: null, URL: null };
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      var allObjects = {};
      var handleVideoObject = this._handleVideoV2(props);
      allObjects = _extends({}, allObjects, handleVideoObject, this._handleThumbnailV2(props, handleVideoObject.videoID), this._handleOtherV2(props));
      this.setState(_extends({}, allObjects));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this._scrollHandler);
      this._scrollHandler("init");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.state.startLazy) this._scrollHandler("init");
    }
  }, {
    key: "_elementShouldShow",
    value: function _elementShouldShow(element, distance) {
      var topOff = window.innerHeight - element.y;
      var botOff = element.top - element.height;
      if (topOff > -distance && botOff > -(element.height * 2) || botOff + element.height * 2 > -distance && topOff > 0) {
        return true;
      }
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      if (this.state.videoID == null) return _react2.default.createElement("div", { className: "ReactYoutube-NoID" });
      return _react2.default.createElement(
        "div",
        { ref: this.state.UUID, className: "ReactYoutube" },
        _react2.default.createElement(
          "style",
          null,
          this.state.transCSS
        ),
        _react2.default.createElement(this._lazyWait, null)
      );
    }
  }]);

  return ReactYoutube;
}(_react.Component);

exports.default = ReactYoutube;