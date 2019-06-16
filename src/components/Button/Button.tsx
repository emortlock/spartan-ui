import React, { FunctionComponent } from 'react'
import { CommonProps } from '../../types'

interface ButtonProps extends CommonProps {
  active?: boolean
  type?: 'submit' | 'button'
  disabled?: boolean
}

const Button: FunctionComponent<ButtonProps> = ({
  as: Element = 'button',
  children,
  active,
  type = 'button',
  disabled,
  ...rest
}) => (
  <Element
    {...rest}
    role="button"
    type={type}
    disabled={disabled}
    aria-disabled={disabled || undefined}
    aria-pressed={active}
  >
    {children}
  </Element>
)

export default Button
