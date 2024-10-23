import NewProject from "./Components/NewProject";
import Projectsidebar from "./Components/ProjectsSideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Projectsidebar />
      <NewProject />
    </main>
  );
}

export default App;
