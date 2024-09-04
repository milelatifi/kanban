const Tasks = ({ title, tasks, id }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4 max-w-md w-full">
        <div className="bg-red-500 p-4 text-xl font-semibold text-white">
          {title}
        </div>
  
        <div className="flex gap-4 justify-between py-2 px-4 items-center text-gray-700">
          <span>{id}</span>
          <span>{tasks}</span>
        </div>
      </div>
    );
  };
  
  export default Tasks;
  