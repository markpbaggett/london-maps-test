(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[566],{3235:function(e,r,n){"use strict";n.d(r,{Z:function(){return x}});var o=n(7178),t=n(3245),i=n(9499),a=n(2854),c=(0,a.zo)("div",{padding:"$gr3 0 0"}),s=(0,a.zo)("div",{backgroundColor:"var(--gray-3)",width:"100%",height:"100%",overflowY:"hidden",borderRadius:"3px",transition:"$canopyAll"}),l=(0,a.zo)("div",{display:"flex",width:"100%",position:"relative",flexGrow:1,flexShrink:0,maxWidth:"275px",img:{width:"100%",height:"100%",objectFit:"cover"},a:(0,i.Z)({display:"flex",flexDirection:"column",width:"100%",color:"var(--gray-12)",textDecoration:"none !important",transition:"$canopyAll"},"&:hover, &:focus",(0,i.Z)({color:"var(--accent-11)"},"".concat(s),{transform:"scale3d(1.03, 1.03, 1.03)"}))}),d=n(3093),u=n(8522),p=n(6225),g=n(3817),f=n(9342),h=(0,a.zo)("img",(0,i.Z)({position:"relative",zIndex:"1",width:"100%",height:"100%",objectFit:"contain",transition:"$canopyAll",opacity:0,color:"transparent"},"&.loaded",{opacity:1})),b=(0,a.zo)("figure",{backgroundColor:"var(--gray-3)",display:"flex",width:"100%",height:"100%",padding:"0",margin:"0",position:"relative",overflow:"hidden",zIndex:"0",borderRadius:"3px",transition:"$canopyAll"}),v=n(7294),y=n(6010),getResourceImage=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"600,",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";if(Array.isArray(e)&&(e=e[0]),!e.service)return e.id;if(!Array.isArray(e.service)){if(e.service["@id"])return"".concat(e.service["@id"],"/").concat(n,"/").concat(r,"/0/default.jpg");if(e.service.id)return"".concat(e.service.id,"/").concat(n,"/").concat(r,"/0/default.jpg")}return e.service[0]["@id"]?"".concat(e.service[0]["@id"],"/").concat(n,"/").concat(r,"/0/default.jpg"):"".concat(e.service[0].id,"/").concat(n,"/").concat(r,"/0/default.jpg")},m=n(5893),Figure_Figure=function(e){var r=e.alt,n=e.resource,o=e.region,t=void 0===o?"full":o,i=e.size,a=void 0===i?"400,":i,c=e.isCover,s=(0,v.useState)(),l=s[0],d=s[1],u=(0,v.useState)(!1),p=u[0],g=u[1],f=(0,v.useRef)(null);return(0,v.useEffect)(function(){var e;d(getResourceImage(n,a,t)),null!=f&&f.current&&null!=f&&null!==(e=f.current)&&void 0!==e&&e.complete&&g(!0)},[]),(0,m.jsx)(b,{children:(0,m.jsx)(h,{alt:r,src:l,ref:f,style:void 0!==c&&c?{objectFit:"cover",objectPosition:"50% 50%",width:"100%",height:"100%"}:{},onLoad:function(){return g(!0)},className:(0,y.Z)("source",p&&"loaded")})})},j=n(1830),w=n(9769),O=n(2708),x=v.memo(function(e){var r=e.resource,n=1,i=r.label,a=r.homepage,h=r.thumbnail,b=h[0],v=b.width,y=b.height;v&&y&&(n=v/y);var x=(0,O.YD)(),S=x.ref,P=x.inView,_=(0,w.i)(i);return(0,m.jsx)(l,{as:t.Box,ref:S,children:(0,m.jsx)(t.Card,{size:"2",style:{width:"100%"},variant:"classic",asChild:!0,children:(0,m.jsxs)(f.Z,{href:a&&a[0].id?a[0].id:"",children:[(0,m.jsx)(t.Inset,{clip:"padding-box",side:"top","data-testid":"canopy-card-inset","data-resource":h[0].id,children:(0,m.jsx)(o.f,{ratio:n,children:(0,m.jsx)(s,{children:(0,m.jsx)(d.A,{transition:{duration:1},children:P&&r&&(0,m.jsx)(u.X,{features:p.H,children:(0,m.jsx)(g.m.div,{style:{height:"100%"},initial:{opacity:0},animate:{opacity:1},children:(0,m.jsx)(Figure_Figure,{resource:h,alt:_})})})})})})}),(0,m.jsx)(t.Text,{size:"2",asChild:!0,children:(0,m.jsx)(c,{children:(0,m.jsx)(j.Label,{label:i})})})]})})})})},2929:function(e,r,n){"use strict";n.d(r,{Z:function(){return u}});var o=n(9499),t=n(3235),i=n(827),a=n(2854),c=(0,a.zo)("div",{paddingBottom:"$gr4",zIndex:"1","@xxs":{paddingBottom:"$gr2"},"@xs":{paddingBottom:"$gr2"},"@sm":{paddingBottom:"$gr3"},"@md":{paddingBottom:"$gr3"}}),s=(0,a.zo)(i.Z,{display:"flex",width:"auto",position:"relative",padding:"$gr2 0",zIndex:"1",".canopy-grid-column":{marginLeft:"$gr4","@xxs":{marginLeft:"$gr2"},"@xs":{marginLeft:"$gr2"},"@sm":{marginLeft:"$gr3"},"@md":{marginLeft:"$gr3"},"&:first-child":{marginLeft:"0"}}});n(7294);var l=n(5893),d=n(7668),Grid=function(e){var r,n=e.children,t=(r={default:6},(0,o.Z)(r,d.b.xl,5),(0,o.Z)(r,d.b.lg,4),(0,o.Z)(r,d.b.md,4),(0,o.Z)(r,d.b.sm,3),(0,o.Z)(r,d.b.xs,2),r);return(0,l.jsx)(s,{breakpointCols:t,className:"canopy-grid",columnClassName:"canopy-grid-column",children:n})};Grid.Item=function(e){var r=e.item;return r?(0,l.jsx)(c,{children:(0,l.jsx)(t.Z,{resource:r},r.id)}):(0,l.jsx)(l.Fragment,{})};var u=Grid},5566:function(e,r,n){"use strict";n.d(r,{Z:function(){return MDX}});var o=n(9499),t=n(3245),i=n(5079),a=n(5407),c=n(9342),s=n(7294),l=n(5893);function ownKeys(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(n),!0).forEach(function(r){(0,o.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var d=n(3235),u=n(2854),p=(0,u.zo)("div",{paddingBottom:"$gr4",zIndex:"1","@md":{paddingBottom:"$gr3"},"@xs":{paddingBottom:"$gr2"}});n(6803),n(2794),n(3981);var g=n(633),MDX_Card=function(e){var r=e.iiifContent,n=(0,s.useState)(),o=n[0],t=n[1];return((0,s.useEffect)(function(){var e=g.find(function(e){return e.id===r});e&&t({id:r,type:"Manifest",label:e.label,thumbnail:e.thumbnail,homepage:[{id:"/works/".concat(e.slug),label:e.label,type:"Text"}]})},[r]),o)?(0,l.jsx)(p,{"data-testid":"mdx-card",children:(0,l.jsx)(d.Z,{resource:o})}):null},f=(0,u.zo)(t.ScrollArea,{backgroundColor:"var(--accent-2)",boxShadow:"inset var(--shadow-1)",position:"relative",maxHeight:"61.8vh",borderRadius:"max(var(--radius-1))",button:{position:"absolute",marginTop:"$gr3",right:"$gr3"}}),h=(0,u.zo)("pre",{color:"var(--accent-11)",fontSize:"$gr2",padding:"$gr2 $gr3 ",lineHeight:"1.382em",zIndex:"0"}),b=(0,u.zo)("code",{backgroundColor:"var(--accent-2)",color:"var(--accent-11)",padding:"3px $gr1",borderRadius:"max(var(--radius-1), var(--radius-full))",fontSize:"$gr2",boxShadow:"var(--shadow-2)"}),v=n(7087),y=n(2469),m=n(640),j=n.n(m),w={plain:{color:"var(--accent-12)",fontFamily:"Menlo, monospace"},styles:[{types:["boolean","string"],style:{color:"var(--accent-10)"}},{types:["operator"],style:{color:"var(--accent-11)"}},{types:["punctuation"],style:{color:"var(--accent-8)"}}]};function Code_ownKeys(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function Code_objectSpread(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?Code_ownKeys(Object(n),!0).forEach(function(r){(0,o.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Code_ownKeys(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Code_Code=function(e){var r=e.children,n=e.language;return(0,l.jsx)(v.ZP,Code_objectSpread(Code_objectSpread({},v.lG),{},{theme:w,code:r,language:n,children:function(e){var n=e.style,o=e.tokens,t=e.getLineProps,i=e.getTokenProps;return(0,l.jsxs)(f,{children:[(0,l.jsxs)(a.O,{size:"1","aria-label":"Copy Code",onClick:function(){j()(r)},children:["Copy ",(0,l.jsx)(y.TIy,{})]}),(0,l.jsx)(h,{style:n,children:o.map(function(e,r){return(0,l.jsx)("div",Code_objectSpread(Code_objectSpread({},t({line:e,key:r})),{},{children:e.map(function(e,n){return(0,l.jsx)("span",Code_objectSpread({},i({token:e,key:n})),r)})}),r)})})]})}}))},O=n(6873),x=n(7623),S=n(218),P=n(5152);function Image_ownKeys(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}var _=n.n(P)()(function(){return Promise.all([n.e(318),n.e(119),n.e(68),n.e(789)]).then(n.bind(n,1068)).then(function(e){return e.Image})},{ssr:!1,loadableGenerated:{webpack:function(){return[null]}}}),Viewer_Image=function(e){return(0,l.jsx)(_,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?Image_ownKeys(Object(n),!0).forEach(function(r){(0,o.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Image_ownKeys(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}({},e))},L=n(1830),C=(0,u.zo)("div",{backgroundColor:"var(--gray-3)"}),D=(0,u.zo)("figure",{padding:"0",margin:"0","& figcaption":{padding:"$gr3 0",fontSize:"$gr3",fontWeight:"500"}}),I=n(3448),Z=n(2929),k=n(5159),M=n(7118),A=n(1522),G={showTitle:!0,showIIIFBadge:!1,informationPanel:{open:!1,renderToggle:!1}},T=n(859);function MDX_ownKeys(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function MDX_objectSpread(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?MDX_ownKeys(Object(n),!0).forEach(function(r){(0,o.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):MDX_ownKeys(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var B={Button:function(e){return(0,l.jsx)(a.O,_objectSpread(_objectSpread({size:"3"},e),{},{asChild:!0,children:e.href&&(0,l.jsx)(c.Z,{href:e.href,target:e.target,children:e.children})}))},ButtonWrapper:a.W,Card:MDX_Card,Container:O.Z,Header:x.Z,Image:function(e){var r=e.src,n=e.height,o=e.isTiledImage,t=e.label;return(0,l.jsxs)(D,{children:[(0,l.jsx)(C,{css:{height:void 0===n?"400px":n},children:(0,l.jsx)(Viewer_Image,{src:r,isTiledImage:o,label:t})}),t&&(0,l.jsx)("figcaption",{children:(0,l.jsx)(L.Label,{label:t})})]})},ReferencedItems:function(){var e,r=(0,s.useContext)(I.Z);return(0,l.jsx)(Z.Z,{children:null===(e=r.referencedManifests)||void 0===e?void 0:e.map(function(e,r){return(0,l.jsx)(MDX_Card,{iiifContent:e},"card-".concat(e,"-").concat(r))})})},Scroll:function(e){var r=e.iiifContent;return(0,l.jsx)(k.Z,{iiifContent:r,options:{offset:90}})},Slider:function(e){var r=e.iiifContent;return(0,l.jsx)(M.Z,{iiifContent:r})},Viewer:function(e){var r=e.iiifContent,n=e.options;return(0,l.jsx)(A.Z,{iiifContent:r,options:void 0===n?G:n})}},$={h1:function(e){return(0,l.jsx)(S.Z,MDX_objectSpread({as:"h1"},e))},h2:function(e){return(0,l.jsx)(S.Z,MDX_objectSpread({as:"h2",id:(0,T.getSlug)(null==e?void 0:e.children)},e))},h3:function(e){return(0,l.jsx)(S.Z,MDX_objectSpread({as:"h3"},e))},h4:function(e){return(0,l.jsx)(S.Z,MDX_objectSpread({as:"h4"},e))},h5:function(e){return(0,l.jsx)(S.Z,MDX_objectSpread({as:"h5"},e))},code:function(e){return(0,l.jsx)(b,MDX_objectSpread({},e))},a:function(e){return(0,l.jsx)(t.Link,MDX_objectSpread({},e))},em:function(e){return(0,l.jsx)(t.Em,MDX_objectSpread({},e))},strong:function(e){return(0,l.jsx)(t.Strong,MDX_objectSpread({},e))},blockquote:function(e){return(0,l.jsx)(t.Blockquote,MDX_objectSpread({},e))},pre:function(e){var r,n,o,t,i,a=null==e?void 0:null===(r=e.children)||void 0===r?void 0:null===(n=r.props)||void 0===n?void 0:n.children,c=null==e?void 0:null===(o=e.children)||void 0===o?void 0:null===(t=o.props)||void 0===t?void 0:null===(i=t.className)||void 0===i?void 0:i.replace("language-","");return(0,l.jsx)(Code_Code,{language:c,children:null==a?void 0:a.trim()})}},MDX=function(e){var r=e.source,n=e.customComponents;return(0,l.jsx)(i.R,MDX_objectSpread(MDX_objectSpread({},r),{},{components:MDX_objectSpread(MDX_objectSpread(MDX_objectSpread(MDX_objectSpread({},t),$),B),n)}))}},218:function(e,r,n){"use strict";n.d(r,{Z:function(){return Heading_Heading}}),n(7294);var o=n(3245),t=(0,n(2854).zo)(o.Heading,{variants:{isHidden:{true:{position:"absolute",visibility:"hidden"}}},"&[data-level='h1']":{fontFamily:"$display",fontWeight:"700",letterSpacing:"-0.01em"},"&[data-level='h2']":{color:"var(--gray-10)",fontWeight:"300",letterSpacing:"-0.01em"}}),i=n(5893),Heading_Heading=function(e){var r=e.as,n=void 0===r?"h2":r,o=e.css,a=e.id,c=e.isHidden,s=e.children;return(0,i.jsx)(t,{as:n,isHidden:void 0!==c&&c,"data-level":n,css:void 0===o?{}:o,id:a,children:(0,i.jsx)(i.Fragment,{children:s})})}},5159:function(e,r,n){"use strict";var o=n(9499),t=n(5152),i=n.n(t),a=n(5893);function ownKeys(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}var c=i()(function(){return Promise.all([n.e(318),n.e(119),n.e(68),n.e(789)]).then(n.bind(n,1068)).then(function(e){return e.Scroll})},{ssr:!1,loadableGenerated:{webpack:function(){return[null]}}});r.Z=function(e){return(0,a.jsx)(c,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(n),!0).forEach(function(r){(0,o.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}({},e))}},7118:function(e,r,n){"use strict";n.d(r,{Z:function(){return Viewer_Slider}});var o,t,i=n(9499);n(4614);var a=n(9897);n(7294);var c=(0,n(2854).zo)("div",(o={marginBottom:"$gr5",button:{svg:{filter:"unset"}},"@xs":{"& > div > div":{alignItems:"center",textAlign:"center","& > div":{"&:last-child":{paddingTop:"$gr2"}}}}},(0,i.Z)(o,"& .clover-slider-header-label",{fontSize:"$gr4 !important",fontFamily:"$sans",letterSpacing:"-0.01em"}),(0,i.Z)(o,"& a.clover-slider-header-homepage",{color:"var(--accent-11)",textDecoration:"none"}),(0,i.Z)(o,"& .clover-slider-header-summary",{display:"block",fontSize:"$gr2 !important",fontWeight:"500 !important",color:"var(--gray-11)"}),(0,i.Z)(o,".swiper-slide",{a:{"> div":{borderRadius:"3px",overflow:"hidden"}}}),(0,i.Z)(o,"figure",{"> div":{borderRadius:"3px",overflow:"hidden",boxShadow:"var(--shadow-3)"}}),(0,i.Z)(o,"figcaption",{margin:"$gr1 0","> span":{textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"3",overflow:"hidden",whiteSpace:"normal",fontWeight:"400",fontSize:"$gr3",lineHeight:"1.38em",fontFamily:"$sans",textDecoration:"none !important"}}),(0,i.Z)(o,"& a figcaption, & a:visited figcaption",{color:"var(--gray-12)"}),(0,i.Z)(o,"& a:hover figcaption, & a:focus figcaption",{color:"var(--accent-11)"}),o)),s=n(4430),l=n(5049),d=n(7668),u=n(5893),spaceBetween=function(e){return l.hO*(0,s.gr)(e)},p=(t={},(0,i.Z)(t,d.b.xxs,{slidesPerView:2,slidesPerGroup:2,spaceBetween:spaceBetween(1)}),(0,i.Z)(t,d.b.xs,{slidesPerView:2,slidesPerGroup:2,spaceBetween:spaceBetween(1)}),(0,i.Z)(t,d.b.sm,{slidesPerView:3,slidesPerGroup:3,spaceBetween:spaceBetween(1)}),(0,i.Z)(t,d.b.md,{slidesPerView:3,slidesPerGroup:3,spaceBetween:spaceBetween(2)}),(0,i.Z)(t,d.b.lg,{slidesPerView:5,slidesPerGroup:5,spaceBetween:spaceBetween(2)}),(0,i.Z)(t,d.b.xl,{slidesPerView:5,slidesPerGroup:5,spaceBetween:spaceBetween(2)}),t),Viewer_Slider=function(e){var r=e.iiifContent;return(0,u.jsx)(c,{children:(0,u.jsx)(a.default,{iiifContent:r,options:{breakpoints:p}})})}},1522:function(e,r,n){"use strict";var o=n(9499);n(7294);var t=n(5152),i=n.n(t),a=n(2854),c=n(5893);function ownKeys(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(n),!0).forEach(function(r){(0,o.Z)(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var s=i()(function(){return Promise.all([n.e(318),n.e(119),n.e(68),n.e(789)]).then(n.bind(n,1068)).then(function(e){return e.Viewer})},{ssr:!1,loadableGenerated:{webpack:function(){return[null]}}}),l={fonts:{sans:"var(--canopy-sans-font)",display:"var(--canopy-display-font)"}},d={canvasBackgroundColor:"var(--gray-3)",canvasHeight:"600px",openSeadragon:{gestureSettingsMouse:{scrollToZoom:!1}},informationPanel:{open:!1,renderAbout:!1,renderToggle:!1},showTitle:!1,showIIIFBadge:!1},u=(0,a.zo)("div",{".clover-viewer-header":{"span.label":{fontSize:"$gr4"},"& button":{backgroundColor:"var(--gray-1)","> span[data-testid=select-button-value]":{fontSize:"$gr4"}}}});r.Z=function(e){var r=e.iiifContent,n=e.options;return(0,c.jsx)(u,{children:(0,c.jsx)(s,{iiifContent:r,options:_objectSpread(_objectSpread({},d),n),customTheme:l})})}},3448:function(e,r,n){"use strict";var o=n(7294).createContext({referencedManifests:[]});r.Z=o},859:function(e,r,n){var o=n(930);function ownKeys(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(n),!0).forEach(function(r){o(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var t=n(3984),i={lower:!0,strict:!0,trim:!0};function getSlug(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.substring(0,r)}(t(String(e),i),100)}e.exports={getSlug:getSlug,getUniqueSlug:function(e,r){var n,t=getSlug(e),i=(n=r[t])?n+1:1;return{slug:i>1?"".concat(t,"-").concat(i):t,allSlugs:_objectSpread(_objectSpread({},r),{},o({},t,i))}}}},2794:function(e){"use strict";e.exports=JSON.parse('[{"label":"publisher","slug":"publisher","values":[{"value":"DIGITAL: Cushing Memorial Library and Archives","slug":"digital-cushing-memorial-library-and-archives","doc_count":11,"docs":[0,1,2,3,4,5,6,7,8,9,10]},{"value":"London : London Topographical Society","slug":"london-london-topographical-society","doc_count":4,"docs":[0,1,4,5]},{"value":"Chessington : Ordnance Survey Office","slug":"chessington-ordnance-survey-office","doc_count":1,"docs":[2]},{"value":"Geographical Institute","slug":"geographical-institute","doc_count":1,"docs":[8]},{"value":"London : Braun and Hogenberg","slug":"london-braun-and-hogenberg","doc_count":1,"docs":[0]},{"value":"London : George Philip & Son, Ltd.","slug":"london-george-philip-and-son-ltd","doc_count":1,"docs":[8]},{"value":"London : Guildhall Library","slug":"london-guildhall-library","doc_count":1,"docs":[3]},{"value":"London : John Thomas Smith","slug":"london-john-thomas-smith","doc_count":1,"docs":[9]},{"value":"London : Printed by J. Moore, for Croft and Justyne","slug":"london-printed-by-j-moore-for-croft-and-justyne","doc_count":1,"docs":[6]},{"value":"London : Printed for J. Cary","slug":"london-printed-for-j-cary","doc_count":1,"docs":[7]},{"value":"London, J. Taylor","slug":"london-j-taylor","doc_count":1,"docs":[10]}]},{"label":"date","slug":"date","values":[{"value":"1572","slug":"1572","doc_count":1,"docs":[0]},{"value":"1578","slug":"1578","doc_count":1,"docs":[9]},{"value":"1593","slug":"1593","doc_count":1,"docs":[5]},{"value":"1810","slug":"1810","doc_count":1,"docs":[7]},{"value":"1825","slug":"1825","doc_count":1,"docs":[10]},{"value":"1850","slug":"1850","doc_count":1,"docs":[3]},{"value":"1865","slug":"1865","doc_count":1,"docs":[6]}]},{"label":"contributor","slug":"contributor","values":[{"value":"London Topographical Society","slug":"london-topographical-society","doc_count":3,"docs":[0,4,5]},{"value":"Agas, Ralph (1545-1621)","slug":"agas-ralph-1545-1621","doc_count":1,"docs":[9]},{"value":"British Museum","slug":"british-museum","doc_count":1,"docs":[4]},{"value":"Great Britain. Royal Air Force","slug":"great-britain-royal-air-force","doc_count":1,"docs":[2]},{"value":"Guildhall Library (London, England)","slug":"guildhall-library-london-england","doc_count":1,"docs":[3]},{"value":"Hoefnagel, Joris (1542-1601)","slug":"hoefnagel-joris-1542-1601","doc_count":1,"docs":[0]},{"value":"Hogenberg, Frans (approximately 1539-1590)","slug":"hogenberg-frans-approximately-1539-1590","doc_count":1,"docs":[0]},{"value":"Keere, Pieter van den, (1571-approximately 1646)","slug":"keere-pieter-van-den-1571-approximately-1646","doc_count":1,"docs":[5]},{"value":"Kensington Turnpike Trustees","slug":"kensington-turnpike-trustees","doc_count":1,"docs":[4]},{"value":"London Geographical Institute","slug":"london-geographical-institute","doc_count":1,"docs":[8]},{"value":"Norden, John, (1548-1625?)","slug":"norden-john-1548-1625","doc_count":1,"docs":[5]},{"value":"Philip, Son & Nephew","slug":"philip-son-and-nephew","doc_count":1,"docs":[8]},{"value":"W. Griggs and Sons","slug":"w-griggs-and-sons","doc_count":1,"docs":[4]}]}]')},3981:function(e){"use strict";e.exports=JSON.parse('[{"id":0,"label":"Hoefnagel\'s plan of London from Braun and Hogenburg\'s Civitates orbis terrarum, 1572","metadata":"1572 Hogenberg, Frans (approximately 1539-1590) London Topographical Society Hoefnagel, Joris (1542-1601) London : Braun and Hogenberg DIGITAL: Cushing Memorial Library and Archives London : London Topographical Society"},{"id":1,"label":"Seven unpublished drawings","metadata":"London : London Topographical Society DIGITAL: Cushing Memorial Library and Archives"},{"id":2,"label":"Greater London : air photo mosaics","metadata":"Great Britain. Royal Air Force DIGITAL: Cushing Memorial Library and Archives Chessington : Ordnance Survey Office"},{"id":3,"label":"A view of London and the surrounding country taken from the top of Saint Pauls Cathedral","metadata":"1850 Guildhall Library (London, England) London : Guildhall Library DIGITAL: Cushing Memorial Library and Archives"},{"id":4,"label":"Plan of the road from Hyde Park Corner to Counter\'s Bridge","metadata":"Kensington Turnpike Trustees British Museum W. Griggs and Sons London Topographical Society DIGITAL: Cushing Memorial Library and Archives London : London Topographical Society"},{"id":5,"label":"Norden\'s maps of London and Westminster","metadata":"1593 Keere, Pieter van den, (1571-approximately 1646) Norden, John, (1548-1625?) London Topographical Society DIGITAL: Cushing Memorial Library and Archives London : London Topographical Society"},{"id":6,"label":"Plan of the General Cemetery at Kensal Green in the Harrow Road","metadata":"1865 London : Printed by J. Moore, for Croft and Justyne DIGITAL: Cushing Memorial Library and Archives"},{"id":7,"label":"Cary\'s survey of the high roads from London to Hampton Court . . .","metadata":"1810 DIGITAL: Cushing Memorial Library and Archives London : Printed for J. Cary"},{"id":8,"label":"Philips\' A.B.C. pocket atlas-guide to London, with new postal areas","metadata":"Philip, Son & Nephew London Geographical Institute London : George Philip & Son, Ltd. Geographical Institute DIGITAL: Cushing Memorial Library and Archives"},{"id":9,"label":"Plan of part of the city of Westminster, copied from Radulphus Aggas\'s [sic] map, taken in the reign of Queen Elizabeth 1578","metadata":"1578 Agas, Ralph (1545-1621) London : John Thomas Smith DIGITAL: Cushing Memorial Library and Archives"},{"id":10,"label":"Illustrations of the public buildings of London; with historical and descriptive accounts of each edifice","metadata":"1825 London, J. Taylor DIGITAL: Cushing Memorial Library and Archives"}]')}}]);