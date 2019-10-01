# React Gridzilla

Gridzilla is a responsive, mobile-first grid system for React.

[![Version](https://img.shields.io/npm/v/react-gridzilla.svg?style=flat-square)](https://www.npmjs.com/package/react-gridzilla)
[![License](https://img.shields.io/npm/l/react-gridzilla.svg?style=flat-square)](https://www.npmjs.com/package/react-gridzilla)
[![Downloads](https://img.shields.io/npm/dt/react-gridzilla.svg?style=flat-square)](https://www.npmjs.com/package/react-gridzilla)
![Filesize](https://img.shields.io/bundlephobia/min/react-gridzilla.svg)

&nbsp;
&nbsp;

# Installation

Install with npm:
```
npm install react-gridzilla
```

Install with Yarn:
```
yarn add react-gridzilla
```

&nbsp;
&nbsp;

# How it works

In a nutshell, there are three major components: containers, grids, and units.

```jsx
import { Container, Grid, Unit } from 'react-gridzilla';
```

Use containers to center your site's contents and align your grid content.
Grids are groups of units that ensure your units are lined up properly.
Content should be placed within units, and only units may be immediate children of grids.

A grid has a default size of 12 columns. By default, grid units are stacked and each unit would use all available columns in the grid, unless you specify otherwise.

Here is an example of three equal units in a grid:

```jsx
<Container xlarge>
    <Grid>
        <Unit span="4">Unit</Unit>
        <Unit span="4">Unit</Unit>
        <Unit span="4">Unit</Unit>
    </Grid>
</Container>
```

It may be convenient to use other formats to specify the unit span:

```jsx
<Grid>
    <Unit span="3"> Default and classic N columns of 12 </Unit>
    <Unit span="25%"> Or use percentages </Unit>
    <Unit span="0.25"> Or use fractions </Unit>
    <Unit span="1 of 4"> Or just say it in English </Unit>
</Grid>
```

&nbsp;
&nbsp;

# Responsive Props

Gridzilla uses the following media query ranges—or breakpoints—for the grid system.

```scss
// xs: Extra small devices (portrait phones, less than 544px)
// No media query required

// sm: Small devices (landscape phones, 544px and up)
@media (min-width: 544px) { ... }

// md: Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// lg: Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// xl: Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
```

These breakpoints are based on minimum viewport widths and allow scaling up units as the viewport changes.

Each component of `Container`, `Grid` and `Unit` accept a set of special props called the Responsive Props: `xs`, `sm`, `md`, `lg` and `xl`.

The responsive props allow configuring a component starting from a breakpoint and onwards. So, values passed to the component using the `md` prop will take effect from viewport of width 768px and wider, which means `md`, `lg` and `xl` are all affected.

Here is an example, the following grid will have a size of 6 columns on `xs` and `sm` tiers but will have a size of 12 columns on `md`, `lg` and `xl` tiers:

```jsx
<Grid md={{ size: 12 }} xs={{ size: 6 }}>
...
</Grid>
```

&nbsp;

### Special values for the responsive props

#### Component level props
By default, component-level props are mapped to `md` breakpoint. This can be changed by setting a responsive prop to `true`.

Here is an example, the following grid will have a grid size of 8 starting from `xs` breakpoint, not from `md`.

```jsx
<Grid xs size="8">
...
</Grid>
```

#### Unit span
Unit components make use of the Responsive Props for setting the unit span in a special way.

For the following example, Unit A and Unit B have the same width for medium sized screens. But on extra large screens, Unit A becomes twice as wide as Unit B.

```jsx
<Grid>
    <Unit xl={{ span: 8 }} md={{ span: 6 }}> Unit A </Unit>
    <Unit xl={{ span: 4 }} md={{ span: 6 }}> Unit B </Unit>
</Grid>
```

This is tedious to write, you can write this instead:

```jsx
<Grid>
    <Unit xl="8" md="6"> Unit A </Unit>
    <Unit xl="4" md="6"> Unit B </Unit>
</Grid>
```

&nbsp;
&nbsp;

# Containers

Containers are required when using the grid system. Choose from a responsive fixed-width container or fluid-width container.

All containers have a maximum width of 100% and while containers can be nested, most layouts do not require a nested container.

There are 5 types of fixed width containers available.

<table>
  <thead>
    <tr>
      <td rowSpan="2">Container type</td>
      <td colSpan="5">Container width across breakpoints</td>
    </tr>
    <tr>
      <td>Extra small <small>&lt;544px</small></td>
      <td>Small <small>≥544px</small></td>
      <td>Medium <small>≥768px</small></td>
      <td>Large <small>≥992px</small></td>
      <td>Extra large <small>≥1200px</small></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>fluid</code></td>
      <td colSpan="5">100% <small> - default type - </small></td>
    </tr>
    <tr>
      <td><code>xsmall</code></td>
      <td colSpan="5">100%</td>
    </tr>
    <tr>
      <td><code>small</code></td>
      <td>100%</td>
      <td colSpan="4">540px</td>
    </tr>
    <tr>
      <td><code>medium</code></td>
      <td>100%</td>
      <td>540px</td>
      <td colSpan="3">750px</td>
    </tr>
    <tr>
      <td><code>large</code></td>
      <td>100%</td>
      <td>540px</td>
      <td>750px</td>
      <td colSpan="2">960px</td>
    </tr>
    <tr>
      <td><code>xlarge</code></td>
      <td>100%</td>
      <td>540px</td>
      <td>750px</td>
      <td>960px</td>
      <td>1140px</td>
    </tr>
  </tbody>
</table>

&nbsp;

### Container Type

You can specify the container type by setting the `size` prop or by providing the type itself as a boolean-value prop.

```jsx
<Container size="medium">
  This is a <em>medium</em> sized fixed-width container
</Container>

<Container medium>
  This is also a <em>medium</em> sized fixed-width container
</Container>
```

&nbsp;

### Custom-sized Containers

If none of the pre-defined sizes work for you, provide a number to customize the container width.

```jsx
<Container size="630">
  This is a 630 pixels wide container
</Container>
```

&nbsp;

### Auto-sizing Containers

By default, all fixed-width containers will automatically switch to a smaller size if the viewport width does not fit the container width.
This feature is enabled by default and it can be turned off by setting autoSize to false.

```jsx
<Container size="medium" autoSize={false}>
  This container will become <em>fluid</em> on smaller screen sizes
</Container>
```

&nbsp;
&nbsp;

# Grid and Units

By default, Gridzilla uses a 12 columns grid system. For each unit, you will need to specify how many columns you want that unit to span.

```jsx
<Grid>
  <Unit span="6">Unit</Unit>
  <Unit span="6">Unit</Unit>
</Grid>
```

&nbsp;
&nbsp;

# Unit Span

For flexibility, you can provide the span of an individual unit in many formats.

```jsx
<Grid>
    <Unit span="3"> Default and classic N columns of 12 </Unit>
    <Unit span="25%"> Or use percentages </Unit>
    <Unit span="0.25"> Or use fractions </Unit>
    <Unit span="1 of 4"> Or just say it in English </Unit>
</Grid>
```

&nbsp;

### Fit-content Unit

If you want to make a unit take only as much space as it needs, set the `span` value to __min__ on that Unit.

```jsx
<Grid>
  <Unit md="min">Fit Content</Unit>
  <Unit md="3">Unit</Unit>
  <Unit md="3">Unit</Unit>
</Grid>
```

&nbsp;

### Greedy Units

If you want a unit to take as much space as possible in a single row, set `span` value to __max__ on that Unit.

```jsx
<Grid>
    <Unit span="2">Unit</Unit>
    <Unit span="2">Unit</Unit>
    <Unit span="max">Greedy unit</Unit>
</Grid>
```

&nbsp;

### Responsive Units

You can provide the span of an individual unit for a specific breakpoint using the responsive shorthand.

```jsx
<Grid>
  <Unit lg="75%" sm="50%">Unit</Unit>
  <Unit lg="25%" sm="50%">Unit</Unit>
</Grid>
```

&nbsp;
&nbsp;

# Grid Size

The default size for a grid is 12 columns, but you can change that number using the `size` prop.

```jsx
<Grid size="5">
  <Unit md="2">Unit</Unit>
  <Unit md="3">Unit</Unit>
</Grid>
```

&nbsp;
&nbsp;

# Auto-sized Grid

To create a single grid of equal-size units, set the grid size to __auto__ and add any number of units and let the grid lay them out for you.

```jsx
<Grid size="auto">
  <Unit>Unit</Unit>
  <Unit>Unit</Unit>
  <Unit>Unit</Unit>
</Grid>
```

#### You're Still in Control

The auto-sized grid controls units size but you can still set the `span` prop for specific units and the other units will share the remaining space.

```jsx
<Grid size="auto">
  <Unit span="50%">Unit</Unit>
  <Unit>Unit</Unit>
  <Unit>Unit</Unit>
  <Unit>Unit</Unit>
</Grid>
```

&nbsp;
&nbsp;

# Auto-layout Grid

If you want to create a multi-row grid of equal-size units, set `auto` Grid prop to __true__. You will also need to specify the `size` of the grid.

Here is an auto-layout grid with 2 units per row.

```jsx
<Grid auto size="2">
  <Unit>Unit 1</Unit>
  <Unit>Unit 2</Unit>
  <Unit>Unit 3</Unit>
  <Unit>Unit 4</Unit>
  <Unit>Unit 5</Unit>
  <Unit>Unit 6</Unit>
</Grid>
```

&nbsp;
&nbsp;

# Nesting

In most cases, you don't need to nest grids but you can simply place a `Grid` inside of a `Unit` to create nested grids.

```jsx
<Grid>
  <Unit md="6">
    <Grid>
      <Unit md="6">Unit</Unit>
      <Unit md="6">Unit</Unit>
    </Grid>
  </Unit>

  <Unit md="6">
    <Grid>
      <Unit md="4">Unit</Unit>
      <Unit md="4">Unit</Unit>
      <Unit md="4">Unit</Unit>
    </Grid>
  </Unit>
</Grid>
```

&nbsp;
&nbsp;

# Vertical Alignment

You can align units vertically to the __top__, __middle__ or __bottom__ of a grid.

```jsx
<Grid align="middle">
  <Unit md="4">
    <div style={{ height: 60 }}>Unit</div>
  </Unit>

  <Unit md="4">
    <div style={{ height: 120 }}>Unit</div>
  </Unit>

  <Unit md="4">
    <div style={{ height: 40 }}>Unit</div>
  </Unit>
</Grid>
```

Individual units can also be vertically aligned.

```jsx
<Grid style={{ height: 120 }}>
  <Unit md="4" align="bottom">Bottom</Unit>
  <Unit md="4" align="middle">Middle</Unit>
  <Unit md="4" align="top">Top</Unit>
</Grid>
```

&nbsp;
&nbsp;

# Horizontal Alignment

Align units to the __left__, __center__ or __right__ of a grid.

```jsx
<Grid alignCols="center">
  <Unit md="3">Unit</Unit>
  <Unit md="3">Unit</Unit>
</Grid>
```

&nbsp;
&nbsp;

# Units Distribution

Distribute units based on the space __between__ them or the space __around__ them.

```jsx
<Grid space="between">
  <Unit md="3">Unit</Unit>
  <Unit md="3">Unit</Unit>
  <Unit md="3">Unit</Unit>
</Grid>
```

&nbsp;
&nbsp;

# Equal-height Units

Create equal-height units using the `stretch` prop.

```jsx
<Grid stretch>
  <Unit md="4">Unit</Unit>
  <Unit md="4">Unit</Unit>
  <Unit md="4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non temporibus mollitia perferendis quasi architecto expedita veritatis, doloremque, ducimus a aperiam deserunt neque natus quisquam inventore, laudantium recusandae. Nobis, explicabo.
  </Unit>
</Grid>
```

You can use the same prop to stretch individual units as well.

```jsx
<Grid>
  <Unit md="4">
    Will not stretch
  </Unit>

  <Unit md="4" stretch>
    Will stretch
  </Unit>

  <Unit md="4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non temporibus mollitia perferendis quasi architecto expedita veritatis, doloremque, ducimus a aperiam deserunt neque natus quisquam inventore, laudantium recusandae. Nobis, explicabo.
  </Unit>
</Grid>
```

&nbsp;
&nbsp;

# Units Order

Change the display order of the units to keep a specific order in the source code.

&nbsp;

### Offsets

Move a unit (and all subsequent units) to the right using the `offset` Unit prop.

```jsx
<Grid>
  <Unit md="3">Unit</Unit>
  <Unit md="3" offset="3">Offset by 25%</Unit>
  <Unit md="3">Another unit</Unit>
</Grid>
```

&nbsp;

### Push and Pull

Easily move units right and left using `push` and `pull` Unit props.

```jsx
<Grid>
  <Unit md="4">(1) Unit</Unit>
  <Unit md="4" push="4">(2) Pushed by one third</Unit>
  <Unit md="4" pull="4">(3) Pulled by one third</Unit>
</Grid>
```

&nbsp;

### First and Last

You can send a unit to the start or the end of a grid using the `first` and `last` Unit props, respectively.

```jsx
<Grid>
  <Unit md="3">1</Unit>
  <Unit md="3" last>2 (should be last)</Unit>
  <Unit md="3" first>3 (should be first)</Unit>
  <Unit md="3">4</Unit>
</Grid>
```

&nbsp;

### Reverse Order

Reverse units order using the `reverse` Grid prop.

```jsx
<Grid reverse>
  <Unit md="3">Unit 1</Unit>
  <Unit md="3">Unit 2</Unit>
  <Unit md="3">Unit 3</Unit>
  <Unit md="3">Unit 4</Unit>
</Grid>
```

&nbsp;
&nbsp;

# Unit Wrapping

By default, if the units placed within a single grid span more columns than the grid size, each group of extra units will, as one unit, wrap onto a new line.

```jsx
<Grid>
  <Unit md="4">Unit</Unit>
  <Unit md="4">Another unit</Unit>
  <Unit md="5">This should wrap onto a new line</Unit>
  <Unit md="6">Subsequent units will continue along the new line</Unit>
</Grid>
```

&nbsp;

### No-wrap

To prevent this behavior, set the `wrap` Grid prop to __false__.

```jsx
<Grid wrap={false}>
  <Unit md="3">Unit</Unit>
  <Unit md="3">Unit</Unit>
  <Unit md="3">Another unit</Unit>
  <Unit md="5">This will <em>not</em> wrap onto a new line</Unit>
  <Unit md="6">Subsequent units will continue along the <em>same</em> line</Unit>
</Grid>
```

&nbsp;
&nbsp;

# Vertical Grid

You can create a vertical grid by setting the `vertical` prop to __true__.

```jsx
<Grid vertical style={{ height: 600 }}>
  <Unit span="4">Unit</Unit>
  <Unit span="8">Another Unit</Unit>
</Grid>
```

&nbsp;
&nbsp;

# Gaps

You can adjust gaps between units using the `gap` prop.

&nbsp;

### Pre-defined values

There are 8 pre-defined values that you can use: __smallest__, __smaller,__ __small__, __medium__, __large__, __larger__, __largest__ and __none__.

Set `gap` to __none__ for a gapless grid.

```jsx
<Grid gap="none">
  <Unit md="4">Unit</Unit>
  <Unit md="4">Unit</Unit>
  <Unit md="4">Unit</Unit>
</Grid>
```

&nbsp;

### Custom values

You can also set the `gap` value to any number you want:

```jsx
<Grid gap="35">
  <Unit md="4">Unit</Unit>
  <Unit md="4">Unit</Unit>
  <Unit md="4">Unit</Unit>
</Grid>
```

&nbsp;
&nbsp;

# License

MIT
