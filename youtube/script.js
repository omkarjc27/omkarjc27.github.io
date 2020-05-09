class TopBar extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "topBar" },
      React.createElement("div", { className: "logo" },
      React.createElement("img", { src: "http://img1.hvg.hu/image.aspx?id=b2dcf4e3-4124-4eb9-a474-9cb25c3175cd&view=da658e97-86c0-40f3-acd3-b0a850f32c30", alt: "yt-logo" })),

      React.createElement("div", { className: "nav" },
      React.createElement("ul", null,
      React.createElement("li", { className: "record" }, React.createElement("a", { href: "#" }, React.createElement("img", { src: "https://cdn0.iconfinder.com/data/icons/huge-business-icons/512/Camcorder.png", alt: "record" }))),
      React.createElement("li", { className: "search" }, React.createElement("a", { href: "#" }, React.createElement("img", { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcGSdmZD7uR_9DVkHmx8S_yc3MwW50SYRaTGNNsbwc-04QLkdNg", alt: "search" }))),
      React.createElement("li", { className: "userr" }, React.createElement("a", { href: "#" }, React.createElement("img", { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLK0bUKIQe_qhTfFQQ64krBfSWew_VG2uWG1kxPe15GpKrNe6_rQ", alt: "userr" })))))));




  }}


class BottomBar extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "bottomBar" },
      React.createElement("div", { className: "buttons" },
      React.createElement("div", { className: "home" },
      React.createElement("a", { href: "#" },
      React.createElement("img", { src: "https://d30y9cdsu7xlg0.cloudfront.net/png/1775478-200.png", alt: "home" }),
      React.createElement("p", null, "Home"))),


      React.createElement("div", { className: "trending" },
      React.createElement("a", { href: "#" },
      React.createElement("img", { src: "https://d30y9cdsu7xlg0.cloudfront.net/png/1126650-200.png", alt: "home" }),
      React.createElement("p", null, "Trending"))),


      React.createElement("div", { className: "subscriptions" },
      React.createElement("a", { href: "#" },
      React.createElement("img", { src: "https://d30y9cdsu7xlg0.cloudfront.net/png/456174-200.png", alt: "home" }),
      React.createElement("p", null, "Subscriptions"))),


      React.createElement("div", { className: "inbox" },
      React.createElement("a", { href: "#" },
      React.createElement("img", { src: "https://d30y9cdsu7xlg0.cloudfront.net/png/1677613-200.png", alt: "home" }),
      React.createElement("p", null, "Inbox"))),


      React.createElement("div", { className: "library" },
      React.createElement("a", { href: "#" },
      React.createElement("img", { src: "https://d30y9cdsu7xlg0.cloudfront.net/png/1783984-200.png", alt: "home" }),
      React.createElement("p", null, "Library"))))));





  }}


class Posts extends React.Component {

  render() {
    return (
      React.createElement("div", { className: "videoPost" },
      React.createElement("div", { className: "thumbnail" },
      React.createElement("img", { src: this.props.videoImg, alt: "video" })),

      React.createElement("div", { className: "userInfo" },
      React.createElement("div", { className: "userPicture" },
      React.createElement("img", { src: this.props.userImg })),

      React.createElement("div", { className: "videoInfo" },
      React.createElement("p", { className: "videoTitle" }, this.props.videoTitle),
      React.createElement("p", { className: "username" }, this.props.username, " \xB7 ", this.props.views, " \xB7 ", this.props.timePosted))),


      React.createElement("hr", { className: "divider" })));


  }}


class MyInput extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "console" },
      React.createElement("div", { className: "screen" },
      React.createElement(TopBar, null),
      React.createElement(Posts, { videoImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviATU397zWIcuAAsNhPDrGRtbmy-SY-uaZIGDYC2f95fNV_Ev", userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLK0bUKIQe_qhTfFQQ64krBfSWew_VG2uWG1kxPe15GpKrNe6_rQ", videoTitle: "Do you like Jeeps?", username: "Diego", views: "12 views", timePosted: "2 mins ago" }),
      React.createElement(Posts, { videoImg: "https://code.visualstudio.com/assets/docs/nodejs/reactjs/extra-semi-error.png", userImg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K", videoTitle: "How React is changing the world", username: "ReactJs", views: "1k views", timePosted: "4 days ago" }),
      React.createElement(Posts, { videoImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcQBZLAUzrOXmD3ivBElKpQnrDmlSm9e9UjxP35X2MW4DggxYnA", userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYa0Us9u8V22NMZmtyG1tFRjT93Ms0TWW3je0LlQGz9jW-tNirA", videoTitle: "Is KD the GOAT?", username: "NBA", views: "12m views", timePosted: "1 month ago" }),
      React.createElement(Posts, { videoImg: "https://dy98q4zwk7hnp.cloudfront.net/1969-Chevrolet-Camaro-Muscle%20&%20Pony%20Cars--Car-100886573-eb4a4b3bd67913a5fbac3352034925ee.jpg?w=1280&h=720&r=thumbnail&s=1", userImg: "https://wallpapercave.com/wp/1DcAB24.jpg", videoTitle: "Chevy 69 you will never get bored of this beast", username: "Chevy", views: "1m views", timePosted: "2 months ago" }),
      React.createElement(Posts, { videoImg: "https://nebula.wsimg.com/obj/RjUyMTk4NDMyOEIyRjZDRkU1MzA6MmVlYWJmMTEyNmQwNWI5ZmUwODBkMmFlMDA5MDg5ZmY6Ojo6OjA=", userImg: "https://nebula.wsimg.com/obj/RjUyMTk4NDMyOEIyRjZDRkU1MzA6ZDQ4ZWVkNzM4OTIxMmMxNjc0MGNlZTU5ODU0YWM1YjY6Ojo6OjA=", videoTitle: "0-60 in 2 seconds??", username: "Import Drag", views: "2m views", timePosted: "3 months ago" }),
      React.createElement(Posts, { videoImg: "https://i.ytimg.com/vi/UZjgD-xTz9Q/maxresdefault.jpg", userImg: "https://cdn.shopify.com/s/files/1/0747/3829/products/mGR0304_1024x1024.jpeg?v=1485013802", videoTitle: "Buying my dream car at 25!!", username: "Nr32", views: "30m views", timePosted: "4 months ago" })),


      React.createElement(BottomBar, null)));


  }}

// Render to DOM
ReactDOM.render(React.createElement(MyInput, null), document.getElementById('app'));