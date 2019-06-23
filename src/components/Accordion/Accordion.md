### Standard

```jsx
import { getTitle, getParagraph } from 'demo/data'
import { Accordion, AccordionPanel } from 'spartan-ui'
const panels = Array(3)
  .fill(0)
  .map(() => ({ heading: getTitle(), body: getParagraph() }))
;<>
  <Accordion>
    {panels.map((panel, index) => (
      <AccordionPanel id={`accordion-group-1-${index}`} key={index}>
        {({ open, headingProps, bodyProps }) => (
          <>
            <h3 {...headingProps}>
              {panel.heading} {open ? '∧' : '∨'}
            </h3>
            <div {...bodyProps} hidden={!open}>
              <p>{panel.body}</p>
            </div>
          </>
        )}
      </AccordionPanel>
    ))}
  </Accordion>
</>
```

### Multi-Select

```jsx
import { getTitle, getParagraph } from 'demo/data'
import { Accordion, AccordionPanel } from 'spartan-ui'
const panels = Array(3)
  .fill(0)
  .map(() => ({ heading: getTitle(), body: getParagraph() }))
;<>
  <Accordion multi>
    {panels.map((panel, index) => (
      <AccordionPanel id={`accordion-group-2-${index}`} key={index}>
        {({ open, headingProps, bodyProps }) => (
          <>
            <h3 {...headingProps}>
              {panel.heading} {open ? '∧' : '∨'}
            </h3>
            <div {...bodyProps} hidden={!open}>
              <p>{panel.body}</p>
            </div>
          </>
        )}
      </AccordionPanel>
    ))}
  </Accordion>
</>
```
