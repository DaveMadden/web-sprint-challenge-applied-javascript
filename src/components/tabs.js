//create topic tabs up top based on an array passed to the function
const Tabs = (topics) => {
  const div = document.createElement('div');
  div.classList.add('topics');

  topics.forEach(item => {
    const tabItem = document.createElement('div');
    tabItem.classList.add('tab');
    tabItem.textContent = item;
    div.appendChild(tabItem);
  })

  return div;
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

import axios from 'axios';
//pull the array to determine which tabs to make. make the tabs and append them to the top
const tabsAppender = (selector) => {
  const entry = document.querySelector(selector);

  axios.get(`http://localhost:5000/api/topics`)
  .then(resp => {
    entry.appendChild(Tabs(resp.data.topics));
  })
  .catch(err => {
    console.error(err);
  })
}
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //


export { Tabs, tabsAppender }
