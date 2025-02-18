let $ = document
// import and use custom elements
import { SideBar } from "./components/sidebar.js";
import { Header } from "./components/header-bar.js";
window.customElements.define('side-bar', SideBar);
window.customElements.define('header-bar', Header);
//select the elements
let userId;
const productWraper = $.querySelector('.the-product-holder')
const addNewBtnModal = $.querySelector('#addNew')
const addElemModal = $.querySelector('#modal2')
const editModal = $.querySelector('#modal')
const saveEditBtn = $.querySelector('#save-edit')
const searchInput = $.querySelector('#search-input')
//sort elements
// edit modal elements
const productNameInput = $.querySelector('#edit-product-name')
const categoryInput = $.querySelector('#edit-category')
const editPriceInput = $.querySelector('#edit-price')
// add modal elements
const addProductNameInput = $.querySelector('#product-name')
const addPriceNameInput = $.querySelector('#price')
const addCategoryNameInput = $.querySelector('#category')
const addElemBtn = $.querySelector('#save-btn')
//load all users
window.addEventListener('load', () => {
    console.log();
    getAllUser()
})
window.deleteProduct = deleteProduct
window.openEditModal = openEditModal


//add element to DOM 
function getAllUser() {
    fetch(`https://js-cms-json-api.liara.run/product`)
        .then(res => res.json())
        .then(product => {
            productWraper.innerHTML = ''

            product.forEach(kala => {
                productWraper.insertAdjacentHTML('beforeend', `
                    <tr class="border-t border-gray-200">
                        <td class="px-4 py-2 text-gray-600">${kala.id}</td>
                        <td class="px-4 py-2">${kala.productName}</td>
                        <td class="px-4 py-2 text-blue-500">${generateRandomCode()}</td>
                        <td class="px-4 py-2">${parseFloat(kala.price).toLocaleString()}</td>
                        <td class="px-4 py-2 text-blue-500">${kala.category}</td>
                        <td class="px-4 py-2">
                          <a href="#" class="text-blue-500 hover:underline mr-2 " onclick="openEditModal('${kala.id}')">Edit</a>
                          <a href="#"  class="text-red-500 hover:underline" onclick="deleteProduct('${kala.id}')">Delete</a>
                        </td>
                      </tr>
                    `)
            })
        })
}

// generate random code
function generateRandomCode() {
    const numbers = () => Math.floor(100 + Math.random() * 900); // Random 3-digit number (100-999)
    const letters = () => String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random letter (A-Z)

    return `#${numbers()}-${numbers()}${letters()}${letters()}${letters()}`;
}

console.log(generateRandomCode()); // Example output: #123-456ABC


// add new product

function addNewProduct() {
    let newProductInput = { productName: addProductNameInput.value, price: addPriceNameInput.value, category: addCategoryNameInput.value }
    fetch('https://js-cms-json-api.liara.run/product', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newProductInput)
    })
        .then(res => {
            getAllUser()
            closeModalBtn()
        })
}

//close modal
function closeModalBtn() {
    addElemModal.classList.add('hidden')
}
// end of add new product


//delete product
function deleteProduct(id) {
    fetch(`https://js-cms-json-api.liara.run/product/${id}`, {
        method: 'DELETE'
    }).then(res => {
        console.log(res)
        getAllUser()
    })
}
// end of delete product

// edit product
function editProduct() {
    // console.log(id);
    let editedProduct = { productName: productNameInput.value, price: editPriceInput.value, category: categoryInput.value }
    fetch(`https://js-cms-json-api.liara.run/product/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedProduct)
    }).then(res => {
        getAllUser()
    })
    closeEditModalBtn()
}
function openEditModal(id) {
    userId = id
    editModal.classList.remove('hidden')
}
function closeEditModalBtn() {
    editModal.classList.add('hidden')
}
// end of edit product

// set events
addNewBtnModal.addEventListener('click', () => {
    addElemModal.classList.remove('hidden')
})

saveEditBtn.addEventListener('click', () => {

    editProduct()
})

addElemBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addNewProduct()
})

searchInput.addEventListener('keyup', event => {
    if (event.key === "Enter") {
        let filter = event.target.value.toLowerCase();
        let items = document.querySelectorAll(".the-product-holder tr");

        items.forEach(item => {
            let text = item.textContent.toLowerCase();
            item.style.display = text.includes(filter) ? "" : "none";
        });
    }
})
