import React, { FunctionComponent } from 'react'
import { CommonProps } from '../../types'

interface AlertProps extends CommonProps {
  /** For noncritical notifications, set this to queue the message to be read
   * when possible instead of it being read immediately by the screenreader */
  minor: boolean
}

const Alert: FunctionComponent<AlertProps> = ({
  as: Element = 'div',
  children,
  minor,
  ...rest
}) => (
  <Element
    {...rest}
    role="alert"
    aria-atomic="true"
    aria-live={minor ? 'polite' : undefined}
  >
    {children}
  </Element>
)

export default Alert
