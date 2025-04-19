import NoteList from "./components/NoteList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNote from "./components/AddNote";
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteList/>}/>
        <Route path="add" element={<AddNote/>}/>
        <Route path="edit/:id" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
