"use strict";(self.webpackChunkdart_frog_docs=self.webpackChunkdart_frog_docs||[]).push([[897],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4420:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3,title:"\ud83d\udd22 Counter",description:'Build a simple "Counter" application.'},p="Counter \ud83d\udd22",u={unversionedId:"tutorials/counter",id:"tutorials/counter",title:"\ud83d\udd22 Counter",description:'Build a simple "Counter" application.',source:"@site/docs/tutorials/counter.md",sourceDirName:"tutorials",slug:"/tutorials/counter",permalink:"/docs/tutorials/counter",draft:!1,editUrl:"https://github.com/VeryGoodOpenSource/dart_frog/tree/main/docs/docs/tutorials/counter.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83d\udd22 Counter",description:'Build a simple "Counter" application.'},sidebar:"docs",previous:{title:"\ud83d\udd0a Echo",permalink:"/docs/tutorials/echo"},next:{title:"\ud83d\uddd2 Todos",permalink:"/docs/tutorials/todos"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Creating a new app",id:"creating-a-new-app",level:2},{value:"Running the development server",id:"running-the-development-server",level:2},{value:"Updating the root route",id:"updating-the-root-route",level:2},{value:"Creating middleware",id:"creating-middleware",level:2}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"counter-"},"Counter \ud83d\udd22"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Difficulty"),": \ud83d\udfe2 Beginner",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Length"),": 15 minutes"),(0,o.kt)("p",{parentName:"admonition"},"Before getting started, ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview#prerequisites"},"read the prerequisites")," to make sure your development environment is ready.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In this tutorial, we're going to build an app that exposes a single endpoint and responds with the number of times the route was requested."),(0,o.kt)("p",null,"When we're done, we should be able to make multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," requests to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# 1st time\ncurl --request GET \\\n  --url http://localhost:8080\n\n# 2nd time\ncurl --request GET \\\n  --url http://localhost:8080\n")),(0,o.kt)("p",null,"And our server should respond with the following responses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nConnection: close\nContent-Length: 21\nContent-Type: text/plain; charset=utf-8\n\n\nYou have requested this route 1 time(s).\n\n---\n\nHTTP/1.1 200 OK\nConnection: close\nContent-Length: 21\nContent-Type: text/plain; charset=utf-8\n\n\nYou have requested this route 2 time(s).\n")),(0,o.kt)("h2",{id:"creating-a-new-app"},"Creating a new app"),(0,o.kt)("p",null,"To create a new Dart Frog app, open your terminal, ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into the directory where you'd like to create the app, and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dart_frog create counter\n")),(0,o.kt)("p",null,"You should see an output similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u2713 Creating counter (0.1s)\n\u2713 Installing dependencies (1.7s)\n\nCreated counter at ./counter.\n\nGet started by typing:\n\ncd ./counter\ndart_frog dev\n")),(0,o.kt)("h2",{id:"running-the-development-server"},"Running the development server"),(0,o.kt)("p",null,"You should now have a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," -- ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd counter\n")),(0,o.kt)("p",null,"Then, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dart_frog dev\n")),(0,o.kt)("p",null,"This will start the development server on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8080"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u2713 Running on http://localhost:8080 (1.3s)\nThe Dart VM service is listening on http://127.0.0.1:8181/YKEF_nbwOpM=/\nThe Dart DevTools debugger and profiler is available at: http://127.0.0.1:8181/YKEF_nbwOpM=/devtools/#/?uri=ws%3A%2F%2F127.0.0.1%3A8181%2FYKEF_nbwOpM%3D%2Fws\n[hotreload] Hot reload is enabled.\n")),(0,o.kt)("p",null,"Make sure it's working by opening ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," in your browser or via ",(0,o.kt)("inlineCode",{parentName:"p"},"cURL"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n  --url http://localhost:8080\n")),(0,o.kt)("p",null,"If everything succeeded, you should see ",(0,o.kt)("inlineCode",{parentName:"p"},"Welcome to Dart Frog!"),"."),(0,o.kt)("h2",{id:"updating-the-root-route"},"Updating the root route"),(0,o.kt)("p",null,"Now that we have a running application, let's start by updating the root route at ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/index.dart"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  const count = 1;\n  return Response(\n    body: 'You have requested this route $count time(s).',\n  );\n}\n")),(0,o.kt)("p",null,"Save the changes and hot reload should kick in \u26a1\ufe0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[hotreload] - Application reloaded.\n")),(0,o.kt)("p",null,"Now if we visit ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," in the browser or via ",(0,o.kt)("inlineCode",{parentName:"p"},"cURL"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n  --url http://localhost:8080\n")),(0,o.kt)("p",null,"We should see our new response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"You have requested this route 1 time(s).\n")),(0,o.kt)("p",null,"Awesome! There's just one small issue..."),(0,o.kt)("p",null,"Make another request and note that the count does not increment. This is expected because we hard-coded the count in our route handler. Let's fix that by introducing some middleware!"),(0,o.kt)("h2",{id:"creating-middleware"},"Creating middleware"),(0,o.kt)("p",null,"In Dart Frog, middleware allows you to execute code before and/or after a request is processed. In this example, we're going to create a piece of middleware that provides a count to our routes."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"A piece of middleware can modify the inbound request and outbound responses, provide dependencies, and more! ",(0,o.kt)("a",{parentName:"p",href:"/docs/basics/middleware"},"Learn more about middleware"),".")),(0,o.kt)("p",null,"For this example, we're going to create a single global piece of middleware but a Dart Frog application can consist of multiple pieces of middleware which are scoped to nested routes."),(0,o.kt)("p",null,"To create a global piece of middleware, we just need to create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"_middleware.dart")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"routes")," directory and define a ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\n// This piece of middleware does nothing at the moment.\nHandler middleware(Handler handler) {\n  return handler;\n}\n")),(0,o.kt)("p",null,"Now that we've defined the middleware, we can create our private ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," and provide the count to all sub routes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nint _count = 0;\n\nHandler middleware(Handler handler) {\n  return handler.use(provider<int>((_) => ++_count));\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," method on a ",(0,o.kt)("inlineCode",{parentName:"p"},"Handler")," allows you to chain multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware"),".")),(0,o.kt)("p",null,"In the above snippet, we are automatically incrementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"_count")," whenever the value is read."),(0,o.kt)("p",null,"The last thing we need to do is update our route handler to use the provided count."),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"routes/index.dart")," and replace the hard-coded count with the provided value using ",(0,o.kt)("inlineCode",{parentName:"p"},"context.read"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dart_frog/dart_frog.dart';\n\nResponse onRequest(RequestContext context) {\n  final count = context.read<int>();\n  return Response(\n    body: 'You have requested this route $count time(s).',\n  );\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"context.read<T>()")," allows a route to access an instance of type ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," which was provided via ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware"),".")),(0,o.kt)("p",null,"Be sure to save all the changes and hot reload should kick in \u26a1\ufe0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[hotreload] - Application reloaded.\n")),(0,o.kt)("p",null,"Now if we visit ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," in the browser or via ",(0,o.kt)("inlineCode",{parentName:"p"},"cURL"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n  --url http://localhost:8080\n")),(0,o.kt)("p",null,"We should see our response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"You have requested this route 1 time(s).\n")),(0,o.kt)("p",null,"Now if we reload the page or make another request, the count should update:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"You have requested this route 2 time(s).\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you restart the server, the count will be reset to 0 because it is only maintained in memory.")),(0,o.kt)("p",null,"\ud83c\udf89 Congrats, you've created a ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," application using Dart Frog. View the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/VeryGoodOpenSource/dart_frog/tree/main/examples/counter"},"full source code"),"."))}m.isMDXComponent=!0}}]);