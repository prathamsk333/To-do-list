import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-violet-300">
        <div className="flex items-center justify-between ">
          <h1 className="text-3xl font-bold text-violet-800 mb-2">
            {project.title}
          </h1>
          <button className="text-purple-500 hover:text-red-500" onClick={onDelete}>Delete</button>
        </div>
        <p className="mb-6 text-purple-500 ml-1">{formattedDate}</p>
        <p className="text-stone-700 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
    </div>
  );
}
