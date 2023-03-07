Chapter 02 - Assignment - Igniting our App

Please Note: Write the answers and code on your own while finishing your assignments. Try to
put down your thoughts into words by yourself in your own words. (This will help you develop
muscle memory and you will remember all the concepts properly) ✌
# Theory Assignment:
● - What is `NPM`? npm init
NPM is package manager for node.js packages.
It puts modules in place so that node can find them, and manages dependency conflicts intelligently.
worlds largest software library(Registry)

my lines: y node packages bcoz react app cannot be just build with react it needs lot of packages for react to run

● - What is `Parcel/Webpack`? Why do we need it? npm install -D parcel
Parcel and webpack are the bundlers used mostly for JavaScript or Typescript code
 helps you to minify, clean, and make your code compact so that it becomes easier to
  send a request or receive the response from the server when it usually takes you to transfer multiple files
   without using any bundler for loading the page of your application

my lines: its a zero configuration build tool


● - What is `.parcel-cache`
// It actually caches our code and minimize it's size and stores information about your project when parcel builds it, 
so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch.
parcel need some space for performing all the operations

● - What is `npx` ?
NPM doesnt have specific full form but normally we call it node package manager because 
It is a command-line used to install different packages/codes written by some other developers
execute using npm 

● - What is difference between `dependencies` vs `devDependencies`
// Dependencies which helps in debugging and can show errors while development are known as devDependencies.
// The dependencies which are  helpful for both for development and production are categorised in dependencies.
my lines:
dependencies: my project needs packages. react app needs lot of super powers we need to manify it, bundle chunking
those packages will be installed to our project
devDependencies: packages in dev environment

● - What is Tree Shaking?
// Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

● - What is Hot Module Replacement?
parcel uses file watcher algorithm (written in c++ bcozits faster) which updates the browser as soon as something changes 
// It helps in reloading our web page automatically when we change somethings into our code. -> Saves Time a lot.

● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
HMR -hot module Replacement
file watcher algorithm
Bundling - disk folder
Minifying - disk folder
Clearing our code - disk folder
manages dev and production build
super fast build algorithm
image optimization
caching while development
compression
compatable with older version of browser
parcel gives us functionality to build our project on https on dev
port number
consistent hashing algorithm
zero configuration

// BrowserLists -> It helps in compatibility of our website in different brosers.
// HMR -> Answered above
// MINIFY -> will remove whitespaces , renames variable names , etc

transitive dependency: when we need to do all the above where one dependency are dependent on other dependency 
 
● - What is `.gitignore`? What should we add and not add into it?
// It is a file which consist names of files or folders which we dont want to push into git.
any thing we can generate on server we can put on git ignore
parcle-cache : yes we should put  
disk : no we can generate by npx parcel index.html

● - What is the difference between `package.json` and `package-lock.json`
// Are neccessary when we have to generate node_modules folder -> npm init
// package.json doesn't tell you much about dependency in brief
// package-lock.json -> locks the version according to our need. (~ and ^ concept)

package: to know what exact version of dependencies we will use in production we use package lock
packagelock:it locks the version. u never have to keep it in git ignore. U need to upload to git  

● - Why should I not modify `package-lock.json`?
bcoz it maintains the integrity and makes sure that same version of packages and running in the server and in local machine

● - What is `node_modules` ? Is it a good idea to push that on git?
 It is a folder which handles transitive dependency of different packages.
we have packages that are used in our project
node modules is database for your npm. how will parcel minify ur code? bcoz it uses minifier from node modules
eg: our app -dependsOn-> parcel -dependsOn-> minifier 
push to git : NOOOOO  bcoz regenerate by : npm init command.
why? its heavy. if i have my packagelock i can regenerate my node modules exactly the same 
how? bcoz packagelock maintains the detail version of all the packages in node modules 

● - What is the `dist` folder?
keeps the files minified for us.
when i do npx parcel build index.html parcel will minify all my files for production build and places it in disk folder

● - What is `browserlists`
node package. makes our app compatable with older browser

Read about dif bundlers: vite, webpack, parcel
● Read about: ^ - caret and ~ - tilda
// ^ -> will update patch and minor version
// ~ -> will only update patch
● Read about Script types in html (MDN Docs)


# Project Assignment:
- In your existing project
● - intialize `npm` into your repo
● - install `react` and `react-dom`
● - remove CDN links of react
● - install parcel
● - ignite your app with parcel
● - add scripts for “start” and “build” with parcel commands
● - add `.gitignore` file
● - add `browserlists`
● - build a production version of your code using `parcel build`
# References
● Creating your own create-react-app
● Parcel Documentation
● Parcel on Production
● BrowsersList: https://browserslist.dev/