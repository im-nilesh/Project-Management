import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import Projectsidebar from "./Components/ProjectsSideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Projectsidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
