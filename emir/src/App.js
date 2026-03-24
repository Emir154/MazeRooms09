import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/navigation-bar/navigation-bar";
import { Users } from "@/pages/users/users";
import { EditUsers } from "./pages/edit-user/edit-user";

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <main>
        <Routes>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/edit-users" element={<EditUsers />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
