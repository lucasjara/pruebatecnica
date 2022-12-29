import axios from "axios";

const ListAllDogs = async (state) => {
    const peticion = await axios.get('https://dog.ceo/api/breeds/list/all')
    state(peticion.data.message);
    //state(peticion.message);
}

export {
    ListAllDogs
}