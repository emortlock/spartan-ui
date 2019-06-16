<h1 align="center">
  <img src="./site/assets/psi.svg" height="100" width="100" role="presentation" aria-hidden /><br />
  Spartan UI
</h1>

React component library that doesn't make assumptions about styling leaving you free to use whatever approach and design you choose.

---

## Features

- **Accessible** All components have been tested with NVDA/Firefox to ensure a good experience for screen reader users

- **Flexible** Using a combination of render callbacks all elements output to the DOM are overridable to achieve any design you wish

- **Typed** Built using TypeScript providing static type checking when using the components along with all the other goodness VSCode provides

## Usage

Simply add to your project using your dependency manager of choice.

```bash
npm i spartan-ui
```

Then import components for use with your app.

```jsx static
import React from 'react'
import { Button } from 'spartan-ui'

const MyButton = () => <Button>Kick!</Button>

export default MyButton
```

### Examples

If you are using a standard CSS based approach for your styling you can just apply the relevant `className` needed without worrying about conflicting styles or specificity. For example when using a utility class CSS framework like [TailwindCSS](https://tailwindcss.com) you could use the following.

```jsx static
import { Button } from 'spartan-ui'

const MyButton = () => (
  <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Kick!
  </Button>
)
```

If you are using a CSS in JS library like [Styled Components](https://www.styled-components.com/) then you can instead use the `as` prop to override the base element used by the component renderer.

```jsx static
import { Button } from 'spartan-ui'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const MyButton = () => <Button as={StyledButton}>Kick!</Button>
```

All components allow for any props to be passed through the the underlying DOM elements through `...rest` spread and all elements are accessible, so pretty much any approach to styling should be feasible including simply just passing down the inline styles.

```jsx
import { Button } from 'spartan-ui'
;<>
  <Button
    style={{
      backgroundColor: '#c62828',
      padding: '0.5rem 1rem',
      borderRadius: '2px',
    }}
  >
    Kick
  </Button>
</>
```
