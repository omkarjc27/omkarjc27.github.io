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
      React.createElement("p", null, "Useless Feature"))),


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


      React.createElement("p", { className: "divider" })));


  }}


class MyInput extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "console" },
      React.createElement("div", { className: "screen" },
      React.createElement(TopBar, null),
      React.createElement(Posts, { videoImg: "fuckdisney.jpeg", userImg: "https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png", videoTitle: "A Netflix Trailer ", username: "Netflix", views: "2M views", timePosted: "2 mins ago" }),
      React.createElement(Posts, { videoImg: "https://i.ytimg.com/vi/eWa49R6bOnU/maxresdefault.jpg", userImg: "https://assets.change.org/photos/6/wy/fc/tdwyFCitwdHidPu-800x450-noPad.jpg?1527368113", videoTitle: "Youtuber reacting to a Youtuber who is reacting to another Youtuber on YouTube", username: "Someone Reacts", views: "12k views", timePosted: "2 years ago" }),
      React.createElement(Posts, { videoImg: "https://moroccanladies.com/wp-content/uploads/2015/10/funny-men-trying-on-makeup-by-fo.jpg", userImg: "https://www.seattleglobalist.com/wp-content/uploads/2016/03/viv.jpg", videoTitle: "Genetically gifted model, sets unachievable standard for beauty.", username: "Generic model name", views: "1k views", timePosted: "4 days ago" }),
      React.createElement(Posts, { videoImg: "https://static.bangkokpost.com/media/content/20181211/c1_1591642.jpg", userImg: "https://shubhankarccom.files.wordpress.com/2018/05/donald-trump-uncle-sam-prints.jpg?w=825", videoTitle: "FakeNews about how iPhones are causing CoronaVirus", username: "Trump 2024", views: "1M views", timePosted: "1 month ago" }),
      React.createElement(Posts, { videoImg: "https://i.pcmag.com/imagery/lineups/06TJIcNcLhAyP9GT8Wfz831-1..v_1569492952.jpg", userImg: "https://i.pinimg.com/originals/26/5e/9c/265e9c8ced119bf039ec739b1da174f4.jpg", videoTitle: "An exciting part of my life with an Upbeat background music.", username: "Vlogger's Name", views: "23M views", timePosted: "1 year ago" }),
      React.createElement(Posts, { videoImg: "https://www.altnews.in/wp-content/uploads/2019/11/Untitled-design-2019-11-09T170531.181.jpeg", userImg: "https://media3.s-nbcnews.com/j/newscms/2019_06/2746941/190208-stock-money-fanned-out-ew-317p_fa445b2f6f3e86a3ffa18707e6a8adcb.fit-760w.jpg", videoTitle: "Stuff You can't afford in your lifetime.", username: "Momentary Inspiration", views: "(Poor ppl) views", timePosted: "2 months ago" }),
      React.createElement(Posts, { videoImg: "https://images.thestar.com/UMCchGMskVdVTKUy32WKiFBqx1A=/1200x760/smart/filters:cb(2700061000)/https://www.thespec.com/content/dam/thespec/news/world/2015/12/03/100-000-people-want-youtube-to-ban-sam-pepper-for-best-friend-murder-prank/B822235529Z.1_20151203073240_000_G2C1JFN8P.1_Gallery.jpg", userImg: "https://image.freepik.com/free-vector/comic-speech-bubble-cartoon-word-prank_9640-169.jpg", videoTitle: "I pranked someone by almost killing them", username: "Self Declared Prankster", views: "30m views", timePosted: "4 months ago" })),


      React.createElement(BottomBar, null)));


  }}

// Render to DOM
ReactDOM.render(React.createElement(MyInput, null), document.getElementById('app'));