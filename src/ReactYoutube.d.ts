declare module "react-youtube-lazy" {
  import * as React from "react";

  export interface ReactYoutubeProps {
    height?: number | string;
    width?: number | string;
    lazyload?: boolean | string;
    lazyloadSize?: number;
    transition?: string;
    duration?: any;
    color?: string;
    thumbnailRes?: string;
    thumbnailId?: string;
    youtubeOptions?: object;
    videoID?: string;
    URL?: string;
  }

  export default class ReactYoutube extends React.Component<
    ReactYoutubeProps,
    any
  > {
    render(): any;
  }
}
