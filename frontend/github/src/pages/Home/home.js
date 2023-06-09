import Cardlist from '../components/Cards/cardList';
import Navbar from '../components/NavBar/navbar';
import { getUser } from '../services/authService';
import { useState, useEffect } from 'react';
import { AiOutlineSortAscending, AiOutlineSortDescending} from 'react-icons/ai';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [sort, setSort] = useState(false)

    const [cards, setCards] = useState([]);

    useEffect(() => {
        getAllCards();
    }, [])

    const getAllCards = async () => {
        const response = await getUser();
        console.log(response.data)
        setCards(response.data);
    }

    const handleSortAsc = () => {
        const sortedData = [...cards].sort((a, b) => a.nome.localeCompare(b.nome));
        setCards(sortedData);
        setSort(true);
    };

    const updateAllCards = async () => {
        const response = await getUser();
        if(sort){
            const sortedData = [...response.data].sort((a, b) => a.nome.localeCompare(b.nome));
            setCards(sortedData);
        }else{
            setCards(response.data);
        }
    }

    return(
        <main>
            <Navbar replace = {getAllCards} />
            <div className='flex justify-end items-center mt-4 w-5/6'>
            <button onClick={handleSortAsc} className='text-white hover:text-yellow-500'>
                    <AiOutlineSortAscending className='w-10 h-10'/>
            </button>
            </div>
            <div className = "flex justify-center">
                <Cardlist cards = {cards} replace ={updateAllCards}/>
            </div>
            <ToastContainer limit={3} />
        </main>
    )
}

export default Home;