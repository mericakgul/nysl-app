import {useParams} from "react-router-dom";

const Schedule = () => {
    let params = useParams();
    return (
        <div>
            <h2>Lalalalala Events {params.id}</h2>
            <dl>
                <dt>August 4 lalalalal</dt>
                <dd>NYSL Fundraiser lalalalal</dd>
                <dt>August 16 lala</dt>
                <dd>Season Kick-off: Meet the Teams lalalal</dd>
                <dt>September 1 lalalala</dt>
                <dd>First Game of the Season (Check Game Schedule for details) lalalalla</dd>
            </dl>
        </div>
    );

}

export default Schedule;