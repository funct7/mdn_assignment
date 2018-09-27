### 01 JavaScript First Steps

- Browser APIs
  - The `DOM API` allows you to manipulate HTML and CSS in a dynamic manner, including creating, removing, and changing HTML.
  - The `Geolocation API`
  - The `Canvas` and `WebGL` APIs allow you to create animated 2D and 3D graphics.
  - Audio and video APIs such as `HTMLMediaElement` and `WebRTC` allows manipulation of multimedia data.

  - APIs may have compatibility issues.

- JavaScript and Web Browser
  - *After* the HTML and CSS have been assembled and put together into a web page, JavaScript is executed by the browser's JavaScript engine.
  - Each browser tab is its own execution environment.
  - JavaScript generally runs in order.

- JavaScript and Web page
  - The code can go directly in to an opening `<script>` tag and a closing `</script>` tag.
  - `<script src="$FILE_NAME.js"></script>`
  - While JavaScript can be in the HTML source code, it's bad practice.

- JavaScript uses C style comments: `//` or `/* */`

- Notes
  - `typeof` returns the data type of the variable.
  - `'190' + 7` will form `'1907'`, like Java.
  - `Number($str)` will convert the string into a `Number` type.
  - *Everything* is an object in JavaScript, so it will have properties and methods available to it.

- Strings
  - You can retreive a character at index using the syntax: `$string[index]`
  - JavaScript `slice()` uses Python style indexing from the end for negative indices.

### 02 JS Building Blocks

- Conditional
  - The following evaluates as a `false` condition: `false`, `undefined`, `null`, `0`, `NaN`, `''` (an empty string)
  - Logical operators `&&` and `||` are short-circuit operators.
  - `switch` statements
    - Explicit `break;` statements are needed.
    - Multiple statements do not have to be embedded in curly braces.
    - The `default` case can be omitted.
  - Ternery operator: Parentheses may be omitted.

- Scope
  - **Global Scope**: The top level outside all functions.
  - To avoid conflicts, it is considered best practice to keep parts of your code locked away in functions.
  
- Events
  - Some useful events:
    - `onfocus`, `onblur`: calls handlers when an element is focused/unfocused.
    - `ondblclick`
    - `onkeypress`, `onkeydown`, `onkeyup`
    - `onmouseover`, `onmouseout`
    - Some events exists only for certain situations: e.g. `onplay` event works only with elements such as `<video>`.
  - Using web events
    - Event handler properties
        ```javascript
        var btn = document.querySelector('button');

        btn.onclick = function() { 
          // Do something
        }
        ```
    - Inline event handlers: Do **NOT** use inline event handlers.
    - `addEventListener()` and `removeEventListener()`
        
        ```javascript
        btn.addEventListenter('click', function() {
          // Do something
        });
        ```

        - Allows multiple event handlers for the same listener.

    - Choosing which to use: Event handler properties have less power and options but better cross-browser compatiblity.

  - Other event concepts
    - Event objects: Some advanced handlers add specialist properties containing extra data that they need to function; e.g. `dataavailable` event with a `data` property.
    - Preventing default behavior
      - In situations like interrupting a form submission, `preventDefault()` can be called on the event object to prevent the default behavior.
    - Event Bubbling and Capture
      - When an event if fired on an element that has parent elements, modern browsers run two different phases

      - Capturing phase: The browser starts iterating from the outer-most element to the element that actually received the event, and checks if each element along the way has a corresponding event handler registered on it and runs it if so.
      - Bubbling phase: The browser starts from the element that received the event and moves outwards, checking if each element along the way has an event handler.

      - In modern browsers, by default, all event handlers are registered in the bubbling phase.
      - Calling `stopPropagation()` on the event object prevents the event from being passed up.

      - To override the default behavior and register an event in the capturing phase instead, use `addEventListener()` and set the third property to `true`.

      - Event delegation: Because of bubbling, setting the event listener on the parent element lets event handling to be delegated. An element that performs the same behavior for a large number of children can take advantage of this.

- References
  - [Events order](https://www.quirksmode.org/js/events_order.html)
  - [Events accessing](https://www.quirksmode.org/js/events_access.html)
  - [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

### 03 JS Objects

- Object Basics
  - An object is made up of members that have a name and a value respectively.
  - Syntax
    ```javascript
    {
      $name1: $value1,
      $name2: $value2,
      ...
    }
    ```
  
  - The value of an object member can be anything, including functions.
  - Properties: The data items associated with the name.
  - Methods: The functions associated with the name.

  - Object members can be called using the bracket notation as with a symbol table.
    ```javascript
    person.age;
    person['age'];
    ```
  - JS objects are sometimes called `associative arrays`.
  
  - Object members can not only be set but created.
  - Object members can be saved with a dynamically provided name using the bracket notation like so:
    ```javascript
    var name = 'height',
        val  = 175;
    person[name] = val;
    person.height;  // prints 175
    ```

- Object-oriented JavaScript
  - Ways to create object instances
    - Object literal notation
    - Constructor function
      ```javascript
      function Class(param) {
        this.field = param;
      };

      var obj = new Class(arg);
      ```
    - Object constructor
      ```javascript
      var obj1 = new Object(),
          obj2 = new Object({
            name: 'Josh',
            age: 34,
            greeting: function() {
              alert('Hi!');
            },
          })
      ```
    - The `Object.create()` function (IE 8+)

- Object prototypes
  - "Prototype-based language"
    - Each object has a **prototype object**, which acts as a template object that it inherits methods and properties from.
    - **Prototype chain**
      - Prototypes themselves may inherit from other prototypes.
      - This allows objects to have properties and methods defined on other objects available to them.
    - The `prototype` property
      - The properties and methods are defined on the `prototype` property on the Object's constructor functions, not the objects themselves.
      
      - In JS, a link is made between the object instance and its prototype; i.e. its `__proto__` property, which is derived from the `prototype` property on the constructor.

    - **Distinction**
      - An object's prototype
        - The property on each instance. 
        - `Object.getPrototypeOf(obj)` or `__proto__`
        - An object's prototype is the `prototype` on the constructor function.
      - The `prototype` property on a constructor function
        - `Object.getPrototypeOf(new $Type())` or `$Type.prototype`.
        - The prototype of an object instance, i.e. `__proto__`, is derived from this.
        - An object cannot have a `prototype` property. Only the constructor can have a `prototype` property.

    - Methods and properties are **not** copied from one object to another in the prototype chain, but accessed by walking up the chain.

  - The prototype chain.
    - In JS, functions are able to have properties.

    - Example
      ```javascript
      function myFunc() { }

      myFunc.prototype.foo = "foo";
      myFunc.bar = "bar";
      
      var funcObj = new myFunc();
      funcObj.baz = "baz";
      
      funcObj.baz;    // 1. The property on the object.
      // "baz"
      
      funcObj.bar;    // 2. `bar` is defined on the `myFunc` instance, not its `prototype` property.
      // undefined    // Can't be accessed by an inherited object.

      myFunc.bar;     // `bar` can be accessed by the instance itself.
      // "bar"
      
      funcObj.foo;    // `foo` is defined on the constructor prototype, so it can be accessed by an inherited object.
      // "foo"

      funcObj.notfound;    // 3. `notfound` is not defined anywhere.
      // undefined   
      ```

      1. When a property of an object is accessed, the browser first looks at the object itself for that property.
      2. If the instance does not have the property, the constructor's `prototype` property--the `__proto__` of the object--is asked, **not** the constructor itself.
      3. Search walks up the chain recursively in this fashion. If the top level object's `prototype` property, `Object.prototype`, does not have this property, `undefined` is returned.

  - Inheritance
    - While members defined on the constructor's `prototype` bucket are inherited, those defined on the object themselves aren't.
    - The `prototype` property's value is an object, which is a bucket for storing properties and methods to be inherited.

    - `Object.prototype.$identifier` vs. `Object.$identifier`
      - `Object.prototype.watch()`, `Object.prototype.valueOf()`, etc. are inherited; i.e. they are available on all `Object` instances and any object types that inherit from `Object.prototype`.
      - `Object.is()`, `Object.keys()`, etc. are not inherited by object instances or object types that inherit from `Object.prototype`. They are available only on the constructor itself.

    - In JS, a function is also a type of object.
    - Members added to the `prototype` property of a constructor function are then available on all object instances created from the constructor.
    - When a prototype of a constructor is updated, the update is available to all object instances derived from the constructor.
    - Setting a member directly on the prototype is not flexible in that there is no way make use of properties dynamically, and only static content can be set. Example:
      ```javascript
      Person.prototype.species = 'Homo sapiens'; // OK
      // Person.prototype.fullName = ??? // No way to access properties `name.first` or `name.last`
      ```
    
    - A common usage pattern: Define properties inside the constructor and methods on the prototype.
      ```javascript
      function Employee(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
      };

      Employee.prototype.yell = function() {
        console.log('ROAR');
      };
      ```


- Inheritance in JS
  - Sample code
    ```javascript
    function Person(first, last) {
      this.name = { 
        first,
        last
      };
    }

    function Teacher(first, last, subject) {
      Person.call(this, first, last);
      this.subject = subject;
    }
    ```

    - `call()`
      - Allows you to call a function defined somewhere else, but in the current context.
      - Uses the first parameter as the invoked function.
      - Example:
        ```javascript
        (function() {
            console.log('Next year ' + this.name.first + ' will become ' + (this.age + 1));
        }).call(new Person('John', 'Smith', 32, 'male', ['hiking']));

        // Next year John will become 33
        ```
    
    - So far, the properties are available to `Teacher` but not the methods.

      ```javascript
      let t = new Teacher('John', 'Doe', 32, 'male', ['skiing'], 'math');
      // undefined
      t.age;
      // 32
      t.bio();
      // Uncaught TypeError: t.bio is not a function
      ```

  - Prototype inheritance
    - Syntax: `$SubType.prototype = Object.create($SuperType.prototype);`
    - The new object has `Person.prototype` as its prototype and will therefore inherit all the methods avilable on it.
    - Currently the constructor of `Teacher.prototype` is `Person()`.

  - Setting constructor reference
    - Syntax: `$SubType.prototype.constructor = $SubType`
    - Setting the constructor to the subtype's constructor yields the proper result like so:
      ```javascript
      Teacher.prototype.constructor;
      /*
      ƒ Teacher(first, last, age, gender, interests, subject) {
        Person.call(this, first, last, age, gender, interests);
        
        this.subject = subject;
      }
      */
      ```

  - ECMAScript 2015 Classes
    - Rewritten version:
      ```javascript
      class Person {
        constructor(first, last) {
          this.name = { 
            first,
            last
          };
        }

        greeting() {
          console.log(`Hi! I'm ${this.name.first}`);
        };
      }
      ```

    - Template literals: `` `string text ${expression}` ``
    
    - Under the hood, classes are being converted into prototypal inheritance models. Using `class` is syntactic sugar.

    - Subclassing
      - Example:

      ```javascript
      class Teacher extends Person {
        constructor(first, last, subject, grade) {
          super(first, last);

          this.subject = subject;
          this.grade = grade;
        }
      }
      ```
    
  - Accessors
    - Example
      
      ```javascript
      class SomeClass {
        constructor(field) {
          this._field = field;
        }
        
        get field() {
          return this._field;
        }

        set field(newValue) {
          this._field = newValue;
        }
      }
      ```

    - Although the syntax of getters and setters are in the form of a function, they are evoked like a regular property like so:
      ```javascript

      console.log(snape.subject);
      snape.subject = 'Baboons';
      console.log(snape.subject);
      ```

  - A note on inheritance in JS
    - Because of the way JavaScript works, with the prototype chain, etc., the sharing of functionality between objects is often called **delegation**. Specialized objects delegate functionality to a generic object type.

- JSON
  - Basics
    - JSON is a text-based data format following JavaScript object syntax.
    - JSON exists as a string, so it needs to be converted to a native JS object when you want to access tthe data.
    - An array can also be at the top level of a JSON text.
    - JSON requires double quotes to be used around strings and property names. Single quotes are **NOT** valid.
    - JSON can take the form of any data type that is valid for inclusion inside JSON; i.e. strings and numbers are also valid JSON top level objects.
  
  - Converting
    - `JSON.parse()`: Accepts a JSON string and returns the corresponding JS object.
    - `JSON.stringify()`: Converts an object into a JSON string.


### 04 Client-side Web APIs
- `Window` Object
  - The browser tab that a web page is loaded into.
- `Navigator` Object
  - The navigator represents the state and identity of the browser--the user-agent--as it exists on the web.
  - You can use this object to retrieve things like geolocation information, the user's preferred language, a media stream from the user's webcam, etc.
- `Document` Object
  - The actual page loaded into the window.

- DOM (Document Object Model)
  - A tree structure representation of the loaded document.
  - The browser uses it to apply styling and other information to the correct elements as it renders a page.
  - Node nomenclature
    - Element node: An element as it exists in the DOM.
    - Root node: For HTML, it is always the `HTML` node.
    - Child node
    - Descendant node
    - Parent node
    - Sibling node
    - Text node: A node containing a text string.

  - `appendChild()` works like `addSubview(_:)` in that it removes the reference from the previous parent node and adds to the new parent node, instead of making a duplicate child element.
  - Make a copy using `Node.cloneNode()`.

  - `HTMLElement.style` property names are camelcased whereas the CSS versions are hyphenated.
  - Having styles defined in the HTML head element and using `Element.setAttribute()` allows separation of HTML and CSS codes.

- Updating part of a web page
  - The Ajax model
    - Web pages can directly make HTTP requests for specific resources available on a server.
    - Ajax: Asynchronous JavaScript and XML.
  
  - Blob: Binary Large Object.

- Third-party APIs
  - Unlike the browser APIs, which are immediately available, third party APIs are located on their servers.
  - Linking to a JS library:
    ```html
    <script type="text/javascript" src="https://maps.google.com/maps/api/js?key=AIzaSyDDuGt0E5IEGkcE6ZfrKfUtE9Ko_de66pA"></script>
    ```

- RESTful API
  - Instead of getting data using the features of a JavaScript library, like Google Maps, you get data by making HTTP requests to specific URLs, with data-like search terms and other properties encoded in the URL.
  
- Graphics
  - The Canvas API: Provides useful tools for creating 2D graphics.
  - WebGL: Allows creation of 3D scenes.

  - Canvas
    - Origin is top-left corner.
    - When using loops to show animations, a good choice is `window.requestAnimationFrame()`.
    - It's good practice to call `cancelAnimationFrame()` from the main code when done using the animation, to ensure that no updates are still waiting to be run.

    - Animation
      1. Clear the canvas contents.
      2. Save state.
      3. Draw the graphics to be animated.
      4. Restore state.
      5. Call `requestAnimationFrame()` to schedule drawing of the next frame of the animation.

  - WebGL
    - Although it renders on a `<canvas>` element, it is a separate API from the 2D canvas API.
    - Common third party libraries: `Three.js`, `PlayCanvas`, `Bablyon.js`, etc.

- Video/Audio APIs
  - Most native browser controls do not provide adequate functionality.
  - `HTMLMediaElement`
    - Provides control of video and audio players programmatically.

- Client-side Storage
  - Use cases
    - Personalize site preferences/settings: a user's choice of color scheme, etc.
    - Persist previous site activity: storing the contents of a shopping cart, remembering if a user was previously logged in, etc.
    - Saving data and assets locally so the site will load quickly or be usable without a network connection.
    - Saving web app generated documents locally for use offline.

  - Limitations: There are limits to the amount of data you can store using client-side storage APIs (possibly both per individual API and cumulatively). The exact limit varies depending on the browser and possibly based on user settings. 

  - The old way: Cookies
    - Cookies are outdated and have security problems.
    - The only advantage cookies have ist hat they are supported by ancient browsers.
  - The new way: Web Storage and IndexedDB
    - Web Storage API
      - Key value pairs.
      - Useful when storing some simple data.
    - IndexedDB API
      - Provides the browser with a complete database system for storing complex data.
  - The next way: Cache API
    - Usually used in combination with the Service Worker API.

  - Web Storage API
    - `sessionStorage`: Persists data as long as the browser is open. Removed when the browser is closed. (Tabs, too.)
    - `localStorage`: Persists data across launches.
    - Each domain gets a separate storage.

  - IndexedDB API
    - Pretty much anything can be stored in an IndexedDB instance.
    - Since DB operations take time, they are asynchronous.
    - Version number is important. Upgrading the DB requires running the code again with an increased version number.
    - `IDBDatabase.createObjectStore()` is equivalent to a single table in a DB.
    - A `cursor` is a construct that can be used to iterate over the records in an object store.

  - Offline asset storage
    - Service worker
      - A JS file registered against a particular origin when it is accessed by a browser.
      - It can control pages available at that origin by setting between a loaded page and the network and intercepting network requests aimed at that origin.
    - Cache API
      - Saves HTTP responses.

    - Using the Service Worker
      - After registering the service worker against the origin, the service worker is installed the next time a page under the service worker's control is accessed.
      - The service worker can be installed by adding an event listener for `install`.
      - The service worker should be added an event listener for `fetch` so it can respond to browser requests for an asset in the directory the service worker is registered against.
