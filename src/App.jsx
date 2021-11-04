import Topbar from "./components/topbar/Topbar";

import "./app.scss"

import Diwali from "./components/Diwali/Diwali";


function App() {
  return (
    <div className="app">
      <Topbar />


      <div className="sections">
        < Diwali />
      </div>

    </div>
  );
}

export default App;
