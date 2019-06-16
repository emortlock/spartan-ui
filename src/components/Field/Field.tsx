import React, { FunctionComponent, ReactNode } from 'react'
import { CommonProps } from '../../types'

interface RenderProps {
  ids: object
  inputProps: object
  labelProps: object
}

interface FieldProps extends CommonProps {
  children: (props: RenderProps) => ReactNode
  name: string
  error?: boolean
  info?: boolean
  required?: boolean
  optional?: boolean
  optionList: boolean
}

const Field: FunctionComponent<FieldProps> = ({
  as = 'div',
  children,
  name,
  error = false,
  info = false,
  required = false,
  optional = false,
  optionList = false,
  ...rest
}) => {
  const Element = as === 'div' && optionList ? 'fieldset' : as

  const inputProps = {
    name,
    'aria-describedby': [
      error && `field-${name}-error`,
      info && `field-${name}-info`,
    ]
      .filter(Boolean)
      .join(' '),
    'aria-invalid': error || undefined,
    required: required || (optional ? false : undefined),
  }

  const labelProps = {
    as: optionList ? 'legend' : undefined,
    htmlFor: !optionList ? name : undefined,
  }

  const ids = {
    error: `${name}-error`,
    info: `${name}-info`,
  }

  return (
    <Element {...rest} id={`field-${name}`}>
      {children({ ids, inputProps, labelProps })}
    </Element>
  )
}

export default Field
