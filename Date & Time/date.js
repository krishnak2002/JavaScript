// Create a date 

const d = new Date(); // Find out the current date
console.log(d);
// OP: 2025-05-03T11:51:38.739Z :: Lets do it in simple format 

// // using toDateString()
// console.log(d.toDateString()); // Sat May 03 2025
// console.log(d.toString()); // Sat May 03 2025 17:25:55 GMT+0530 (India Standard Time)
// console.log(d.toISOString()); // 2025-05-03T11:56:25.716Z

console.log(typeof d);

const d1 = new Date(1000); // 1000 in milisecond
console.log(d1); // 1970-01-01T00:00:01.000Z
// Means we are try to find out the date 1970 se 1000 mili second aage

const d2 = new Date(20000);
console.log(d2); // 1970-01-01T00:00:20.000Z

// Some other functionality

console.log(d.getDate()); // If only needed date
console.log(d.getDay()); // 6 :: Is show the saturday
// sun, mon, Tue, wed, thu, fri, sat
// 0     1    2    3    4    5    6

console.log(d.getMonth()); // 4 ::  may because jan 0 and feb 1, march 3 .....
console.log(d.getFullYear()); // 2025
console.log(d.getMilliseconds()); // 114 show current milisecond of time
console.log(d.getMinutes()); // 48 Current min of my system
console.log(d.getTime()); // 1746275355807 :: This is form in milisecond and this is calculated from 1 jan 1970 to 03 may 2025

// Another method to calculate date in milisecond
const now  = Date.now();
console.log(now); // 1746275467335 Date in milisecond


// Another format of date
const d5 = new Date("2025-05-03");
console.log(d5); // 2025-05-03T00:00:00.000Z
console.log(d5.toDateString()); // Sat May 03 2025
// in the form     year/ month / date / hour / minute / second/ milisecond
const date = new Date(2025,4,3);
console.log(date.toString());
// Number will be start from 0 based
// String will be 1 based


