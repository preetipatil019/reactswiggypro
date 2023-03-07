pollyfill??
a code which is replacement for new version of code
 array.map() //new code
 function mymap() //old version of code that browser converts
 if our browser doesnot understand array.map which is new code with help of babble it converts that code to older version

 babble??
 its a node package
 its a js code taking some code and giving some code(modern js is converted to old one)

React.createElement ==>object ==>html(DOM)

why React??
want to write and update html using javascript in better way

 * What is JSX?
 JSX allows us to write html like code along with javascript.

* Superpowers of JSX
my explaination jsx allows ->
1. write HTML along with javascript.
2. We can define react element easily without using createElement API ( But JSX also use createElement behind the scenes )
3. We can define styles as an object and can pass it as props

JSX makes it easier to write or add HTML in React.
JSX can easily convert HTML tags to react elements.
It is faster than regular JavaScript.
JSX allows us to put HTML elements in DOM without using appendChild() or createElement() method.
As JSX is an expression, we can use it inside of if statements and for loops, assign it to variables, accept it as arguments, or return it from functions.
JSX prevents XSS (cross-site-scripting) attacks popularly known as injection attacks.
It is type-safe, and most of the errors can be found at compilation time.

* Role of type attribute in script tag.what options can i use there??
The HTML <script> type Attribute is used to specify the MIME type of script and identify the content of the Tag. It has a Default value which is “text/javascript”.

Syntax: 

<script type="media_type">
Attribute Values: It contains a single value i.e media_type which specifies the MIME type of script.
Common “media_type” values are: 

text/javascript (this is default)
text/ecmascript
application/ecmascript
application/javascript

* {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent><TitleComponent/>}
// {TitleComponent} -> This is simply a React Element which will be returning a jsx.
// {<TitleComponent />} -> This is a functional component which will be returning a bunch of elements wrapped under single parent.
// {<TitleComponent><TitleComponent/>} -> This is same as above.


Everything is component in react:
class component --old
Functional component--new: function that is returning a react element or JSX==>reactelement
uses of functional component: