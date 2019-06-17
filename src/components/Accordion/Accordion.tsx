import React, { FunctionComponent, useState } from 'react'
import { CommonProps } from '../../types'

interface AccordionProps extends CommonProps {
  onClick?: (e: MouseEvent | KeyboardEvent, open: string[]) => void
  multi?: boolean
  defaultOpen?: string[]
}

const Accordion: FunctionComponent<AccordionProps> = ({
  as: Element = 'div',
  children,
  onClick,
  multi = false,
  defaultOpen = [],
  ...rest
}) => {
  const [{ open }, setState] = useState({
    open: defaultOpen,
  })

  const handleClick = (id: string) => (e: MouseEvent) => {
    if (open.includes(id)) {
      setState({ open: open.filter((openId: string) => openId !== id) })
    } else {
      setState({ open: multi ? [...open, id] : [id] })
    }

    if (onClick) {
      onClick(e, open)
    }

    e.preventDefault()
  }

  return (
    <Element {...rest}>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              onClick: handleClick(child.props.id),
              open: open.includes(child.props.id),
            })
          : child,
      )}
    </Element>
  )
}

export default Accordion
