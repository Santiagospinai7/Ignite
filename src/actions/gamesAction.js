import axios from "axios";
import {popularGamesURL, upcomingGamesURL, newGamesURL} from '../api'

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
    const newGameData = await axios.get(newGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL())
    dispatch({
        type: "FETCH GAMES",
        payload:{
            pupular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGameData.data.results,
        }
    })
}