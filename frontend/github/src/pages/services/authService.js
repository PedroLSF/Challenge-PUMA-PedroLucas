import api from './api'
import { toast } from 'react-toastify';

const addUser = (addUserValues) => 
    api.post('/users', addUserValues)
        .then((response) => response)
        .catch((err) => toast.error(err.response.data.message));

const getUser = () => 
    api.get(`/users`)
        .then(response => response)
        .catch((err) => toast.error(err.response.data.message))

const toggleUser = (username) =>
    api.patch(`/users/${username}/toggle-star`)
        .then(response => response)
        .catch((err) => toast.error(err.response.data.message))

const deleteUser = (username) =>
    api.delete(`/users/${username}`)
        .then(response => response)
        .catch((err) => toast.error(err.response.data.message))

export {addUser, getUser, toggleUser, deleteUser} 