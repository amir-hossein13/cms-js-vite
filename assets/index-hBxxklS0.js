(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const i=document.createElement("template");i.innerHTML=`
  <link rel="stylesheet" href="./src/style.css">
    <div class="flex w-full h-full">

<section class="bg-purple-custom dark:bg-gray-950 dark:text-white w-64">
        <div class="flex flex-col items-center h-full">
          <div class="flex items-center justify-center w-16 h-16 my-5 rounded-full">
            <img src="./public/img/amir.webp" alt="logo" class="w-full" />

          </div>
          <nav class="flex flex-col items-center">
            <ul>
              <li class="mb-6">
                <a href="#" class="flex items-center justify-center w-16 h-16 text-2xl text-white">
                  Dashboard
                </a>
              </li>
              <li class="mb-6">
                <a href="#"
                   class="flex items-center justify-center w-16 h-16 text-2xl opacity-65 text-white hover:opacity-100 transition-all duration-300">
                  User Management
                </a>
              </li>
              <li class="mb-6">
                <a href="#"
                   class="flex items-center justify-center w-16 h-16 text-2xl opacity-65 text-white hover:opacity-100 transition-all duration-300">
                  Document
                </a>
              </li>
              <li class="mb-6">
                <a href="#"
                   class="flex items-center justify-center w-16 h-16 text-2xl opacity-65 text-white hover:opacity-100 transition-all duration-300">
                  Statistics
                </a>
              </li>
            </ul>
          </nav>
          <div class="mt-auto bg-purple-950 w-full p-3 hover:bg-purple-900 dark:bg-stone-950 dark:text-white dark:hover:bg-stone-900">
            <button>Logout</button>
          </div>
        </div>
      </section>
    </div>

`;class y extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(i.content.cloneNode(!0))}}const u=document.createElement("template");u.innerHTML=`
  <link rel="stylesheet" href="./src/style.css">
<header
        class="header flex flex-row justify-between items-center dark:bg-gray-950 dark:text-white shadow-md p-4 rounded-md w-full">
        <div class="header__title flex flex-row items-center">
          <h2 class="dark:text-white text-black mx-2">Dashboard overview</h2>
          <div class="relative w-64 ml-2">
            <input type="text" placeholder="Search all..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-purple-950" />
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-4.35-4.35M17 10a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" />
            </svg>
          </div>
        </div>
        <div class="header__action flex flex-row items-center space-x-4">
          <h2>Help guides</h2>
          <h2>Inbox</h2>
          <button class="bg-purple-600 text-white hover:bg-purple-700 cursor-pointer  rounded-md p-2 dark:bg-purple-900 hover:dark:bg-purple-800">Download
            client</button>
        </div>
      </header>
`;class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(u.content.cloneNode(!0))}}let o=document;window.customElements.define("side-bar",y);window.customElements.define("header-bar",w);let p;const d=o.querySelector(".the-product-holder"),x=o.querySelector("#addNew"),h=o.querySelector("#modal2"),f=o.querySelector("#modal"),g=o.querySelector("#save-edit"),v=o.querySelector("#search-input"),b=o.querySelector("#edit-product-name"),E=o.querySelector("#edit-category"),L=o.querySelector("#edit-price"),S=o.querySelector("#product-name"),M=o.querySelector("#price"),j=o.querySelector("#category"),N=o.querySelector("#save-btn");window.addEventListener("load",()=>{console.log(),n()});window.deleteProduct=q;window.openEditModal=C;function n(){fetch("https://js-cms-json-api.liara.run/product").then(e=>e.json()).then(e=>{d.innerHTML="",e.forEach(t=>{d.insertAdjacentHTML("beforeend",`
                    <tr class="border-t border-gray-200">
                        <td class="px-4 py-2 text-gray-600">${t.id}</td>
                        <td class="px-4 py-2">${t.productName}</td>
                        <td class="px-4 py-2 text-blue-500">${m()}</td>
                        <td class="px-4 py-2">${parseFloat(t.price).toLocaleString()}</td>
                        <td class="px-4 py-2 text-blue-500">${t.category}</td>
                        <td class="px-4 py-2">
                          <a href="#" class="text-blue-500 hover:underline mr-2 " onclick="openEditModal('${t.id}')">Edit</a>
                          <a href="#"  class="text-red-500 hover:underline" onclick="deleteProduct('${t.id}')">Delete</a>
                        </td>
                      </tr>
                    `)})})}function m(){const e=()=>Math.floor(100+Math.random()*900),t=()=>String.fromCharCode(65+Math.floor(Math.random()*26));return`#${e()}-${e()}${t()}${t()}${t()}`}console.log(m());function P(){let e={productName:S.value,price:M.value,category:j.value};fetch("https://js-cms-json-api.liara.run/product",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(t=>{n(),$()})}function $(){h.classList.add("hidden")}function q(e){fetch(`https://js-cms-json-api.liara.run/product/${e}`,{method:"DELETE"}).then(t=>{console.log(t),n()})}function k(){let e={productName:b.value,price:L.value,category:E.value};fetch(`https://js-cms-json-api.liara.run/product/${p}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(t=>{n()}),I()}function C(e){p=e,f.classList.remove("hidden")}function I(){f.classList.add("hidden")}x.addEventListener("click",()=>{h.classList.remove("hidden")});g.addEventListener("click",()=>{k()});N.addEventListener("click",e=>{e.preventDefault(),P()});v.addEventListener("keyup",e=>{if(e.key==="Enter"){let t=e.target.value.toLowerCase();document.querySelectorAll(".the-product-holder tr").forEach(l=>{let r=l.textContent.toLowerCase();l.style.display=r.includes(t)?"":"none"})}});
