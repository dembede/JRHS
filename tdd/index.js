function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequst(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra information + ${response}`);
  });
}

/**
 * Using promises
 */
// makeRequest("Google")
//   .then((response) => {
//     console.log("Process response");
//     return processRequst(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   });

/**
 * Using async await
 */

async function doWork() {
  try {
    // const response = await makeRequest("Facebook");
    const response = await makeRequest("Facebook");
    console.log("response received");
    const processedResponse = await processRequst(response);
    console.log(processedResponse);
  } catch (error) {
    console.log(error);
  }
}

doWork();
