import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import Button from './Button'


const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  })

  return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 py-6 px-12 rounded-md shadow-md'>
      {children}
      <form method="dialog" className='mt-4'>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>
    , document.querySelector("#modal-root"))
})

export default Modal