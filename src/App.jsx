import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSideBar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  var handleAddProject = () =>
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });

  const handleSelectProject = (projectId) =>
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });

  var handleCancelProject = () =>
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });

  const handleDeleteProject = () =>
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });

  var handleSaveNewProject = (projectData) => {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  var handleAddTasks = (text) => {
    setProjectState((prevState) => {
      const newTask = {
        text: text,
        id: Math.random(),
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  var handleDeleteTasks = (id) =>
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });

  var selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  var content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTasks}
      onDeleteTask={handleDeleteTasks}
      tasks={projectState.tasks.filter(
        (task) => task.projectId == projectState.selectedProjectId
      )}
    />
  );

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        saveNewProject={handleSaveNewProject}
        onCancelProject={handleCancelProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onAddProject={handleAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
