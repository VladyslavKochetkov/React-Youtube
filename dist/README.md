# React Youtube Loader
After seeing many similar packages none of the had exactly what was needed for my development. Most didn't have a lazyload features, and tryin to implement broke the component, and other simply plugged the videoID you provided into youtube embed iframe. So I setout to create a customizable youtube loader that has lazyload built it and is extremely customizable.

# Use
```js
<ReactYoutube
  videoID="A71aqufiNtq"
  lazyload="true"
  lazyloadSize={300}
  youtubeOptions={{
    autoplay: "1",
    red: "0"
  }}
/>
```

# Documentation
This component accepts multiple props, but only either a videoID OR a URL is mandatory, otherwise it will backfall to default values.

## Height
This will be the height of the youtube play and this play doesn't force a 16:9 aspect ratio, but for best results it should be followed.

```
Default is 450px
height={450}
```

## Width
This will be the width of the youtube play, once again this is not forced to be 16:9 aspect ratio, but for the results it should be followed.

```
Default is 800px
width={800}
```

## Lazy Loading
This will enable lazyloading in the player. If enabled it will not load a thumbnail before it is within the set distance from its viewport. Accepted set paramaters are "false" and "true".

```
Default is "false"
lazyload="false"
```

## Lazy Loading Size
This will be the amount of pixels the element is required to be from the viewport until its elements start being fetched. The amount is in pixels.

```
Default is 300px
lazyloadSize={300}
```

## Lazy Loading Transition
This the css transition speed curve that will be used to play the fade in transition. This can be set to none and there won't be a transition and the player will appear as soon as it is loaded. This may cause a slow picture appear for the thumbnail, a transition usually avoids this.

```
Default is "ease-in"
transition="ease-in"
Options: "ease-in" "ease-out" "ease-in-out" "none"
```

## Lazy Load Transition Duration
This amount will be how long the transition takes. This amount is in ms.

```
Default is 300ms
duration={300}
```

## Thumbnail Resolution
This is the resolution at which the pre-player will fetch the thumbnail. Youtube uses "maxres" for its player. Smaller resolution might be benefitial for mobiles as they use less data to transfer and the differences can't be seem much.

```
Default is "maxres"
thumbnailRes="maxres"
Options: "maxres" "hq" "mq" "sd"
```

## Thumbnail ID
This is the thumbnail id that will be fetched. By default youtube automatically snaps four different snapshots of the video are different intervals. The default is either the uploaders custom thumbnail or the one chosen by youtube; it is also the one used by the offical player.

```
Default is "default"
thumbnailId="default"
Options: "default" "0" "1" "2" "3"
```

## Other Options
This player allows you to pass YouTubes custom options for the player they return. This component does not use any default paramaters but YouTube does have it's own features enabled by default, most of which can be disabled if passed into this. Please note that autoplay should not be set to zero. This played by default loads its own thumbnail to save data transfer in case the video is not played. If you set autoplay to "0" they user will have to press play twice, once for the custom thumnnail, second for the offical player.

```
There is no default
youtubeOptions={{
  autoplay: "1"
}}
```

## Other neat features
This player has some nice features as a custom thumbnail. Instead of embedded YouTubes offical iframe which causes a large download, it creates a custom thumnbnail by downloaded (by default) the maxres image. Because the player link is stored in the state you may change it and they player will automatically change the video, which may be good for playlist uses.

## Quirks
- Thumbnail will be shown twice if the youtubeOption autoplay: "0" is passed. This is because of a conflict with the players custom thumbnail and will be patched out in a later patch.

## Play Around With IT
Still not sold? Head over to https://codepen.io/vladyslavkochetkov/pen/rKjdBN and play around with it. Feedback is welcome and incouraged.

## Future Features (Not set in stone)
- Provide custom function support
  - onPlay
  - onVideoChange
  - onPause
  - onResume
  - onEnd
- Provide custom player color support