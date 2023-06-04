function createCarrusel(icon_1, icon_2, movies) {
    const carrusel_box = document.getElementById('carrusel_2');
    const movieList = carrusel_box.querySelector('#movie-list');
    const indicators = carrusel_box.querySelector('#carousel-indicators');
    const prevButton = carrusel_box.querySelector('#prev-button');
    const nextButton = carrusel_box.querySelector('#next-button');

    let currentIndex = 0;

    // Generar contenido del carrusel
    function generateCarouselContent() {
      movieList.innerHTML = '';
      indicators.innerHTML = '';

      movies.forEach((movie, index) => {
        const movieElement = document.createElement('div');
        movieElement.className = 'w-1/6';
        movieElement.innerHTML = `
          <a href="#"><img class="rounded-xl cursor-pointer" src="${movie}" alt=""></a>
        `;
        movieList.appendChild(movieElement);

        const indicator = document.createElement('button');
        indicator.className = 'w-2 h-2 mx-1 bg-gray-500 rounded-full focus:outline-none focus:bg-red-700';
        indicator.addEventListener('click', () => {
          currentIndex = index;
          updateCarousel();
        });
        indicators.appendChild(indicator);
      });

      updateCarousel();
    }

    // Actualizar el carrusel
    function updateCarousel() {
      const movieElements = movieList.querySelectorAll('div');
      const indicators = carrusel_box.querySelectorAll('.carousel-indicators button');

      movieElements.forEach((movieElement, index) => {
        if (index === currentIndex) {
          movieElement.classList.add('opacity-100', 'scale-100');
          indicators[index].classList.add('bg-red-700');
        } else {
          movieElement.classList.remove('opacity-100', 'scale-100');
          indicators[index].classList.remove('bg-red-700');
        }
      });
    }

    // Evento del botón anterior
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + movies.length) % movies.length;
      updateCarousel();
    });

    // Evento del botón siguiente
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % movies.length;
      updateCarousel();
    });

    // Generar contenido inicial del carrusel
    generateCarouselContent();
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
