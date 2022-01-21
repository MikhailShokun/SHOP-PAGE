import * as msFunctions from "./modules/functions.js"

msFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

// ------------js---------------


const products = [{
        "id": "1",
        "title": "Apple iPhone 11 128Gb",
        "image": "Apple iPhone 11 128Gb.jpg",
        "price": "10000"
    },
    {
        "id": "2",
        "title": "Samsung Galaxy A52",
        "image": "Samsung Galaxy A52 8_256Gb.jpg",
        "price": "8 000"
    },
    {
        "id": "3",
        "title": "Xiaomi Redmi Note 10 Pro",
        "image": "Xiaomi Redmi Note 10 Pro.jpg",
        "price": "10 000"
    },
    {
        "id": "4",
        "title": "Nokia G20 4/64Gb",
        "image": "Nokia G20 4_64Gb.jpg",
        "price": "8 000"
    },
    {
        "id": "5",
        "title": "Apple iPhone 13 128Gb",
        "image": "Apple iPhone 13 128Gb.jpg",
        "price": "32 000"
    },
    {
        "id": "6",
        "title": "Doogee N40 Pro 6-/28Gb",
        "image": "Doogee N40 Pro 6-128Gb.jpg",
        "price": "4 000"
    },
    {
        "id": "7",
        "title": "Huawei P40 Lite 6/128Gb",
        "image": "Huawei P40 Lite 6-128Gb.jpg",
        "price": "6 000"
    },
    {
        "id": "8",
        "title": "LG V50 ThinQ 5G 6/128Gb",
        "image": "LG V50 ThinQ 5G 6-128Gb.jpg",
        "price": "9 800"
    },
    {
        "id": "9",
        "title": "Motorola Moto G60 6/128Gb",
        "image": "Motorola Moto G60 6_128Gb.jpg",
        "price": "11 350"
    },
    {
        "id": "10",
        "title": "OnePlus Nord 2 8/128Gb",
        "image": "OnePlus Nord 2 8_128Gb.jpg",
        "price": "13 250"
    },
    {
        "id": "11",
        "title": "Oukitel K15 Plus 3/32Gb",
        "image": "Oukitel K15 Plus 3-32Gb.jpg",
        "price": "4 000"
    },

    {
        "id": "12",
        "title": "Realme 8 6/128Gb",
        "image": "Realme 8 6_128Gb.jpg",
        "price": "7 777"
    },
    {
        "id": "13",
        "title": "Samsung Galaxy M52 6/128Gb",
        "image": "Samsung Galaxy M52 6_128Gb.jpg",
        "price": "14 320"
    },

    {
        "id": "14",
        "title": "Sony Xperia Pro-I 12/512Gb",
        "image": "Sony Xperia Pro-I 12-512Gb.jpg",
        "price": "42 350"
    },
    {
        "id": "15",
        "title": "Xiaomi Poco X3 Pro 6/128Gb",
        "image": "Xiaomi Poco X3 Pro 6_128Gb.jpg",
        "price": "5 800"
    },
    {
        "id": "16",
        "title": "ZTE Blade V30 4/128Gb",
        "image": "ZTE Blade V30 4-128Gb.jpg",
        "price": "7 000"
    },
    {
        "id": "17",
        "title": "Blackview A80s 4/64Gb",
        "image": "Blackview A80s 4-64Gb_3200.jpg",
        "price": "3200"
    },
    {
        "id": "18",
        "title": "Blackview BV4900 Pro 4/64Gb",
        "image": "Blackview BV4900 Pro 4-64Gb_4000.jpg",
        "price": "4000"
    },
    {
        "id": "19",
        "title": "Bravis A512 Harmony Pro",
        "image": "Bravis A512 Harmony Pro_2200.jpg",
        "price": "2200"
    },
    {
        "id": "20",
        "title": "Bravis N1-550",
        "image": "Bravis N1-550_2300.jpg",
        "price": "2300"
    },
    {
        "id": "21",
        "title": "Doogee N20 4/64Gb",
        "image": "Doogee N20 4-64Gb_3500.jpg",
        "price": "3500"
    },
    {
        "id": "22",
        "title": "Asus ZenFone 8 8/128Gb",
        "image": "Asus ZenFone 8 8-128Gb_18400.jpg",
        "price": "18400"
    },
    {
        "id": "23",
        "title": "Alcatel 1 2018 1/8Gb",
        "image": "Alcatel 1 2018 1-8Gb_1700.jpg",
        "price": "1700"
    },
    {
        "id": "24",
        "title": "Alcatel 3L 2020 4/64Gb",
        "image": "Alcatel 3L 2020 4-64Gb_4000.jpg",
        "price": "4000"
    },
    {
        "id": "25",
        "title": "Asus Zenfone 7 Pro 8/256Gb",
        "image": "Asus Zenfone 7 Pro 8-256Gb_21200.jpg",
        "price": "21200"
    },
    {
        "id": "26",
        "title": "Fly FF249",
        "image": "Fly FF249_550.jpg",
        "price": "550"
    },
    {
        "id": "27",
        "title": "Fly FF282",
        "image": "Fly FF282_470.jpg",
        "price": "470"
    },
    {
        "id": "28",
        "title": "Google Pixel 5a 6/128Gb",
        "image": "Google Pixel 5a 6-128Gb_17100.jpg",
        "price": "17100"
    },
    {
        "id": "29",
        "title": "Google Pixel 6 8/128Gb",
        "image": "Google Pixel 6 8-128Gb_24400.jpg",
        "price": "24400"
    },
    {
        "id": "30",
        "title": "Land Rover T3",
        "image": "Land Rover T3_1250.jpg",
        "price": "1250"
    },
    {
        "id": "31",
        "title": "Land Rover X3 2/16Gb",
        "image": "Land Rover X3 2-16Gb_3350.jpg",
        "price": "3350"
    },
    {
        "id": "32",
        "title": "Oukitel C21 4/64Gb",
        "image": "Oukitel C21 4-64Gb_3900.jpg",
        "price": "3900"
    },
    {
        "id": "33",
        "title": "Philips E111",
        "image": "Philips E111_520.jpg",
        "price": "520"
    },
    {
        "id": "34",
        "title": "Philips Xenium",
        "image": "Philips Xenium_1100.jpg",
        "price": "1100"
    },
    {
        "id": "35",
        "title": "Sigma Mobile Comfort",
        "image": "Sigma Mobile Comfort_950.jpg",
        "price": "950"
    },
    {
        "id": "36",
        "title": "Sigma Mobile X-treme PQ20",
        "image": "Sigma Mobile X-treme PQ20_2600.jpg",
        "price": "2600"
    },
    {
        "id": "37",
        "title": "Tecno Camon 17P 6/128Gb",
        "image": "Tecno Camon 17P 6-128Gb_5700.jpg",
        "price": "5700"
    }
];

// const cart = {
//     '1': {
//         "id": "1",
//         "title": "Apple iPhone 11 128Gb",
//         "price": "10000",
//         "count": 1
//     },
//     '2': {
//         "id": "2",
//         "title": "Samsung Galaxy A52",
//         "price": "8 000",
//         "count": 1
//     },
//     '3': {
//         "id": "3",
//         "title": "Xiaomi Redmi Note 10 Pro",
//         "price": "10 000",
//         "count": 1
//     },
//     '4': {
//         "id": "4",
//         "title": "Nokia G20 4/64Gb",
//         "price": "8 000",
//         "count": 1
//     }
// }


const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 4;

const input = document.querySelector('.search-form__input');
input.oninput = function() {

    let searchPhrase = input.value;

    const filterUsers = products.filter(item => (item.title.toLowerCase().includes(searchPhrase)));

    current_page = 1;
    DisplayList(filterUsers, list_element, rows, current_page);
    SetupPagination(filterUsers, pagination_element, rows);
};

function DisplayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;
    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];

        let item_element = document.createElement('div');
        item_element.classList.add('item');
        item_element.innerHTML =
            `
            <div class="list__wrapper">
            <article data-id="${item.id}" class="products__item item-product">
                        <a href="#" class="item-product__image ">
                            <img src="img/${item.image}" alt="${item.title}">
                        </a>
                        <div class="item-product__body">
                            <div class="item-product__content">
                                <h3 class="item-product__title">${item.title}</h3>
                            </div>
                            <div class="item-product__price">${item.price} UAH & iD: ${item.id}</div>
                            <div class="item-product__actions actions-product">
                                <div class="actions-product__body">
                                        <button class="add-button btn" data-id="${item.id}">Add to cart</button>
                                        <button class="remove-button btn" data-id="${item.id}">Remove from cart</button>
                                 </div>
                            </div>
                        </div>
                    </article>
                    </div>
            `
        wrapper.appendChild(item_element);
    }
    // renderCart()
    // createAddToCartButton();
}

function SetupPagination(items, wrapper, rows_per_page) {
    wrapper.innerHTML = "";

    let page_count = Math.ceil(items.length / rows_per_page);
    for (let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }
}

function PaginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;

    if (current_page == page) button.classList.add('active');

    button.addEventListener('click', function() {
        current_page = page;
        DisplayList(items, list_element, rows, current_page);

        let current_btn = document.querySelector('.pagenumbers button.active');
        current_btn.classList.remove('active');

        button.classList.add('active');
    });
    return button;
}

DisplayList(products, list_element, rows, current_page);
SetupPagination(products, pagination_element, rows);


// ----------------------К__О__Р__З__И__Н__А------------------------

const cart = [];

function createAddToCartButton() {
    const addButtons = document.querySelectorAll('.add-button');
    addButtons.forEach(addButton => {
        addButton.addEventListener('click', addToCart);
    });

};


function addToCart(e) {
    let itemId = e.target.dataset.id;





    //     let cartEntry = {
    //         id: itemId,
    //         count: 0
    //     };
}





createAddToCartButton();




// ---------------------popup cart--------------------------
let popup = document.getElementById('popupCart');
let popupToggle = document.querySelector('.open-cart')
let popupClose = document.querySelector('.close');



popupToggle.addEventListener('click', function() {
    popup.style.display = "block";
    openCart();
});

popupClose.addEventListener('click', function() {
    popup.style.display = "none";
})

window.addEventListener('click', function(e) {
    if (e.target == popup) {
        popup.style.display = "none";
    }
})