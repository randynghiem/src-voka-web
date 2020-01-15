(this["webpackJsonpsrc-voka-web"]=this["webpackJsonpsrc-voka-web"]||[]).push([[0],{47:function(e,t,n){e.exports=n(90)},50:function(e,t,n){},59:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);n(48),n(49),n(50);var a=n(0),r=n.n(a),o=n(23),c=n.n(o),i=n(4),l=n(5),s=n(7),u=n(6),m=n(8),d=n(3),p=function(e){var t=e.query,n=e.onClick,o=Object(a.useRef)(null);r.a.useEffect((function(){o&&(o.current.value=t)}),[]);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o.current.value&&n&&n(o.current.value)}},r.a.createElement("div",{className:"form-row mt-3 mb-3"},r.a.createElement("div",{className:"col-8"},r.a.createElement("input",{ref:o,type:"text",name:"queryBox",id:"queryBox",className:"form-control",placeholder:"Search Youtube"})),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary pl-4 pr-4"},r.a.createElement("i",{className:"fas fa-search fa-lg"})))))},f=(n(59),n(14)),v=function(e){var t=e.children;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},E=n(41),b=n.n(E),g=function(e){var t=e.videos,n=e.onFiniteScroll;return r.a.useEffect((function(){document.addEventListener("scroll",b.a.debounce((function(){(function(){var e=document.documentElement,t=document.body,n=e.clientHeight,a=window.pageYOffset;return Math.max(t.scrollHeight,e.scrollHeight,t.offsetHeight,e.offsetHeight,t.clientHeight,e.clientHeight)-a-n})()<50&&n()}),100))}),[]),t&&r.a.createElement("ul",{className:"list-group list-group-flush col-md-8 mb-3"},t.map((function(e){return r.a.createElement("li",{className:"list-group-item app-yt-item",key:e.etag},r.a.createElement("div",{className:"video-list media"},r.a.createElement("div",{className:"media-left mr-4"},r.a.createElement(f.b,{to:"/dictation/".concat(e.id.videoId)},r.a.createElement("img",{src:e.snippet.thumbnails.default.url,alt:"",className:"media-object"}))),r.a.createElement("div",{className:"media-body"},r.a.createElement("div",{className:"media-heading"},r.a.createElement(f.b,{to:"/dictation/".concat(e.id.videoId)},r.a.createElement(v,null,e.snippet.title))))))})))},h=n(20),y=n(2),O=n(43),N=n.n(O),A=function(e,t){return e+"?"+Object.keys(t).map((function(e){return e+"="+t[e]})).join("&")};var w="https://www.googleapis.com/youtube/v3/search",k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){e.key&&e.q&&e.part&&e.type||n(new Error("Please make sure that the required fields are inserted"));var a=A(w,e);N()(a).then((function(e){return t(e.json())})).catch(n)}))},_="AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA",I="dictation/search/CLEANUP",T={query:null,isLoading:!1,hasError:!1,nextPageToken:null,videos:[]},j=function(e){return{type:"search/LOADING_QUERY_DATA",query:e}},C=function(e){return{type:"search/LOADED_QUERY_DATA",data:e}},S=function(e){return{type:"search/APPEND_QUERY_DATA",data:e}},P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.cleanup()}},{key:"render",value:function(){var e=this.props,t=e.query,n=e.videos,a=e.triggerQuery;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{onClick:a,query:t}),r.a.createElement(g,{videos:n,onFiniteScroll:a}))}}]),t}(r.a.Component),L=Object(d.b)((function(e){var t=e.DictationSearch;return{query:t.query,videos:t.videos}}),{triggerQuery:function(e){return function(t,n){var a=n().DictationSearch;a.isLoading||(e?(t(j(e)),k({key:_,q:e,part:"snippet",type:"video",relevanceLanguage:"de",maxResults:10}).then((function(e){t(C(e))})).catch((function(e){console.log("Error: ",e)}))):(t(j(a.query)),k({key:_,q:a.query,part:"snippet",type:"video",relevanceLanguage:"de",maxResults:10,pageToken:a.nextPageToken}).then((function(e){t(S(e))})).catch((function(e){console.log("Error: ",e)}))))}},cleanup:function(){return{type:I}}})(P),D=n(44),x=(n(62),n(18)),G="goals/TOGGLE_GOAL",R="goals/ADD_GOAL",U="goals/FILTER_GOAL",H="goals/CLEANUP",V={SHOW_ALL:"SHOW_ALL",SHOW_ACTIVE:"SHOW_ACTIVE",SHOW_DONE:"SHOW_DONE"},Y={goals:[],filter:V.SHOW_ALL},M=0;var W=function(e){var t=Math.floor(e),n=t%60,a=Math.floor(t/60);return a<10?"0"+a+":"+("0"+n).slice(-2):a+":"+("0"+n).slice(-2)},B=function(e,t){return e.map((function(e){return Object(y.a)({},e,{current:e.start===t?"current":""})}))},q="dictation/view/LOAD_CAPTION",F="dictation/view/JUMP_TO_LINE",Q="dictation/view/CHANGE_TO_LINE",K={videoId:null,lines:null,markers:null,playAt:null,curStart:null,command:null},Z=null,X=function(){return Z||(Z=new Promise((function(e,t){window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:Object({NODE_ENV:"production",PUBLIC_URL:"/src-voka-web",REACT_APP_YOUTUBE_SEARCH_KEY:"AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA",REACT_APP_BASE_NAME:"/src-voka-web"}).REACT_APP_GOOGLE_CLIENT_API,cookiepolicy:"single_host_origin"}).then((function(t){e(t)})).catch((function(e){return t(e)}))}))}))),Z},z="auth/AUTHENTICATING_WITH_GOOGLE",J="auth/SIGNED_IN_WITH_GOOGLE",$="auth/SIGNED_OUT_WITH_GOOGLE",ee={provider:null,ready:!0,isAuthenticated:!1,uid:null,name:null,email:null},te=function(e){return function(t,n){var a=n().Auth;a.ready&&(t(ne()),"google"===e&&(a.isAuthenticated?(console.log("sign out"),new Promise((function(e,t){X().then((function(t){t.signOut().then((function(){e(!0)}))})).catch((function(e){return t(e)}))}))).then((function(e){t(re())})).catch((function(e){return console.log(e)})):(console.log("signed in"),new Promise((function(e,t){X().then((function(t){t.signIn().then((function(t){var n=t.getBasicProfile();e({uid:n.getId(),name:n.getName(),email:n.getEmail()})}))})).catch((function(e){return t(e)}))}))).then((function(e){t(ae(e))})).catch((function(e){return console.log(e)}))))}},ne=function(){return{type:z}},ae=function(e){return{type:J,payload:e}},re=function(){return{type:$}};var oe=Object(x.c)({Auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case z:return Object(y.a)({},e,{provider:"google",ready:!1});case J:return Object(y.a)({},e,{ready:!0,isAuthenticated:!0},t.payload);case $:return ee;default:return e}},GoalState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case G:return Object(y.a)({},e,{goals:e.goals.map((function(e){return e.id===t.id?Object(y.a)({},e,{done:!e.done}):e}))});case R:return Object(y.a)({},e,{goals:[].concat(Object(h.a)(e.goals),[{id:t.id,done:!1,text:t.text}])});case U:return Object(y.a)({},e,{filter:t.filter});case H:return Y;default:return e}},DictationSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"search/LOADING_QUERY_DATA":return Object(y.a)({},e,{query:t.query,isLoading:!0});case"search/LOADED_QUERY_DATA":return Object(y.a)({},e,{videos:t.data.items,nextPageToken:t.data.nextPageToken,isLoading:!1});case"search/APPEND_QUERY_DATA":return Object(y.a)({},e,{videos:[].concat(Object(h.a)(e.videos),Object(h.a)(t.data.items)),nextPageToken:t.data.nextPageToken,isLoading:!1});case I:return T;default:return e}},DictationView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case q:var n=t.lines.map((function(e){return Object(y.a)({},e,{formattedStart:W(e.start)})}));return n[0].current="current",Object(y.a)({},e,{videoId:t.videoId,lines:n,markers:t.lines.map((function(e){return e.start}))});case F:if(!e.lines)return;return Object(y.a)({},e,{curStart:t.start,lines:B(e.lines,t.start)});case Q:if(!e.lines)return;return Object(y.a)({},e,{playAt:t.start+"|"+(new Date).getTime(),curStart:t.start,lines:B(e.lines,t.start)});case"dictation/view/DISPATCH_COMMAND":return Object(y.a)({},e,{command:t.command+"|"+(new Date).getTime()});case"dictation/view/CLEANUP":return K;default:return e}}}),ce=n(17),ie=function(e){var t=e.onClick,n=r.a.useRef(null);return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),n&&n.current.value){var a=n.current.value.trim();t&&t(a),n.current.value=""}}},r.a.createElement("div",{className:"form-row mb-3 mt-3"},r.a.createElement("div",{className:"col-8"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Todo Item",ref:n})),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"Add Item"))))},le=function(e){var t=e.text,n=e.done,a=e.onClick,o=n?" list-group-item-success":"";return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"+o,onClick:a},t,r.a.createElement("span",{className:"badge badge-secondary badge-pill"},"New"))},se=function(e){var t=e.goals,n=e.toggleGoal;return r.a.createElement("ul",{className:"list-group mb-3"},null!=t&&t.map((function(e){return r.a.createElement(le,Object.assign({key:e.id},e,{onClick:function(){return n(e.id)}}))})))},ue=function(e){var t=e.FilterType,n=e.filter,a=e.onFilter,o=n===t.SHOW_ALL?"active":"",c=n===t.SHOW_ACTIVE?"active":"",i=n===t.SHOW_DONE?"active":"";return r.a.createElement("div",{className:"btn-group btn-group-toggle"},r.a.createElement("label",{className:"btn btn-outline-info "+o},r.a.createElement("input",{type:"radio",name:"filters",onClick:function(){return a(t.SHOW_ALL)}})," All"),r.a.createElement("label",{className:"btn btn-outline-info "+c},r.a.createElement("input",{type:"radio",name:"filters",onClick:function(){return a(t.SHOW_ACTIVE)}})," Active"),r.a.createElement("label",{className:"btn btn-outline-info "+i},r.a.createElement("input",{type:"radio",name:"filters",onClick:function(){return a(t.SHOW_DONE)}})," Done"))},me=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.cleanup()}},{key:"render",value:function(){var e=this.props,t=e.goals,n=e.filter,a=e.addGoal,o=e.toggleGoal,c=e.filterGoal;return r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-md-10 col-lg-8"},r.a.createElement(ie,{onClick:function(e){return a(e)}}),r.a.createElement(se,{goals:t,toggleGoal:o}),r.a.createElement(ue,{FilterType:V,filter:n,onFilter:c})))}}]),t}(r.a.Component),de=function(e,t){switch(t){case V.SHOW_ACTIVE:return e.filter((function(e){return!1===e.done}));case V.SHOW_DONE:return e.filter((function(e){return!0===e.done}));default:return e}},pe=Object(d.b)((function(e){var t=e.GoalState;return{goals:de(t.goals,t.filter),filter:t.filter}}),{addGoal:function(e){return{type:R,id:M++,done:!1,text:e}},toggleGoal:function(e){return{type:G,id:e}},filterGoal:function(e){return{type:U,filter:e}},cleanup:function(){return{type:H}}})(me),fe=n(45),ve=n.n(fe),Ee=null,be=function(){return Ee||(Ee=new Promise((function(e,t){"object"!==typeof window.YT||"function"!==typeof window.YT.ready?ve()("https://www.youtube.com/iframe_api").then((function(){window.YT.ready((function(){e(window.YT)}))}),(function(e){t(e)})):window.YT.ready((function(){e(window.YT)}))}))),Ee},ge=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).YTEvents=["onReady","onStateChange","onPlaybackQualityChange","onPlaybackRateChange","onError"],n.intervalMarker=null,n.findLastMarker=function(e,t,n){for(var a=e.length,r=1;r<a;r++)if(e[r]>t&&e[r]<=n)return{curStart:e[r-1],nextStart:e[r]};return null},n.onPlayerStateChange=function(e){var t=n.props,a=t.onCued,r=t.onBuffering,o=t.onPause,c=t.onPlaying,i=t.onEnd,l=t.pingInterval,s=t.markers,u=t.onSpeechChange,m=window.YT.PlayerState;switch(null!==s&&s.length>0&&(e.data===m.PLAYING?n.intervalMarker=setInterval((function(){var t=e.target.getCurrentTime(),a=n.findLastMarker(s,t,t+l/1e3);null!=a&&u&&u(a.nextStart)}),l):clearInterval(n.intervalMarker)),e.data){case m.CUED:a(e);break;case m.BUFFERING:r(e);break;case m.PAUSED:o(e);break;case m.PLAYING:c(e);break;case m.ENDED:i(e)}},n.getInitialOptions=function(){return{videoId:n.props.video,width:n.props.width,height:n.props.height,playerVars:{autoplay:n.props.autoplay,cc_load_policy:n.props.showCaptions?1:0,controls:n.props.controls?1:0,disablekb:n.props.disableKeyboard?1:0,fs:n.props.allowFullscreen?1:0,hl:n.props.lang,iv_load_policy:n.props.annotations?1:3,start:n.props.startSeconds,end:n.props.endSeconds,modestbranding:n.props.modestBranding?1:0,playsinline:n.props.playsInline?1:0,rel:n.props.showRelatedVideos?1:0,showinfo:n.props.showInfo?1:0},events:{onReady:n.onPlayerReady,onStateChange:n.onPlayerStateChange}}},n.updateProps=function(e){n.player.then((function(t){e.forEach((function(e){var a=n.props[e];switch(e){case"muted":a?t.mute():t.unMute();break;case"suggestedQuality":t.setPlaybackQuality(a);break;case"volume":t.setVolume(100*a);break;case"paused":a&&2!==t.getPlayerState()?t.pauseVideo():a||2!==t.getPlayerState()||t.playVideo();break;case"id":case"className":case"width":case"height":t.getIframe()[e]=a;break;case"video":if(a){var r=n.props,o={videoId:a,startSeconds:r.startSeconds||0,endSeconds:r.endSeconds};r.autoplay?t.loadVideoById(o):t.cueVideoById(o)}else t.stopVideo();break;case"playAt":if(a){var c=parseFloat(a.split("|")[0]);t.seekTo(c)}break;case"command":switch(a.split("|")[0]){case"play":t.playVideo();break;case"pause":t.pauseVideo();break;case"reset":t.seekTo(0),t.playVideo();break;case"stop":t.stopVideo()}}}))}))},n.createPlayer=function(){var e=n.props.volume;n.player=be().then((function(e){return new Promise((function(t){n.resolvePlayer=t;var a=new e.Player(n.container,n.getInitialOptions());n.playerInstance=a,n.YTEvents.forEach((function(e){a.addEventListener(e,(function(t){var a=n.props[e];a&&a(t)}))}))}))})),"number"===typeof e&&n.updateProps(["volume"])},n.onPlayerReady=function(e){var t=n.props,a=t.volume,r=t.muted,o=t.suggestedQuality,c=t.playbackRate;"undefined"!==typeof a&&e.target.setVolume(100*a),"undefined"!==typeof r&&(r?e.target.mute():e.target.unMute()),"undefined"!==typeof o&&e.target.setPlaybackQuality(o),"undefined"!==typeof c&&e.target.setPlaybackRate(c),n.resolvePlayer(e.target)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){var t=this,n=Object.keys(this.props).filter((function(n){return t.props[n]!==e[n]}));this.updateProps(n)}},{key:"componentWillUnmount",value:function(){this.playerInstance&&this.playerInstance.destroy()}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.className;return r.a.createElement("div",{id:n,className:a,ref:function(t){return e.container=t}})}}]),t}(r.a.Component);ge.defaultProps={autoplay:!1,showCaptions:!1,controls:!0,disableKeyboard:!1,allowFullscreen:!0,annotations:!0,modestBranding:!1,playsInline:!1,showRelatedVideos:!0,showInfo:!0,pingInterval:100,playAt:null,onCued:function(){},onBuffering:function(){},onPlaying:function(){},onPause:function(){},onEnd:function(){},onSpeechChange:null,markers:null,command:null};var he=ge,ye=n(21),Oe=n.n(ye),Ne=function(e){var t=e.commands,n=e.onCommand;return r.a.useEffect((function(){if(Oe.a){var e={};return t.forEach((function(t){return e[t]=function(){return n(t)}})),Oe.a.addCommands(e),Oe.a.start(),function(){Oe.a.abort()}}})),""},Ae=Object(d.b)((function(e,t){var n=e.DictationView;return{videoId:t.videoId,markers:n.markers,playAt:n.playAt,command:n.command}}),{jumpToLine:function(e){return{type:F,start:e}},dispatchCommand:function(e){return{type:"dictation/view/DISPATCH_COMMAND",command:e}}})((function(e){var t=e.videoId,n=e.markers,a=e.playAt,o=e.command,c=e.jumpToLine,i=e.dispatchCommand;return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(he,{video:t,markers:n,onSpeechChange:function(e){return c(e)},playAt:a,command:o,width:"720",height:"405",autoplay:"1"}),r.a.createElement(Ne,{commands:["repeat","again","next","reset","stop","play","pause"],onCommand:function(e){return i(e)}}))})),we=n(46),ke=n.n(we),_e=(n(85),function(e){var t=e.lines,n=e.curStart,a=e.onLineClick;return r.a.useEffect((function(){var e=document.querySelector(".caption-viewer .current");null!=e&&e.scrollIntoView({behavior:"smooth",block:"center"})}),[n]),t&&r.a.createElement("ul",{className:"list-group list-group-flush caption-viewer mt-3"},t.map((function(e){return r.a.createElement("li",{className:"list-group-item caption-item "+e.current,key:e.start,"data-start":e.start,onClick:function(e){return a(e.currentTarget.dataset.start)}},r.a.createElement("span",{className:"caption-item-time"},e.formattedStart),r.a.createElement("span",{className:"caption-item-text"},e.text))})))}),Ie=Object(d.b)((function(e,t){var n=e.DictationView;return{lines:n.lines,curStart:n.curStart,videoId:t.videoId}}),{changeToLine:function(e){return{type:Q,start:e}},loadCaption:function(e){var t=e.videoId,n=e.lines;return{type:q,videoId:t,lines:n}}})((function(e){var t=e.videoId,n=e.lines,o=e.curStart,c=e.changeToLine,i=e.loadCaption;return Object(a.useEffect)((function(){ke()("https://voka.azurewebsites.net/api/v1/captions/".concat(t,"/de")).then((function(e){return i({videoId:t,lines:e.data})}))}),[]),r.a.createElement(_e,{lines:n,curStart:o,onLineClick:c})})),Te=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"dictation/view/CLEANUP"})}},{key:"render",value:function(){var e=this.props.match.params.vid;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement(Ae,{videoId:e}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(Ie,{videoId:e}))))}}]),t}(r.a.Component),je=Object(d.b)()(Te),Ce=(n(86),n(87),function(e){var t=e.isAuthenticated,n=e.signInOrOut;return r.a.createElement("nav",{className:"navbar navbar-dark bg-info navbar-expand-lg fixed-top portfolio-navbar gradient"},r.a.createElement("div",{className:"container app-container"},r.a.createElement(f.b,{to:"/",className:"navbar-brand logo"},"Deutsch Lernen"),r.a.createElement("button",{className:"navbar-toggler","data-target":"#navbarNav","data-toggle":"collapse"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{id:"navbarNav",className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"nav navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item",role:"presentation"},r.a.createElement(f.b,{to:"/",className:"nav-link voka-nav-link active"},"Dashboard")),r.a.createElement("li",{className:"nav-item",role:"presentation"},r.a.createElement("span",{className:"nav-link active voka-nav-link",onClick:n},t?"Sign Out":"Sign In","|",r.a.createElement("i",{className:"fab fa-google fa-xs"})))))))}),Se=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).signInOrOut=function(){n.props.dispatch(te("google"))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.isAuthenticated;return r.a.createElement(Ce,{isAuthenticated:e,signInOrOut:this.signInOrOut})}}]),t}(r.a.Component),Pe=Object(d.b)((function(e){return{isAuthenticated:e.Auth.isAuthenticated}}))(Se),Le=(n(89),function(e){var t=e.to,n=e.title,a=e.text,o=e.icon;return r.a.createElement("div",{className:"card shadow border-info py-2 dashboard-card mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row align-items-center no-gutters"},r.a.createElement("div",{className:"col mr-2"},r.a.createElement(f.b,{className:"font-weight-bold",to:t},n),r.a.createElement("div",null,a)),r.a.createElement("div",{className:"col-auto"},r.a.createElement("i",{className:o})))))}),De=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).sections=[{to:"/dictation",title:"VIDEO DICTATION",text:"Learning by watching Youtube in Deutsch and repeating along.",icon:"fas fa-chalkboard-teacher fa-5x"},{to:"/voice",title:"LISTEN AND LEARN",text:"Listen in German and write down what you hear.",icon:"fas fa-microphone-alt fa-5x"},{to:"/goal",title:"GOAL SETTING",text:"Setting goals and keep track of progress.",icon:"fas fa-tasks fa-5x"}],n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.sections.map((function(e){return r.a.createElement("div",{className:"col-md-6",key:e.to},r.a.createElement(Le,{to:e.to,title:e.title,text:e.text,icon:e.icon}))})))}}]),t}(r.a.Component);function xe(e){var t=e.onPlay,n=e.onRepeat,a=e.onImport,o=r.a.useRef(null);r.a.useEffect((function(){Object({NODE_ENV:"production",PUBLIC_URL:"/src-voka-web",REACT_APP_YOUTUBE_SEARCH_KEY:"AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA",REACT_APP_BASE_NAME:"/src-voka-web"}).REACT_APP_VOICE_TEXT_SAMPLE&&(o.current.value=Object({NODE_ENV:"production",PUBLIC_URL:"/src-voka-web",REACT_APP_YOUTUBE_SEARCH_KEY:"AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA",REACT_APP_BASE_NAME:"/src-voka-web"}).REACT_APP_VOICE_TEXT_SAMPLE)}),[]);return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),o.current&&o.current.value){var n=function(e){return e&&e.trim()?e.match(/[^\.!\?]+[\.!\?]+/g).map((function(e){return e.trim()})):null}(o.current.value);t&&t(n)}}},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("label",{htmlFor:"voiceTextControl"},"Paste the text you want to listen!"),r.a.createElement("textarea",{ref:o,className:"form-control",name:"voiceTextControl",id:"voiceTextControl",rows:"10"}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("button",{type:"button",className:"btn btn-info pl-3 pr-3 mr-3",onClick:function(){return a()}},r.a.createElement("i",{className:"fas fa-folder-open fa-lg"})),r.a.createElement("button",{type:"submit",className:"btn btn-info pl-3 pr-3 mr-3"},r.a.createElement("i",{className:"fas fa-play fa-lg"})),r.a.createElement("button",{type:"button",className:"btn btn-info pl-3 pr-3",onClick:function(){return n()}},r.a.createElement("i",{className:"fas fa-redo fa-lg"})))))}var Ge=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={curVoice:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({curVoice:new Promise((function(e,t){window.speechSynthesis.onvoiceschanged=function(){var n=window.speechSynthesis.getVoices().filter((function(e){return"Google Deutsch"===e.voiceURI}));1===n.length?e(n[0]):t("Not able to get any supported voice.")}}))})}},{key:"componentDidUpdate",value:function(e){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement(xe,null)}}]),t}(r.a.Component),Re=Object(d.b)()(Ge),Ue=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-6 text-center mt-5 pb-5 pt-5 bg-light shadow"},r.a.createElement("div",{className:"mb-5"},r.a.createElement("i",{className:"fas fa-user fa-5x text-info"})),r.a.createElement("button",{type:"button",className:"btn btn-danger pl-3 pr-5"},r.a.createElement("i",{className:"fab fa-google mr-5"}),"Sign In with Google")))}}]),t}(r.a.Component),He=Object(d.b)()(Ue),Ve=[D.a];console.log("NODE_ENV: ","production"),console.log("REACT_APP_BASE_NAME: ","/src-voka-web");var Ye=Object(x.d)(oe,x.a.apply(void 0,Ve));c.a.render(r.a.createElement(d.a,{store:Ye},r.a.createElement(f.a,{basename:"/src-voka-web"},r.a.createElement(Pe,null),r.a.createElement("main",{className:"app-body"},r.a.createElement("section",{className:"app-view"},r.a.createElement("div",{className:"container app-container"},r.a.createElement(ce.a,{exact:!0,path:"/login",component:He}),r.a.createElement(ce.a,{exact:!0,path:"/",component:De}),r.a.createElement(ce.a,{exact:!0,path:"/dictation",component:L}),r.a.createElement(ce.a,{path:"/dictation/:vid",component:je}),r.a.createElement(ce.a,{path:"/goal",component:pe}),r.a.createElement(ce.a,{path:"/voice",component:Re})))))),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4fac9104.chunk.js.map