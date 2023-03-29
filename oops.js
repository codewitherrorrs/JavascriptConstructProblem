//UC1
/*The Postal Index Number
(PIN) or PIN Code is a 6
digit code of Post Office
numbering used
by India Post.
Create a regex pattern to
validate PIN code 400088 PIN Code UC 1*/


const pinCode = "400088";
const pattern = /^(\d{6})$/;

if (pattern.test(pinCode)) {
  console.log("Valid PIN code");
} else {
  console.log("Invalid PIN code");
}

//UC2
/*Restrict the PIN code from
taking alphabets or special
characters at the
beginning.
Check for A400088 – this
should fail
PIN Code UC 2*/



const pinCode = "A400088";
const pattern = /^(?![^\d])(\d{6})$/;

if (pattern.test(pinCode)) {
  console.log("Valid PIN code");
} else {
  console.log("Invalid PIN code");
}

//UC3
// Restrict the PIN code from
// taking alphabets or special
// characters at the End.
// Check for 400088B – this
// should fail


function validatePin(pin) {
    const regex = /^\d{6}(?![A-Za-z!@#$%^&*()_+])$/;
    return regex.test(pin);
  }
  
  const pinToValidate = "400088B";
  if (validatePin(pinToValidate)) {
    console.log(`${pinToValidate} is valid.`);
  } else {
    console.log(`${pinToValidate} is invalid.`);
  }

  //UC4
  // Make sure 400 088 is also
// valid along with 400088



function validatePIN(pin) {
    // Remove any whitespace from the input
    pin = pin.replace(/\s/g, '');
  
    // Check that the input is six digits long
    if (/^\d{6}$/.test(pin)) {
      return true;
    }
  
    return false;
  }
  
  // Example usage:
  console.log(validatePIN('400 088')); // true
  console.log(validatePIN('400088')); // true
  console.log(validatePIN('123456')); // true
  console.log(validatePIN('12345')); // false
  console.log(validatePIN('1234567')); // false

  //UC5
  /*Validate Email address with a
regex. The email consists of
minimum 3 and optional 2 more
parts with mandatory @ and .
abc.xyz@bridgelabz.co.in
Here abc, bridgelabz and co are
mandatory and the remaining 2
are optional
To begin with lets validate the
mandatory part and start with abc
Email UC 1*/



const emailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

const email = 'abc.xyz@bridgelabz.co.in';

if (emailRegex.test(email)) {
  console.log('Email address is valid!');
} else {
  console.log('Email address is invalid.');
}

//UC6
// Ensure @ and validate the
// mandatory 2nd part i.e.
// bridgelabz

// Email UC 2


const emailRegex = /^([a-zA-Z0-9._%+-])+@(bridgelabz\.)+([a-zA-Z]{2,})$/;

const email = 'abc.xyz@bridgelabz.co.in';

if (emailRegex.test(email)) {
  console.log('Email address is valid!');
} else {
  console.log('Email address is invalid.');
}

//UC7
// Ensure “.” after bridgelabz
// and validate the
// mandatory 3rd part i.e. co


function validateEmail(email) {
    // add a dot after "bridgelabz" if it doesn't exist
    if (email.includes('bridgelabz') && !email.includes('.'))
      email = email.replace('bridgelabz', 'bridgelabz.');
  
    // split the email into three parts: local part, domain part, and third part
    const [localPart, domainPart, thirdPart] = email.split('@')[1].split('.');
  
    // check if the third part is "co"
    if (thirdPart !== 'co')
      return false;
  
    // validate the rest of the email using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // example usage
  const email1 = 'john.doe@bridgelabz.com.co';
  const email2 = 'jane.smith@bridgelabz.co';
  
  console.log(validateEmail(email1)); // false
  console.log(validateEmail(email2)); // true
  
  //UC8
  // Lets handle optional part
// i.e. xyz in
// abc.xyz@bridgelabz.co.in
// NOTE: make sure only
// following are valid special
// characters _,+,
// -,.
// proceeding to xyz Email UC 4


const email = 'abc.xyz@example.com'; // Replace with your email address

const match = email.match(/^([a-zA-Z0-9._+-]+)@([a-zA-Z0-9-]+\.[a-zA-Z]{2,})$/);
if (match) {
  const xyz = match[1].split('.').pop();
  console.log(xyz); // Outputs "xyz"
} else {
  console.log('Invalid email format');
}

//UC9
// Finally lets close the
// expression with
// supporting optional parts.
// Note: Top Level Domains
// (TLD) in the last part is the
// optional country code and

// its 2 characters only Email UC 5


const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\.[a-zA-Z]{2})?$/;

const email1 = 'example@email.com';
const email2 = 'example@email.co.uk';
const email3 = 'example@email';

console.log(emailRegex.test(email1)); // true
console.log(emailRegex.test(email2)); // true
console.log(emailRegex.test(email3)); // false