import {useLocation, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {tableData} from "../data/tableData";
import Table from "./Table";
import {getHeaderTitles} from "../data/headerTitles";


const GameDetails = () => {
    const navigate = useNavigate();
    const id = useParams().id;
    const location = useLocation();
    const pathName = location.pathname.split('/')[1]; // The first element of the array is null since pathname starts with / and the first element is the part before first / which is empty.
    const gameWithId = tableData.games.filter(game => game.id === id); // This line will return a game object which has the same id in the param.
    const gameMonth = gameWithId[0].date.split("/")[0];
    console.log('gameWithId', gameWithId[0].date);
    const titles = getHeaderTitles(pathName, gameMonth);

    return (
        <div>
            <h1>Details For The Game - {id}</h1>
            <Table games={gameWithId} titles={titles}/>

            {/*<h2>Game Location:</h2>*/}
            {/*<LocationTable/>*/}

            <button type="button" className="btn btn-secondary" onClick={() => navigate('/schedule')}>Back to the
                Schedule Page
            </button>
        </div>
    );
}

export default GameDetails;