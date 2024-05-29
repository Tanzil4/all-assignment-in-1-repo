let arr = [

  {
    title : 'array obj',
    dis : 'array obj 20 obj click pa obj delete',
    code : 'https://github.com/Tanzil4/array-object',
    link : ' https://tanzil4.github.io/array-object/'
},
    {
        title : 'text editor',
        dis : 'text editor bold , italic, underline, left, reight and center',
        code : 'https://github.com/Tanzil4/Text-editor-original-',
        link : 'https://tanzil4.github.io/Text-editor-original-/'
    },
    {
        title : 'js gallery',
        dis : 'js img gallery hover ecomarce ider',
        code : 'https://github.com/Tanzil4/js-image-gallery',
        link : 'https://tanzil4.github.io/js-image-gallery/'
    },
    {
        title : 'Birthday',
        dis : 'birthday time watch sec, minutes, hour',
        code : 'https://github.com/Tanzil4/Birthday-Time-Watch',
        link : 'https://birthdaytimewatch.tanzil.surge.sh/'
    },
 
   
]

let mylink = document.getElementById('alllink')

for(let i = 0 ; i < arr.length; i++){
    let div = ` <div class="p-4 lg:w-1/3">
    <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">TANZIL</h2>
      <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">${arr[i].title}</h1>
      <p class="leading-relaxed mb-3">${arr[i].dis}</p>
      <a href="${arr[i].link}"   class="text-indigo-500 inline-flex items-center">View Website
        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
      <div class="text-center mt-2 leading-none flex justify-center absolute bottom-90 left-0 w-full py-4">
          <a href="${arr[i].code}">
        <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">

          <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>1.2K
        </span>
      </a>
      </div>
    </div>
  </div>`

          mylink.innerHTML += div
}