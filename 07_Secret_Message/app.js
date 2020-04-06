let secretMessage = 
    ['Learning', 'is', 'not', 'about', 'what',
     'you', 'get', 'easily', 'the', 'first', 'time,',
     'it', 'is', 'about', 'what', 'you', 'can', 'figure',
     'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove the last string of the array.
secretMessage.pop();

// Add the words 'to' and 'Program' as separate strings.
secretMessage.push('to', 'Program');

// Change the word 'easily' to the word 'right.'
secretMessage[7] = 'right';

// Remove the first string of the array.
secretMessage.shift();

// Add the string 'Programming' to the beginning of the array.
secretMessage.unshift('Programming');

/*
  Remove the strings 'get', 'right', 'the', 'first', 'time,' 
  and replace them with the single string 'know.'
*/
secretMessage.splice(6, 5, 'know');

// Print the secret message as a sentence.
console.log(secretMessage.join(' '));
