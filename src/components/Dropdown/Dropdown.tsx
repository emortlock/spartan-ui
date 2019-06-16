import React, { FunctionComponent, useState, ReactNode } from 'react'
import { CommonProps } from '../../types'

interface RenderProps {
  buttonProps: object
  menuItemProps: object
  menuProps: object
  open: boolean
}

interface DropdownProps extends CommonProps {
  children: (props: RenderProps) => ReactNode
  defaultOpen?: boolean
  id: string
}

const Dropdown: FunctionComponent<DropdownProps> = ({
  as: Element = 'div',
  children,
  id,
  defaultOpen = false,
  ...rest
}) => {
  const [{ open }, setState] = useState({
    open: defaultOpen,
  })

  const buttonProps = {
    id: `${id}-button`,
    onClick: () => {
      setState({ open: !open })
    },
    'aria-controls': `${id}-menu`,
    'aria-expanded': open,
    'aria-haspopup': true,
  }

  const menuProps = {
    hidden: !open,
    id: `${id}-menu`,
    role: 'list',
    'aria-hidden': !open,
    'aria-labelledby': `${id}-button`,
  }

  const menuItemProps = {
    role: 'listitem',
  }

  return (
    <Element {...rest} id={id}>
      {children({ open, buttonProps, menuProps, menuItemProps })}
    </Element>
  )
}

export default Dropdown
