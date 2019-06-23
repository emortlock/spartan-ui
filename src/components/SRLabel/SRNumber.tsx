import React, { FunctionComponent } from 'react'
import { CommonProps } from '../../types'

interface SRNumberProps extends CommonProps {
  children: string
}

const SRNumber: FunctionComponent<SRNumberProps> = ({
  as: Element = 'span',
  children,
  ...rest
}) => (
  <Element
    {...rest}
    aria-label={children.replace(/[\s|\-|,]/g, '.').replace(/\d/g, ' $&')}
  >
    {children}
  </Element>
)

export default SRNumber
