let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const age = 18;

/*
  Early adults receive a race number at or above 1000. 
  All others receive a number below 1000.
*/
if (registeredEarly === true && age > 18) {
  raceNumber+=1000;
}

// Early adults run at 9:30 am.
if (registeredEarly === true && age > 18) {
  console.log(`The race starts at 9:30 am. Your race number is ${raceNumber}.`);
} // Late adults run at 11:00 am.
else if (registeredEarly === false && age > 18) {
  console.log(`The race starts at 11:00 am. Your race number is ${raceNumber}.`);
} // Youth registrants run at 12:30 pm regardless of registration.
else if (age < 18) {
  console.log(`The race starts at 12:30 pm. Your race number is ${raceNumber}.`);
} // Runners who are 18 years old should see the registration desk.
else {
  console.log(`Please come to the registration desk.\
 Your race number is ${raceNumber}.`);
}
