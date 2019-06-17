import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Accordion } from './'

describe('AccordionPanel', () => {
  it('Sets the open prop onClick', () => {
    const Panel = (props: any) => <div {...props} data-open={props.open} />
    const { container } = render(
      <Accordion>
        <Panel id="one" />
      </Accordion>,
    )

    const panel = container.querySelector('#one') as Element

    expect(panel.getAttribute('data-open')).toBe('false')

    fireEvent.click(panel)

    expect(panel.getAttribute('data-open')).toBe('true')
  })
})
