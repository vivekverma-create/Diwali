import Topbar from "./components/topbar/Topbar";

import "./app.scss"



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
