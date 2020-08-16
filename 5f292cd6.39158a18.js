(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(9),r=(n(0),n(163)),s={id:"hooks-actions",title:"Hooks & Actions",sidebar_label:"Hooks & Actions"},i={id:"hooks-actions",title:"Hooks & Actions",description:"To make a functional tutorial, tutorial creators need a bit more control over what can be run and when.",source:"@site/docs/hooks-actions.md",permalink:"/docs/hooks-actions",editUrl:"https://github.com/coderoad/coderoad-vscode/edit/master/docs/docs/hooks-actions.md",sidebar_label:"Hooks & Actions",sidebar:"someSidebar",previous:{title:"Config",permalink:"/docs/config-docs"},next:{title:"Test Runner",permalink:"/docs/test-runner"}},c=[{value:"Hooks",id:"hooks",children:[]},{value:"Actions",id:"actions",children:[{value:"<code>commands</code> (string[])",id:"commands-string",children:[]},{value:"<code>vscodeCommands</code> (string[] | command: string, params: any)",id:"vscodecommands-string--command-string-params-any",children:[]},{value:"<code>watchers</code> (string[])",id:"watchers-string",children:[]},{value:"<code>files</code> (string[])",id:"files-string",children:[]},{value:"<code>filter</code> (string)",id:"filter-string",children:[]},{value:"<code>subtasks</code> (boolean)",id:"subtasks-boolean",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To make a functional tutorial, tutorial creators need a bit more control over what can be run and when."),Object(r.b)("h2",{id:"hooks"},"Hooks"),Object(r.b)("p",null,"A hook in CodeRoad is a place where a tutorial can tap in to run an action. Hooks include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"config.setup")," - when the tutorial setup. This is a great place to setup your test runner."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"step.setup")," - when a task is started"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"step.solution")," - when a solution is loaded from a reset")),Object(r.b)("p",null,"Hooks and actions combine to provide a flexible environment for tutorial development."),Object(r.b)("p",null,"To see which hooks run where, consult ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/coderoad/coderoad-vscode/blob/master/src/services/hooks/index.ts"}),"the hooks list in the codebase"),"."),Object(r.b)("h2",{id:"actions"},"Actions"),Object(r.b)("p",null,"An action is a piece of functionality that can be run. These include:"),Object(r.b)("h3",{id:"commands-string"},Object(r.b)("inlineCode",{parentName:"h3"},"commands")," (string[])"),Object(r.b)("p",null,'A list of cli commands to run. For example, "npm install"'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"setup:\n  commands:\n    - 'npm install'\n")),Object(r.b)("p",null,"In the example above, ",Object(r.b)("inlineCode",{parentName:"p"},"npm install")," will run in the root of the workspace."),Object(r.b)("h3",{id:"vscodecommands-string--command-string-params-any"},Object(r.b)("inlineCode",{parentName:"h3"},"vscodeCommands")," (string[] | ","[command: string, params: any][]",")"),Object(r.b)("p",null,"A list of vscode API commands to run. Commands may be a single string, or an array with the command, and params."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"setup:\n  vscodeCommands:\n    - 'workbench.action.terminal.toggleTerminal' # toggle terminal\n    - [\n        'setEditorLayout',\n        { orientation: 0, groups: [{ groups: [{}, {}], size: 0.5 }, { groups: [{}, {}], size: 0.5 }] },\n      ] # set the orientation of windows and sizes\n")),Object(r.b)("p",null,'For example, "toggleTerminal" toggles the terminal, while "setLayout" changes the layout of windows.'),Object(r.b)("p",null,"There are a number of options in the VSCode API. More info at:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://code.visualstudio.com/api/references/vscode-api#commands"}),"vscode commands API")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://code.visualstudio.com/api/references/commands"}),"commands with params")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/getstarted/keybindings"}),"commands without params"))),Object(r.b)("h3",{id:"watchers-string"},Object(r.b)("inlineCode",{parentName:"h3"},"watchers")," (string[])"),Object(r.b)("p",null,"A list of files globs to listen to. If a file changes that matches the pattern, the test runner will run automatically."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"setup:\n  watchers:\n    - 'package.json'\n    - 'node_modules/express'\n")),Object(r.b)("p",null,"The example above will run tests if the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file changes, or if there is a change in ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules/express"),". This is a good way to run tests if a package is installed."),Object(r.b)("p",null,"Note that watchers are throttled to run no more than once per second."),Object(r.b)("p",null,"Read more about ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/api/references/vscode-api#GlobPattern"}),"glob patterns"),"."),Object(r.b)("h3",{id:"files-string"},Object(r.b)("inlineCode",{parentName:"h3"},"files")," (string[])"),Object(r.b)("p",null,"A list of files to open in the users workspace to drive the users attention."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"setup:\n  files:\n    - 'README.md'\n")),Object(r.b)("p",null,'The above example will open the "README.md" file in the users workspace. Note that file paths are relative to the workspace root.'),Object(r.b)("h3",{id:"filter-string"},Object(r.b)("inlineCode",{parentName:"h3"},"filter")," (string)"),Object(r.b)("p",null,"A regex passed into the test runner to limit the tests returned"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"setup:\n  filter: 'level_1_tests'\n")),Object(r.b)("p",null,"Will restrict tests to only run a subset of tests that match the filter. Filter depends on your test runner, and can be configured in the test runner."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'config:\n  testRunner:\n    command: ./node_modules/.bin/mocha\n    args:\n      filter": --grep\n')),Object(r.b)("p",null,"Essentially, the above example will run ",Object(r.b)("inlineCode",{parentName:"p"},"./node_modules/.bin/mocha --grep level_1_tests")," as the test command."),Object(r.b)("h3",{id:"subtasks-boolean"},Object(r.b)("inlineCode",{parentName:"h3"},"subtasks")," (boolean)"),Object(r.b)("p",null,"A task made up of multiple other tests where all must pass to continue"))}b.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,i({ref:t},l,{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);