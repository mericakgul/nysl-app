import React from 'react';
import details from "../details.json";
import {useParams} from "react-router-dom";

const gameDetails = details['games'];
const locations = details['locations'];

const LocationTable = () => {
    const id = useParams().id;
    const locationName = locations[gameDetails[id]['location']]['name'];
    const locationAddress = locations[gameDetails[id]['location']]['address'];
    const locationUrl = locations[gameDetails[id]['location']]['url'];
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Location Name</th>
                <th scope="col">Address</th>
                <th scope="col">Map</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{locationName}</td>
                <td>{locationAddress}</td>
                <td>
                    <div>
                        <iframe src={locationUrl} title= "Location map" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default LocationTable;