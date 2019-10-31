## 1. HTML

#### Tag
  ```
  <p>My cat is very grumpy</p>;
  ```

  - The "name" of the element is wrapped in angled brackets(&lt;&gt;).
  - The "content" is what comes between the opening tag and closing tag.
  - The "element" is the whole package of the opening, closing tag as well as the content.

#### Attribute
  ```
  <p class="editor-note">My cat is very grumpy.</p>
  ```

  - The "attribute" comes between the brackets, after the tag name, separated by a space.
  - Tags may have more than one attribute.
  - An attribute consists of an "attribute name" followed by an equals sign and the "attribute value".

#### Nested elements
  - Make sure the nested elements are truly nested within an opening tag and its corresponding closing tag.

#### Empty elements
  - Elements such as the &lt;img&gt; tag have no content.
  - [Note] in the `src` attribute of `img`, `~` is interpreted literally; i.e. a folder with the name `~`.

#### HTML
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>My test page</title>
    </head>
    <body>
      <img src="images/image.png" alt="test image">
    </body>
  </html>
  ```

  - `<!DOCTYPE html>`: Shows the document's HTML version and document type description(DTD).
  - `<html></html>`: Also referred to as the "root element"
    - Setting the `lang` attribute is helpful, both in search engines and for accessibility.
  - `<head></head>`: A container for the invisible content, such as keywords, page description, CSS for styling, etc.
    - `<meta name="description" content="...">`: Shows up in the search engine.
    - Many `<meta>`features aren't used. They were intended for search engines to look for relevant data, but they were soon abused to get a better result.
    - Some `<meta>` features are proprietary. For example `<meta property="og:image">` will show the content image when the HTML link is shared in Facebook.
    - `<link>` element goes into the head. It is used to link external style sheets.
  - `<body></body>`: The visible content in a web page, including text, media, etc.
    - `<script>` is best put at the end of the body, right before closing. It is not an empty tag; e.g. the script can be hardcoded as the content.

#### Structure
  - **index.html**: The homepage content
  - **images**
  - **styles**: CSS code
  - **scripts**: The actual programming scripts


#### CSS (=Cascading Style Sheets)
  ```css
  p {
      color: red;
  }
  ```

  - The whole structure is called a "rule set", or "rule" in short.
  - **Selector**: The HTML element to affect. Multiple elements can be selected by providing a comma-separated list.
  - **Declaration**: Consists of `property: value`.

##### Selectors
  - ID selector: `#my-id`. Only one element can be assigned to an ID.
  - Class selector: `.my-class`. Multiple class instances can appear in an HTML document.
  - Attributed selector: `img[src]` will only select elements with the specified attributes.
  - Pseudo class selector: `a:hover` will only select elements in the specific state.
  - ...and more!

##### Boxes
  - padding: the space around the content
  - border: the line outside the padding
  - margin: the space outside the element

## 2. HTML and XHTML

##### Differences
  - HTML is a markup language influenced by SGML (Standard-Generalized Markup Language) where as XHTML stems from XML (eXtensible Markup Language).
  - Strict enforcement of rules: The differences between HTML 4.01 and XHTML 1.0 largely lies in the syntax. For example, HTML allows elements with optional opening or closing tags, and empty elements which do not have an end tag, but XHTML elements all have an opening and a corresponding closing tag. In XHTML, a tag can be opened and closed within the same tag like so: `<br />`.

##### Why XHTML?
  - Many of the HTML documents contain malformed elements, which are overlooked due to the leniency of HTML parsers. This, however, makes documents more difficult to maintain. Since XHTML parser aren't forgiving of errors, some argue that XHTML parsers are faster than their HTML counterparts, which make reparations for some erroneous elements.

## 3. Elements

##### Semantic Elements
  - In HTML5, elements that were clear in their meaning to the human developers were introduced. These include `<article>`, `<details>` , `<header>`, `<footer>`, etc.
  - In HTML4, `<div>` would be used as a generic container element. In HTML5, `section` should be used to present a logical chunk of data, which should be apparent when having a bird's-eye view of the document. The newspaper analogy makes it easy to understand; e.g. an `article` in the sports `section`.
  - In HTML5, `<div>` should be used only as a last resort, when the element is needed only for styling purposes, etc.

##### Block vs. Inline Elements
  - Block elements: Starts with a new line and takes up the full width of the view.
  - Inline elements: Does not start with a new line and takes up only necessary width.

## 4. JavaScript
 - Since HTML is loaded in the order it is structured, it's a good strategy to put the `<script>` tag at the end of a file, so that the HTML content will be loaded before the script.

##### Comparison operator `==` vs. `===`
 - `==` does type coercion before comparison, whose rules are quirky. For instance, `"0" == 0` and `false == 0` will compare to `true`. Judging from `false == 0`, one might think `==` compares the binary value of a type, but as shown in `"0" == 0` this is not true. (The decimal value of UTF-8 `"0"` is 48).
 - `===` results in `true` only if the two operands are of the same type and have the same value.