import NewPorject from "./components/NewProject";
import Sidebar from "./components/sidebar";
import DefaultPage from "./components/DefaultPage";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined, 
    projects: []
  });

  function handleStartAddPorject () {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  }


  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewPorject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <DefaultPage onStartAddProject={handleStartAddPorject} />;
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddPorject} 
      projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
