import React, { FunctionComponent } from 'react'

import Input, { InputProps } from './Input'

interface InputOptionProps extends InputProps {
  type?: 'checkbox' | 'radio'
  checked?: boolean
  defaultChecked?: boolean
  value: string
}

const InputOption: FunctionComponent<InputOptionProps> = ({
  children,
  type = 'checkbox',
  name,
  id,
  value,
  ...rest
}) => <Input {...rest} name={name} id={id || `${name}-${value}`} type={type} />

export default InputOption
