import React, { FunctionComponent } from 'react'
import { CommonProps } from '../../types'

interface SRLabelProps extends CommonProps {
  label: string
}

const SRLabel: FunctionComponent<SRLabelProps> = ({
  as: Element = 'span',
  children,
  label,
  ...rest
}) => (
  <Element {...rest} aria-label={label}>
    {children}
  </Element>
)

export default SRLabel
