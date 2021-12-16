import axios from "axios";
import {popularGamesURL} from '../api'

//ACTION CREATOR
const fetchGames = (userData) => {
    return {
        type: "FETCH_GAMES",
        payload: userData,
    };
};

fetchGames({ user: "name" });


export const loadGames = () => async (dispatch) => {
    //FETCH AXIOS
    const popularData = await axios.get(popularGamesURL())
    dispatch({
        type: "FETCH GAMES",
        payload:{
            pupular: popularData.data.results,
        }
    })
}