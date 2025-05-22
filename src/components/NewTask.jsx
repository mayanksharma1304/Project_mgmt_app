import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleOnChange = (event) => setTaskText(event.target.value);
  const handleOnClick = () => {
    onAddTask(taskText);
    setTaskText("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleOnChange}
        value={taskText}
      />
      <button
        onClick={handleOnClick}
        className="text-stone-700 hover:text-stone-900"
      >
        Add Task
      </button>
    </div>
  );
}
