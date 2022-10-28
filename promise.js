//  Variables that describe the scenario
let YourTip = 15;
let waiterMoney = 0;
let badReview = false;

// ** Create a Promise object through javascript
let promise = new Promise((resolve, reject) => {
  let hasSoup = true;

  if (hasSoup == true) {
    resolve('Success!');
  } else {
    reject('Failed!');
  }
});

// What does this print IF hasSoup is true? What if it's false?
console.log(promise)


async function getUserData () {
    // instead of .then and .catch we can use try and catch
    try {
      const userData = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const user = await userData.json()
  
      // If you console log user what would get printed out?
      return user
    }
  
    catch (error) {
      console.error(error)
    }
  
  }
  
  console.log(getUserData())