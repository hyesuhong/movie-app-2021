(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{25:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(18),a=c.n(r),i=c(10),j=c(2),o=c(8),u=c.n(o),m=c(12),l=c(9),d=(c(25),c(1));var b=function(e){var t=e.id,c=e.title,n=e.summary,s=e.poster,r=e.year,a=e.genres;return Object(d.jsx)("div",{className:"movies__movie",children:Object(d.jsxs)(i.b,{to:"/movie/".concat(t),children:[Object(d.jsx)("div",{className:"movie__poster",children:Object(d.jsx)("img",{src:s,alt:c,title:c})}),Object(d.jsxs)("div",{className:"movie__data",children:[Object(d.jsx)("h3",{className:"movie__title",children:c}),Object(d.jsx)("h5",{className:"movie__year",children:r}),Object(d.jsx)("ul",{className:"genres",children:a.map((function(e,t){return t>2?"":Object(d.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(d.jsxs)("p",{className:"movie__summary",children:[n.slice(0,140),"..."]})]})]})})};c(32);var v=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),a=Object(l.a)(r,2),i=a[0],j=a[1],o=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,s(!1),j(t.data.movies);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(d.jsx)("section",{className:"container",children:c?Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)("h1",{children:"Loading..."})}):Object(d.jsx)("div",{className:"movies",children:i.map((function(e){return Object(d.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})};var h=function(){var e=Object(j.f)().id,t=Object(n.useState)(!0),c=Object(l.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)([]),i=Object(l.a)(a,2),o=i[0],b=i[1],v=function(){var t=Object(m.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:c=t.sent,r(!1),b(c.data.movie);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return console.log(o),Object(n.useEffect)((function(){v()}),[e]),Object(d.jsx)("div",{children:s?Object(d.jsx)("h1",{children:"Loading..."}):Object(d.jsx)("h1",{children:o.title})})};var O=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/movie/:id",children:Object(d.jsx)(h,{})}),Object(d.jsx)(j.a,{path:"/",children:Object(d.jsx)(v,{})})]})})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.0cb53e53.chunk.js.map