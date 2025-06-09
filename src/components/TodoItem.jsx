import { useRef, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

function TodoItem(props) {
  const dialog = useRef();
  const [title, setTitle] = useState(props.todo.title);
  const [isEditing, setIsEditing] = useState(false);

  const openModal = (isEditing) => {
    setIsEditing(isEditing);
    dialog.current.showModal();
  };

  const closeModal = () => {
    dialog.current?.close();
  };

  const clickOutsideModal = (e) => {
    if (e.target === dialog.current) {
      closeModal();
    }
  };

  const submitDialogForm = (e) => {
    e.preventDefault();

    if (isEditing) {
      props.updateTask({ title: title, date: props.todo.date }, props.id);
    } else {
      props.deleteTask(props.id);
    }
    closeModal();
  };

  return (
    <>
      <li className="flex bg-white rounded shadow-sm p-4 mt-4 first:mt-0">
        <div className="flex gap-x-4 mr-auto items-center">
          <div className="h-6 w-6 rounded-full shadow-sm text-white text-sm bg-teal-400 text-center content-center">
            {props.id + 1}
          </div>
          <div>
            <p className="font-semibold">{props.todo.title}</p>
            <p className="text-sm text-gray-400">{props.todo.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            onClick={() => openModal(true)}
            type="button"
            className="todo-btn"
          >
            <MdEdit />
          </button>
          <button
            onClick={() => openModal(false)}
            type="button"
            className="todo-btn"
          >
            <MdDelete />
          </button>
        </div>
      </li>
      <dialog
        ref={dialog}
        onClick={clickOutsideModal}
        className="rounded-md w-[480px]"
      >
        <form method="dialog" onSubmit={submitDialogForm} className="p-6">
          <h3 className="font-semibold text-xl">
            {isEditing ? "Edit Task" : "Do you want to delete?"}
          </h3>
          <div className="mt-2">
            {isEditing ? (
              <input
                type="text"
                className="focus:outline-none w-full border rounded py-2 px-3"
                maxLength="30"
                placeholder="Type something here..."
                autoFocus
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <p>This will permanently delete this task.</p>
            )}
          </div>
          <div className="mt-12 text-end space-x-2">
            <button
              onClick={closeModal}
              type="button"
              className="rounded border border-gray-200 px-3 py-2 hover:bg-gray-50"
            >
              Close
            </button>
            <button
              type="submit"
              className={`rounded px-3 py-2 text-white ${
                isEditing
                  ? "bg-teal-500 hover:bg-teal-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {isEditing ? "Confirm" : "Delete"}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default TodoItem;
