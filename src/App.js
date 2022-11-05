import "./App.scss";

import StarsFunk from "./components/StarsFunk";
import StarClass from "./components/StarClass";
function App() {
  return (
    <>
      <StarsFunk id={5} />
      <StarClass star={5} />
    </>
  );
}

export default App;
