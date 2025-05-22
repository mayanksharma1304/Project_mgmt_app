import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ saveNewProject, onCancelProject }) {
  const ModalRef = useRef();
  var title = useRef();
  var desc = useRef();
  var dueDate = useRef();

  const validateFields = () => {
    var enteredTitle = title.current.value;
    var enterdDesc = desc.current.value;
    var enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() == "" ||
      enteredTitle.trim() == "" ||
      enteredTitle.trim() == ""
    ) {
      ModalRef.current.open();
      return;
    }

    saveNewProject({
      title: enteredTitle,
      desc: enterdDesc,
      dueDate: enteredDueDate,
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <Modal ref={ModalRef} buttonLabel="okay">
        <h2 className="text-xl bold text-stone-500 my-4">
          There is some Error
        </h2>
        <p className="text-stone-700 mb-4">
          Please enter correct values for all the fields
        </p>
      </Modal>
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          onClick={onCancelProject}
          className="text-stone-800 hover:text-stone-950"
        >
          Cancel
        </button>
        <button
          onClick={validateFields}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </menu>
      <div>
        <Input type="text" label="Title" ref={title} />
        <Input label="Description" ref={desc} textArea={true} />
        <Input type="Date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
