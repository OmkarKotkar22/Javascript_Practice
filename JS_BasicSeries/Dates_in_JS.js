let mydate = new Date();
console.log(mydate);

console.log("Get Year: " +mydate.getFullYear());
console.log("Get Month: " +mydate.getMonth());
console.log("Get Date: " +mydate.getDate());
console.log("Get Hours: " +mydate.getHours());
console.log("Get Minutes: " +mydate.getMinutes());
console.log("Get Seconds: " +mydate.getSeconds());
console.log("Get Milliseconds: " +mydate.getMilliseconds());

console.log("toString(): " + mydate.toString());
console.log("toDateString(): " + mydate.toDateString());
console.log("toTimeString(): " + mydate.toTimeString());
console.log("toISOString(): " + mydate.toISOString());
console.log("toUTCString(): " + mydate.toUTCString());
console.log("toLocaleString(): " + mydate.toLocaleString());

console.log(typeof mydate);

let myCreatedDate = new Date(2026, 11, 25, 10, 30, 0);
console.log("Created Date: " + myCreatedDate.toString());

let myCreatedDate2 = new Date("December 01, 2026 10:30:00");
console.log("Created Date: " + myCreatedDate2.toString());

let myCreatedDate3 = new Date("2026-02-11T10:30:00");
console.log("Created Date: " + myCreatedDate3.toString());

let mytimeStamp = Date.now();
console.log("Current Timestamp: " + mytimeStamp);

console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds


