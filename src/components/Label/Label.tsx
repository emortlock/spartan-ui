import React, { FunctionComponent } from 'react'
import { CommonProps } from '../../types'

interface LabelProps extends CommonProps {
  htmlFor?: string
}

const Label: FunctionComponent<LabelProps> = ({
  as: Element = 'label',
  children,
  htmlFor,
  ...rest
}) => (
  <Element {...rest} htmlFor={htmlFor}>
    {children}
  </Element>
)

export default Label
