//Base URL
const base_url = 'https://api.rawg.io/api/';
const key = "4ed49493b43d4abc8bc069a9f5519ea7";

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay(); 
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`

//Popular games
//const popular_games = `games?key=${process.env.KEY_RAWG_API}&dates=${lastYear},${currentDate}&oredering=-rating&page_size=10`;
const popular_games = `games?key=4ed49493b43d4abc8bc069a9f5519ea7&dates=${lastYear},${currentDate}&oredering=-rating&page_size=10`;
const upcoming_games = `games?key=4ed49493b43d4abc8bc069a9f5519ea7&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `games?key=4ed49493b43d4abc8bc069a9f5519ea7&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${new_games}`