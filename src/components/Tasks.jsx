import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className=" text-2xl font-bold text-violet-800 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-purple-900 my-4">
          This project does not have any task yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-violet-100">
          {tasks.map((el) => {
            return (
              <li key={el.TaskId} className="flex justify-between my-4">
                <span>{el.text}</span>
                <button
                  onClick={() => {
                    onDelete(el.TaskId);
                  }}
                  className="text-violet-800 hover:text-red-600"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
