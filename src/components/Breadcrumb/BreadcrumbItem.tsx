import React, { FunctionComponent } from 'react'
import { CommonProps } from '../../types'

interface BreadcrumbItemProps extends CommonProps {
  active: boolean
}

const BreadcrumbItem: FunctionComponent<BreadcrumbItemProps> = ({
  as: Element = 'span',
  children,
  active,
  ...rest
}) => (
  <Element {...rest} role="listitem" aria-current={active ? 'page' : undefined}>
    {children}
  </Element>
)

export default BreadcrumbItem
