import UserList from "./components/NoteList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddNote";
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
