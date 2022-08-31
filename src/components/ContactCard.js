import React, {useState} from 'react';

const ContactCard = (props) => {

    const [showAge, setShowAge] = useState(false);
  return (
    <div className='flex w-1/2 bg-indigo-400 p-6 rounded-2xl mb-2 mr-2'>
      <img src={props.avatarUrl}
      alt="profile"
      className="mr-8"></img>
      <div className='text-white data-container flex justify-between flex-col'>
        <h2>Name: {props.name}</h2>
        <p>Email: {props.email}</p>
        <div className='flex justify-between items-center'>
        <button
        onClick={() => setShowAge(!showAge)}
        className='mr-4 text-black bg-gray-200 p-2 rounded'>Show age</button>
        {showAge && <p> Age: {props.age} </p>}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;