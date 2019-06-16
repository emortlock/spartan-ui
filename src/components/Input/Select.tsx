import React, { FunctionComponent } from 'react'
import { CommonProps } from '../../types'

interface Option {
  label: string
  value: string
}

export interface SelectProps extends CommonProps {
  name: string
  id?: string
  disabled?: boolean
  autocomplete?: boolean
  autofocus?: boolean
  defaultValue?: string
  multiple?: boolean
  options: Option[]
  placeholder?: string
  readonly?: boolean
  required?: boolean
  size?: number
  value?: string
  onBlur?: (e: React.FocusEvent) => void
  onChange?: (e: React.ChangeEvent) => void
}

const Select: FunctionComponent<SelectProps> = ({
  as: Element = 'select',
  name,
  id,
  defaultValue,
  disabled = false,
  multiple,
  options,
  placeholder,
  required,
  size,
  value,
  onBlur,
  onChange,
  ...rest
}) => (
  <Element
    {...rest}
    name={name}
    id={id}
    defaultValue={defaultValue}
    disabled={disabled}
    multiple={multiple}
    placeholder={placeholder}
    required={required}
    size={size}
    value={value}
    aria-disabled={disabled || undefined}
    aria-required={typeof required !== 'undefined' ? required : undefined}
    onBlur={onBlur}
    onChange={onChange}
  >
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </Element>
)

export default Select
