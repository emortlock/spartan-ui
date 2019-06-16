### Standard

```jsx
import { getTitle, getParagraph } from 'demo/data'
const heading = getTitle(0)
const body = getParagraph(0)
initialState = { open: false }
;<>
  <AccordionPanel
    id="accordion"
    open={state.open}
    onClick={() => setState({ open: !state.open })}
  >
    {({ open, headingProps, bodyProps }) => (
      <>
        <h3 {...headingProps}>
          {heading} {open ? '∧' : '∨'}
        </h3>
        <div {...bodyProps}>
          <p>{body}</p>
        </div>
      </>
    )}
  </AccordionPanel>
</>
```
