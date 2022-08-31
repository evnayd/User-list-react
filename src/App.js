import React from 'react';
import './App.css';
import ContactCard from './components/ContactCard';

function App() {
  const contacts = [
    { avatarUrl: 'https://via.placeholder.com/150',
      name:'Jenny Han',
      age:"30",
      email:"mail@mail.com"},
    { avatarUrl: 'https://via.placeholder.com/150',
      name:'Bob Bob',
      age:"39",
      email:"mail39bob@mail.com"},
    { avatarUrl: 'https://via.placeholder.com/150',
      name:'Mila Mila',
      age:"29",
      email:"mila1@mail.com"}
  ]
  return (
    <div>
      {contacts.map((contact, index) => {
        return (
        <ContactCard
        key = {index}
        avatarUrl = {contact.avatarUrl}
        name = {contact.name}
        age = {contact.age}
        email = {contact.email}
        />
        )
      })}
    </div>
  )
}

export default App;
