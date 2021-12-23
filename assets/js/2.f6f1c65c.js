(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{639:function(t,e,n){},650:function(t,e,n){},651:function(t,e){t.exports=function(t){return null==t}},652:function(t,e,n){},653:function(t,e,n){},654:function(t,e,n){},655:function(t,e,n){},656:function(t,e,n){},657:function(t,e,n){},676:function(t,e,n){"use strict";n.r(e);n(211),n(8);var i=n(616),a={name:"SidebarGroup",components:{DropdownTransition:n(684).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(676).default},methods:{isActive:i.e}},s=(n(708),n(36)),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(351),n(51),n(210),n(87);function o(t,e,n,i,a){var s={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return a>2&&(s.style={"padding-left":a+"rem"}),t("RouterLink",s,n)}function l(t,e,n,a,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.e)(a,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),l(t,e.children,n,a,s,r+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,a=n.$page,s=(n.$site,n.$route),r=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,p=u.item,h=u.sidebarDepth,d=Object(i.e)(s,p.path),f="auto"===p.type?d||p.children.some((function(t){return Object(i.e)(s,p.basePath+"#"+t.slug)})):d,g="external"===p.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,p.path,p.title||p.path):o(t,p.path,p.title||p.path,f),m=[a.frontmatter.sidebarDepth,h,c.sidebarDepth,r.sidebarDepth,1].find((function(t){return void 0!==t})),b=c.displayAllHeaders||r.displayAllHeaders;return"auto"===p.type?[g,l(t,p.children,p.basePath,s,m)]:(f||b)&&p.headers&&!i.d.test(p.path)?[g,l(t,Object(i.c)(p.headers),p.path,s,m)]:g}};n(709);function u(t,e){if("group"===e.type){var n=e.path&&Object(i.e)(t,e.path),a=e.children.some((function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(i.e)(t,e.path)}));return n||a}return!1}var p={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(u(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(s.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},681:function(t,e,n){"use strict";n(51),n(210),n(132);var i=n(651),a=n.n(i),s=n(616),r={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=a()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,s=void 0===i?"":i,r=e.docsBranch,o=void 0===r?"master":r,l=e.docsRepo,c=void 0===l?n:l;return t&&c&&this.$page.relativePath?this.createEditLink(n,c,s,o,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,a){if(/bitbucket.org/.test(e))return e.replace(s.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(s.a,"")+"/-/edit"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+a:(s.i.test(e)?e:"https://github.com/".concat(e)).replace(s.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+a}}},o=(n(704),n(36)),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.a=l.exports},682:function(t,e,n){"use strict";n(207);var i={name:"BookOpenVariantIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},a=n(36),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",t._b({staticClass:"material-design-icon book-open-variant-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[n("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M17.5 14.33C18.29 14.33 19.13 14.41 20 14.57V16.07C19.38 15.91 18.54 15.83 17.5 15.83C15.6 15.83 14.11 16.16 13 16.82V15.13C14.17 14.6 15.67 14.33 17.5 14.33M13 12.46C14.29 11.93 15.79 11.67 17.5 11.67C18.29 11.67 19.13 11.74 20 11.9V13.4C19.38 13.24 18.54 13.16 17.5 13.16C15.6 13.16 14.11 13.5 13 14.15M17.5 10.5C15.6 10.5 14.11 10.82 13 11.5V9.84C14.23 9.28 15.73 9 17.5 9C18.29 9 19.13 9.08 20 9.23V10.78C19.26 10.59 18.41 10.5 17.5 10.5M21 18.5V7C19.96 6.67 18.79 6.5 17.5 6.5C15.45 6.5 13.62 7 12 8V19.5C13.62 18.5 15.45 18 17.5 18C18.69 18 19.86 18.16 21 18.5M17.5 4.5C19.85 4.5 21.69 5 23 6V20.56C23 20.68 22.95 20.8 22.84 20.91C22.73 21 22.61 21.08 22.5 21.08C22.39 21.08 22.31 21.06 22.25 21.03C20.97 20.34 19.38 20 17.5 20C15.45 20 13.62 20.5 12 21.5C10.66 20.5 8.83 20 6.5 20C4.84 20 3.25 20.36 1.75 21.07C1.72 21.08 1.68 21.08 1.63 21.1C1.59 21.11 1.55 21.12 1.5 21.12C1.39 21.12 1.27 21.08 1.16 21C1.05 20.89 1 20.78 1 20.65V6C2.34 5 4.18 4.5 6.5 4.5C8.83 4.5 10.66 5 12 6C13.34 5 15.17 4.5 17.5 4.5Z"}},[t.title?n("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null);e.a=s.exports},683:function(t,e,n){"use strict";n(207);var i={name:"CloudDownloadIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},a=n(36),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",t._b({staticClass:"material-design-icon cloud-download-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[n("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M17,13L12,18L7,13H10V9H14V13M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z"}},[t.title?n("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null);e.a=s.exports},692:function(t,e,n){"use strict";n(639)},703:function(t,e,n){"use strict";n(650)},704:function(t,e,n){"use strict";n(652)},705:function(t,e,n){var i=n(72),a=n(30),s=n(57);t.exports=function(t){return"string"==typeof t||!a(t)&&s(t)&&"[object String]"==i(t)}},706:function(t,e,n){"use strict";n(653)},707:function(t,e,n){"use strict";n(654)},708:function(t,e,n){"use strict";n(655)},709:function(t,e,n){"use strict";n(656)},710:function(t,e,n){"use strict";n(657)},740:function(t,e,n){"use strict";n.r(e);var i=n(680),a=(n(636),n(686)),s=n(205),r=(n(8),n(28),n(38),n(209),n(637),n(629),n(51),n(132),{name:"AlgoliaSearchBox",props:["options"],data:function(){return{placeholder:void 0}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,e){var i=this;Promise.all([Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,742,7)),Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,743,7))]).then((function(n){var r=Object(s.a)(n,1)[0];r=r.default;var o=t.algoliaOptions,l=void 0===o?{}:o;r(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object(a.a)(Object(a.a)({},l),{},{facetFilters:["lang:".concat(e)].concat(l.facetFilters||[])}),handleSelected:function(t,e,n){var a=new URL(n.url),s=a.pathname,r=a.hash,o=s.replace(i.$site.base,"/"),l=decodeURIComponent(r);i.$router.push("".concat(o).concat(l))}}))}))},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}}),o=(n(692),n(36)),l=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null).exports,c=n(677),u=n(685),p=n(635);function h(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var d={name:"Navbar",components:{SidebarButton:u.a,NavLinks:p.a,SearchBox:c.a,AlgoliaSearchBox:l},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(h(this.$el,"paddingLeft"))+parseInt(h(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},f=(n(703),Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),g=n(681),m=n(616),b=n(705),v=n.n(b),C=n(651),_=n.n(C),$={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return x(k.PREV,this)},next:function(){return x(k.NEXT,this)}}};var k={NEXT:{resolveLink:function(t,e){return L(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return L(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function x(t,e){var n=e.$themeConfig,i=e.$page,a=e.$route,s=e.$site,r=e.sidebarItems,o=t.resolveLink,l=t.getThemeLinkConfig,c=t.getPageLinkConfig,u=l(n),p=c(i),h=_()(p)?u:p;return!1===h?void 0:v()(h)?Object(m.k)(s.pages,h,a.path):o(i,r)}function L(t,e,n){var i=[];!function t(e,n){for(var i=0,a=e.length;i<a;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var a=0;a<i.length;a++){var s=i[a];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[a+n]}}var S=$,O=(n(706),Object(o.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),y={components:{PageEdit:g.a,PageNav:O},props:["sidebarItems"]},w=(n(707),Object(o.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),j={name:"Sidebar",components:{SidebarLinks:n(676).default,NavLinks:p.a},props:["items"]},E=(n(710),Object(o.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),I={name:"Layout",components:{Home:i.a,Page:w,Sidebar:E,Navbar:f},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(m.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},P=Object(o.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=P.exports}}]);