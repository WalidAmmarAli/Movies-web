function createHeader(links, mainInfo, subInfo) {
    const navbar = document.getElementById('header');
    const html = `
      <ul class=" text-white text-2xl grid grid-rows-6 items-center justify-center rounded-b-xl gap-1 p-4 overflow-y-auto  ">
        <li class=" h-10 pt-4 pr-8 pb-4 pl-8 flex items-center rounded-lg  hover:bg-white hover:text-black"><a href="">${links.link_1}</a></li>
        <li class=" h-10 pt-4 pr-8 pb-4 pl-8 flex items-center rounded-lg  hover:bg-white hover:text-black"><a href="">${links.link_2}</a></li>
        <li class=" h-10 pt-4 pr-8 pb-4 pl-8 flex items-center rounded-lg  hover:bg-white hover:text-black"><a href="">${links.link_3}</a></li>
        <li class=" h-10 pt-4 pr-8 pb-4 pl-8 flex items-center rounded-lg  hover:bg-white hover:text-black"><a href="">${links.link_4}</a></li>
        <li class=" h-10 pt-4 pr-8 pb-4 pl-8 flex items-center rounded-lg  hover:bg-white hover:text-black"><a href="">${links.link_1}</a></li>
        <li class=" h-10 pt-4 pr-8 pb-4 pl-8 flex items-center rounded-lg  hover:bg-white hover:text-black"><a href="">${links.link_2}</a></li>
        <li class=" h-10 pt-4 pr-8 pb-4 pl-8 flex items-center rounded-lg  hover:bg-white hover:text-black"><a href="">${links.link_3}</a></li>
        <li class=" h-10 pt-4 pr-8 pb-4 pl-8 flex items-center rounded-lg  hover:bg-white hover:text-black"><a href="">${links.link_4}</a></li>
      </ul>

      <div class=" h-auto flex flex-col items-center justify-center gap-8 pl-4 pr-8">
        <h1 class=" text-white text-5xl">${mainInfo}</h1>
        <h2 class=" text-gray-300 text-3xl pr-32">${subInfo}</h2>
      </div>
    `;

    navbar.innerHTML = html;
}

fetch('../json/header.json')
    .then(response => response.json())
    .then(data => {
        const { option, datos } = data;
        createHeader(option, datos.main_info, datos.sub_info);
    })
    .catch(error => {
        console.error('Error al obtener el archivo JSON:', error);
    });
