import React from 'react'
import Button from './Button'
// import PROJECT_DATA from '../data'

export default function Sidebar({ onStartAddProject, projects, onSelectProject, selectedProjectID }) {

  const contentToDisplay = projects.map((item) => {
    let classes = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

    if (item.id === selectedProjectID) {
      classes += ' bg-stone-800 text-stone-200'
    } else {
      classes += ' text-stone-400'
    }

    return <li key={item.id}>
      <Button
        className={classes}
        onClick={() => onSelectProject(item.id)}
      >{item.title}</Button>
    </li>
  })

  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r'>

      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>
          + Add Project
        </Button>
      </div>
      <ul className='mt-8'>
        {contentToDisplay}

      </ul>
    </aside>
  )
}
