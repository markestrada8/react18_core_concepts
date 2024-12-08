import { useRef } from 'react'
import Input from './Input'
import Button from './Button'
import Modal from './Modal'

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef()
  const title = useRef()
  const description = useRef()
  const dueDate = useRef()



  function handleSave() {

    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate === '') {
      modal.current.open()
      return
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    })
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
        <p className='text-stone-400 mb-4'>Please enter valid values in all form fields</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <Button
              className={'text-stone-800 hover:text-stone-950'}
              onClick={onCancel}
            >Cancel</Button>
          </li>
          <li>
            <Button
              className={'bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md'}
              onClick={handleSave}
            >Save</Button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={title} type="text" />
          <Input label="Description" textarea ref={description} />
          <Input label="Due Date" ref={dueDate} type="date" />
        </div>
      </div>
    </>
  )
}
