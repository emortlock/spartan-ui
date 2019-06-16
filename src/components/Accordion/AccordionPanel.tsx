import React, { FunctionComponent, ReactNode } from 'react'
import { CommonProps } from '../../types'

import detectKeyPress from '../../utils/detectKeyPress'
import { KEY } from '../../constants'

interface RenderProps {
  open: boolean
  headingProps: object
  bodyProps: object
}

interface AccordionProps extends CommonProps {
  children: (props: RenderProps) => ReactNode
  id: string
  open: boolean
  onClick: (e: MouseEvent | KeyboardEvent, open: boolean) => void
}

const Accordion: FunctionComponent<AccordionProps> = ({
  as: Element = 'div',
  children,
  id,
  open = false,
  onClick,
  ...rest
}) => {
  const handleClick = (e: MouseEvent | KeyboardEvent) => {
    onClick(e, !open)
    e.preventDefault()
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    handleClick(e)
    e.preventDefault()
  }

  const headingProps = {
    id: `${id}-heading`,
    onClick: handleClick,
    onKeyDown: detectKeyPress([KEY.ENTER, KEY.SPACE], handleKeyDown),
    role: 'button',
    tabIndex: 0,
    'aria-controls': `${id}-body`,
    'aria-expanded': open,
  }

  const bodyProps = {
    hidden: !open,
    id: `${id}-body`,
    'aria-hidden': !open,
    'aria-labelledby': `${id}-heading`,
  }

  return (
    <Element {...rest} id={id}>
      {children({ open, headingProps, bodyProps })}
    </Element>
  )
}

export default Accordion
