import React,{useEffect} from 'react';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
//COMPONENTS
import Game from '../components/Game';
//Styling ans Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    //Get that data back
    const {popular, newGames, upcoming} = useSelector((state) => state.games);
    return(
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map((game) => (
                    <Game name={game.name} released={game.released} image={game.background_image} id={game.id} key={game.id}></Game>
                ))}
            </Games>
        </GameList>
    );
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;


export default Home;