function makeRequest(location) {
  return new Promise((resolve, reject) => {
    title.appendChild(
      document.createElement("p")
    ).textContent = `Making request to ${location}`;
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequst(response) {
  return new Promise((resolve, reject) => {
    title.appendChild(document.createElement("p")).textContent =
      "Processing response";
    resolve(`Extra information + ${response}`);
  });
}

/**
 * Using promises
 */
// makeRequest("Google")
//   .then((response) => {
//     title(document.createElement('p').appendChild.textContent = "Process response");
//     return processRequst(response);
//   })
//   .then((processResponse) => {
//     title(document.createElement('p').appendChild.textContent = processResponse);
//   });

/**
 * Using async await
 */

const shoppingList = ["bottle", "brawn", "fruit", "sausage"];
const title = document.querySelector("[data='title']");

async function doWork() {
  try {
    // const response = await makeRequest("Facebook");
    const response = await makeRequest("Google");
    title.appendChild(document.createElement("p")).textContent =
      "response received";
    const processedResponse = await processRequst(response);
    title.appendChild(document.createElement("p")).textContent =
      processedResponse;
    const newList = await loopEach(shoppingList, makePlural);
    title.appendChild(document.createElement("p")).textContent = newList;
  } catch (error) {
    title.appendChild(document.createElement("p")).textContent = error;
  }
}

doWork();

function loopEach(items, makePlural) {
  return new Promise((resolve, reject) => {
    for (let index = 0; index < items.length; index++) {
      items.splice(index, 1, makePlural(items[index]));
    }
    resolve(items);
  });
}

function makePlural(item) {
  return `${item}s`;
}

function loopEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

module.exports = { loopEach };
