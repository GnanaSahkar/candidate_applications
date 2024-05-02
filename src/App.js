import React from 'react';
import Filter from './Components/filter';
import JobList from './Components/jobList';

const App = () => {
  return (
    <div>
      <h1>Candidate Job Application</h1>
      <Filter />
      <JobList />
    </div>
  );
};

export default App;
