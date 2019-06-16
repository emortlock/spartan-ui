import React, { FunctionComponent, ReactNode, useRef } from 'react'
import FocusLock from 'react-focus-lock'
import { CommonProps } from '../../types'
import { useBodyScrollLock, useClickAway, useOnKeyPress } from '../../hooks'
import { KEY } from '../../constants'

interface RenderProps {
  headingProps: object
}

interface ModalProps extends CommonProps {
  children: (props: RenderProps) => ReactNode
  id: string
  open?: boolean
  alert?: boolean
  onClose: (e: MouseEvent | KeyboardEvent) => void
  focusLockOptions?: object
}

const Modal: FunctionComponent<ModalProps> = ({
  as: Element = 'div',
  children,
  id,
  open = false,
  alert = false,
  onClose,
  focusLockOptions,
  ...rest
}) => {
  const modalRef = useRef<HTMLElement>(null)

  useBodyScrollLock(open)

  if (!alert) {
    useClickAway(modalRef, onClose)
    useOnKeyPress(KEY.ESCAPE, onClose)
  }

  const headingProps = {
    id: `${id}-heading`,
  }

  return (
    <>
      {open && (
        <FocusLock returnFocus {...focusLockOptions}>
          <Element
            {...rest}
            ref={modalRef}
            role={alert ? 'alertdialog' : 'dialog'}
            id={id}
            hidden={!open}
            tabIndex={open ? 0 : -1}
            aria-hidden={!open}
            aria-labelledby={`${id}-heading`}
          >
            {children({ headingProps })}
          </Element>
        </FocusLock>
      )}
    </>
  )
}

export default Modal
