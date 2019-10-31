# Client-Server Overview

### Web Servers and HTTP

- Dynamic sites
  1. A user requests a page.
  2. The browser creates an HTTP request to the server with the parameters and sends it to the server.
  3. The Web Server detects how the request should be handled based on pattern matching rules. If the request is dynamic, the request is forwarded to Web Application.
  4. The Web Application handles the request by fetching the required information from the database.
  5. The Web Application puts together an HTML page using an HTML template.
  6. The Web Application sends a response to the host that requested the page.
  7. The browser processes the HTML. It sends any subsequent requests to get any other CSS/JS files and resources the page references.
  8. The Web Server loads static files from the file system and returns them to the browser directly.

- HTML pages that move the responsibility from the server to the client browser can result in highly responsive websites.

### Web Frameworks
- Functionality
  - Handle only the HTTP requests and responses: The lower level details can be abstracted away, so that only the request handling implementation should be done.
  - Request routing: Web frameworks map URL patterns to handler functions.
  - Easily access data in the request.
  - Abstract and simplify database access.
    - ORM: Object-Relational Mapper.
    - A database layer that abstracts database CRUD.
    - Benefits
      - Provides a layer so that the existing code won't be affected by which database is used in the layer below.
      - Data validation can be provided by the framework.
  - Rendering data
    - Web frameworks often provide templates so that data can be rendered easily.

### Website Security
- XSS
  - Cross-Site Scripting
  - A class of attacks that allow an attacker to inject client-side scripts through the website into the browsers of other users.
  - A *reflected* XSS vulnerability occurs when user content that is passed to the server is returned immediately and unmodified for display in the browser.
  - A *persistent* XSS vulnerability occurs when the malicious script is stored on the website and then later redisplayed unmodified for other users to execute unwittingly.
  - The best defense against XSS vulnerabilities is to remove or disable any markup that can potentially contain instructions to run the code.
- SQL injection
- CSRF (Cross-Site Request Forgery)

- Bottom line
  - Sanitize all incoming data. Always assume the worst.

### Node.js
- A runtime environment.
- Node is a single-threaded event-driven execution environment.

### Express
- Modules
  - Creating modules helps manage namespace. Only variables that are exported are exposed to the outside.
- A common convention for Node and Express is to use error-first callbacks. In this convention, the first value in your callback functions is an error value, while subsequent arguments contain success data.

- Middleware
  - Middleware and routing functions are called in the order that they are declared.
  - Serving static files
    - Example: 
      ```javascript
      app.use(express.static('$directory_name'));
      app.use('/$prefix', express.static('$directory_name'));
      ```
  - Error handlers must be the last middleware in the request handling process.

- Database
  - ORM: Object Relational Mapper. Data are defined as "objects/models" and the ORM maps these through the underlying database format.

- Template engines (view engines)
