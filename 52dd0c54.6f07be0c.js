(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(9),o=(n(0),n(161)),l={id:"create-a-practice-tutorial",title:"Create a Practice Tutorial",sidebar_label:"Create a Practice Tutorial"},r={id:"create-a-practice-tutorial",title:"Create a Practice Tutorial",description:"## Create a CodeRoad tutorial",source:"@site/docs/create-a-practice-tutorial.md",permalink:"/docs/create-a-practice-tutorial",editUrl:"https://github.com/coderoad/coderoad-vscode/edit/master/docs/docs/create-a-practice-tutorial.md",sidebar_label:"Create a Practice Tutorial",sidebar:"someSidebar",previous:{title:"Editing a Tutorial",permalink:"/docs/edit-tutorial"},next:{title:"Examples",permalink:"/docs/examples"}},c=[{value:"Create a CodeRoad tutorial",id:"create-a-coderoad-tutorial",children:[{value:"Create a repo",id:"create-a-repo",children:[]},{value:"Create the markdown",id:"create-the-markdown",children:[]},{value:"Commit to github",id:"commit-to-github",children:[]},{value:"Create a version branch",id:"create-a-version-branch",children:[]},{value:"Create your project files",id:"create-your-project-files",children:[]},{value:"Create the first test",id:"create-the-first-test",children:[]},{value:"Commit your first test",id:"commit-your-first-test",children:[]},{value:"Create the YAML file",id:"create-the-yaml-file",children:[]},{value:"Build the config.json file",id:"build-the-configjson-file",children:[]},{value:"Open your tutorial",id:"open-your-tutorial",children:[]},{value:"Review",id:"review",children:[]},{value:"Add a second lesson",id:"add-a-second-lesson",children:[]},{value:"Add second lesson test",id:"add-second-lesson-test",children:[]},{value:"Commit second test",id:"commit-second-test",children:[]},{value:"Update the YAML",id:"update-the-yaml",children:[]},{value:"Rebuild",id:"rebuild",children:[]},{value:"Restart the tutorial",id:"restart-the-tutorial",children:[]}]}],d={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-a-coderoad-tutorial"},"Create a CodeRoad tutorial"),Object(o.b)("p",null,"Follow these instructions carefully to create your first CodeRoad tutorial."),Object(o.b)("h3",{id:"create-a-repo"},"Create a repo"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to GitHub and create a new repository for yourself named ",Object(o.b)("inlineCode",{parentName:"li"},"first-tutorial")),Object(o.b)("li",{parentName:"ul"},"After you click create, it takes you to the repo. Copy the URL for the repo, it should look like: ",Object(o.b)("inlineCode",{parentName:"li"},"https://github.com/your-username/first-tutorial.git")),Object(o.b)("li",{parentName:"ul"},"Open a terminal locally and find a place to clone your repo. Enter ",Object(o.b)("inlineCode",{parentName:"li"},"git clone https://github.com/your-username/first-tutorial.git")," with the repo URL you copied in place of that URL to clone it"),Object(o.b)("li",{parentName:"ul"},"Create a ",Object(o.b)("inlineCode",{parentName:"li"},".gitignore")," file in your repo and add this to it:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-md"}),"node_modules\npackage-lock.json\n")),Object(o.b)("p",null,"Add anything else that may interfere such as ",Object(o.b)("inlineCode",{parentName:"p"},".DS_Store")," if you are on a mac."),Object(o.b)("h3",{id:"create-the-markdown"},"Create the markdown"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a new file in your repo named ",Object(o.b)("inlineCode",{parentName:"li"},"TUTORIAL.md"),".")),Object(o.b)("p",null,"This is the file that describes the structure of a tutorial. It contains all the lessons, lesson titles, descriptions, test text and all the other verbiage that will be displayed to a user. Enter this markdown into the file and save it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-md"}),"# Introduction\n\nThis is an introduction to your tutorial. It will show up on the first page when your tutorial is started.\n\n## 1. Create index.html\n\n> Optional summary for Level 1\n\nHere's where you can put a description, examples, and instructions for the lesson.\n\n### 1.1 Level 1 Step 1\n\nThis is the test text. Create an `index.html` file to pass this lesson.\n\n#### HINTS\n\n- This is a hint to help people through the test\n- Second hint for 1.1, don't worry if the hints don't show up yet\n")),Object(o.b)("p",null,"The above tutorial has an introduction page and one lesson."),Object(o.b)("h3",{id:"commit-to-github"},"Commit to github"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Back in the terminal, add all your new files to be committed with ",Object(o.b)("inlineCode",{parentName:"li"},"git add .")),Object(o.b)("li",{parentName:"ul"},"Commit them with ",Object(o.b)("inlineCode",{parentName:"li"},'git commit -m "create markdown"')),Object(o.b)("li",{parentName:"ul"},"Push them to github with ",Object(o.b)("inlineCode",{parentName:"li"},"git push origin master"))),Object(o.b)("h3",{id:"create-a-version-branch"},"Create a version branch"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create and checkout a new orphan branch with ",Object(o.b)("inlineCode",{parentName:"li"},"git checkout --orphan v0.1.0"),".")),Object(o.b)("p",null,"This will make a branch that isn't created from master, so it has no commit history. It will hold the tests for your tutorial. Each test is its own commit. You can also add an optional commit for a solution to each test."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Check your ",Object(o.b)("inlineCode",{parentName:"li"},"git status")),Object(o.b)("li",{parentName:"ul"},"Delete the tutorial file from this branch with ",Object(o.b)("inlineCode",{parentName:"li"},"git rm -f TUTORIAL.md"))),Object(o.b)("h3",{id:"create-your-project-files"},"Create your project files"),Object(o.b)("p",null,"This branch is also where users create their projects, modify files for a tutorial, and most anything they need to do."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Make a new folder named ",Object(o.b)("inlineCode",{parentName:"li"},"coderoad")," on your branch.")),Object(o.b)("p",null,"This folder will hold as much of the CodeRoad stuff as it can so users aren't confused with extra files in their projects."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to the ",Object(o.b)("inlineCode",{parentName:"li"},"coderoad")," folder in your terminal and run ",Object(o.b)("inlineCode",{parentName:"li"},"npm init"),". Press enter until you are through the setup."),Object(o.b)("li",{parentName:"ul"},"Open the ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," file you just made and make it look like this...")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "name": "coderoad",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "programmatic-test": "mocha --reporter=mocha-tap-reporter",\n    "test": "mocha"\n  },\n  "author": "",\n  "license": "ISC"\n}\n\n')),Object(o.b)("p",null,"These scripts will be for CodeRoad and you to test things."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"From the terminal, in your ",Object(o.b)("inlineCode",{parentName:"li"},"coderoad")," folder, run ",Object(o.b)("inlineCode",{parentName:"li"},"npm install --save mocha mocha-tap-reporter")," to install some depenedencies"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Go back to the main repo folder")," and add your changes with ",Object(o.b)("inlineCode",{parentName:"li"},"git add .")),Object(o.b)("li",{parentName:"ul"},"Commit your files with ",Object(o.b)("inlineCode",{parentName:"li"},'git commit -m "INIT"'))),Object(o.b)("p",null,"The message of ",Object(o.b)("inlineCode",{parentName:"p"},"INIT")," in all caps is necessary. This message is used to add project setup files and anthing else you want to add before a user starts the tutorial."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Push and Create a branch on your remote with ",Object(o.b)("inlineCode",{parentName:"li"},"git push -u origin v0.1.0"))),Object(o.b)("h3",{id:"create-the-first-test"},"Create the first test"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go in the ",Object(o.b)("inlineCode",{parentName:"li"},"coderoad")," folder and create new folder named ",Object(o.b)("inlineCode",{parentName:"li"},"test")," in it"),Object(o.b)("li",{parentName:"ul"},"Create a file named ",Object(o.b)("inlineCode",{parentName:"li"},"first-tutorial.test.js")," in the ",Object(o.b)("inlineCode",{parentName:"li"},"test")," folder"),Object(o.b)("li",{parentName:"ul"},"Add this to the file:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const assert = require('assert')\nconst fs = require('fs')\nconst util = require('util')\nconst path = require('path')\n\nconst readdir = util.promisify(fs.readdir)\nconst getRootDir = async (dir = process.cwd()) => {\n  const pathToRoot = path.join(dir, '..')\n  const rootDir = await readdir(pathToRoot)\n\n  if (!rootDir) {\n    throw new Error(`Could not find folder ${pathToRoot}`)\n  }\n\n  return rootDir\n}\n\ndescribe('first-tutorial folder', () => {\n  let rootDir\n  before(async () => {\n    rootDir = await getRootDir()\n  })\n\n  it('should have an index.html file', async () => {\n    assert(rootDir.indexOf('index.html') >= 0)\n  })\n})\n")),Object(o.b)("p",null,"This will be the test for the one lesson in your tutorial. You can see that it checks for the existence of an ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," file in the root folder."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In the ",Object(o.b)("inlineCode",{parentName:"li"},"coderoad")," folder, run ",Object(o.b)("inlineCode",{parentName:"li"},"npm run programmatic-test")," from the terminal")),Object(o.b)("p",null,"It will fail since ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," doesn't exist."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create an ",Object(o.b)("inlineCode",{parentName:"li"},"index.html")," file in the main repo folder and run the test again")),Object(o.b)("p",null,"It should pass this time. So when a user creates the ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," file, this test will run, and the lesson will pass."),Object(o.b)("h3",{id:"commit-your-first-test"},"Commit your first test"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go back to the main repo folder and add the test file to be committed with ",Object(o.b)("inlineCode",{parentName:"li"},"git add coderoad/.")),Object(o.b)("li",{parentName:"ul"},"Commit it with ",Object(o.b)("inlineCode",{parentName:"li"},'git commit -m "1.1"'))),Object(o.b)("p",null,'That stands for "Lesson 1 Step 1 Setup & Tests". You can put an additional note after it, but it has to start with those letters so CodeRoad knows that this is the test for the 1.1 step.'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"After that, add the index file with ",Object(o.b)("inlineCode",{parentName:"li"},"git add index.html")),Object(o.b)("li",{parentName:"ul"},"Commit the file with ",Object(o.b)("inlineCode",{parentName:"li"},'git commit -m "1.1S"'))),Object(o.b)("p",null,'That stands for "Lesson 1 Step 1 Solution", and it\'s the solution to the test.'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Take a quick look at the commit history with ",Object(o.b)("inlineCode",{parentName:"li"},"git log"),". You can see the messages there, they align with the titles you put in the markdown and there's one commit for the test (",Object(o.b)("inlineCode",{parentName:"li"},"1.1"),") and an optional commit for the solution (",Object(o.b)("inlineCode",{parentName:"li"},"1.1S"),")"),Object(o.b)("li",{parentName:"ul"},"Push your changes to github with ",Object(o.b)("inlineCode",{parentName:"li"},"git push origin v0.1.0"))),Object(o.b)("h3",{id:"create-the-yaml-file"},"Create the YAML file"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go back your your master branch with ",Object(o.b)("inlineCode",{parentName:"li"},"git checkout master"),"\nYou can think of these two branches like separate repositories, the branches will never merge and the files will always be different, even if some look the same."),Object(o.b)("li",{parentName:"ul"},"Create a new file named ",Object(o.b)("inlineCode",{parentName:"li"},"coderoad.yaml")," and add this to it:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"version: '0.1.0'\nconfig:\n  testRunner:\n    command: ./node_modules/.bin/mocha\n    args:\n      tap: --reporter=mocha-tap-reporter\n    setup:\n      commands:\n        - npm install\n    directory: coderoad\n  repo:\n    uri: https://github.com/moT01/first-tut\n    branch: v0.1.0\n  dependencies:\n    - name: node\n      version: '>=10'\nlevels:\n  - id: '1'\n    steps:\n      - id: '1.1'\n")),Object(o.b)("p",null,"Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"repo uri")," URL with your github repo, note that it's just the username and repo in the URL. This file links everything together. You can see the repo URL and the branch that you created. And the ",Object(o.b)("inlineCode",{parentName:"p"},"1.")," and ",Object(o.b)("inlineCode",{parentName:"p"},"1.1")," id's that match the markdown. You can also add commands that will run when a lesson is started, as well as a host of other things."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add this with ",Object(o.b)("inlineCode",{parentName:"li"},"git add .")),Object(o.b)("li",{parentName:"ul"},"Commit it with ",Object(o.b)("inlineCode",{parentName:"li"},'git commit -m "create yaml"'))),Object(o.b)("p",null,"The commit messages on master can be whatever you want."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Push it to github with ",Object(o.b)("inlineCode",{parentName:"li"},"git push origin master"))),Object(o.b)("h3",{id:"build-the-configjson-file"},"Build the config.json file"),Object(o.b)("p",null,"You created the three things a tutorial needs from you; the markdown, the commits, and the yaml. Now you can build it. If you haven't installed the CodeRoad CLI tools, use ",Object(o.b)("inlineCode",{parentName:"p"},"npm install -g @coderoad/cli")," to do so."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"coderoad build")," from the terminal on the master branch")),Object(o.b)("p",null,"If you didn't get any errors, it will have created a ",Object(o.b)("inlineCode",{parentName:"p"},"tutorial.json")," file which is what CodeRoad uses to find all the files, commits, and instructions you created. You should see it in your repo now."),Object(o.b)("h3",{id:"open-your-tutorial"},"Open your tutorial"),Object(o.b)("p",null,"To check out your tutorial, install the CodeRoad extension to VS Code if you haven't already"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open a new VS Code window"),Object(o.b)("li",{parentName:"ul"},"Put a ",Object(o.b)("strong",{parentName:"li"},"single empty folder")," in the workspace"),Object(o.b)("li",{parentName:"ul"},"Open the command palette with ",Object(o.b)("inlineCode",{parentName:"li"},"ctrl+shift+p")),Object(o.b)("li",{parentName:"ul"},"Enter ",Object(o.b)("inlineCode",{parentName:"li"},"CodeRoad: Start")," in the search to start CodeRoad"),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("inlineCode",{parentName:"li"},"Start New Tutorial")),Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("inlineCode",{parentName:"li"},"File")," option"),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("inlineCode",{parentName:"li"},"Upload")),Object(o.b)("li",{parentName:"ul"},"Find the ",Object(o.b)("inlineCode",{parentName:"li"},"tutorial.json")," file that you created in your repo folder and upload it")),Object(o.b)("h3",{id:"review"},"Review"),Object(o.b)("p",null,"Success! You can see the introduction page. It may not be a bad idea to take a look at the markdown file again to see it next to the running tutorial."),Object(o.b)("p",null,"Notice that when you click the ",Object(o.b)("inlineCode",{parentName:"p"},"start")," button, you can see that ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," is run in the ",Object(o.b)("inlineCode",{parentName:"p"},"coderoad")," folder, and the dependencies are installed. This is an instruction in your ",Object(o.b)("inlineCode",{parentName:"p"},"coderoad.yaml")," file."),Object(o.b)("p",null,"After you click start, open up any file and press ",Object(o.b)("inlineCode",{parentName:"p"},"cmd+s")," to save. This will run the tests. They should fail. After that, create the ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," file, and save it. The tests should run and pass this time \ud83d\ude04"),Object(o.b)("p",null,"Keep this VS Code window open and go back to your other one."),Object(o.b)("h3",{id:"add-a-second-lesson"},"Add a second lesson"),Object(o.b)("p",null,"Your tutorial probably needs more than one lesson."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go back to the markdown file and add this at the bottom (make sure there's an empty line between the two lessons):")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-md"}),"## 2. Add DOCTYPE\n\n> Add a DOCTYPE to an HTML file\n\nHTML files should have a `DOCTYPE`. You can add one at the top of the `index.html` file like this: `<!DOCTYPE html>`.\n\n### 2.1\n\nAdd the DOCTYPE\n\n#### HINTS\n\n- Add `<!DOCTYPE html>` at the top of `index.html` and save the file\n")),Object(o.b)("h4",{id:"use-git-to"},"Use git to"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add all the files"),Object(o.b)("li",{parentName:"ul"},"Commit the files with any message"),Object(o.b)("li",{parentName:"ul"},"Push the changes to github")),Object(o.b)("h3",{id:"add-second-lesson-test"},"Add second lesson test"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Checkout your version branch again"),Object(o.b)("li",{parentName:"ul"},"Add a new test to your ",Object(o.b)("inlineCode",{parentName:"li"},".test")," file below the other one, it can look like this:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const readFile = util.promisify(fs.readFile)\nconst getIndexFile = async (dir = process.cwd()) => {\n  const pathToIndex = path.join(dir, '..', 'index.html')\n  const indexFile = await readFile(pathToIndex)\n\n  if (!indexFile) {\n    throw new Error(`Could not find ${pathToIndex}`)\n  }\n  return indexFile\n}\n\ndescribe('index.html', () => {\n  let indexFile\n  before(async () => {\n    indexFile = await getIndexFile()\n  })\n\n  it('should have a DOCTYPE', () => {\n    assert(/<!doctype html>/i.test(indexFile))\n  })\n})\n")),Object(o.b)("p",null,"That should check if ",Object(o.b)("inlineCode",{parentName:"p"},"<!DOCTYPE html>")," was added to the ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," file."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run the test to make sure it fails (",Object(o.b)("inlineCode",{parentName:"li"},"npm run programmatic-test")," from the ",Object(o.b)("inlineCode",{parentName:"li"},"coderoad")," folder)")),Object(o.b)("p",null,"There should be one passing and one failing test"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add ",Object(o.b)("inlineCode",{parentName:"li"},"!<DOCTYPE html>")," to the ",Object(o.b)("inlineCode",{parentName:"li"},"index.html")," file"),Object(o.b)("li",{parentName:"ul"},"Run the test again to see if it passed after adding that")),Object(o.b)("h3",{id:"commit-second-test"},"Commit second test"),Object(o.b)("h4",{id:"go-to-the-root-folder-and"},"Go to the root folder and"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add ",Object(o.b)("strong",{parentName:"li"},"only")," the ",Object(o.b)("inlineCode",{parentName:"li"},".test")," file to git to be committed"),Object(o.b)("li",{parentName:"ul"},'Commit it with a message of "2.1"'),Object(o.b)("li",{parentName:"ul"},"Add the ",Object(o.b)("inlineCode",{parentName:"li"},"index.html")," file to be committed"),Object(o.b)("li",{parentName:"ul"},'Commit it with a message of "2.1S"'),Object(o.b)("li",{parentName:"ul"},"Push your changes to github to your ",Object(o.b)("inlineCode",{parentName:"li"},"v0.1.0")," branch")),Object(o.b)("h3",{id:"update-the-yaml"},"Update the YAML"),Object(o.b)("p",null,"You added another lesson in the markdown, and the tests for it. Just need to update the YAML"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go back to the master branch"),Object(o.b)("li",{parentName:"ul"},"Add this at the bottom of the ",Object(o.b)("inlineCode",{parentName:"li"},".yaml")," file, make sure the indentation is perfect and aligns with the first lesson:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"- id: '2'\n  steps:\n    - id: '2.1'\n      setup:\n        files:\n          - index.html\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add, Commit, and Push your changes")),Object(o.b)("h3",{id:"rebuild"},"Rebuild"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"coderoad build")," again on your master branch (cross your fingers).")),Object(o.b)("h3",{id:"restart-the-tutorial"},"Restart the tutorial"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go back to your CodeRoad tutorial if its still open"),Object(o.b)("li",{parentName:"ul"},"In order to start over, close CodeRoad"),Object(o.b)("li",{parentName:"ul"},"Delete All the files from the workspace, but leave the top level folder there"),Object(o.b)("li",{parentName:"ul"},"Start CodeRoad back up"),Object(o.b)("li",{parentName:"ul"},"Start a new tutorial using the ",Object(o.b)("inlineCode",{parentName:"li"},"tutorial.json")," file you just created.")),Object(o.b)("p",null,"You should have two lessons to go through now \ud83d\ude04"))}b.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),b=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},s=function(e){var t=b(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=b(n),h=a,m=s["".concat(l,".").concat(h)]||s[h]||u[h]||o;return n?i.a.createElement(m,r({ref:t},d,{components:n})):i.a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);