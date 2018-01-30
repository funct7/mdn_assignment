
## 3. HTML tables

### Tables
  - Do **NOT** use tables for layout
    1. Layout tables reduce accessibility for visually impaired users
    2. Tables produce tag soup
    3. Tables do not layout responsively to its layout containers
  
  - `<table>` element
    - `<tr>`
      - Table row
      - Wrap `<td>` or `<th>` tags inside this element to create a row.
      - To add a row, wrap around a new `<tr>` element.
    - `<th>`
      - Table header
      - Special cells that go at the start of a row or column and define the type of data for the row or column
      - Bold style and center alignment are applied by default
      - Associates the header and its content cells in the same row and column for accessibility
    - `<td>`
      - Table data(=a table cell)
      - The smallest container inside a table
      - Cells are not placed underneath but aligned on the same row
    - `colspan` or `rowspan` attributes
      - Extend the cell across rows or columns
      - Takes a unitless number value

  - `<col>` and `<colgroup>` elements
    - Allows efficient styling on a column of rows
    - The `<colgroup>` container comes just below the opening `<table>` tag
    - `<col>` elements wrapped inside the `<colgroup>` represent each column in the table
    - To apply the same style across multiple columns, provide the `span` attribute with a unitless value

### Advanced
  - `<caption>`
    -  By placing a `<caption>` element right below the opening `<table>` tag, a caption can be added.
    - `<summary>` is deprecated. Do **NOT** use.

  - Structure
    - `<thead>`, `<tfoot>`, `<tbody>` provide useful hooks for adding CSS to the table.
    - `<thead>`
      - Needs to wrap the part of the table that is the header
      - If `<col>`/`<colgroup>` elements are used, the table header should come just below those
    - `<tfoot>`
      - Needs to wrap the part of the table that is the footer
      - The wrapped rows will automatically go to the bottom of the table
      - Place either at the bottom of the table or just below the table header
    - `<tbody>`
      - Needs to wrap the remaining parts of the table content that aren't in the header or the footer
      - Implicitly added if not specified

  - Nesting: Nesting tables is possible as long as the complete structure is included, including the `<table>` element

  - Accessibility
    - Adding row and column headers (`<th>`) helps visuallly impaired users make sense of the table
    - The `scope` attribute:
      - Can Be added to the `<th>` element to specify whether the header is for a column or a row
      - `colgroup`/`rowgroup`: Used for headings that group other headings
    - The `id`/`headers` attributes
      - By assigning `id` attribute to `<th>` elements and specifying `headers` for the `<td>` elements, each cell of the table can be identified by what headers they are under