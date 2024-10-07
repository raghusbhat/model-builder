import Navbar from "./components/features/Navbar";
import Sidebar from "./components/features/Sidebar";
import MainScreen from "./components/features/MainScreen";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainScreen />
      </div>
    </div>
  );
}

export default App;
