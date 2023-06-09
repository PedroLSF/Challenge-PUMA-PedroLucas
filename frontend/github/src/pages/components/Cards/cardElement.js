import React, { useReducer } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineStar, AiFillStar, AiOutlineCloseSquare } from 'react-icons/ai'
import {toggleUser, deleteUser} from '../../services/authService'

const Card = ({ user, replace }) => {

  // Aqui está o meu Card que é renderizado na minha Lista, basicamente é toda id visual do Card, utiliza o handToggle e handle delete para trabalhar com a marcação da estrela e do deletar

  const handleToggle = async (evento) => {
    evento.preventDefault();
    const response = await toggleUser(user.username);
    replace();
  }

  const handleDelete = async (evento) => {
    evento.preventDefault();
    const response = await deleteUser(user.username);
    replace();
  }


  return (
    <div className='Card fundoPesquisa flex p-5 mt-5 rounded-sm relative'>
        <img className = "rounded-full h-24" src={user.avatar} />
        <div className='flex flex-col text-stone-200 mt-2 ml-12'>
        {user.nome ? (
          <p id = "nome" className='font-display mb-2 text-2xl font-semibold'>{user.nome}</p>
        ) : (
          <p className='font-display mb-2 text-2xl font-semibold text-stone-500 line-through'>Usuário sem nome</p>
        )}
        
        <Link className='flex items-center underline-offset-2 underline' to= {user.url}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-github m-3" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          {user.username}
        </Link>
        </div>
        <button 
          onClick = {handleToggle} 
          type="button" 
          className="star right-2 top-2 h-8 w-16 absolute flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
        {user.estrela ? (
          <AiFillStar className='iconStar fill-yellow-500' />
        ) : (
          <AiOutlineStar />
        )}
          Star
        </button>

        <button onClick = {handleDelete} className='deleteButton text-white hover:text-red-500 absolute right-2 bottom-2'>
          <AiOutlineCloseSquare />
        </button>
    </div>
  )
}

export default Card