import React, {useState, useEffect} from 'react';
import './App.css';
import ContactCard from './components/ContactCard';

function App() {

  const [results,  setResults] = useState([]);

  useEffect(() => { fetch('https://randomuser.me/api/?results=10')
  .then(response => response.json())
  .then(data =>  {
    setResults(data.results)
  });
}, [])
 

  return (
    <div className="p-2 md:p-4 md:flex justify-evenly flex-wrap">
      {results.map((result, index) => {
        return (
        <ContactCard
        key = {index}
        avatarUrl = {result.picture.large}
        name = {result.name.first}
        age = {result.dob.age}
        email = {result.email}
        />
        )
      })}
    </div>
  )
}

export default App;
