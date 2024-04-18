import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sort from "./Page_Topics/Sort.jsx";
import Bar from "./Page_Topics/Components/Bar.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sort />} />
        <Route path="/sorting/graph" element = {<Bar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
