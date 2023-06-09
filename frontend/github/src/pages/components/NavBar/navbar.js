import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import { addUser } from '../../services/authService';


const Navbar = ({replace}) => {

  const [inputValues, setInputValues] = useState({
    username: ''
  });
  
  const handleChangeValues = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const response = await addUser(inputValues);
    replace();
}

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  }

  return (
    <header className='fundoPesquisa flex justify-start items-center gap-6'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" className="bi bi-github m-3" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        <div className='w-full flex justify-center items-center'>
            <div className='relative'>
                <BsSearch className='absolute top-2 left-2 text-gray-400 z-10'/>
                <input onChange={handleChangeValues} onKeyDown={handleKeyDown} type="name" placeholder='Search to...' name="username" className='pl-12 pt-1 pb-1 mr-6 fundoPesquisa border rounded focus:border-none focus:outline focus:outline-blue-500 text-white'/>
            </div>
            <button onClick={handleSubmit}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" className="bi bi-plus-square hover:fill-green-500" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
            </button>
        </div>
    </header>
  )
}

export default Navbar;