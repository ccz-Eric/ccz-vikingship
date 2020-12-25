(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1536:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(68),_clientLogger=__webpack_require__(39),_configFilename=__webpack_require__(1537);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1537:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(163),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(342),styles=(__webpack_require__(1538),__webpack_require__(1539),{textAlign:"center"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)((function CenterDecorator(storyFn){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:styles},storyFn())})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters)({docs:{container:_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.DocsContainer,page:_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.DocsPage}})},1538:function(module,exports,__webpack_require__){},1539:function(module,exports,__webpack_require__){},1540:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(163).configure)([__webpack_require__(1541)],module,!1)}).call(this,__webpack_require__(113)(module))},1541:function(module,exports,__webpack_require__){var map={"./components/Button/button.stories.tsx":1542,"./components/Upload/upload.stories.tsx":1567,"./stories/0-Welcome.stories.tsx":1559,"./stories/1-Button.stories.tsx":1562};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1541},1542:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"defaultButton",(function(){return defaultButton})),__webpack_require__.d(__webpack_exports__,"buttonWithSize",(function(){return buttonWithSize})),__webpack_require__.d(__webpack_exports__,"buttonWithType",(function(){return buttonWithType}));var _home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(64),_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(84);__webpack_exports__.default={parameters:{storySource:{source:'\n      \n      // @ts-nocheck\n      // @ts-ignore\n      var __STORY__ = "import React from \'react\'\\nimport {action} from \'@storybook/addon-actions\'\\nimport Button from \'./button\'\\n\\nexport default {\\n  title: \'Button Component\',\\n  component: Button,\\n};\\n\\n\\nexport const defaultButton = () => (\\n  <Button onClick={action(\'clicked\')}>default button Test</Button>\\n)\\n\\n\\nexport const buttonWithSize = () => (\\n  <React.Fragment>\\n    <Button size=\\"lg\\"> large button</Button>\\n    <Button size=\\"sm\\"> small button</Button>\\n  </React.Fragment>\\n)\\n\\nexport const buttonWithType = () => (\\n  <React.Fragment>\\n    <Button btnType=\\"primary\\"> primary button</Button>\\n    <Button btnType=\\"danger\\"> danger button</Button>\\n    <Button btnType=\\"link\\" href=\\"https://www.baidu.com\\"> link button</Button>\\n  </React.Fragment>\\n)\\n\\n/*\\nstoriesOf(\'Button Component\', module)\\n  .addDecorator(withInfo as any)\\n  .addParameters({\\n    info:{\\n      header: false,\\n      inline: true\\n    }\\n  })\\n  .add(\'默认 Button\', defaultButton)\\n  .add(\'不同尺寸的 Button\',buttonWithSize)\\n  .add(\'不同类型的 Button\',buttonWithType)*/\\n";\n      // @ts-ignore\n      var __LOCATIONS_MAP__ = {"defaultButton":{"startLoc":{"col":29,"line":11},"endLoc":{"col":1,"line":13},"startBody":{"col":29,"line":11},"endBody":{"col":1,"line":13}},"buttonWithSize":{"startLoc":{"col":30,"line":16},"endLoc":{"col":1,"line":21},"startBody":{"col":30,"line":16},"endBody":{"col":1,"line":21}},"buttonWithType":{"startLoc":{"col":30,"line":23},"endLoc":{"col":1,"line":29},"startBody":{"col":30,"line":23},"endBody":{"col":1,"line":29}}};\n    \nimport React from \'react\'\nimport {action} from \'@storybook/addon-actions\'\nimport Button from \'./button\'\n\nexport default {\n  title: \'Button Component\',\n  component: Button,\n};\n\n\nexport const defaultButton = () => (\n  <Button onClick={action(\'clicked\')}>default button Test</Button>\n);\n\n\nexport const buttonWithSize = () => (\n  <React.Fragment>\n    <Button size="lg"> large button</Button>\n    <Button size="sm"> small button</Button>\n  </React.Fragment>\n);\n\nexport const buttonWithType = () => (\n  <React.Fragment>\n    <Button btnType="primary"> primary button</Button>\n    <Button btnType="danger"> danger button</Button>\n    <Button btnType="link" href="https://www.baidu.com"> link button</Button>\n  </React.Fragment>\n);\n/*\nstoriesOf(\'Button Component\', module)\n  .addDecorator(withInfo as any)\n  .addParameters({\n    info:{\n      header: false,\n      inline: true\n    }\n  })\n  .add(\'默认 Button\', defaultButton)\n  .add(\'不同尺寸的 Button\',buttonWithSize)\n  .add(\'不同类型的 Button\',buttonWithType)*/\n\n\n\ndefaultButton.parameters = { storySource: { source: "() => (\\n  <Button onClick={action(\'clicked\')}>default button Test</Button>\\n)" }, ...defaultButton.parameters };\nbuttonWithSize.parameters = { storySource: { source: "() => (\\n  <React.Fragment>\\n    <Button size=\\"lg\\"> large button</Button>\\n    <Button size=\\"sm\\"> small button</Button>\\n  </React.Fragment>\\n)" }, ...buttonWithSize.parameters };\nbuttonWithType.parameters = { storySource: { source: "() => (\\n  <React.Fragment>\\n    <Button btnType=\\"primary\\"> primary button</Button>\\n    <Button btnType=\\"danger\\"> danger button</Button>\\n    <Button btnType=\\"link\\" href=\\"https://www.baidu.com\\"> link button</Button>\\n  </React.Fragment>\\n)" }, ...buttonWithType.parameters };',locationsMap:{"default-button":{startLoc:{col:29,line:19},endLoc:{col:1,line:21},startBody:{col:29,line:19},endBody:{col:1,line:21}},"button-with-size":{startLoc:{col:30,line:24},endLoc:{col:1,line:29},startBody:{col:30,line:24},endBody:{col:1,line:29}},"button-with-type":{startLoc:{col:30,line:31},endLoc:{col:1,line:37},startBody:{col:30,line:31},endBody:{col:1,line:37}}}}},title:"Button Component",component:_button__WEBPACK_IMPORTED_MODULE_3__.a};var defaultButton=function defaultButton(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"default button Test")},buttonWithSize=function buttonWithSize(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_3__.a,{size:"lg"}," large button"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_3__.a,{size:"sm"}," small button"))},buttonWithType=function buttonWithType(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_3__.a,{btnType:"primary"}," primary button"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_3__.a,{btnType:"danger"}," danger button"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_3__.a,{btnType:"link",href:"https://www.baidu.com"}," link button"))};defaultButton.parameters=Object(_home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => (\n  <Button onClick={action('clicked')}>default button Test</Button>\n)"}},defaultButton.parameters),buttonWithSize.parameters=Object(_home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:'() => (\n  <React.Fragment>\n    <Button size="lg"> large button</Button>\n    <Button size="sm"> small button</Button>\n  </React.Fragment>\n)'}},buttonWithSize.parameters),buttonWithType.parameters=Object(_home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:'() => (\n  <React.Fragment>\n    <Button btnType="primary"> primary button</Button>\n    <Button btnType="danger"> danger button</Button>\n    <Button btnType="link" href="https://www.baidu.com"> link button</Button>\n  </React.Fragment>\n)'}},buttonWithType.parameters)},1559:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ToStorybook",(function(){return ToStorybook}));var _home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(339),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(109);__webpack_exports__.default={parameters:{storySource:{source:'\n      \n      // @ts-nocheck\n      // @ts-ignore\n      var __STORY__ = "import React from \'react\';\\nimport { linkTo } from \'@storybook/addon-links\';\\nimport { Welcome } from \'@storybook/react/demo\';\\n\\nexport default {\\n  title: \'Welcome\',\\n  component: Welcome,\\n};\\n\\nexport const ToStorybook = () => <Welcome showApp={linkTo(\'Button\')} />;\\n\\nToStorybook.story = {\\n  name: \'to Storybook\',\\n};\\n";\n      // @ts-ignore\n      var __LOCATIONS_MAP__ = {"ToStorybook":{"startLoc":{"col":27,"line":10},"endLoc":{"col":71,"line":10},"startBody":{"col":27,"line":10},"endBody":{"col":71,"line":10}}};\n    \nimport React from \'react\';\nimport { linkTo } from \'@storybook/addon-links\';\nimport { Welcome } from \'@storybook/react/demo\';\n\nexport default {\n  title: \'Welcome\',\n  component: Welcome,\n};\n\nexport const ToStorybook = () => <Welcome showApp={linkTo(\'Button\')} />;\n\nToStorybook.story = {\n  name: \'to Storybook\',\n};\n\n\n\nToStorybook.parameters = { storySource: { source: "() => <Welcome showApp={linkTo(\'Button\')} />" }, ...ToStorybook.parameters };',locationsMap:{"to-storybook":{startLoc:{col:27,line:18},endLoc:{col:71,line:18},startBody:{col:27,line:18},endBody:{col:71,line:18}}}}},title:"Welcome",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_3__.Welcome};var ToStorybook=function ToStorybook(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_3__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_2__.linkTo)("Button")})};ToStorybook.story={name:"to Storybook"},ToStorybook.parameters=Object(_home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => <Welcome showApp={linkTo('Button')} />"}},ToStorybook.parameters)},1562:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"Emoji",(function(){return Emoji})),__webpack_require__.d(__webpack_exports__,"myButton",(function(){return myButton}));var _home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(64),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(109);__webpack_exports__.default={parameters:{storySource:{source:'\n      \n      // @ts-nocheck\n      // @ts-ignore\n      var __STORY__ = "import React from \'react\';\\nimport { action } from \'@storybook/addon-actions\';\\nimport { Button } from \'@storybook/react/demo\';\\n\\nexport default {\\n  title: \'Button\',\\n  component: Button,\\n};\\n\\nexport const Text = () => <Button onClick={action(\'clicked\')}>Hello Button</Button>;\\n\\nexport const Emoji = () => (\\n  <Button onClick={action(\'clicked\')}>\\n    <span role=\\"img\\" aria-label=\\"so cool\\">\\n      😀 😎 👍 💯\\n    </span>\\n  </Button>\\n);\\n\\nexport const myButton= () => (\\n  <Button onClick={action(\'111\')}>\\n    111\\n  </Button>\\n)\\n\\n\\n";\n      // @ts-ignore\n      var __LOCATIONS_MAP__ = {"Text":{"startLoc":{"col":20,"line":10},"endLoc":{"col":83,"line":10},"startBody":{"col":20,"line":10},"endBody":{"col":83,"line":10}},"Emoji":{"startLoc":{"col":21,"line":12},"endLoc":{"col":1,"line":18},"startBody":{"col":21,"line":12},"endBody":{"col":1,"line":18}},"myButton":{"startLoc":{"col":23,"line":20},"endLoc":{"col":1,"line":24},"startBody":{"col":23,"line":20},"endBody":{"col":1,"line":24}}};\n    \nimport React from \'react\';\nimport { action } from \'@storybook/addon-actions\';\nimport { Button } from \'@storybook/react/demo\';\n\nexport default {\n  title: \'Button\',\n  component: Button,\n};\n\nexport const Text = () => <Button onClick={action(\'clicked\')}>Hello Button</Button>;;\n\nexport const Emoji = () => (\n  <Button onClick={action(\'clicked\')}>\n    <span role="img" aria-label="so cool">\n      😀 😎 👍 💯\n    </span>\n  </Button>\n);;\n\nexport const myButton= () => (\n  <Button onClick={action(\'111\')}>\n    111\n  </Button>\n);\n\n\n\n\nText.parameters = { storySource: { source: "() => <Button onClick={action(\'clicked\')}>Hello Button</Button>" }, ...Text.parameters };\nEmoji.parameters = { storySource: { source: "() => (\\n  <Button onClick={action(\'clicked\')}>\\n    <span role=\\"img\\" aria-label=\\"so cool\\">\\n      😀 😎 👍 💯\\n    </span>\\n  </Button>\\n)" }, ...Emoji.parameters };\nmyButton.parameters = { storySource: { source: "() => (\\n  <Button onClick={action(\'111\')}>\\n    111\\n  </Button>\\n)" }, ...myButton.parameters };',locationsMap:{text:{startLoc:{col:20,line:18},endLoc:{col:83,line:18},startBody:{col:20,line:18},endBody:{col:83,line:18}},emoji:{startLoc:{col:21,line:20},endLoc:{col:1,line:26},startBody:{col:21,line:20},endBody:{col:1,line:26}},"my-button":{startLoc:{col:23,line:28},endLoc:{col:1,line:32},startBody:{col:23,line:28},endBody:{col:1,line:32}}}}},title:"Button",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_3__.Button};var Text=function Text(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_3__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")},Emoji=function Emoji(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_3__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"))},myButton=function myButton(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_3__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("111")},"111")};Text.parameters=Object(_home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => <Button onClick={action('clicked')}>Hello Button</Button>"}},Text.parameters),Emoji.parameters=Object(_home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:'() => (\n  <Button onClick={action(\'clicked\')}>\n    <span role="img" aria-label="so cool">\n      😀 😎 👍 💯\n    </span>\n  </Button>\n)'}},Emoji.parameters),myButton.parameters=Object(_home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => (\n  <Button onClick={action('111')}>\n    111\n  </Button>\n)"}},myButton.parameters)},1567:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SimpleUpload",(function(){return upload_stories_SimpleUpload}));var objectSpread2=__webpack_require__(52),react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(64),toConsumableArray=__webpack_require__(538),slicedToArray=__webpack_require__(539),axios=__webpack_require__(537),axios_default=__webpack_require__.n(axios),Button_button=__webpack_require__(84),Upload_upload=function Upload(props){var action=props.action,beforeUpload=props.beforeUpload,onProgress=props.onProgress,onSuccess=props.onSuccess,onError=props.onError,onChange=props.onChange,fileInput=Object(react.useRef)(null),_useState=Object(react.useState)([]),_useState2=Object(slicedToArray.a)(_useState,2),fileList=_useState2[0],setFileList=_useState2[1],updateFileList=function updateFileList(updateFile,updateObj){setFileList((function(prevList){return prevList.map((function(file){return file.uid===updateFile.uid?Object(objectSpread2.a)(Object(objectSpread2.a)({},file),updateObj):file}))}))};return console.log("fileList",fileList),react_default.a.createElement("div",{className:"viking-upload-component"},react_default.a.createElement(Button_button.a,{btnType:"primary",onClick:function handleClick(){fileInput.current&&fileInput.current.click()}},"Upload File"),react_default.a.createElement("input",{className:"viking-file-input",type:"file",style:{display:"none"},ref:fileInput,onChange:function handleFileChange(e){var files=e.target.files;files&&(!function uploadFiles(files){var postFiles=Array.from(files),post=function post(file){var _file={uid:Date.now()+"upload-file",status:"ready",name:file.name,size:file.size,percent:0,raw:file};setFileList([_file].concat(Object(toConsumableArray.a)(fileList)));var formData=new FormData;formData.append(file.name,file),axios_default.a.post(action,formData,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function onUploadProgress(e){var percentage=Math.round(100*e.loaded/e.total);percentage<100&&(updateFileList(_file,{percent:percentage,status:"uploading"}),onProgress&&onProgress(percentage,file))}}).then((function(res){updateFileList(_file,{status:"success",response:res.data}),onSuccess&&onSuccess(res.data,file),onChange&&onChange(file)})).catch((function(err){updateFileList(_file,{status:"error",error:err}),onError&&onError(err,file)}))};postFiles.forEach((function(file){if(beforeUpload){var result=beforeUpload(file);result&&result instanceof Promise?result.then((function(processedFile){post(processedFile)})):result&&post(file)}else post(file)}))}(files),fileInput.current&&(fileInput.current.value=""))}}))};try{upload.displayName="upload",upload.__docgenInfo={description:"",displayName:"upload",props:{action:{defaultValue:null,description:"",name:"action",required:!0,type:{name:"string"}},beforeUpload:{defaultValue:null,description:"",name:"beforeUpload",required:!1,type:{name:"(file: File) => boolean | Promise<File>"}},onProgress:{defaultValue:null,description:"",name:"onProgress",required:!1,type:{name:"(percentage: number, file: File) => void"}},onSuccess:{defaultValue:null,description:"",name:"onSuccess",required:!1,type:{name:"(data: any, file: File) => void"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"(err: any, file: File) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(file: File) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Upload/upload.tsx#upload"]={docgenInfo:upload.__docgenInfo,name:"upload",path:"src/components/Upload/upload.tsx#upload"})}catch(__react_docgen_typescript_loader_error){}try{upload.displayName="upload",upload.__docgenInfo={description:"",displayName:"upload",props:{action:{defaultValue:null,description:"",name:"action",required:!0,type:{name:"string"}},beforeUpload:{defaultValue:null,description:"",name:"beforeUpload",required:!1,type:{name:"((file: File) => boolean | Promise<File>) | undefined"}},onProgress:{defaultValue:null,description:"",name:"onProgress",required:!1,type:{name:"((percentage: number, file: File) => void) | undefined"}},onSuccess:{defaultValue:null,description:"",name:"onSuccess",required:!1,type:{name:"((data: any, file: File) => void) | undefined"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((err: any, file: File) => void) | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((file: File) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Upload/upload.tsx#upload"]={docgenInfo:upload.__docgenInfo,name:"upload",path:"src/components/Upload/upload.tsx#upload"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={parameters:{storySource:{source:"\n      \n      // @ts-nocheck\n      // @ts-ignore\n      var __STORY__ = \"import React from 'react'\\nimport {action} from '@storybook/addon-actions'\\nimport Upload from './upload'\\n\\nexport default {\\n  title: 'Upload Component',\\n  component: Upload,\\n}\\n\\nconst checkFileSize = (file: File) => {\\n  if(Math.round(file.size /1024) > 50) {\\n    alert('file too big')\\n    return false\\n  }\\n  return true\\n}\\n\\nconst filePromise = (file: File) => {\\n  const newFile = new File([file],'new_name.doc',{type:file.type})\\n  return Promise.resolve(newFile)\\n}\\n\\nexport const SimpleUpload = () => (\\n  <Upload\\n    action=\\\"http://jsonplaceholder.typicode.com/posts\\\"\\n    beforeUpload={filePromise}\\n    onChange={action('changed')}\\n    onProgress={action('progress')}\\n    onSuccess={action('success')}\\n    onError={action('error')}\\n  >\\n    Upload File\\n  </Upload>\\n)\\n\";\n      // @ts-ignore\n      var __LOCATIONS_MAP__ = {\"SimpleUpload\":{\"startLoc\":{\"col\":28,\"line\":23},\"endLoc\":{\"col\":1,\"line\":34},\"startBody\":{\"col\":28,\"line\":23},\"endBody\":{\"col\":1,\"line\":34}}};\n    \nimport React from 'react'\nimport {action} from '@storybook/addon-actions'\nimport Upload from './upload'\n\nexport default {\n  title: 'Upload Component',\n  component: Upload,\n}\n\nconst checkFileSize = (file: File) => {\n  if(Math.round(file.size /1024) > 50) {\n    alert('file too big')\n    return false\n  }\n  return true\n}\n\nconst filePromise = (file: File) => {\n  const newFile = new File([file],'new_name.doc',{type:file.type})\n  return Promise.resolve(newFile)\n}\n\nexport const SimpleUpload = () => (\n  <Upload\n    action=\"http://jsonplaceholder.typicode.com/posts\"\n    beforeUpload={filePromise}\n    onChange={action('changed')}\n    onProgress={action('progress')}\n    onSuccess={action('success')}\n    onError={action('error')}\n  >\n    Upload File\n  </Upload>\n);\n\n\nSimpleUpload.parameters = { storySource: { source: \"() => (\\n  <Upload\\n    action=\\\"http://jsonplaceholder.typicode.com/posts\\\"\\n    beforeUpload={filePromise}\\n    onChange={action('changed')}\\n    onProgress={action('progress')}\\n    onSuccess={action('success')}\\n    onError={action('error')}\\n  >\\n    Upload File\\n  </Upload>\\n)\" }, ...SimpleUpload.parameters };",locationsMap:{"simple-upload":{startLoc:{col:28,line:31},endLoc:{col:1,line:42},startBody:{col:28,line:31},endBody:{col:1,line:42}}}}},title:"Upload Component",component:Upload_upload};var filePromise=function filePromise(file){var newFile=new File([file],"new_name.doc",{type:file.type});return Promise.resolve(newFile)},upload_stories_SimpleUpload=function SimpleUpload(){return react_default.a.createElement(Upload_upload,{action:"http://jsonplaceholder.typicode.com/posts",beforeUpload:filePromise,onChange:Object(dist.action)("changed"),onProgress:Object(dist.action)("progress"),onSuccess:Object(dist.action)("success"),onError:Object(dist.action)("error")},"Upload File")};upload_stories_SimpleUpload.parameters=Object(objectSpread2.a)({storySource:{source:"() => (\n  <Upload\n    action=\"http://jsonplaceholder.typicode.com/posts\"\n    beforeUpload={filePromise}\n    onChange={action('changed')}\n    onProgress={action('progress')}\n    onSuccess={action('success')}\n    onError={action('error')}\n  >\n    Upload File\n  </Upload>\n)"}},upload_stories_SimpleUpload.parameters)},541:function(module,exports,__webpack_require__){__webpack_require__(542),__webpack_require__(685),__webpack_require__(686),__webpack_require__(881),__webpack_require__(1487),__webpack_require__(1518),__webpack_require__(1530),__webpack_require__(1532),__webpack_require__(1536),module.exports=__webpack_require__(1540)},604:function(module,exports){},686:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(163)},84:function(module,__webpack_exports__,__webpack_require__){"use strict";var ButtonSize,ButtonType,_home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(134),_home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(540),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(536),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);!function(ButtonSize){ButtonSize.Large="lg",ButtonSize.Small="sm"}(ButtonSize||(ButtonSize={})),function(ButtonType){ButtonType.Primary="primary",ButtonType.Default="default",ButtonType.Danger="danger",ButtonType.Link="link"}(ButtonType||(ButtonType={}));var Button=function Button(props){var _classNames,btnType=props.btnType,className=props.className,disabled=props.disabled,size=props.size,children=props.children,href=props.href,restProps=Object(_home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(props,["btnType","className","disabled","size","children","href"]),classes=classnames__WEBPACK_IMPORTED_MODULE_3___default()("btn",className,(_classNames={},Object(_home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_classNames,"btn-".concat(btnType),btnType),Object(_home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_classNames,"btn-".concat(size),size),Object(_home_travis_build_BARMPlus_ccz_vikingship_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(_classNames,"disabled",btnType===ButtonType.Link&&disabled),_classNames));return btnType===ButtonType.Link&&href?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a",Object.assign({className:classes,href:href},restProps),children):react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",Object.assign({className:classes,disabled:disabled},restProps),children)};Button.defaultProps={disabled:!1,btnType:ButtonType.Default},__webpack_exports__.a=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"这是我们的第一个 Button 组件",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:!1},description:"设置 Button 的禁用",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"设置 Button 的尺寸",name:"size",required:!1,type:{name:"any"}},btnType:{defaultValue:{value:"ButtonType.Default"},description:"设置 Button 的类型",name:"btnType",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},testVal:{defaultValue:null,description:"",name:"testVal",required:!1,type:{name:"enum",value:[{value:'"a"'},{value:'"b"'},{value:'"c"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{button.displayName="button",button.__docgenInfo={description:"这是我们的第一个 Button 组件",displayName:"button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:!1},description:"设置 Button 的禁用",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"设置 Button 的尺寸",name:"size",required:!1,type:{name:"any"}},btnType:{defaultValue:{value:"ButtonType.Default"},description:"设置 Button 的类型",name:"btnType",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},testVal:{defaultValue:null,description:"",name:"testVal",required:!1,type:{name:"enum",value:[{value:'"a"'},{value:'"b"'},{value:'"c"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/button.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"src/components/Button/button.tsx#button"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"这是我们的第一个 Button 组件",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:!1},description:"设置 Button 的禁用",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"设置 Button 的尺寸",name:"size",required:!1,type:{name:"any"}},btnType:{defaultValue:{value:"ButtonType.Default"},description:"设置 Button 的类型",name:"btnType",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},testVal:{defaultValue:null,description:"",name:"testVal",required:!1,type:{name:'"a" | "b" | "c" | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{button.displayName="button",button.__docgenInfo={description:"这是我们的第一个 Button 组件",displayName:"button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:{value:!1},description:"设置 Button 的禁用",name:"disabled",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"设置 Button 的尺寸",name:"size",required:!1,type:{name:"any"}},btnType:{defaultValue:{value:"ButtonType.Default"},description:"设置 Button 的类型",name:"btnType",required:!1,type:{name:"any"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},testVal:{defaultValue:null,description:"",name:"testVal",required:!1,type:{name:'"a" | "b" | "c" | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/button.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"src/components/Button/button.tsx#button"})}catch(__react_docgen_typescript_loader_error){}}},[[541,1,2]]]);
//# sourceMappingURL=main.f7dfff2238d6e48d30f9.bundle.js.map