webpackJsonp([9],{1152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1153),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=o.default},1153:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingSpinner=void 0;var o=n(0),a=r(o),l=n(1),u=r(l),_=n(462),c=r(_),i=n(1154),f=r(i),d=t.LoadingSpinner=function(e){var t=e.size;return a.default.createElement("div",{className:f.default.container},a.default.createElement("div",{className:f.default.progress},a.default.createElement(c.default,{mode:"indeterminate",size:t||80})))};d.propTypes={size:u.default.number},t.default=d},1154:function(e,t){e.exports={flex:"LoadingSpinner__flex___ClcxL","flex-column":"LoadingSpinner__flex-column___nZrIC","flex-column-center":"LoadingSpinner__flex-column-center___2N3Ot",container:"LoadingSpinner__container___1u7BD","flex-row":"LoadingSpinner__flex-row___1aSa2","flex-row-center":"LoadingSpinner__flex-row-center___3E8MY",progress:"LoadingSpinner__progress___1c6Sh"}},1191:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a,l,u,_,c=n(2),i=r(c),f=n(3),d=r(f),s=n(5),p=r(s),m=n(4),j=r(m),x=n(0),g=r(x),v=n(1),P=r(v),S=n(34),C=n(94),E=n(1152),b=r(E),y=n(1203),L=r(y),w=(o=(0,C.firebaseConnect)(function(e){return["projects/"+e.params.projectname]}),a=(0,S.connect)(function(e,t){var n=e.firebase,r=t.params;return{project:(0,C.dataToJS)(n,"projects/"+r.projectname)}}),o(l=a((_=u=function(e){function t(){return(0,i.default)(this,t),(0,p.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,j.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.project,n=e.params;return(0,C.isEmpty)(t)?g.default.createElement("div",null,"Project not found"):(0,C.isLoaded)(t)?g.default.createElement("div",{className:L.default.container},g.default.createElement("h2",null,"Project Container"),g.default.createElement("pre",null,"Project Key: ",n.projectname),g.default.createElement("pre",null,JSON.stringify(t,null,2))):g.default.createElement(b.default,null)}}]),t}(x.Component),u.propTypes={project:P.default.object,params:P.default.object.isRequired},l=_))||l)||l);t.default=w},1203:function(e,t){e.exports={flex:"ProjectContainer__flex___2bElP","flex-column":"ProjectContainer__flex-column___Cxl5I","flex-column-center":"ProjectContainer__flex-column-center___3kMjt","flex-row":"ProjectContainer__flex-row___1K34R","flex-row-center":"ProjectContainer__flex-row-center___1uaDk",progress:"ProjectContainer__progress___3aKMU"}}});
//# sourceMappingURL=9.f81a3727c3657c293c3d.js.map