import { useState } from 'react'

import ProjectsSidebar from './components/ProjectsSidebar'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import ProjectDetail from './components/ProjectDetail'



function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectID,
        id: taskId,
      }

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      }
    })
  }

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: id
      }
    })
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {

      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectID)
      }
    })

  }
  console.log(`tasks app: ${projectsState.tasks.length}, ${projectsState.projects.length}`)

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectID)

  let content = <ProjectDetail
    project={selectedProject}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectsState.tasks}

  />

  if (projectsState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectID={projectsState.selectedProjectID}
      />
      {content}
    </main>
  )
}

export default App;

