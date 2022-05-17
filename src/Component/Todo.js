import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalisOpen] = useState(false);

  function deleteHandler() {
    setModalisOpen(true);
  }

  function closeModalHandler() {
    setModalisOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? <Modal closeModal={closeModalHandler} /> : null}
      {modalIsOpen ? <Backdrop closeModal={closeModalHandler} /> : null}
    </div>
  );
}

export default Todo;
