// The function returns actual hours of sleep for each night of the last week.
const getSleepHours = day => {
    day = day.toLowerCase();
    if (day === 'monday' || day === 'tuesday' || day === 'wednesday' ||
        day === 'thursday' || day === 'friday') {
      return 7;
    } else if (day === 'saturday') {
      return 5;
    } else {
      return 10;
    }
  };
  
  // The function returns the total sleep hours that the user actually slept.
  const getActualSleepHours = () => {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday')
      + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday')
      + getSleepHours('Sunday');
  };
  
  // The function returns ideal hours of sleep for each night.
  const getIdealSleepHours = (idealHours = 8) => idealHours * 7;
  
  
  // The function calculate sleep debt.
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    console.log('Your actual sleep hours: ' + getActualSleepHours());
    console.log('Your ideal sleep hours: ' + getIdealSleepHours());
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours)
                  + ' hour(s) more sleep than you needed this week. Wake up early.');
    } else {
      console.log('You got ' + (idealSleepHours - actualSleepHours)
                  + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
  };
  
  calculateSleepDebt();
  