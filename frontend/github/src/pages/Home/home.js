import Cardlist from '../components/Cards/cardList';
import Navbar from '../components/NavBar/navbar';
import { getUser } from '../services/authService';
import { useState, useEffect } from 'react';
import { AiOutlineSortAscending } from 'react-icons/ai';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    // Essa é minha página principal, aqui eu faço tanto a ordenação quanto colocar os cards na tela com 2 Hooks "useState" e "useEffect"

    const [sort, setSort] = useState(false)

    const [cards, setCards] = useState([]);

    useEffect(() => {
        getAllCards();
    }, [])

    const getAllCards = async () => {
        const response = await getUser();
        setCards(response.data);
        setSort(false);
    }

    const handleSortAsc = () => {
        const sortedData = [...cards].sort(
            function(a, b) {
                if (!a.nome) {
                   return +1;
                }
            
                if (!b.nome) {
                   return -1;
                }

                return a.nome.localeCompare(b.nome);
            });
        setCards(sortedData);
        setSort(true);
    };

    const updateAllCards = async () => {
        const response = await getUser();
        if(sort){
            const sortedData = [...response.data].sort(
                function(a, b) {
                    if (!a.nome) {
                       return +1;
                    }
                
                    if (!b.nome) {
                       return -1;
                    }
    
                    return a.nome.localeCompare(b.nome);
                });
            setCards(sortedData);
        }else{
            setCards(response.data);
        }
    }

    return(
        <main>
            <Navbar replace = {getAllCards} />
            <div className='flex justify-end items-center mt-4 w-5/6'>
            <button onClick={handleSortAsc} id = "ordenarButton" className='text-white hover:text-yellow-500'>
                    <AiOutlineSortAscending className='w-10 h-10'/>
            </button>
            </div>
            <div className = "flex justify-center">
                <Cardlist cards = {cards} replace ={updateAllCards}/>
            </div>
            <ToastContainer limit={3} className= "erroCard" />
        </main>
    )
}

export default Home;