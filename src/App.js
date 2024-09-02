import React from 'react';

const card = (title, tasks, id) => { 
  return <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4 max-w-md w-full">
  <div className="bg-red-500 p-4 text-xl font-semibold text-white">
      {title}
  </div>
    
    <div className="flex gap-4 justify-between py-2 px-4 items-center text-gray-700">
      <span>{id}</span>
      <span>{tasks}</span>
    </div>
</div>
 }

function App() {
  const title = 'To Do';
  const tasks = 'Work 8h';
  const id = 'Monday';

    

  return (
    <>
   
      {card (title, tasks, id)}
      {card ('In process', 'Adjust the shadow of the info box', 'Monday')}
      {card ('Done', ' Change the backgroud color', 'Monday')}
      {card ('In Process', 'Remove the opacity of the images', 'Monday')}
      {card ('Done', ' Add Responsivity to the page', 'Monday')}
      {card ('To do', 'Check if font-size is 22px', 'Monday')}
      {card ('To Do', 'Add a flower icon ', 'Monday')}
      {card ('Done', ' Update profile picture ', 'Monday')}
  
    </>
  );
}

export default App;
