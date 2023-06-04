function createNavbar(logo, links, icon) {
    const navbar = document.getElementById('navbar');
    const html = `
      <div class="flex items-center h-auto">
        <a href="" class="text-red-500 text-5xl font-bold p-5 rounded-xl">${logo}</a>
      </div>

      <div class="text-red-500 text-3xl flex items-center justify-end mt-2 mr-8 font-bold gap-2 ">
      <input class="bg-stone-950 rounded-md text-gray-400 text-sm w-56 h-8 p-1 placeholder-gray-400" placeholder="Search Content" />
      <i class="fa-solid fa-magnifying-glass text-2xl text-gray-900 cursor-pointer"></i>
      <i class="fa-solid fa-user cursor-pointer"></i>
      </div>
    `;

    navbar.innerHTML = html;
  }

  fetch('../json/navbar.json')
    .then(response => response.json())
    .then(data => {
      const { logo, links, icon } = data;
      createNavbar(logo, links, icon);
    })
    .catch(error => {
      console.error('Error al obtener el archivo JSON:', error);
    });
