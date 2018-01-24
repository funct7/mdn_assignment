
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
    