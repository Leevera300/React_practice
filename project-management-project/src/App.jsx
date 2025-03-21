import NewProject from "./components/NewProject";
import Sidebar from "./components/sidebar";
import DefaultPage from "./components/DefaultPage";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // Track only the project ID for simplicity
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.random(); // Random ID for the new task
      const newTask = {
        text: text,
        id: taskId,
        projectId: prevState.selected
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks], // Add new task
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          task => task.id !== taskId), // Filter out the deleted task
      };
    });
  }
  // Select a project by ID
  function handleSelectProject(projectId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId, // Set selected project ID
      };
    });
  }

  // Start adding a new project
  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null, // null indicates we are adding a new project
      };
    });
  }

  // Cancel adding a new project
  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined, // Reset to undefined when cancelling
      };
    });
  }

  // Add a new project to the state
  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random(), // Random ID for the new project
      };
      return {
        ...prevState,
        selectedProjectId: undefined, // Reset selectedProjectId
        projects: [...prevState.projects, newProject], // Add new project
      };
    });
  }

  // Delete a project from the state
  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined, // Reset selectedProjectId after deletion
        projects: prevState.projects.filter(
          project => project.id !== prevState.selectedProjectId // Filter out the deleted project
        ),
      };
    });
  }

  // Find the selected project based on the selectedProjectId
  const selectedProject = projectsState.projects.find(
    project => project.id === projectsState.selectedProjectId
  );

  let content = <SelectedProject 
  project={selectedProject} 
  onDelete={handleDeleteProject} 
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={projectsState.tasks}
    />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <DefaultPage onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
