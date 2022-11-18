import "./App.scss";

import StarsFunk from "./components/StarsFunk";
import StarClass from "./components/StarClass";
function App() {
  return (
    <>
      <StarsFunk rate={3} />
      <StarClass rate={4} />
    </>
  );
}

export default App;
