# Agile Roadmap

> Track high level features with size and time estimates using t-shirt sizing, coupled to your teams current velocity

Available at https://agile-roadmap.netlify.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/1cba6a53-bc92-4680-b19e-9a5b1c5d0828/deploy-status)](https://app.netlify.com/sites/agile-roadmap/deploys)

## Create Project - Vuetify PWA Template

* [Vuetify Getting Started](https://vuetifyjs.com/en/getting-started/quick-start#new-applications)
* [Vuetify PWA Template](https://github.com/vuejs-templates/pwa/tree/master) (built on top of [Webpack Template](http://vuejs-templates.github.io/webpack/))
* [Docs for vue-loader](http://vuejs.github.io/vue-loader).
* [Vue CLI](https://cli.vuejs.org/guide/installation.html)

```bash
# install vue-cli globally
$ npm install -g vue-cli

# create project from template
$ vue init pwa roadmap

# add vuetify
$ npm install vuetify --save
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## Dependencies

* [Vuetify](https://vuetifyjs.com/en/)
* [Font Awesome Free](https://fontawesome.com/)
* [Roboto](https://fonts.google.com/specimen/Roboto)
* [Material Icons](https://material.io/tools/icons/?style=baseline)
* [gh-pages](https://github.com/tschaub/gh-pages)

```bash
npm install vuetify                      --save
npm install @fortawesome/fontawesome-pro --save
npm install typeface-roboto              --save
npm install material-icons               --save
npm install gh-pages                     --save-dev
```

## Reccomended Tools

* [**Vetur - VS Code Extension**](https://github.com/vuejs/vetur) - <sup>[Store](https://marketplace.visualstudio.com/items?itemName=octref.vetur)</sup>
* [**Vue.js Devtools - Chrome Extension**](https://github.com/vuejs/vue-devtools)  - <sup>[Store](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)</sup>
-----

# Reources

## Framwork

### Vue

#### Docs

* [Vue - Watchers](https://vuejs.org/v2/guide/computed.html#Watchers)
* [Vue - Events](https://vuejs.org/v2/guide/events.html)
* [Vue - Change Detection Caveats](https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats)
* [Vue - Computed](https://vuejs.org/v2/guide/computed.html)
* [Vue - Template Syntax](https://vuejs.org/v2/guide/syntax.html)
* [Vue - Forms](https://vuejs.org/v2/guide/forms.html)
* [Vue - Class & Style Bindings](https://vuejs.org/v2/guide/class-and-style.html)
* [Vue - Ref attribute](https://vuejs.org/v2/api/#ref)
* [Vue - Filters](https://vuejs.org/v2/guide/filters.html)
* [Vue - Sync Modifier](https://vuejs.org/v2/guide/components-custom-events.html#sync-Modifier)

#### Articles

* [SO - How to remove an item from an array in Vue.js](https://stackoverflow.com/a/51083437/1366033)
* [Github - $watch multiple properties for single callback](https://github.com/vuejs/vue/issues/844)
* [Github - component $watch 'data'](https://github.com/vuejs/vue/issues/2558)
* [SO - How do I watch all keys in a data object in Vue 2](https://stackoverflow.com/q/41626565/1366033)
* [SO - Vue.js 'v-bind:class' doesn't update even though model does](https://stackoverflow.com/q/41185809/1366033)
* [Github - Allow computed properties of subobjects](https://github.com/vuejs/vue/issues/1964)
* [SO - VueJS accessing a method from another method](https://stackoverflow.com/questions/40707738/vuejs-accessing-a-method-from-another-method#comment77077432_40708474)
* [contenteditable div append a html element and v-model it in Vuejs](https://stackoverflow.com/q/46487619/1366033)
* [Github - Vue.js is detected on this page. Devtools inspection is not available because it's in production mode or explicitly disabled by the author.](https://github.com/vuejs/vue-devtools/issues/190)
* [`v-el` directive merged into `ref` attribute in v2](https://vuejs.org/v2/guide/migration.html#v-el-and-v-ref-replaced)
* [Setting focus of an input element in vue.js](https://stackoverflow.com/q/34941829/1366033)
* [Vue display unescaped html](https://stackoverflow.com/q/30877491/1366033)
* [Register single-file components](https://stackoverflow.com/a/44568550/1366033)
* [Focus input of freshly added item](https://stackoverflow.com/a/39537367/1366033)
* [type check failed for prop "disabled". Expected Boolean, got String](https://github.com/bootstrap-vue/bootstrap-vue/issues/2072)
* [Call parent method with component](https://stackoverflow.com/a/53491856/1366033)
* [Invalid prop: type check failed for prop. Expected Number, got String](https://stackoverflow.com/a/53492345/1366033)
* [How to Target Child Components with Scoped CSS in Vue](https://bambielli.com/til/2018-08-19-how-to-target-child-components-with-scoped-css-in-vue/)
* [Request: v-text-field with decimal amount #2138](https://github.com/vuetifyjs/vuetify/issues/2138)
* [Duplicate keys detected](https://github.com/vuejs/vue/issues/7323)
* [vue js 'document.getElementById' shorthand](https://stackoverflow.com/q/36970062/1366033)
* [Vue 2 - Mutating props vue-warn](https://stackoverflow.com/q/39868963/1366033)

### Vuetify

* [Adjusting height of v-list-tile in Vuetify](https://stackoverflow.com/a/53454019/1366033)
* [Vuetify - Fixed NavigationDrawer with absolute Footer leaves unnecessary space](https://stackoverflow.com/q/52408935/1366033)
* [script-indent make me crazy](https://github.com/vuejs/eslint-plugin-vue/issues/362)
* [Add "shrink" and "grow" props to v-flex](https://github.com/vuetifyjs/vuetify/issues/1894)
* [Tooltip can open when focus by default](https://github.com/vuetifyjs/vuetify/issues/4112)
* [File Input / Upload](https://stackoverflow.com/q/44989162/1366033)


### Bootstrap

* [BS - Colors](https://getbootstrap.com/docs/4.0/utilities/colors/)
* [BS - Checkboxes](https://getbootstrap.com/docs/4.0/components/forms/#checkboxes-and-radios)
* [BS - Flex](https://getbootstrap.com/docs/4.1/utilities/flex/)
* [BS - Cards](https://getbootstrap.com/docs/4.1/components/card/)
* [BS - Spacing](https://getbootstrap.com/docs/4.1/utilities/spacing/)

### LoDash

* [LoDash - Sum](https://lodash.com/docs/4.17.11#sum)


## Web

## HTML

* [Placeholder for contenteditable div](https://stackoverflow.com/a/24827239/1366033)
* [disable horizontal scroll on mobile web](https://stackoverflow.com/a/36380425/1366033)
* [What is the maximum length of a URL in different browsers?](https://stackoverflow.com/a/417184/1366033)
* [Styling an input type=“file” button](https://stackoverflow.com/q/572768/1366033)

### Javascript

* [SO - How to find the sum of an array of numbers](https://stackoverflow.com/a/43363105/1366033)
* [MDN - Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
* [Set focus on div contenteditable element](https://stackoverflow.com/q/2388164/1366033)
* [MDN - encodeURI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)
* [How can I update window.location.hash without jumping the document?](https://stackoverflow.com/q/3870057/1366033)
* [What is the difference between decodeURIComponent and decodeURI?](https://stackoverflow.com/q/747641/1366033)
* [Delete first character of a string in Javascript](https://stackoverflow.com/q/4564414/1366033)
* [Selecting all text in HTML text input when clicked](https://stackoverflow.com/q/4067469/1366033)
* [Set focus on div contenteditable element](https://stackoverflow.com/q/2388164/1366033)
* [Flatten Array of Arrays](https://stackoverflow.com/a/18307218/1366033)
* [Copying text to clipboard with JavaScript](https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f)
* [How To Make A Drag-and-Drop File Uploader With Vanilla JavaScript](https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/)
* [Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
* [access data of uploaded json file using javascript](https://stackoverflow.com/q/23344776/1366033)
* [how to reset input type = "file"](https://stackoverflow.com/a/20552042/1366033)


### CSS

* [Outline effect to text](https://stackoverflow.com/q/4919076/1366033)

## Tooling

### VS Code

* [Visual studio code CSS indentation and formatting](https://stackoverflow.com/q/37739375/1366033)
* [How do you change the formatting options in Visual Studio Code?](https://github.com/Microsoft/vscode/issues/1533)
* [File filter on explorer](https://github.com/Microsoft/vscode/issues/36206)
* [Extensions - Workspace recommended extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions)

### NPM

* [What is the --save option for npm install?](https://stackoverflow.com/q/19578796/1366033)
* [Node .gitignore](https://github.com/github/gitignore/blob/master/Node.gitignore)
* [Everything You Wanted To Know About package-lock.json](https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8)
* [npm config files](https://docs.npmjs.com/files/npmrc)

### EsLint

* ["Better Code Quality with ESLint" Pluralsight Course Intro](https://www.youtube.com/watch?v=hppJw2REb8g)
* [Rules - Quotes](http://eslint.org/docs/rules/quotes)

### Github

* [Deploying a subfolder to GitHub Pages](https://gist.github.com/cobyism/4730490)
* [host github pages from /dist folder in master branch](https://stackoverflow.com/a/53463860/1366033)
* [Project Boards](https://help.github.com/articles/about-project-boards/)
* [Configuring automation for project boards](https://help.github.com/articles/configuring-automation-for-project-boards/)
* [Archiving cards on a project board](https://help.github.com/articles/archiving-cards-on-a-project-board/)

### Fonts

* [Using a Package Manager](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)
* [Downloading a Google font and setting up an offline site that uses it](https://stackoverflow.com/a/53470702/1366033)

## WebPack

* [css-loader - removed minimize](https://github.com/vipranarayan14/vtranslit-web/commit/2a21b43b0b73704c648fe0566f4d6fe051d82640)
