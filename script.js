'use strict';

document.title = 'Bookshop';

const fragment = document.createDocumentFragment();

let navbar = document.createElement('nav');
navbar.className = 'navbar';

let ulist = document.createElement('ul');
ulist.className = 'ulist';
navbar.appendChild(ulist);

ulist.innerHTML = `
      <div class="header-icons">
        <li>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="rgb(10, 3, 79)"
              class="book-svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </a>
        </li>
    </div>
`;

let shoppingCart = document.createElement('img');
shoppingCart.src = 'images/shoppin_cart.png';
shoppingCart.className = 'shopping-cart';
shoppingCart.addEventListener('ondrop', function (ev) {
  drop(ev);
});
shoppingCart.addEventListener('ondragover', function (ev) {
  allowDrop(ev);
});

ulist.appendChild(shoppingCart);

{
  /* <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="rgb(10, 3, 79)"
              class="cart-svg"

        id="cart-img"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

        </li> */
}

// let cart = document.createElement('svg');
// // cart.className = 'cart-svg';
// let listItem = document.createElement('li');
// listItem.className = 'list-item';
// ulist.appendChild(listItem);
// listItem.appendChild(cart);
// listItem.innerHTML = `
// xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="rgb(10, 3, 79)"
//               class="cart-svg"

//         id="cart-img"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
//               />
// `;

fragment.appendChild(navbar);

const heroSection = document.createElement('section');
heroSection.className = 'section-hero';
// document.body.appendChild(heroSection);

let mainContainer = document.createElement('div');
mainContainer.className = 'container';

heroSection.appendChild(mainContainer);

let flexcontainer = document.createElement('div');
flexcontainer.className = 'flex-1';
mainContainer.appendChild(flexcontainer);

flexcontainer.innerHTML = `
<div class="first">
      <p class="para">Lithub</p>
      <p class="subp">
        Books for <span
        class="every">Everyone</span>
        <span class="everywhere">Everywhere</span>
      </p>
    </div>

    <div class="pic">
      <img class="reading" src="images/reading.jpg" alt="people reading books" />
    </div>
`;

let btn = document.createElement('button');
btn.className = 'btn btn-shopping';
mainContainer.appendChild(btn);
btn.type = 'button';
btn.innerHTML = 'Start Shopping';
fragment.appendChild(heroSection); // trial
// Main Section

const main = document.createElement('main');

main.className = 'section-main';
// document.body.appendChild(main);
fragment.appendChild(main);

const initialCoords = main.getBoundingClientRect();
window.addEventListener('scroll', function (e) {
  if (this.window.scrollY > initialCoords.top) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

////

btn.addEventListener('click', function () {
  main.scrollIntoView({ behavior: 'smooth' });
});

///////////////

// Grid Container
const gridContainer = document.createElement('div');
gridContainer.className = 'grid-container';
// document.body.appendChild(gridContainer);
main.appendChild(gridContainer);

let popupbg = document.createElement('div');
popupbg.className = 'popup-bg';
gridContainer.appendChild(popupbg);
popupbg.classList.add('hidden');

let popup = document.createElement('div');
popup.className = 'popup';
gridContainer.appendChild(popup);
popup.classList.add('hidden');

let closePopup = document.createElement('button');
closePopup.className = 'close-pop';
closePopup.type = 'button';
popup.appendChild(closePopup);

closePopup.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="close-svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>`;

//////

closePopup.addEventListener('click', function (e) {
  popup.classList.add('hidden');
  popupbg.classList.add('hidden');
});

///////

let popImg = document.createElement('img');
popImg.className = 'pop-img';
popup.appendChild(popImg);

let popTitle = document.createElement('p');
popTitle.className = 'pop-title';
popup.appendChild(popTitle);

let popAuthor = document.createElement('p');
popAuthor.className = 'pop-author';
popup.appendChild(popAuthor);

let popPrice = document.createElement('p');
popPrice.className = 'pop-price';
popup.appendChild(popPrice);

let popDescription = document.createElement('p');
popDescription.className = 'pop-desc';
popup.appendChild(popDescription);

///////////////////////
// function allowDrop(ev) {
//   ev.preventDefault();
// }
// /////// Drag events

// shoppingCart.addEventListener('dragover', function (ev) {
//   allowDrop(ev);
// });
//////

/////////////////////

// API
const state = {
  author: {},
  imageLink: {},
  title: {},
  price: {},
  description: {},
};

// Getting JSON
const getBooks = async function () {
  const res = await fetch('books.json');
  const data = await res.json();

  state.author = data.map(arr => arr.author);
  state.imageLink = data.map(arr => arr.imageLink);
  state.title = data.map(arr => arr.title);
  state.price = data.map(arr => arr.price);
  state.description = data.map(arr => arr.description);

  // Displaying Data
  for (let i = 0; i < data.length; i++) {
    let imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';
    gridContainer.appendChild(imgContainer);

    let imgs = document.createElement('img');
    imgs.className = 'book-imgs';
    imgs.id = `${state.imageLink[i]}`;
    imgs.draggable = true;
    imgs.ondragstart = 'drag(event)';

    imgContainer.appendChild(imgs);

    imgs.src = state.imageLink[i];

    //  Adding title, author...
    let bookTitle = document.createElement('p');
    bookTitle.className = 'book-title';
    bookTitle.innerHTML = state.title[i];

    imgContainer.appendChild(bookTitle);

    let author = document.createElement('p');
    author.className = 'author';

    author.innerHTML = state.author[i];

    imgContainer.appendChild(author);

    let anotherFlex = document.createElement('div');
    anotherFlex.className = `flex-2 cont-${i + 1}`;
    imgContainer.appendChild(anotherFlex);

    let seeMore = document.createElement('button');
    seeMore.className = `btn btn-see-more btn-${i}`;
    seeMore.innerHTML = 'see more';
    anotherFlex.appendChild(seeMore);

    let price = document.createElement('span');
    price.className = 'price';

    price.innerHTML = `$ ${state.price[i]}`;
    anotherFlex.appendChild(price);

    let addToCart = document.createElement('button');
    addToCart.className = 'btn add-cart';
    addToCart.innerHTML = 'add to bag';
    anotherFlex.appendChild(addToCart);

    // DRAG ////////////////////////////////////////////////

    // function drag(ev) {
    //   ev.dataTransfer.setData('text', ev.target.id);
    // }
    // shoppingCart.addEventListener('drop', function (ev) {
    //   drop(ev);
    // });

    // function drop(ev) {
    //   ev.preventDefault();
    //   let data = ev.dataTransfer.getData('text');
    //   ev.target.appendChild(document.getElementById(data));
    // }

    // imgs.addEventListener('dragstart', function (ev) {
    //   drag(ev);
    // });

    // let popup = document.createElement('div');
    // popup.className = `pop popup-${i + 1}`;
    // imgContainer.appendChild(popup);

    seeMore.addEventListener('click', function (e) {
      const index = e.target.className.slice(-1);
      popupbg.classList.remove('hidden');
      popup.classList.remove('hidden');

      popImg.src = state.imageLink[index];
      popAuthor.innerHTML = state.author[index];
      popTitle.innerHTML = state.title[index];
      popPrice.innerHTML = `$ ${state.price[index]}`;
      popDescription.innerHTML = state.description[index];
    });
  }

  // console.log(state.author);
  //console.log(state.imageLink);
};

// function addToCartListener() {
//   let idEl = this.parentElement.parentElement.id;
//   addToCart(idEl);
// }

getBooks();

// Grid container

// img container

// Inserting JS into DOM with Fragment
document.body.appendChild(fragment);
