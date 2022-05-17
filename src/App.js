import Todo from "./Component/Todo";
import Modal from "./Component/Modal";
import Backdrop from "./Component/Backdrop";

function App() {
  return (
    <div>
      <h1>My tools</h1>
      <Todo  text="testing testing"/>
      <Todo text="1" />
      <Todo text="2" />
      <Todo text="3"/>
    </div>
  );
}

export default App;
