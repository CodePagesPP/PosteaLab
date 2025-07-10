//TABSSSSS
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      contents[i].classList.add('active');
    });
  });


  document.querySelectorAll('details').forEach((detail) => {
    const icon = detail.querySelector('.icon-toggle');
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
      } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
      }
    });
  });

//slider laptop
  const slider = document.getElementById("slider-fade");
  const slides = slider.querySelectorAll(".slide");
  let current = 0;
  let startX = 0;
  let isDragging = false;

  slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    slider.style.cursor = "grabbing";
  });

  slider.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    isDragging = false;
    slider.style.cursor = "grab";

    const endX = e.clientX;
    const diff = endX - startX;

    if (diff > 50 && current > 0) {
    
      changeSlide(current - 1);
    } else if (diff < -50 && current < slides.length - 1) {
     
      changeSlide(current + 1);
    }
  });

  
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff > 50 && current > 0) {
      changeSlide(current - 1);
    } else if (diff < -50 && current < slides.length - 1) {
      changeSlide(current + 1);
    }
  });

  function changeSlide(index) {
    slides[current].classList.remove("active");
    current = index;
    slides[current].classList.add("active");
  }

 