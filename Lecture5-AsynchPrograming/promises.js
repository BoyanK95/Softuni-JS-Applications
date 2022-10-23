let guestCount = 99;

let engagementPromise = new Promise(function (resolve, reject) {
  if (guestCount > 100) {
    setTimeout(function () {
        reject("Wedding too big");
    }, 1000)
  } else {
    setTimeout(function () {
        resolve("Let's get married");    
    }, 4000)
  }
});

engagementPromise.then(function (message) {
  console.log("Promise fulfilled !!!");
  console.log(message);
})
.catch(function (reason) {
    console.log('Promise rejected');
    console.log(reason);
})
console.log('Preparations!');