(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(9),o=(t(0),t(163)),i={id:"markdown",title:"Markdown",sidebar_label:"Markdown"},s={id:"markdown",title:"Markdown",description:"The markdown file lives on the master branch and has a name of `TUTORIAL.md`. It describes the structure of a tutorial and contains all the lessons, their descriptions, and the text users will read.",source:"@site/docs/markdown.md",permalink:"/docs/markdown",editUrl:"https://github.com/coderoad/coderoad-vscode/edit/master/docs/docs/markdown.md",sidebar_label:"Markdown",sidebar:"someSidebar",previous:{title:"Building a Tutorial",permalink:"/docs/build-tutorial"},next:{title:"Yaml",permalink:"/docs/yaml"}},l=[{value:"Example",id:"example",children:[]}],c={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The markdown file lives on the master branch and has a name of ",Object(o.b)("inlineCode",{parentName:"p"},"TUTORIAL.md"),". It describes the structure of a tutorial and contains all the lessons, their descriptions, and the text users will read."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"See a rough example below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-md"}),"# Tutorial Title\n\n> Tutorial introduction paragraph\n\n## 1. Lesson 1\n\n> Lesson 1 summary\n\nLesson 1 decription and instructions.\n\n### 1.1 Lesson 1 Step 1\n\nTest text for 1.1\n\n#### HINTS\n\n- This is a hint for 1.1\n- This is another hint for 1.1\n\n## 2. Lesson 2\n\n> Lessons 2 summary\n\nLesson 2 content.\n\n### 2.1 Lesson 2 Step 1\n\nTest text\n\n#### HINTS\n\n- Hint for 2.1\n\n### 2.2 Lesson 2 Step 2\n\nTest text for 2.2\n\n#### HINTS\n\n- Hint for 2.2\n")),Object(o.b)("h4",{id:"explanation"},"Explanation"),Object(o.b)("p",null,"The example above has an introduction page and two lessons."),Object(o.b)("p",null,"The introduction page is the first thing users will see when they start a tutorial. It shows an overview of all the lessons and displays the lesson summary."),Object(o.b)("p",null,"Lessons need to start with ",Object(o.b)("inlineCode",{parentName:"p"},"## x.")," where ",Object(o.b)("inlineCode",{parentName:"p"},"x")," is the lesson number. The text after ",Object(o.b)("inlineCode",{parentName:"p"},"x.")," will display as the lesson title."),Object(o.b)("p",null,'The "Steps", or test text, need to start with ',Object(o.b)("inlineCode",{parentName:"p"},"x.y")," where ",Object(o.b)("inlineCode",{parentName:"p"},"x")," matches the lesson number and ",Object(o.b)("inlineCode",{parentName:"p"},"y"),' is the number for a "step".'))}p.isMDXComponent=!0},163:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},d=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?a.a.createElement(m,s({ref:n},c,{components:t})):a.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);