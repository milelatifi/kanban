import React from 'react';
import Tasks from './components/Tasks'; 

function App() {
  const title = 'To Do';
  const tasksDescription = 'Work 8h';
  const id = 'Monday';

  return (
    <>
      <Tasks title={title} tasks={tasksDescription} id={id} />
      <Tasks title='Done' tasks={tasksDescription} id={id} />
      <Tasks title='In process' tasks={tasksDescription} id={id} />
      <Tasks title= 'To Do' tasks={tasksDescription} id={id} />
    </>
  );
}

export default App;

