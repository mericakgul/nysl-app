import Table from "./Table";
import './Schedule.css';
import {tableData} from "../data/tableData";
import {useLocation} from "react-router-dom";
import {getHeaderTitles} from "../data/headerTitles";

const Schedule = () => {
    // Find out how many different months are there?
    const allMonths = tableData.games.map(({date}) => date.split("/")[0]); // This line gets each month value from the games
    const monthNumbers = [...new Set(allMonths)]; // This line removes the duplicated month values to find how many unique months there are. It is like ['09', '10']
    const location = useLocation();
    const pathName = location.pathname.split('/')[1]; // The first element of the array is null since pathname starts with / and the first element is the part before first / which is empty.

    return (
        <div>
            <h2>Fall Schedule</h2>
            {
                monthNumbers.map(monthNumber => {
                        const games = tableData.games.filter(game => game.date.match(monthNumber));
                        const titles = getHeaderTitles(pathName, monthNumber);
                        return <Table key={monthNumber} games={games} titles={titles}/>
                    }
                )
            }
        </div>
    );
}

// This is called default export
export default Schedule;