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

## Lazy loading
This will enable lazyloading in the player. If enabled it will not load a thumbnail before it is within the set distance from its viewport.