// Create a countdown Timer for next olympics

const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");

const date = date2-date1;
const days = Math.floor(date/(1000*60*60*24)); // Convert miliseconds to days
const hours = Math.floor((date/(1000*60*60))%24);
const minutes = Math.floor((date/(1000*60))%60);
const seconds = Math.floor((date/(1000))%60);

console.log(`Olympics CountTime : Days:${days} hour:${hours} minute:${minutes} second:${seconds}`);