import React, { FunctionComponent } from 'react'
import { CommonProps } from '../../types'

export interface TextAreaProps extends CommonProps {
  name: string
  id?: string
  cols?: number
  disabled?: boolean
  autocomplete?: boolean
  autofocus?: boolean
  defaultValue?: string
  placeholder?: string
  readonly?: boolean
  required?: boolean
  rows?: number
  spellCheck?: boolean
  value?: string
  wrap?: 'hard' | 'soft' | 'off'
  onBlur?: (e: React.FocusEvent) => void
  onChange?: (e: React.ChangeEvent) => void
}

const TextArea: FunctionComponent<TextAreaProps> = ({
  as: Element = 'textarea',
  name,
  id,
  cols,
  defaultValue,
  disabled = false,
  placeholder,
  required,
  rows,
  spellCheck,
  value,
  wrap,
  onBlur,
  onChange,
  ...rest
}) => (
  <Element
    {...rest}
    name={name}
    id={id}
    cols={cols}
    defaultValue={defaultValue}
    disabled={disabled}
    placeholder={placeholder}
    required={required}
    rows={rows}
    spellCheck={spellCheck}
    value={value}
    wrap={wrap}
    aria-disabled={disabled || undefined}
    aria-required={typeof required !== 'undefined' ? required : undefined}
    onBlur={onBlur}
    onChange={onChange}
  />
)

export default TextArea
