import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from "./components/JobList";
import { Description } from "./components/Description";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/job/:id" element={<Description />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
