import {months} from "./months";

export const getHeaderTitles = (pathName, month) => {
    const titles = {
        schedule: [months[month], 'Teams', 'Location', 'Time'],
        gameDetails: ['Date', 'Teams', 'Location', 'Time']
    }
    return titles[pathName];
}

