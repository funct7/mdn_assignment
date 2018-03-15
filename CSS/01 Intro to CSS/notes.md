## 1. Intro to CSS

### CSS
  - CSS is a language for specifying how documents are presented to users
  - Document: usually a text file structured using a markup language; e.g. HTML, SVG, HTML
  - CSS Rules
    - Properties: Human-readable identifiers indicating which features are to be changed (e.g. `background-color`)
    - Values: Values for properties tell how the stylistic features are to be applied. (e.g. `yellow`)
    - Declaration: A property/value pair of a CSS rule. A declaration is terminated using a semi-colon.
    - Selector: Selects which elements the declarations in the declaration block are to be applied to.

### DOM (Document Object Model)
  - A browser combines the document's content with the style information in two stages:
    1. The browser loads and parses HTML and CSS into a DOM tree.
    2. The browser displays the contents of the DOM.

  - DOM
    - Has a tree-like structure.
    - Each element, attribute, and piece of text in the markup language becomes a DOM node.
    - Nodes have parents, children, and siblings.
    - Understanding DOM is important because that's where CSS style is applied.

  - DOM representation example
    
    - HTML

      ```
      <p>
        Let's use:
        <span>Cascading</span>
        <span>Style</span>
        <span>Sheets</span>
      </p>
      ```

    - DOM representation

      ```
      P
      ├─ "Let's use:"
      ├─ SPAN
      |  └─ "Cascading"
      ├─ SPAN
      |  └─ "Style"
      └─ SPAN
         └─ "Sheets"
      ```

### Applying CSS to HTML
  - External stylesheet
    - Referenced from an HTML `<link>` element
  - Internal stylesheet
    - Could be useful when using CMS (content management system)
    - CSS is placed inside a `<style>` element, contained inside the HTML head.
    - Requires a lot of replicated code to have the same effect across different HTML documents
  - Inline styles
    - Affects one element only by using the `style` attribute
    - **NOT** recommended: mixes content with presentation

### CSS Syntax
  - Characteristics
    - CSS is a declarative language
    - Invalid CSS declarations are ignored.
  - Declarations
    - The U.S. spelling for words have been set as standard. For example, `color` works but `colour` does not.
    - Declarations within a declaration block are separated with a semi-colon. The last declaration does not need one, but it is recommended.
    - A declaration block may be empty
    - Declaration blocks may be nested in some cases.
  - Selectors
    - Selectors may include difrerent elements in a comma-separated list, and can be chained together.
    - Selectors can be used to target only certain elements in a certain context
    - When an element is matched by several selectors, CSS applies the styles according to the cascading algorithm.
    - If a single basic selector in a chain is invalid, the group of selectors is still valid.

### CSS Statements
  - At-rules
    - Used to convey metadata, conditional information, or other descriptive information
    - Examples
      - Metadata: `@charset`, `@import`
      - Conditional information: `@media`, `@document`
      - Descriptive information: `@font-face`

  - Nested statements
    - The nested CSS rules apply only when a specific condition is matched
      - `@media`: If the device that is running the browser matches the expressed condition
      - `@supports`: If the browser actually supports the tested feature
      - `@document`: If the current page matches some conditions

      - Example (CSS rule applied only if the page's width exceeds 800 pixels)
      
        ``` 
        @media (min-width: 801px) {
          body {
            margin: 0 auto;
            width: 800 px;
          }
        }
        ```

  - Any statement which is not a ruleset, an at-rule, or a nested statement is invalid and ignored.

### Other
  - Comment: `/* comment */`
  - Shorthand: Some properties allow you to set them all in one line. The following two blocks of declaration are the same.

    ```
    padding: 10px 15px 15px 5px;
    ```

    ```
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 5px;
    ```

### Selector
  - Different types
    - Simple selectors: Match one or more elements based on element type, `class`, or `id`
    - Attribute selectors: Match one or more elements based on their attributes/attribute values
    - Pseudo-classes: Match one or more elements that exist in a certain state; e.g. checkbox that is checked, the first child element of its parent in the DOM tree, etc.
    - Pseudo-elements: Match one or more parts of content that are in a certain position in relation to an element; e.g. the first word of each paragraph.
    - Combinators: Not selectors per se, but ways of combining two or more selectors in useful ways.
    - Multiple selectors: Comma-separated list of selectors to apply the same rule to a set of elements

  - Simple selectors
    - A **case-insensitive** match between the selector name and a given HTML element name
    - Class selectors
      - Syntax: `.class-name`
      - A class name is any value without spaces, placed inside an HTML `class` attribute.
      - Different elements in a document can have the same class value, while one element can also have different class names.

    - ID selectors
      - Syntax: `#id-value`
      - An ID name must be unique in the document. Otherwise, the behavior is undefined.

    - Universal selector: `*`
      - Allows selecting all elements in a page
      - Rarely used on its own, often used in combination with other selectors

  - Attribute selectors
    - Presence and value attribute selectors
      - Matches an exact attribute value
      - `[attr]`: Selects all elements with the attribute name regardless of its value
      - `[attr=val]`: Selects all elements with the attribute name and value
      - `[attr~=val]`: Selects all elements with the attribute name, but only if the value is one of a space-separated list of values contained in the attribute's value; e.g. a single class in a space-separated list of classes.

    - Substring value attribute selectors
      - a.k.a "RegExp-like selectors"
      - `[attr|=val]`: Selects all elements with the attribute name for which the value is exactly `val` or starts with `val-`
      - `[attr^=val]`: Selects all elements with the attribute name for which the value starts with `val`.
      - `[attr$=val]`: Selects all elements with the attribute name for which the value ends with `val`.
      - `[attr*=val]`: Selects all elements with the attribute name for which the value contains the string `val`. Does not treat spaces as value separators but as part of the attribute value.

  - Pseudo-selectors
    - Selects certain parts of elements or elements only in certain contexts
    - Pseudo-classes
      - A keyword, preceded by a colon, added to the end of selectors to specify which state elements should be in in order for the style to be applied.

      ```
      li:nth-of-type(2n) {
        background-color: #eee;
      }
      ```

    - Pseudo-elements
      - Keywords preceded by two colons(`::`). Can be added to the end of selectors to select a certain part of an element

  - Combinators
    - Multiple selector
      - Syntax: `A, B`
      - Selects any element matching A and/or B
    - Descendant selector
      - Syntax: `A B`
      - Selects any element matching B that is a descendant of an element matching A
    - Child selector
      - Syntax: `A > B`
      - Selects any element matching B that is a direct child of an element matching A
    - Adjacent sibling selector
      - Syntax: `A + B`
      - Selects any element matching B that is the next sibling of an element matching A
    - General sibling
      - Syntax: `A ~ B`
      - Selects any element matching B that is one of the next siblings of an element matching A

### CSS values and units
  - Numeric values
    - Absolute units
      - `mm`, `cm`, `in`
      - `pt`, `pc`: Points (1/72 of an inch) or picas (12 points)
    - Relative units
      - `em`
        - The most common relative unit
        - `1em` is the same as the font-size of the current element--the width of a capital letter M.
        - The default base `font-size` given to web pages by web browsers before CSS styling is applied is 16 pixels. However, font sizes are inherited from parent elements.
      - `ex`, `ch`: Repectively, the height of a lowercase x, and the width of number 0. Not supported well.
      - `rem`: Root `em`. Always equal the size of the default base `font-size`.
      - `vw`, `vh`: 1/100th or the viewport width and height respectively. Not as widely supported as `rem`s.
    - Unitless values
      - `margin` or `padding`: Setting these attributes to `0` will nullify whatever units were set before.
      - `line-height`: Sets the line height of text to the value multiplied to the `font-size`.
      - Animation count

  - Percentages
    - Setting `div` element's width to a certain percentage will set that element width relative to its parent element width.
    - `font-size`: relative to the parent's `font-size`. Similar to `em`.
    - Liquid layout: Used to ensure that a standard document will always fit on the screen and look okay across varying device screen sizes.
    - Fixed width layout: Used when the content should not be affected by the viewport size; e.g. a zoomed map should not shrink relative to the viewport size.

  - Colors
    - Keywords: 165 different keywords for colors
    - Hexadecimal values: #value
    - RGB: Uses the `rgb()` function
    - HSL: Hue, saturation, and lightness. Uses the `hsl()` function.
      - Hue: 0-360. The value is in degrees.
      - Saturation: Value between 0-100%.
      - Lightness: Value between 0-100%.
    - RGBA/HSLA: Supports the alpha channel, with a value between 0-1.
    - `opacity`: Sets the opacity of all selected elements and their children.

  - Functions
    - `rgba()`, `hsl()` are functions
    - Other functions include: `rotate()`, `translate()`, `calc()`, `url()`, etc.

### Cascade and Inheritance
  - The cascade
    - Three factors decide what selectors win out (in order of weight): importance, specificity, source order.

    - Importance
      - Example

        ```
        <p class="better">This is a paragraph.</p>
        <p class="better" id="winning">One selector to rule them all!</p>

        #winning {
          background-color: red;
          border: 1px solid black;
        }

        .better {
          background-color: gray;
          border: none !important;
        }

        p {
          background-color: blue;
          color: white;
          padding: 5px;
        }
        ```
        
        1. The rules that appear later in the source code generally overrides earlier rules.
        2. However, a the two `<p>` elements in the example above will have a `background-color` that is not `blue` because the `class` attribute makes them more specific.
        3. `id` attributes have a higher specificity in that only one element to ID pair.
        4. Though `#winning` has a higher specificy than `.better` in general, the second `<p>` does not get a border because `!important` wins over all others.

      - Do **NOT** use `!important` unless it is absolutely necessary.

      - The importance of a CSS declaration depends on what stylesheet it is specified in
      - Conflicting declarations will be applied in the following order:
        1. Declarations in user agent style sheets (e.g. the browser's default styles, used when no other styling is set)
        2. Normal declarations in user style sheets (custom styles set by a user)
        3. Normal declarations in authour style sheets (set by web developers)
        4. Important declarations in author style sheets
        5. Important declarations in user style sheets

    - Specificity
      - A measure of how specific a selector is; i.e. how many elements it could match
      - Order of specificity: `!important` > ID > class > element

      - Values
        1. Thousands: `1` if declaration is inside a `style` attribute. Else `0`.
        2. Hundreds: `1` for each ID selector contained inside the overall selector. Else `0`.
        3. Tens: `1` for each class selector, attribute selector, or pseudo-class contained inside the overall selector.
        4. Ones: `1` for each element selector or pseudo-element contained inside the overall selector.
        5. The universal selector `*`, combinators (`+`, `>`, `~`, '') and negation pseudo-class `:not` have no effect on specificity.


      - Example

        ```
        /* specificity: 0101 */
        #outer a {
          background-color: red;
        }

        /* specificity: 0201 */
        #outer #inner a {
          background-color: blue;
        }

        /* specificity: 0104 */
        #outer div ul li a {
          color: yellow;
        }

        /* specificity: 0113 */
        #outer div ul .nav a {
          color: white;
        }

        /* specificity: 0024 */
        div div li:nth-child(2) a:hover {
          border: 10px solid black;
        }

        /* specificity: 0023 */
        div li:nth-child(2) a:hover {
          border: 10px dashed black;
        }

        /* specificity: 0033 */
        div div .nav:nth-child(2) a:hover {
          border: 10px double black;
        }
        ```
    - Source order: Ties are broken according to appearance order in the source code

  - Inheritance
    - Some property values applied to an element will be inherited by that element's children while some won't.
    - Common sense according to convenience is the rule of thumb.

    - Controlling inheritance: Three special universal property values for handling inheritance:
      1. `inherit`: The property value applied to a selected element is the same as that of its parent element
      2. `initial`: The property value applied to a selected element is the default value in the browser's default style sheet. If no value is specified in the default style sheet, the value is set to `inherit` instead.
      3. `unset`: Resets the property to its natural value; i.e. if the property is naturally inherited it acts like `inherit`, otherwise it acts like `initial`.

### The Box Model
  - Box properties
    - `width` and `height`
      - The width and height of the content box. 
      - Content includes both text content and other representing child elements.
    - `padding`
      - The inner margin of a CSS box.
      - Padding can be set at once with the `padding` shorthand property or individually with `padding-top`, `padding-right`, `padding-bottom`, and `padding-left` properties.
    - `border`
      - The border of a CSS box spans from the outer edge of padding and the inner edge of the margin.
      - `border` is a shorthand property where `border-width`, `border-style`, and `border-color` can be set at once.
      - `border-top`, `border-right`, `border-bottom`, and `border-left` sets the border thickness, style, and color individually.
      - Use `border-top-width`, `border-right-style`, `border-bottom-color` to set a single side border property.
    - `margin`
      - Surrounds a CSS box and pushes up against other CSS boxes.
      - The shorthand `margin` and `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` are possible.

  - Note on box properties
    - When two adjacent margins have a different value, only the bigger value is observed. The smaller margin is collapsed.
    - When `margin`, `padding`, and/or `border` properties are set, the content area is decreased.
    - The default content `width` is set to 100% of the available space after the `margin`, `border`, and `padding` have been set.
    - The percentage value of `padding` or `margin` is relative to the containing element's value.
    - Margins can accept negative values.
    - Box content heights don't observe percentage lengths. They are set to the height of the box content if not set to an absolute height.
    - Borders ignore percentage width settings.
    - The margin of two adjacent boxes is set to `max(boxA.margin, boxB.margin)`.
    - `box-sizing` property allows user to set the box size according to the external width: i.e. the left end of the border to the right end of the border.

  - Overflow: When the content size to too small to fit the content, `overflow` property can be set to define the behavior in such cases:
    - `auto`: The overflowing content is hidden and scroll bars are shown
    - `hidden`: the overflowing content is clipped to the bounding box
    - `visible`: The overflowing content is spilled outside the box
  - Background clip
    - Box backgrounds are made up of colors and images
    - By default, backgrounds extend to the outer edge of the border
    - `background-clip` can be assigned the following values: `border-box`, `padding-box`, and `content-box`
  - Outline
    - Not part of the box model
    - Drawn outside the border box, inside the margin area, without changing the size of the box

- The `display` property
  - A `block` box is a box that's stacked upon other boxes.
  - An `inline` box is the opposite of a block box. Width and height settings have no effect on `inline` boxes. Any padding, margin, and border set on `inline` boxes will update the position of the surrounding text only.
  - An `inline-block` box does not create line breaks before and after the box, and it can be sized using `width` and `height`. Also, it won't break across paragraph lines to maintain its box-like figure.

### Debugging
  - Like HTML, CSS is permissive. If the browser encounters invalid CSS code, it just moves on to the next valid code.
  - The DOM inspector and CSS editor can be helpful in debugging
  - Use CSS validation 