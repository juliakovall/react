import { Suspense } from "react";
import MessageComponent from "./components/MessageComponent";
import "./App.css";

const getMessage = () => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Data loaded successfully from Promise!");
    }, 2000);
  });
};

const messagePromise = getMessage();

function App() {
  return (
    <main>
      <h1>React use Hook Homework</h1>

      <Suspense fallback={<p>Loading message...</p>}>
        <MessageComponent messagePromise={messagePromise} />
      </Suspense>
    </main>
  );
}

export default App;
