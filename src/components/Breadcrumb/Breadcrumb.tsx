import React, { FunctionComponent } from 'react'
import { CommonProps } from '../../types'

interface BreadcrumbProps extends CommonProps {
  'aria-label'?: string
}

const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({
  as: Element = 'nav',
  children,
  'aria-label': label = 'Breadcrumb',
  ...rest
}) => (
  <Element {...rest} role="list" aria-label={label}>
    {children}
  </Element>
)

export default Breadcrumb
