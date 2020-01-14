(this["webpackJsonpsrc-voka-web"]=this["webpackJsonpsrc-voka-web"]||[]).push([[0],{48:function(e,t,a){e.exports=a(90)},51:function(e,t,a){},60:function(e,t,a){},86:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);a(49),a(50),a(51);var n=a(0),r=a.n(n),o=a(23),c=a.n(o),i=a(7),l=a(8),s=a(10),u=a(9),m=a(11),d=a(3),p=function(e){var t=e.query,a=e.onClick,o=Object(n.useRef)(null);r.a.useEffect((function(){o&&(o.current.value=t)}),[]);return r.a.createElement("form",{onSubmit:function(e){return e.preventDefault(),void(o.current.value&&a&&a(o.current.value))}},r.a.createElement("div",{className:"form-row mt-3 mb-3"},r.a.createElement("div",{className:"col-8"},r.a.createElement("input",{ref:o,type:"text",name:"queryBox",id:"queryBox",className:"form-control",placeholder:"Search Youtube"})),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary pl-4 pr-4"},r.a.createElement("i",{className:"fas fa-search fa-lg"})))))},f=(a(60),a(14)),v=function(e){var t=e.children;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},E=a(41),b=a.n(E),y=function(e){var t=e.videos,a=e.onFiniteScroll;return r.a.useEffect((function(){document.addEventListener("scroll",b.a.debounce((function(){(function(){var e=document.documentElement,t=document.body,a=e.clientHeight,n=window.pageYOffset;return Math.max(t.scrollHeight,e.scrollHeight,t.offsetHeight,e.offsetHeight,t.clientHeight,e.clientHeight)-n-a})()<50&&a()}),100))}),[]),t&&r.a.createElement("ul",{className:"list-group list-group-flush col-md-8 mb-3"},t.map((function(e){return r.a.createElement("li",{className:"list-group-item app-yt-item",key:e.etag},r.a.createElement("div",{className:"video-list media"},r.a.createElement("div",{className:"media-left mr-4"},r.a.createElement(f.b,{to:"/dictation/".concat(e.id.videoId)},r.a.createElement("img",{src:e.snippet.thumbnails.default.url,alt:"",className:"media-object"}))),r.a.createElement("div",{className:"media-body"},r.a.createElement("div",{className:"media-heading"},r.a.createElement(f.b,{to:"/dictation/".concat(e.id.videoId)},r.a.createElement(v,null,e.snippet.title))))))})))},g=a(20),h=a(2),N=a(43),O=a.n(N),k=function(e,t){return e+"?"+Object.keys(t).map((function(e){return e+"="+t[e]})).join("&")};var w="https://www.googleapis.com/youtube/v3/search",A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,a){e.key&&e.q&&e.part&&e.type||a(new Error("Please make sure that the required fields are inserted"));var n=k(w,e);O()(n).then((function(e){return t(e.json())})).catch(a)}))},C="AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA",_="dictation/search/CLEANUP",S={query:null,isLoading:!1,hasError:!1,nextPageToken:null,videos:[]},T=function(e){return function(t,a){var n=a().DictationSearch;n.isLoading||(e?(t(I(e)),A({key:C,q:e,part:"snippet",type:"video",relevanceLanguage:"de",maxResults:10}).then((function(e){t(j(e))})).catch((function(e){console.log("Error: ",e)}))):(t(I(n.query)),A({key:C,q:n.query,part:"snippet",type:"video",relevanceLanguage:"de",maxResults:10,pageToken:n.nextPageToken}).then((function(e){t(P(e))})).catch((function(e){console.log("Error: ",e)}))))}},I=function(e){return{type:"search/LOADING_QUERY_DATA",query:e}},j=function(e){return{type:"search/LOADED_QUERY_DATA",data:e}},P=function(e){return{type:"search/APPEND_QUERY_DATA",data:e}},L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.onCleanup()}},{key:"render",value:function(){var e=this.props,t=e.query,a=e.videos,n=e.onHandleQuery,o=e.onLoadMore;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{onClick:n,query:t}),r.a.createElement(y,{videos:a,onFiniteScroll:o}))}}]),t}(r.a.Component),D=Object(d.b)((function(e){var t=e.DictationSearch;return{query:t.query,videos:t.videos}}),(function(e){return{onHandleQuery:function(t){return e(T(t))},onLoadMore:function(){return e(T())},onCleanup:function(){return e({type:_})}}}))(L),x=a(44),R=(a(63),a(18)),U="goals/TOGGLE_GOAL",V="goals/ADD_GOAL",H="goals/FILTER_GOAL",G="goals/CLEANUP",M={SHOW_ALL:"SHOW_ALL",SHOW_ACTIVE:"SHOW_ACTIVE",SHOW_DONE:"SHOW_DONE"},Y={goals:[],filter:M.SHOW_ALL},W=0;var B=function(e){var t=Math.floor(e),a=t%60,n=Math.floor(t/60);return n<10?"0"+n+":"+("0"+a).slice(-2):n+":"+("0"+a).slice(-2)},q=function(e,t){return e.map((function(e){return Object(h.a)({},e,{current:e.start===t?"current":""})}))},F="dictation/view/LOAD_CAPTION",Q="dictation/view/JUMP_TO_LINE",K="dictation/view/CHANGE_TO_LINE",Z={videoId:null,lines:null,markers:null,playAt:null,curStart:null,command:null},J=Object(R.c)({GoalState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case U:return Object(h.a)({},e,{goals:e.goals.map((function(e){return e.id===t.id?Object(h.a)({},e,{done:!e.done}):e}))});case V:return Object(h.a)({},e,{goals:[].concat(Object(g.a)(e.goals),[{id:t.id,done:!1,text:t.text}])});case H:return Object(h.a)({},e,{filter:t.filter});case G:return Y;default:return e}},DictationSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"search/LOADING_QUERY_DATA":return Object(h.a)({},e,{query:t.query,isLoading:!0});case"search/LOADED_QUERY_DATA":return Object(h.a)({},e,{videos:t.data.items,nextPageToken:t.data.nextPageToken,isLoading:!1});case"search/APPEND_QUERY_DATA":return Object(h.a)({},e,{videos:[].concat(Object(g.a)(e.videos),Object(g.a)(t.data.items)),nextPageToken:t.data.nextPageToken,isLoading:!1});case _:return S;default:return e}},DictationView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case F:var a=t.lines.map((function(e){return Object(h.a)({},e,{formattedStart:B(e.start)})}));return a[0].current="current",Object(h.a)({},e,{videoId:t.videoId,lines:a,markers:t.lines.map((function(e){return e.start}))});case Q:if(!e.lines)return;return Object(h.a)({},e,{curStart:t.start,lines:q(e.lines,t.start)});case K:if(!e.lines)return;return Object(h.a)({},e,{playAt:t.start+"|"+(new Date).getTime(),curStart:t.start,lines:q(e.lines,t.start)});case"dictation/view/DISPATCH_COMMAND":return Object(h.a)({},e,{command:t.command+"|"+(new Date).getTime()});case"dictation/view/CLEANUP":return Z;default:return e}}}),X=a(17),z=function(e){var t=e.onClick,a=r.a.useRef(null);return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),a&&a.current.value){var n=a.current.value.trim();t&&t(n),a.current.value=""}}},r.a.createElement("div",{className:"form-row mb-3 mt-3"},r.a.createElement("div",{className:"col-8"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Todo Item",ref:a})),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"Add Item"))))},$=function(e){var t=e.text,a=e.done,n=e.onClick,o=a?" list-group-item-success":"";return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"+o,onClick:n},t,r.a.createElement("span",{className:"badge badge-secondary badge-pill"},"New"))},ee=function(e){var t=e.goals,a=e.toggleGoal;return r.a.createElement("ul",{className:"list-group mb-3"},null!=t&&t.map((function(e){return r.a.createElement($,Object.assign({key:e.id},e,{onClick:function(){return a(e.id)}}))})))},te=function(e){var t=e.FilterType,a=e.filter,n=e.onFilter,o=a===t.SHOW_ALL?"active":"",c=a===t.SHOW_ACTIVE?"active":"",i=a===t.SHOW_DONE?"active":"";return r.a.createElement("div",{className:"btn-group btn-group-toggle"},r.a.createElement("label",{className:"btn btn-outline-info "+o},r.a.createElement("input",{type:"radio",name:"filters",onClick:function(){return n(t.SHOW_ALL)}})," All"),r.a.createElement("label",{className:"btn btn-outline-info "+c},r.a.createElement("input",{type:"radio",name:"filters",onClick:function(){return n(t.SHOW_ACTIVE)}})," Active"),r.a.createElement("label",{className:"btn btn-outline-info "+i},r.a.createElement("input",{type:"radio",name:"filters",onClick:function(){return n(t.SHOW_DONE)}})," Done"))},ae=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.onCleanup()}},{key:"render",value:function(){var e=this.props,t=e.goals,a=e.filter,n=e.addGoal,o=e.toggleGoal,c=e.filterGoal;return r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-md-10 col-lg-8"},r.a.createElement(z,{onClick:function(e){return n(e)}}),r.a.createElement(ee,{goals:t,toggleGoal:o}),r.a.createElement(te,{FilterType:M,filter:a,onFilter:c})))}}]),t}(r.a.Component),ne=function(e,t){switch(t){case M.SHOW_ACTIVE:return e.filter((function(e){return!1===e.done}));case M.SHOW_DONE:return e.filter((function(e){return!0===e.done}));default:return e}},re=Object(d.b)((function(e){var t=e.GoalState;return{goals:ne(t.goals,t.filter),filter:t.filter}}),(function(e){return{addGoal:function(t){return e(function(e){return{type:V,id:W++,done:!1,text:e}}(t))},toggleGoal:function(t){return e(function(e){return{type:U,id:e}}(t))},filterGoal:function(t){return e(function(e){return{type:H,filter:e}}(t))},onCleanup:function(){return e({type:G})}}}))(ae),oe=a(45),ce=a.n(oe),ie=null,le=function(){return ie||(ie=new Promise((function(e,t){"object"!==typeof window.YT||"function"!==typeof window.YT.ready?ce()("https://www.youtube.com/iframe_api").then((function(){window.YT.ready((function(){e(window.YT)}))}),(function(e){t(e)})):window.YT.ready((function(){e(window.YT)}))}))),ie},se=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).YTEvents=["onReady","onStateChange","onPlaybackQualityChange","onPlaybackRateChange","onError"],a.intervalMarker=null,a.findLastMarker=function(e,t,a){for(var n=e.length,r=1;r<n;r++)if(e[r]>t&&e[r]<=a)return{curStart:e[r-1],nextStart:e[r]};return null},a.onPlayerStateChange=function(e){var t=a.props,n=t.onCued,r=t.onBuffering,o=t.onPause,c=t.onPlaying,i=t.onEnd,l=t.pingInterval,s=t.markers,u=t.onSpeechChange,m=window.YT.PlayerState;switch(null!==s&&s.length>0&&(e.data===m.PLAYING?a.intervalMarker=setInterval((function(){var t=e.target.getCurrentTime(),n=a.findLastMarker(s,t,t+l/1e3);null!=n&&u&&u(n.nextStart)}),l):clearInterval(a.intervalMarker)),e.data){case m.CUED:n(e);break;case m.BUFFERING:r(e);break;case m.PAUSED:o(e);break;case m.PLAYING:c(e);break;case m.ENDED:i(e)}},a.getInitialOptions=function(){return{videoId:a.props.video,width:a.props.width,height:a.props.height,playerVars:{autoplay:a.props.autoplay,cc_load_policy:a.props.showCaptions?1:0,controls:a.props.controls?1:0,disablekb:a.props.disableKeyboard?1:0,fs:a.props.allowFullscreen?1:0,hl:a.props.lang,iv_load_policy:a.props.annotations?1:3,start:a.props.startSeconds,end:a.props.endSeconds,modestbranding:a.props.modestBranding?1:0,playsinline:a.props.playsInline?1:0,rel:a.props.showRelatedVideos?1:0,showinfo:a.props.showInfo?1:0},events:{onReady:a.onPlayerReady,onStateChange:a.onPlayerStateChange}}},a.updateProps=function(e){a.player.then((function(t){e.forEach((function(e){var n=a.props[e];switch(e){case"muted":n?t.mute():t.unMute();break;case"suggestedQuality":t.setPlaybackQuality(n);break;case"volume":t.setVolume(100*n);break;case"paused":n&&2!==t.getPlayerState()?t.pauseVideo():n||2!==t.getPlayerState()||t.playVideo();break;case"id":case"className":case"width":case"height":t.getIframe()[e]=n;break;case"video":if(n){var r=a.props,o={videoId:n,startSeconds:r.startSeconds||0,endSeconds:r.endSeconds};r.autoplay?t.loadVideoById(o):t.cueVideoById(o)}else t.stopVideo();break;case"playAt":if(n){var c=parseFloat(n.split("|")[0]);t.seekTo(c)}break;case"command":switch(n.split("|")[0]){case"play":t.playVideo();break;case"pause":t.pauseVideo();break;case"reset":t.seekTo(0),t.playVideo();break;case"stop":t.stopVideo()}}}))}))},a.createPlayer=function(){var e=a.props.volume;a.player=le().then((function(e){return new Promise((function(t){a.resolvePlayer=t;var n=new e.Player(a.container,a.getInitialOptions());a.playerInstance=n,a.YTEvents.forEach((function(e){n.addEventListener(e,(function(t){var n=a.props[e];n&&n(t)}))}))}))})),"number"===typeof e&&a.updateProps(["volume"])},a.onPlayerReady=function(e){var t=a.props,n=t.volume,r=t.muted,o=t.suggestedQuality,c=t.playbackRate;"undefined"!==typeof n&&e.target.setVolume(100*n),"undefined"!==typeof r&&(r?e.target.mute():e.target.unMute()),"undefined"!==typeof o&&e.target.setPlaybackQuality(o),"undefined"!==typeof c&&e.target.setPlaybackRate(c),a.resolvePlayer(e.target)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){var t=this,a=Object.keys(this.props).filter((function(a){return t.props[a]!==e[a]}));this.updateProps(a)}},{key:"componentWillUnmount",value:function(){this.playerInstance&&this.playerInstance.destroy()}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.className;return r.a.createElement("div",{id:a,className:n,ref:function(t){return e.container=t}})}}]),t}(r.a.Component);se.defaultProps={autoplay:!1,showCaptions:!1,controls:!0,disableKeyboard:!1,allowFullscreen:!0,annotations:!0,modestBranding:!1,playsInline:!1,showRelatedVideos:!0,showInfo:!0,pingInterval:100,playAt:null,onCued:function(){},onBuffering:function(){},onPlaying:function(){},onPause:function(){},onEnd:function(){},onSpeechChange:null,markers:null,command:null};var ue=se,me=a(21),de=a.n(me),pe=function(e){var t=e.onCommand,a=["repeat","again","next","reset","stop","play","pause"];return r.a.useEffect((function(){if(de.a){var e={};return a.forEach((function(a){return e[a]=function(){return t(a)}})),de.a.addCommands(e),de.a.start(),function(){de.a.abort()}}})),""},fe=Object(d.b)((function(e,t){var a=e.DictationView;return{videoId:t.videoId,markers:a.markers,playAt:a.playAt,command:a.command}}),(function(e){return{onJump:function(t){return e(function(e){return{type:Q,start:e}}(t))},onCommand:function(t){return e({type:"dictation/view/DISPATCH_COMMAND",command:t})}}}))((function(e){var t=e.videoId,a=e.markers,n=e.playAt,o=e.onJump,c=e.command,i=e.onCommand;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(ue,{video:t,markers:a,onSpeechChange:function(e){return o(e)},playAt:n,command:c,width:"720",height:"405",autoplay:"1"}),r.a.createElement(pe,{onCommand:function(e){return i(e)}}))})),ve=a(46),Ee=a.n(ve),be=(a(86),function(e){var t=e.lines,a=e.curStart,n=e.onLineClick;return r.a.useEffect((function(){var e=document.querySelector(".caption-viewer .current");null!=e&&e.scrollIntoView({behavior:"smooth",block:"center"})}),[a]),t&&r.a.createElement("ul",{className:"list-group list-group-flush caption-viewer mt-3"},t.map((function(e){return r.a.createElement("li",{className:"list-group-item caption-item "+e.current,key:e.start,"data-start":e.start,onClick:function(e){return n(e.currentTarget.dataset.start)}},r.a.createElement("span",{className:"caption-item-time"},e.formattedStart),r.a.createElement("span",{className:"caption-item-text"},e.text))})))}),ye=Object(d.b)((function(e,t){var a=e.DictationView;return{lines:a.lines,curStart:a.curStart,videoId:t.videoId}}),(function(e){return{onLineClick:function(t){return e(function(e){return{type:K,start:e}}(t))},onLoaded:function(t,a){return e(function(e){var t=e.videoId,a=e.lines;return{type:F,videoId:t,lines:a}}({videoId:t,lines:a}))}}}))((function(e){var t=e.videoId,a=e.lines,o=e.curStart,c=e.onLineClick,i=e.onLoaded;return Object(n.useEffect)((function(){Ee()("https://voka.azurewebsites.net/api/v1/captions/".concat(t,"/de")).then((function(e){return i(t,e.data)}))}),[]),r.a.createElement(be,{lines:a,curStart:o,onLineClick:c})})),ge=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"dictation/view/CLEANUP"})}},{key:"render",value:function(){var e=this.props.match.params.vid;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement(fe,{videoId:e}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(ye,{videoId:e}))))}}]),t}(r.a.Component),he=Object(d.b)()(ge),Ne=(a(87),a(89),function(e){var t=e.to,a=e.title,n=e.text,o=e.icon;return r.a.createElement("div",{className:"card shadow border-info py-2 dashboard-card mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row align-items-center no-gutters"},r.a.createElement("div",{className:"col mr-2"},r.a.createElement(f.b,{className:"font-weight-bold",to:t},a),r.a.createElement("div",null,n)),r.a.createElement("div",{className:"col-auto"},r.a.createElement("i",{className:o})))))}),Oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).sections=[{to:"/dictation",title:"VIDEO DICTATION",text:"Learning by watching Youtube in Deutsch and repeating along.",icon:"fas fa-chalkboard-teacher fa-5x"},{to:"/voice",title:"LISTEN AND LEARN",text:"Listen in German and write down what you hear.",icon:"fas fa-microphone-alt fa-5x"},{to:"/goal",title:"GOAL SETTING",text:"Setting goals and keep track of progress.",icon:"fas fa-tasks fa-5x"}],a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.sections.map((function(e){return r.a.createElement("div",{className:"col-md-6",key:e.to},r.a.createElement(Ne,{to:e.to,title:e.title,text:e.text,icon:e.icon}))})))}}]),t}(r.a.Component);function ke(e){var t=e.onPlay,a=(e.onRepeat,e.onImport,r.a.useRef(null));r.a.useEffect((function(){Object({NODE_ENV:"production",PUBLIC_URL:"/src-voka-web",REACT_APP_YOUTUBE_SEARCH_KEY:"AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA",REACT_APP_BASE_NAME:"/src-voka-web"}).REACT_APP_VOICE_TEXT_SAMPLE&&(a.current.value=Object({NODE_ENV:"production",PUBLIC_URL:"/src-voka-web",REACT_APP_YOUTUBE_SEARCH_KEY:"AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA",REACT_APP_BASE_NAME:"/src-voka-web"}).REACT_APP_VOICE_TEXT_SAMPLE)}),[]);return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),a.current&&a.current.value){var n=function(e){return e&&e.trim()?e.match(/[^\.!\?]+[\.!\?]+/g).map((function(e){return e.trim()})):null}(a.current.value);t&&t(n)}}},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("label",{htmlFor:"voiceTextControl"},"Paste the text you want to listen!"),r.a.createElement("textarea",{ref:a,className:"form-control",name:"voiceTextControl",id:"voiceTextControl",rows:"10"}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("button",{type:"button",className:"btn btn-info pl-3 pr-3 mr-3"},r.a.createElement("i",{className:"fas fa-folder-open fa-lg"})),r.a.createElement("button",{type:"submit",className:"btn btn-info pl-3 pr-3 mr-3"},r.a.createElement("i",{className:"fas fa-play fa-lg"})),r.a.createElement("button",{type:"button",className:"btn btn-info pl-3 pr-3"},r.a.createElement("i",{className:"fas fa-redo fa-lg"})))))}var we=a(47);function Ae(e){Object(we.a)(e);return r.a.useEffect((function(){if(window.speechSynthesis){var e=window.speechSynthesis.getVoices();if(e&&e.length>0){var t=e.filter((function(e){return"de-DE"===e.lang}));console.log(t)}}}),[]),r.a.createElement("div",null," Voice Test")}var Ce=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,null),r.a.createElement(Ae,null))}}]),t}(r.a.Component),_e=Object(d.b)()(Ce),Se=[x.a];console.log("NODE_ENV: ","production"),console.log("REACT_APP_BASE_NAME: ","/src-voka-web");var Te=Object(R.d)(J,R.a.apply(void 0,Se));c.a.render(r.a.createElement(d.a,{store:Te},r.a.createElement(f.a,{basename:"/src-voka-web"},r.a.createElement((function(e){return r.a.createElement("nav",{className:"navbar navbar-dark bg-info navbar-expand-lg fixed-top portfolio-navbar gradient"},r.a.createElement("div",{className:"container app-container"},r.a.createElement(f.b,{to:"/",className:"navbar-brand logo"},"Deutsch Lernen"),r.a.createElement("button",{className:"navbar-toggler","data-target":"#navbarNav","data-toggle":"collapse"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{id:"navbarNav",className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"nav navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item",role:"presentation"},r.a.createElement(f.b,{to:"/",className:"nav-link active"},"Dashboard")),r.a.createElement("li",{className:"nav-item",role:"presentation"},r.a.createElement(f.b,{to:"/signin",className:"nav-link active"},"Sign In"))))))}),null),r.a.createElement("main",{className:"app-body"},r.a.createElement("section",{className:"app-view"},r.a.createElement("div",{className:"container app-container"},r.a.createElement(X.a,{exact:!0,path:"/",component:Oe}),r.a.createElement(X.a,{exact:!0,path:"/dictation",component:D}),r.a.createElement(X.a,{path:"/dictation/:vid",component:he}),r.a.createElement(X.a,{path:"/goal",component:re}),r.a.createElement(X.a,{path:"/voice",component:_e})))))),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.a0656965.chunk.js.map