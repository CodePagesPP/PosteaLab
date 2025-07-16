document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("miVideo");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.muted = false;
        video.play().catch(err => console.log(err));
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.1 });

  observer.observe(video);
});