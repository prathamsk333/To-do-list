import noProjectImage from "../assets/notes.png";
import Button from "./Button";

export default function NoProjectSelected({onStartAddProject}) {
  

  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="notes image"
        className="w-40 h-32 object-contain mx-auto "
      />
      <h2 className="text-xl font-bold text-purple-900 my-4">
        No Project Selected
      </h2>
      <p className="text-violet-600 mb-4">
        Select a Project or get started with new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new Project</Button>
      </p>
    </div>
  );
}
