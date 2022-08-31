import React, {useState} from 'react';

const ContactCard = (props) => {

    const [showAge, setShowAge] = useState(false);
  return (
    <div className='flex w-full min-w-fit lg:w-1/3 drop-shadow-md bg-sky-900 rounded-2xl mb-10 md:mr-2 p-4 md:py-8'>
      <img src={props.avatarUrl}
      alt="profile"
      className="mr-2 md:mr-8 rounded-full"></img>
      <div className='text-white data-container flex justify-between flex-col'>
        <h2>Name: {props.name}</h2>
        <p>Email: {props.email}</p>
        <div className='flex items-center mt-5'>
        <button
        onClick={() => setShowAge(!showAge)}
        className='bg-slate-400 hover:bg-slate-500 mr-4  p-2 rounded'>Show age</button>
        {showAge && <p> Age: {props.age} </p>}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;