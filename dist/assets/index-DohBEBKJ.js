(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(o){if(o.ep)return;o.ep=!0;const e=r(o);fetch(o.href,e)}})();const d=document.createElement("template");d.innerHTML=`
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

`;class y extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(d.content.cloneNode(!0))}}const u=document.createElement("template");u.innerHTML=`
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
`;class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(u.content.cloneNode(!0))}}let l=document;window.customElements.define("side-bar",y);window.customElements.define("header-bar",g);let p;const a=l.querySelector(".the-product-holder"),w=l.querySelector("#addNew"),h=l.querySelector("#modal2"),f=l.querySelector("#modal"),x=l.querySelector("#save-edit"),v=l.querySelector("#search-input"),b=l.querySelector("#edit-product-name"),L=l.querySelector("#edit-category"),S=l.querySelector("#edit-price"),E=l.querySelector("#product-name"),k=l.querySelector("#price"),j=l.querySelector("#category"),M=l.querySelector("#save-btn");window.addEventListener("load",()=>{console.log(),i()});window.deleteProduct=$;window.openEditModal=P;function i(){fetch("https://js-cms-json-api.liara.run/product").then(t=>t.json()).then(t=>{a.innerHTML="",t.forEach(r=>{a.insertAdjacentHTML("beforeend",`
                    <tr class="border-t border-gray-200">
                        <td class="px-4 py-2 text-gray-600">${r.id}</td>
                        <td class="px-4 py-2">${r.productName}</td>
                        <td class="px-4 py-2 text-blue-500">${m()}</td>
                        <td class="px-4 py-2">${parseFloat(r.price).toLocaleString()}</td>
                        <td class="px-4 py-2 text-blue-500">${r.category}</td>
                        <td class="px-4 py-2">
                          <a href="#" class="text-blue-500 hover:underline mr-2 " onclick="openEditModal('${r.id}')">Edit</a>
                          <a href="#"  class="text-red-500 hover:underline" onclick="deleteProduct('${r.id}')">Delete</a>
                        </td>
                      </tr>
                    `)})})}function m(){const t=()=>Math.floor(100+Math.random()*900),r=()=>String.fromCharCode(65+Math.floor(Math.random()*26));return`#${t()}-${t()}${r()}${r()}${r()}`}console.log(m());function q(){let t={productName:E.value,price:k.value,category:j.value};fetch("https://js-cms-json-api.liara.run/product",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(r=>{i(),N()})}function N(){h.classList.add("hidden")}function $(t){fetch(`https://js-cms-json-api.liara.run/product/${t}`,{method:"DELETE"}).then(r=>{console.log(r),i()})}function O(){let t={productName:b.value,price:S.value,category:L.value};fetch(`https://js-cms-json-api.liara.run/product/${p}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(r=>{i()}),C()}function P(t){p=t,f.classList.remove("hidden")}function C(){f.classList.add("hidden")}w.addEventListener("click",()=>{h.classList.remove("hidden")});x.addEventListener("click",()=>{O()});M.addEventListener("click",t=>{t.preventDefault(),q()});v.addEventListener("keyup",t=>{if(t.key==="Enter"){let r=t.target.value.toLowerCase();document.querySelectorAll(".the-product-holder tr").forEach(n=>{let o=n.textContent.toLowerCase();n.style.display=o.includes(r)?"":"none"})}});
