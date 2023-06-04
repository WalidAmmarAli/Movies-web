function createNavbar(logo, links, icon) {
    const navbar = document.getElementById('navbar');
    const html = `
      <div class="flex items-center h-auto">
        <a href="" class="text-red-500 text-5xl font-bold p-5 rounded-xl">${logo}</a>
      </div>
      <ul class="text-black text-2xl font-medium flex items-center justify-center gap-8 mt-2">
        <li><a href="">${links.link_1}</a></li>
        <li><a href="">${links.link_2}</a></li>
        <li><a href="">${links.link_3}</a></li>
      </ul>
      <div class="text-red-500 text-xl flex items-center justify-end mt-2 mr-4 font-bold cursor-pointer">
        <h2>${icon}</h2>
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
