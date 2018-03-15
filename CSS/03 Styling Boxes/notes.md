## 3. Styling Boxes

### Advanced Box Properties
- Width and height constraints
  - Maximum and minimum width constraints can be set like so:

    ```
    width: 70%;
    max-width: 1280px;
    min-width: 480px;
    ```

  - The container can be centered by adding the following:

    ```
    margin: 0 auto;
    ```

  - This technique can be used on media to constrain sizes.

- Changing the box model
  - In the default box model, the total width of a box is the sum of `width`, `padding-left`, `padding-right`, `border-left`, and `border-right`.
  - By setting the `box-sizing` property to `border-box`, the value of `width` specifies the size of the outer border.

- Box Display Types
  - Common values for the `display` property
    - `block`: Content before and after the box appears on a separate line. Width and height can be set. The box model described earlier.
    - `inline`: Flows with the document's text. Width and height cannot be set. Any padding, margin, and border set on `inline` boxes will update the position of the surrounding text, but not `block` boxes.
    - `inline-block`: Flows like an `inline` box, but doesn't break with the paragraph line. Width and heigth can be set.
  - By default, block level elements have `display: block` set on them, while inline elements have `display: inline` set.
  - Other values
    - `table`: Allows you to emulate table layouts using non-table elements.
    - `flex`: Allows flexible layout.
    - `grid`: Gives CSS a native way of easily implementing grid systems.

### Backgrounds
- The default scope of a background is the content, padding, and border. The margin area doesn't count as part of the element's area.
- Properties that can be manipulated
  - `background-color`
  - `background-image`
  - `background-position`
  - `background-repeat`
  - `background-attachment`: Specifies the behavior of an element's background when its content scrolls; e.g. does it scroll with the content or is it fixed?
  - `background`: A shorthand for the five properties above.
  - `background-size`: Allows dynamic resizing of the background image

- The basics
  - `background-color`
    - The default is `transparent`.
    - Since some properties might not be supported by an older browser or the background images might fail to load, it's best practice to set the fallback background color.
  - `background-image`
    - You can fetch a static file using `url(path);`.
    - When images are smaller than the element size, it repeats by default.
    - Any image format that HTML images support is usable, including SVG.
    - Since CSS is only concerned about presentation, not content, these images are invisible to assistive technologies. Any content-related images must be loaded in HTML using the `<img>` element.
  - `background-repeat`
    - `repeat`: Repeats horizontally and vertically.
    - `no-repeat`
    - `repeat-x`: Repeats horizontally only.
    - `repeat-y`: Repeats vertically only.
  - `background-position`
    - With the top-left corner as origin, the property generally takes two values separated by a space.
    - Accepts...
      - Absolute values such as `px`
      - Relative values such as `em`, `rem`
      - Percentages such as `%`
      - Keywords: Takes `left`, `center`, `right`, and `top`, `center`, `bottom` respectively.

- Gradients
  - Linear and radial gradients are available
  - Linear gradient example
    
    ```
    background-image: linear-gradient(`direction`, `begin_color`, `end_color`);
    ```
    - Direction
      - Keywords: `to bottom`, `to right`, `to bottom right`, etc.
      - Degreee values: `90deg`, `0deg`, etc.
    - Color stops example

    ```
    background-image: linear-gradient(to bottom, yellow, orange 40%, yellow);
    ```
      - You can specify as many color stops as you like.
      - Other units can be used to specify stop locations.

    - Repoeated gradients example

    ```
    background-image: repeating-linear-gradient(to right, yellow, orange 25px, yellow 50px);
    ```

- `background-attachment`
  - `scroll`: Fixes the background to the viewport, so the background scrolls with the page, not the element.
  - `fixed`: The background stays in the fixed position regardless of the page scroll or the element scroll position.
  - `local`: Fixes the background to the element it is set on.
  - This property only has an effect when there is content to scroll.

- Multiple backgrounds
  - Since IE9 multiple backgrounds are supported.
  - Background definitions are separated with commas like so:

    ```
    background: url(image.png) no-repeat 99% center,
                url(background-tile.png),
                linear-gradient(to bottom, yellow, #dddd00 50%, orange);
    background-color: yellow;  /* fallback background color */
    ```

  - Multiple backgrounds are stacked on top of each other, with the first definition appearing at the top.
  - Multiple values can be placed into longhand `background-*` properties like so:

    ```
    background-image: url(image.png), url(background-tile.png);
    background-repeat: no-repeat, repeat;
    ```

