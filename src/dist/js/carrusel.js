function createCarrusel(icon_1, icon_2, movies) {
  const carrusel_box = document.getElementById('carrusel');
  const html = `
    <div class="w-full flex">
      <div class="text-red-100 text-2xl flex items-center justify-center w-10 rounded-xl cursor-pointer prev-icon p-6">
        <i class="${icon_1}"></i>
      </div>
      <div class="flex transition-transform duration-500 overflow-auto ease-in-out">
        <div class="flex gap-1 ml-1 mr-1">
          ${movies.slice(0, 6).map(movie => `
            <div class="w-1/6">
              <a href=""><img class="rounded-xl cursor-pointer" src="${movie}" alt=""></a>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="text-red-100 text-2xl flex items-center justify-center w-10 rounded-xl cursor-pointer next-icon p-8">
        <i class="${icon_2}"></i>
      </div>
    </div>
  `;

  carrusel_box.innerHTML = html;

  const prevIcon = carrusel_box.querySelector('.prev-icon');
  const nextIcon = carrusel_box.querySelector('.next-icon');
  const moviesCount = movies.length;

  let currentIndex = 0;
  let intervalId = null;

  prevIcon.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
    } else {
      currentIndex = moviesCount - 6; // Reinicia al final
    }
    updateMovieList();
  });

  nextIcon.addEventListener('click', () => {
    if (currentIndex < moviesCount - 6) {
      currentIndex += 1;
    } else {
      currentIndex = 0; // Reinicia al principio
    }
    updateMovieList();
  });

  function updateMovieList() {
    const movieList = carrusel_box.querySelector('.flex.gap-1.ml-1.mr-1');
    const slicedMovies = movies.slice(currentIndex, currentIndex + 6);
    const movieElements = slicedMovies.map(movie => `
      <div class="w-1/6">
        <a href=""><img class="rounded-xl cursor-pointer" src="${movie}" alt=""></a>
      </div>
    `).join('');

    movieList.innerHTML = movieElements;
  }

  function startCarousel() {
    intervalId = setInterval(() => {
      if (currentIndex < moviesCount - 6) {
        currentIndex += 1;
      } else {
        currentIndex = 0; // Reinicia al principio
      }
      updateMovieList();
    }, 2000);
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  carrusel_box.addEventListener('mouseenter', stopCarousel);
  carrusel_box.addEventListener('mouseleave', startCarousel);

  // Iniciar el carrusel
  startCarousel();
}

fetch('../json/carrusel_info.json')
  .then(response => response.json())
  .then(data => {
    const { icon_1, icon_2, movies } = data;
    createCarrusel(icon_1, icon_2, movies);
  })
  .catch(error => {
    console.error('Error al obtener el archivo JSON:', error);
  });
