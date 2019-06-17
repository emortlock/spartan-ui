import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { AccordionPanel } from './'

describe('AccordionPanel', () => {
  it('triggers the onClick event', () => {
    const onClick = jest.fn()
    const { container } = render(
      <AccordionPanel id="accordion" open onClick={onClick}>
        {({ headingProps, bodyProps }) => (
          <>
            <h3 {...headingProps}>Accordion</h3>
            <div {...bodyProps} hidden={!open}>
              <p>Hello world</p>
            </div>
          </>
        )}
      </AccordionPanel>,
    )

    const heading = container.querySelector('#accordion-heading') as Element
    fireEvent.click(heading)
    fireEvent.keyDown(heading, { key: 'Enter' })
    fireEvent.keyDown(heading, { key: 'Space' })

    expect(onClick).toHaveBeenCalledTimes(3)
  })
})
