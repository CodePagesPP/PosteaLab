document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".gif-centro video");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, {
      threshold: 0.1 
    });

    observer.observe(video);
  });