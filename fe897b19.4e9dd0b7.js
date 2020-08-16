(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(161)),c={id:"init-commit",title:"Initial Commit",sidebar_label:"Init Commit"},i={id:"init-commit",title:"Initial Commit",description:"Include basic setup for your project.",source:"@site/docs/init-commit.md",permalink:"/docs/init-commit",editUrl:"https://github.com/coderoad/coderoad-vscode/edit/master/docs/docs/init-commit.md",sidebar_label:"Init Commit",sidebar:"someSidebar",previous:{title:"Test Runner",permalink:"/docs/test-runner"},next:{title:"Test Examples",permalink:"/docs/test-examples"}},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Include basic setup for your project."),Object(a.b)("p",null,"The first commit requires some necessary setup. See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ShMcK/coderoad-fcc-basic-node-and-express/commit/c722f9e9ec8f94d7fba04cfa3375e0896346ced0"}),"an example init commit"),"."),Object(a.b)("p",null,"A JS project should include:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},".gitignore")," - ignore any meta files, like ",Object(a.b)("inlineCode",{parentName:"li"},"package-lock.json")," or they may cause merge conflicts"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},".vscode/extensions")," - would recommend \u201cdbaeumer.vscode-eslint\u201d"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},".vscode/launch.json")," - file for running the debugger"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},".vscode/settings.json")," - ensure that ",Object(a.b)("inlineCode",{parentName:"li"},"formatOnSave")," and linting are enabled"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"README.md")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"package.json")," - include test commands - include repo - include test runner dependencies")),Object(a.b)("p",null,"If starting a project with React, bear in mind that create-react-app runs some pretty hacky processes behind the scenes. You can use the following boilerplate in your project: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ShMcK/coderoad-tutorial-tweeter/commit/059e0041691f39e3bf078022512d01a93214b6bb"}),"init with coderoad react tutorial starter \xb7 ShMcK/coderoad-tutorial-tweeter@059e004 \xb7 GitHub")))}u.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(d,i({ref:t},s,{components:n})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);