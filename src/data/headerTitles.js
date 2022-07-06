import {months} from "./months";

export const getHeaderTitles = (pathName, month) => {
    const titles = {
        schedule: [months[month], 'Teams', 'Location', 'Time'],
        gameDetails: {
            details: ['Date', 'Teams', 'Location', 'Time'],
            locationDetails: ['Location Name', 'Address', 'Map']
        }
    }
    return titles[pathName];
}

