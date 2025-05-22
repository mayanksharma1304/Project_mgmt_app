import imageUrl from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={imageUrl}
        alt="an empty taks list "
        className="w-16 h-15 object-contain mx-auto"
      />
      <h2 className="text-xl bold text-stone-500 my-4"> No Project selected</h2>
      <p className="text-stone-400 mb-4">
        {" "}
        select a project or create a new one
      </p>
      <p className="mt-8">
        <Button onClick={onAddProject} label="Create a new project" />
      </p>
    </div>
  );
}
