//customElement
/// web component

const template = document.createElement('template')
template.innerHTML = `
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
`

class Header extends HTMLElement {
    constructor() {
        super()

        // console.log('custom element created', this);

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}



export { Header }