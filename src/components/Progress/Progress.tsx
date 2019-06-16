import React, { FunctionComponent, ReactNode, useRef } from 'react'
import { CommonProps } from '../../types'
import { useSetFocus } from '../../hooks'

interface RenderProps {
  indicatorProps: object
  messageProps: object
}

interface ProgressProps extends CommonProps {
  children: (props: RenderProps) => ReactNode
  id: string
  loading?: boolean
  value?: number
  min?: number
  max?: number
  label: string
}

const Progress: FunctionComponent<ProgressProps> = ({
  as: Element = 'div',
  children,
  id,
  loading = false,
  value,
  min = 0,
  max = 100,
  label,
  ...rest
}) => {
  const indicatorRef = useRef<HTMLElement>(null)

  useSetFocus(indicatorRef, loading)

  const hasMessage = !label
  const isDeterminate = typeof value !== 'undefined'

  const indicatorProps = {
    ref: indicatorRef,
    tabIndex: loading ? 0 : undefined,
    'aria-busy': loading,
    'aria-label': hasMessage ? undefined : label,
    'aria-labelledby': hasMessage ? `${id}-message` : undefined,
    'aria-valuemax': isDeterminate ? max : undefined,
    'aria-valuemin': isDeterminate ? min : undefined,
    'aria-valuenow': isDeterminate ? value : undefined,
  }

  const messageProps = {
    id: `${id}-message`,
    role: 'staus',
    'aria-atomic': true,
    'aria-live': 'polite',
  }

  return (
    <Element {...rest} id={id}>
      {loading && children({ indicatorProps, messageProps })}
    </Element>
  )
}

export default Progress
