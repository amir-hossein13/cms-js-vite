//customElement
/// web component

const template = document.createElement('template')
template.innerHTML = `
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

`

class SideBar extends HTMLElement {
  constructor() {
    super()

    // console.log('custom element created', this);

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}



export { SideBar }