import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import UsersList from "./components/UsersList";
import "./App.css";

function App() {
  return (
    <main>
      <h1>React Forms Homework</h1>

      <ControlledForm />
      <UncontrolledForm />
      <UsersList />
    </main>
  );
}

export default App;
