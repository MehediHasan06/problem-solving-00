/**
 ** synchronous behavior -----------------------------
 *  */
/** 
const processOrder = () => {
  console.log("Start processing order for customer1.");
  let currentTime = new Date().getTime();
  while(currentTime+4000 >= new Date().getTime()); // waiting 4s 
  // the whole code waits in between this 4s. After executing this line, the other code process.
  console.log("Order processing is finished.");
};
console.log("Take order for the customer1.");
processOrder();
console.log("Serve the order for the customer1.");
*/


/**
 ** asynchronous behavior - adding setTimeout() to add async behavior -------------------
 * */
/* const processOrder1 = () => {
  console.log("Start processing order for customer1.");
  // at first, all of the js code are in the JS engine's main thread call stack. As, setTimeout() is an asynchronous function, the js code push this to the webAPI's and continue executing other codes at the call stack. After 2s, the webAPI send the code to the callback queue. At this time, event loop keep monitoring that if the main call stack is empty or, not. If the call stack is empty, then it pushes the code inside the setTimeout() from the callback queue to the call stack. Then it executes.

  setTimeout(()=> {
    console.log("cooking completed.");
  },2000);
  console.log("Order processing is finished.");
};
console.log("Take order for the customer1.");
processOrder1();
console.log("Serve the order for the customer1.");
*/


//But, it hampers the flow control of the code. We don't have the execution order of the codes. We can use callback to control the execution order flow.
/**
 ** Use callback with async function -----------------------------------
*/
// const takeOrder = (customer,callback) => {
//   console.log(`Take order for the ${customer}.`);
//   callback(customer);
// };
// const processOrder = (customer,callback) => {
//   console.log(`Start processing order for ${customer}.`);
//   setTimeout(()=> {
//     console.log("cooking completed.");
//     console.log("Order processing is finished.");
//     callback(customer);
//   },2000);
// };
// const completeOrder = (customer) => {
//   console.log(`Serve the order for the ${customer}.`);
// };

// takeOrder("customer1", (customer) => {
//   processOrder("customer1",(customer) => {
//     completeOrder("customer1");
//   });
// });

// but it's creating a nested callback which is called callback hell. To get more readable code we should avoid this pattern with promise

/**
 ** Promise -------------------------------------
*/
//If JS get a promise, then it pushes it to the webAPI's and then callback queue. Then event loop monitor the call stack and when the call stack becomes empty it pushes the codes to the call stack.
let hasMeeting = false;
const meeting = new Promise((resolve,reject) => {
  if(!hasMeeting){
    const meetingDetails = {
      name: "standup",
      via: "g-meet",
      time: "3:00 PM"
    };
    resolve(meetingDetails);
  } else {
    reject(new error("No meeting !"));
  };
});
const meetingSchedule = (meetingDetails) => {
  const calendar = `${meetingDetails.name} will be at ${meetingDetails.time}`;
  return Promise.resolve(calendar);
}

// meeting
//   .then(meetingSchedule)
//   .then((res) => {
//     console.dir(res);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

// console.log("Proof of async behavior. It will be on the console at first. Then the promise will be added");
/**
 * * I want to write the order options example with promise. --------
 */
const takeOrderFunc1 = (customer) => {
  const res = `1. Take order for the ${customer}.`;
  console.log(res);
};
const processOrderFunc1 = (customer) => {
  return new Promise((resolve, reject) => {
    console.log(`2. Start processing order for ${customer}.`);
    setTimeout(()=> {
      console.log("3. cooking completed.");
      console.log("4. Order processing is finished.");
      resolve();
    },2000);
  });
};
const completeOrderFunc1 = (customer) => {
  const res = `5. serve the order for the ${customer}`;
  console.log(res);
};
// takeOrderFunc1("customer 3");
// processOrderFunc1("customer 3")
//   .then(() => completeOrderFunc1("customer 3"))


// it's not also readable for big program. Lot's of then and condition flow.
/**
 ** async-await
 */
function helloWorld() {
  return Promise.resolve("Hello !");
};
async function helloWorld2() {
  return "Hello !";
};
console.log(helloWorld());
console.log(helloWorld2());
// both of them are returning the promise 













