const Header = (title, date, temp) => {

  // console.log(title, date, temp);

  const div = document.createElement('div');
  const sDate = document.createElement('span');
  const h1 = document.createElement('h1');
  const sTemp = document.createElement('span')

  div.classList.add('header');
  sDate.classList.add('date');
  sTemp.classList.add('temp');

  sDate.textContent = date;
  h1.textContent = title;
  sTemp.textContent = temp;

  div.appendChild(sDate);
  div.appendChild(h1);
  div.appendChild(sTemp);


  // console.log(div);
  return div;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const titleText = "It is my dog's birthday today!";
  const dateText = "October 1, 2021";
  const tempText = "55 degrees F"

  // console.log(Header(titleText, dateText, tempText));

  const entryPoint = document.querySelector(selector);
  entryPoint.append(Header(titleText, dateText, tempText));
  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
