## 4. CSS Layout

- Layout techniques override the default behavior of top-to-bottom stacking behavior.
  - The `position` property: `static` is the default. Elements can be fixed to a position in the viewport.
  - `float`: `left` can make the elements to line up side by side.
  - `display`

- Floats
  - Allows elements to float to the left or right of one another.
  - Common use is to make text float around an image.
  - Possible values
    - `left`: Floats the element to the left.
    - `right`: Floats the element ot the right.
    - `none`: Default.
    - `inherit`: Inherits behavior from its parent element.

- Position
  - *Static positioning*: Default. Assumes the normal position in the document layout flow.
  - *Relative positioning*: Allows modification of an element's position, relative to its position in normal flow.
  - *Absolute positioning*: Allows the element to move independently of the page's normal layout.
  - *Fixed positioning*: Fixes the element position relative to the browser viewport.

- CSS Tables
  - Using CSS tables allows table-like layout.
  - Do **NOT** use HTML table elements for this.

- Flexible boxes
  - The following examples were hard to implement in older CSS versions:
    - Vertically center a box of content
    - Make several columns containing different amounts of content have the same height, without using a fixed height or a background image hack.
    - Have several boxes evenly divide up available space.

  - `display: flex;` tells the element's children will be laid out as flexible boxes.
  - `flex: 1;` tells each element to take up an equal amount of the available space in the row.

- Grid layout
  - Not widely supported across browsers yet.

### Floats

- Background
  - Originally made for images to float in columns of text.
  - Floats are supported from IE 4+.

- Elements with the float set on it is taken out of the normal layout flow and stuck to its specified position in its parent container.
- As long as there is space for two, pretty much anything can be floated.
- Clear floats as soon as possible to avoid layout complications.

- Multiple column layout
  - 2-column layout
    - Using relative units is desirable as it creates liquid layout.
    - It's a good idea to use a single column for mobile devices, or when the screen is narrow.
    - Another option is to use fixed units but provide width for different screen sizes.

  - 3-column layout
    - Float two columns to the left and the last one to the right.

- Clearing floats
  - Unless specified, content below the floats will continue to be on one of two sides.
  - To stop the float behavior, use the `clear` property on the element that needs to fill the whole width.
  - Possible values
    - `left`
    - `right`
    - `both`: Stop any active left and right floats

- Float problems
  - When using float to implement column UI, the whole width may be difficult to calculate, with padding, margin, etc.
    - Solution: Set `box-sizing: border-box;` so that the calculated element width will encompass the border.

  - Floating elements exist in their parent elements so arranging the layout of siblings get tricky.
    - Solution: Inserting an empty `div` element will stop the float behavior and provide a reference point for subsequent elements.

  - Matching the height of different columns can be done with an absolute height, but this does not allow for dynamic content where the content may exceed the given height.
    - Solution 1: Hiding the background so all element heights appear to be the same
    - Solution 2: Setting `overflow: auto` and using scroll bars 
    - Solution 3: Adding a background layer to match the dimensions of the content columns.

  - [Reference on `float`s](https://css-tricks.com/all-about-floats/)

### Positioning
- Positioning allows for customized layout outside of the normal flow of things.
- Normal layout flow
  - Block level elements occupy the full width of their parent element, and thus are placed vertically in relation to their siblings.
  - Inline elements occupy only the width of its content, and thus is placed horizontally as long as there is space in the parent element. When this space is not sufficient, it overflows to a new line.
  - Margin collapsing: The smaller margin is overridden by the larger margin.

- Values
  - `position: static;` is the default behavior.
  - `position: relative;` able to tweak the final position in conjunction with `top`, `bottom`, `left`, and `right`.
     - Example

      ```
      .positioned {
        position: relative;
        top: 30px;
        left: 30px;
      }
      ```

  - `position: absolute;` puts the element in a layer of its own that aren't affected by other elements. The specified values for `top`, `bottom`, `left`, and `right` are relative to the element's containing element.
  - `position: fixed;` fixes an element in place relative to the viewport.
  - `position: sticky;` works like a relative positioned element until it reaches a certain point from which point the element will work like fixed; i.e. UITableView header like behavior. Not widely supported.

- Context
  - The positioned element is nested inside the `<body>` element, but by default the containing element is the `<html>` element.
  - Positioning context: The containing element

- Z-index
  - Positioned elements later in the source order are on top of earlier elements.
  - Override using `z-index: $(unitless-value);`


### Flexbox
- Difficult layouts without `flexbox`:
  - Vertically centering a block of content inside its parent
  - Making all children of a container to equally take up available size in a relative manner
  - Making all columns in a multiple column layer adopt the same height with different amount of content.

- Terms
  - **Main axis** is the axis running in the direction the items are laid out. The start and end of this axis are called **main start** and **main end** respectively.
  - **Cross axis** is the axis running perpendicular to the main axis. The start and end of this axis are called **cross start** and **cross end**.
  - The parent element that has `display: flex;` set on it is the **flex container**.
  - The children elements are **flex items**.

- Using `flexbox`
  - Choose the `flexbox` container element by setting `display: flex;`.
  - `display: inline-flex` lays out inline items as flexible boxes.

  - `flex-direction` values
    - `row`: default
    - `column`
    - `row-reverse`
    - `column-reverse`

  - `flex-wrap` pushes content to the next row/column instead of overflowing the container.
    - The remaining elements are stretched to fill.

  - Shorthand: `flex-flow: row wrap;`  

- Using `flex`
  - Setting `flex: $(size)px` means each flex item will be at least that much wide/tall.
  - A unitless proportion value could be given like so: `flex: 1;`
  - Giving a minimum size value with a proportion value sets each flex item to the given minimum size first, and shares the remaining space according to the proportion value.

  - Longhand version
    - `flex-grow` takes the unitless proportion value.
    - `flex-shrink` also taks a unitless proportion value. Used when the flex items overflow their container.
    - `flex-basis` specifies the minimum size.

- Alignment
  - `align-items`: controls where flex items sit on the cross axis.
    - `stretch`: Stretches the box along the cross axis, set to the max value of flex items.
    - `center`: Flex items maintain their intrinsic dimensions but are centered along the cross axis.
    - `flex-start`, `flex-end`
    - Each flex item can override its container-defined behavior by applying `align-self`.
  - `justify-content`: controls where flex items sit on the main axis.
    - `flex-start`
    - `flex-end`
    - `center`
    - `space-around`: distributes all items evenly with space on both ends.
    - `space-between`: similar to `space-around` but no space at the ends.

- Item ordering
  - The default order can be overridden by setting `order` on the flex item.
  - The default value of `order` is `0`, so setting only one item to `1` will place it in the last position.
  - Flex items with the same order value appear in their source order.
  - Negative values are also possible.


### Grids
- Creating Simple Grid Frameworks
  - [Worked example](./simple-grid.html)
  - [Creating a fluid grid](./fluid-grid.html)
  - Using the `calc()` function

    ```
    .col.span4 {
      width: calc((6.25% * 4) + (2.08333333% * 3));
    }
    ```

  - Limitations
    - Calculation has to be accurate.
    - Overflowing width of columns will result in making a new row and break the grid layout.
    - If the content of the elements overflow, they will become messy.
    - Manipulating height is difficult.

- Using `flexbox` is somewhat easier, but in order to span multiple columns, classes need to be set, or else they will be of equal widths.
- Using `float` or `flexbox` leads to limitations because they are one-dimensional.

- CSS Grid
  - A simple example

    ```
    .wrapper {
      width: 90%;
      max-width: 960px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 20px;
    }
    ```

    - `display: grid;` declares a grid
    - `grid-gap: 20px` sets the gutter to `20px`
    - `grid-template-columns` creates 120 equal-width columns
    - The `fr` unit: the fraction unit

  - Multiple columns
    - Use the `grid-column` property like so:

    ```
    .span6 { grid-column: auto / span 6; }
    .content { grid-column: 2 / 8; }        // Sets grid columns starting from position 2 to 8
    ```

    - `grid-column: $start_col / span $num_col;`

  - CSS grids are two-dimensional, so even when various columns have various height, columns will adjust their height to the height of the tallest container.
  - The `grid-gap` property eliminates the use of hacks such as setting margins.