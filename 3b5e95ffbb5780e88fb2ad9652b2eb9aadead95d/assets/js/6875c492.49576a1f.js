"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[2392],{2687:(e,t,a)=>{a.d(t,{c:()=>s});var n=a(1504),l=a(4357),r=a(308);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.G)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.c,{permalink:a,title:n.createElement(l.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&n.createElement(r.c,{permalink:s,title:n.createElement(l.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},992:(e,t,a)=>{a.d(t,{c:()=>s});var n=a(1504),l=a(3152),r=a(7792);function s(e){let{items:t,component:a=r.c}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.E,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},2948:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(1504),l=a(4971),r=a(4357),s=a(5944),o=a(5756),c=a(5864),i=a(6016),g=a(9496),m=a(2687),p=a(8712),u=a(992);function d(e){const t=function(){const{selectMessage:e}=(0,s.A)();return t=>e(t,(0,r.G)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.G)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=d(t);return n.createElement(n.Fragment,null,n.createElement(o.U7,{title:a}),n.createElement(p.c,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:l,listMetadata:s}=e;const o=d(t);return n.createElement(g.c,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(i.c,{href:t.allTagsPath},n.createElement(r.c,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(u.c,{items:a}),n.createElement(m.c,{metadata:s}))}function b(e){return n.createElement(o.cr,{className:(0,l.c)(c.W.wrapper.blogPages,c.W.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(E,e))}}}]);