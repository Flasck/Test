(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},678:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d}),r(4688),r(6765),r(996);var i=r(170),n=r(5002),o=r(3876),s=r.n(o),a=r(6299),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4688)),"E:\\Projects\\JavaScript\\front\\src\\app\\page.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,6765)),"E:\\Projects\\JavaScript\\front\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,996,23)),"next/dist/client/components/not-found-error"]}],u=["E:\\Projects\\JavaScript\\front\\src\\app\\page.js"],c="/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8656:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3642,23)),Promise.resolve().then(r.t.bind(r,7586,23)),Promise.resolve().then(r.t.bind(r,7838,23)),Promise.resolve().then(r.t.bind(r,8057,23)),Promise.resolve().then(r.t.bind(r,7741,23)),Promise.resolve().then(r.t.bind(r,3118,23))},5314:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,5889,23))},5303:()=>{},5889:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let i=r(352),n=r(6870),o=r(7247),s=n._(r(8964)),a=i._(r(6817)),l=i._(r(9901)),d=r(1807),u=r(1098),c=r(8127);r(8963);let f=r(1579),p=i._(r(9857)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,i,n,o,s){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function h(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let v=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:a,width:l,decoding:d,className:u,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:b,onLoadRef:y,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:_,sizesInput:j,onLoad:P,onError:S,...C}=e;return(0,o.jsx)("img",{...C,...h(f),loading:m,width:l,height:a,decoding:d,"data-nimg":b?"fill":"1",className:u,style:c,sizes:n,srcSet:i,src:r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,p,y,w,x,v,j))},[r,p,y,w,x,S,v,j,t]),onLoad:e=>{g(e.currentTarget,p,y,w,x,v,j)},onError:e=>{_(!0),"empty"!==p&&x(!0),S&&S(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,i),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(f.RouterContext),i=(0,s.useContext)(c.ImageConfigContext),n=(0,s.useMemo)(()=>{let e=m||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:a,onLoadingComplete:l}=e,g=(0,s.useRef)(a);(0,s.useEffect)(()=>{g.current=a},[a]);let h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let[y,w]=(0,s.useState)(!1),[x,_]=(0,s.useState)(!1),{props:j,meta:P}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:y,showAltText:x});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...j,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:_,sizesInput:e.sizes,ref:t}),P.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8679:(e,t,r)=>{"use strict";e.exports=r(4573).vendored.contexts.AmpContext},5142:(e,t,r)=>{"use strict";e.exports=r(4573).vendored.contexts.HeadManagerContext},8127:(e,t,r)=>{"use strict";e.exports=r(4573).vendored.contexts.ImageConfigContext},1579:(e,t,r)=>{"use strict";e.exports=r(4573).vendored.contexts.RouterContext},7892:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||r&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},1807:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(8963);let i=r(8226),n=r(1098);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:v,height:b,fill:y=!1,style:w,overrideSrc:x,onLoad:_,onLoadingComplete:j,placeholder:P="empty",blurDataURL:S,fetchPriority:C,decoding:E="async",layout:O,objectFit:z,objectPosition:M,lazyBoundary:I,lazyRoot:A,...R}=e,{imgConf:k,showAltText:D,blurComplete:G,defaultLoader:N}=t,F=k||n.imageConfigDefault;if("allSizes"in F)a=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);a={...F,allSizes:e,deviceSizes:t}}if(void 0===N)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=R.loader||N;delete R.loader,delete R.srcSet;let B="__next_img_default"in L;if(B){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...i}=t;return e(i)}}if(O){"fill"===O&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let T="",U=s(v),q=s(b);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,T=e.src,!y){if(U||q){if(U&&!q){let t=U/e.width;q=Math.round(e.height*t)}else if(!U&&q){let t=q/e.height;U=Math.round(e.width*t)}}else U=e.width,q=e.height}}let W=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:T)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,W=!1),a.unoptimized&&(f=!0),B&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let J=s(h),V=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:M}:{},D?{}:{color:"transparent"},w),H=G||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:U,heightInt:q,blurWidth:l,blurHeight:d,blurDataURL:S||"",objectFit:V.objectFit})+'")':'url("'+P+'")',Y=H?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},$=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:s,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),u=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:a({config:t,src:r,quality:o,width:l[u]})}}({config:a,src:u,unoptimized:f,width:U,quality:J,sizes:c,loader:L});return{props:{...R,loading:W?"lazy":m,fetchPriority:C,width:U,height:q,decoding:E,className:g,style:{...V,...Y},sizes:$.sizes,srcSet:$.srcSet,src:x||$.src},meta:{unoptimized:f,priority:p,placeholder:P,fill:y}}}},9901:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let i=r(352),n=r(6870),o=r(7247),s=n._(r(8964)),a=i._(r(8070)),l=r(8679),d=r(5142),u=r(7892);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(8963);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,i={};return n=>{let o=!0,s=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){s=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?o=!1:t.add(n.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=n.props[t],r=i[t]||new Set;("name"!==t||!s)&&r.has(e)?o=!1:(r.add(e),i[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,s.default.cloneElement(e,t)}return s.default.cloneElement(e,{key:i})})}let g=function(e){let{children:t}=e,r=(0,s.useContext)(l.AmpStateContext),i=(0,s.useContext)(d.HeadManagerContext);return(0,o.jsx)(a.default,{reduceComponentsToState:m,headManager:i,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8226:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:s}=e,a=i?40*i:t,l=n?40*n:r,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},1098:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},9857:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},8070:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let i=r(8964),n=()=>{},o=()=>{};function s(e){var t;let{headManager:r,reduceComponentsToState:s}=e;function a(){if(r&&r.mountedInstances){let t=i.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(s(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),a(),n(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),n(()=>(r&&(r._pendingUpdate=a),()=>{r&&(r._pendingUpdate=a)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1088:e=>{e.exports={}},3476:(e,t,r)=>{"use strict";let{createProxy:i}=r(5347);e.exports=i("E:\\Projects\\JavaScript\\front\\node_modules\\next\\dist\\client\\image-component.js")},3297:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(3516);let i=r(7844),n=r(9659);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:v,height:b,fill:y=!1,style:w,overrideSrc:x,onLoad:_,onLoadingComplete:j,placeholder:P="empty",blurDataURL:S,fetchPriority:C,decoding:E="async",layout:O,objectFit:z,objectPosition:M,lazyBoundary:I,lazyRoot:A,...R}=e,{imgConf:k,showAltText:D,blurComplete:G,defaultLoader:N}=t,F=k||n.imageConfigDefault;if("allSizes"in F)a=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);a={...F,allSizes:e,deviceSizes:t}}if(void 0===N)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=R.loader||N;delete R.loader,delete R.srcSet;let B="__next_img_default"in L;if(B){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...i}=t;return e(i)}}if(O){"fill"===O&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let T="",U=s(v),q=s(b);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,T=e.src,!y){if(U||q){if(U&&!q){let t=U/e.width;q=Math.round(e.height*t)}else if(!U&&q){let t=q/e.height;U=Math.round(e.width*t)}}else U=e.width,q=e.height}}let W=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:T)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,W=!1),a.unoptimized&&(f=!0),B&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let J=s(h),V=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:M}:{},D?{}:{color:"transparent"},w),H=G||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:U,heightInt:q,blurWidth:l,blurHeight:d,blurDataURL:S||"",objectFit:V.objectFit})+'")':'url("'+P+'")',Y=H?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},$=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:s,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),u=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:a({config:t,src:r,quality:o,width:l[u]})}}({config:a,src:u,unoptimized:f,width:U,quality:J,sizes:c,loader:L});return{props:{...R,loading:W?"lazy":m,fetchPriority:C,width:U,height:q,decoding:E,className:g,style:{...V,...Y},sizes:$.sizes,srcSet:$.srcSet,src:x||$.src},meta:{unoptimized:f,priority:p,placeholder:P,fill:y}}}},7844:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:s}=e,a=i?40*i:t,l=n?40*n:r,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},9659:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},7492:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let i=r(6484),n=r(3297),o=r(3476),s=i._(r(4363));function a(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=o.Image},4363:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},3516:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},6765:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>n});var i=r(2051);let n={title:"Create Next App",description:"Generated by create next app"};function o({children:e}){return i.jsx("html",{lang:"en",children:i.jsx("body",{children:e})})}},4688:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var i=r(2051);function n(){return i.jsx("div",{children:"1234567890"})}r(7492),r(1088)}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[138],()=>r(678));module.exports=i})();