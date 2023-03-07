Theory -
● What is Emmet?
- "its a plug-in for many popular text editor which greately improves HTML and CSS workflow".
eg:
1) generate a html skeleton
use !

2) Element with text content inside them
div{This is a div} = <div>This is a div</div>

3) Nested Element
- ul>li
- ul>li*3>a

4) If you wanted numbers inside your li’s you could use $ operator
ul>li{$}*3
You can also use $ multiple times so the number is padded with 0.
 You can set base number with ‘@N’ and direction with ‘@-’
ul>li{$@-}*5
ul>li{$@10}*5

5) What about classes and Id - id:#, class:.
div#main.container.responsive
<div id="main" class="container responsive"></div>
Custom attribute:
div[data-name=logo]

6)To generate sibling use ‘+’ operator
header+div+footer

7. Grouping : You can use ‘()’ 
div>(a>p>span+span)*3
<div>
<a>
<span></span>
<span></span>
</a>
</div>

CSS..
Margin of 10 on all sides
Just type :
m10–10–10–10  =>  margin: 10px 10px 10px 10px;

● Difference between a Library and Framework?
The technical difference between a framework and library lies in a term called inversion of control.

Library gives just some basic functionalities to our app but framework gaves us a bunch of functionalities and also it is the only thing required to make a full-fledged web-app.

When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. 
When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.


// What is CDN? Why do we use it?
// A CDN is a network of servers that distributes content from an “origin” server throughout the world by caching content close to where each end user is accessing the internet via a web-enabled device. The content they request is first stored on the origin server and is then replicated and stored elsewhere as needed


● What is CDN? Why do we use it?
CDN is a content delivery network.its also a faster way of fetching the code
 It is a system of distributed servers that deliver content to a user based on their geographic location. 
 used?? CDNs are used to improve the performance of websites and web applications by reducing the latency of content delivery.


● Why is React known as React?
React makes it painless to create interactive UIs.
 Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

 React was developed for applications (Facebook) that have constantly changing data.  
 Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app’s data, 
 the view should “react” or change with those user events. User events being mouse clicks, typing, submitting a form
  


● What is crossorigin in script tag?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
Web pages often make requests to load resources on other servers. Here is where CORS comes in.
A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS is used to manage cross-origin requests.
CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. 
It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. 
 CORS allows servers to specify who can access the assets on the server, among many other things.

● What is diference between React and ReactDOM
React?? React is a library. 
If you load React from a <script> tag, top-level APIs are available on the React global.
Indeed it exposes most of the common React features to create and use components.
react is fast bcoz it uses virtual dom, bundlers
virtual dom: Updating the virtual DOM is comparatively faster than updating the actual DOM (via JavaScript).
bundlers:A Node. js bundler compiles many JavaScript code files into a single Js file


ReactDOM?? The react-dom package provides DOM-specific methods that can be used at the top level
 of your app and as an escape hatch to get outside the React model if you need to.

This package is essentially a container used to expose both the client and server sub-packages from a single one. 

// What is diference between React and ReactDOM
// React library is responsible for creating views and ReactDOM library is responsible to actually render UI or manipulating DOM in the browser.


● What is difference between react.development.js and react.production.js files via CDN?
The development build is used - as the name suggests - for development reasons. 
You have Source Maps, debugging and often times hot reloading ability in those builds.

The production build, on the other hand, runs in production mode which means this is the code running on your client's machine.
 The production build runs uglify and builds your source files into one or multiple minimized files. 
 It also extracts CSS and images and of course any other sources you're loading with Webpack. 
 There's also no hot reloading included. Source Maps might be included as separate files depending on your webpack devtool settings.

What specifically separates production from development is dependent on your preferences and requirements, 
which means it pretty much depends on what you write in your Webpack configuration.

● What is async and defer? - see my Youtube video ;)
async and defer both load JavaScript asynchronously without render blocking,
 but async executes as soon as possible while defer runs in sequence toward the end of the loading process, 
 just before the DOMContentLoaded event.

 // What is async and defer?

// Use defer when scripts are dependent on one another

// In Normal script tag -> html parsing is stopped and script is fetched and executes and after that html parsing will be continue
// the script is downloaded asynchronously with the rest of the page without pausing the HTML parsing and the contents of the page are processed and displayed. OR downloads script asynchronously (stops HTML parsing) and executes script (stops HTML parsing)

// browser not to interfere with the HTML parsing and only to execute the script file once the HTML document has been fully parsed.
// downloads script asynchronously (stops HTML parsing) and executes script (after HTML parsing)