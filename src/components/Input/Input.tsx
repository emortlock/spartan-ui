import React, { FunctionComponent } from 'react'
import { CommonProps } from '../../types'

export interface InputProps extends CommonProps {
  name: string
  id?: string
  type?: string
  disabled?: boolean
  autocomplete?: boolean
  autofocus?: boolean
  defaultValue?: string
  placeholder?: string
  readonly?: boolean
  required?: boolean
  value?: string
  onBlur?: (e: React.FocusEvent) => void
  onChange?: (e: React.ChangeEvent) => void
}

const Input: FunctionComponent<InputProps> = ({
  as: Element = 'input',
  name,
  id,
  type = 'text',
  defaultValue,
  disabled = false,
  placeholder,
  required,
  value,
  onBlur,
  onChange,
  ...rest
}) => (
  <Element
    {...rest}
    name={name}
    id={id}
    type={type}
    defaultValue={defaultValue}
    disabled={disabled}
    placeholder={placeholder}
    required={required}
    value={value}
    aria-disabled={disabled || undefined}
    aria-required={typeof required !== 'undefined' ? required : undefined}
    onBlur={onBlur}
    onChange={onChange}
  />
)

export default Input
