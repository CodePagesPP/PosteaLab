//conteo 
document.addEventListener('DOMContentLoaded', () => {

  //contador principal
    const counters = document.querySelectorAll('.number');

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target < 10 ? '0' + target : target;
        }
      };

      updateCount();
    });


    //contador resultados
   const contadores = document.querySelectorAll(".contador");

    contadores.forEach((contador) => {
      const valorFinal = parseFloat(contador.getAttribute("data-valor"));
      const tieneDecimales = valorFinal % 1 !== 0;

      let valorActual = 0;
      const incremento = tieneDecimales ? 0.1 : Math.ceil(valorFinal / 100);

      const intervalo = setInterval(() => {
        valorActual += incremento;

        if (valorActual >= valorFinal) {
          contador.textContent = tieneDecimales
            ? valorFinal.toFixed(1)
            : valorFinal.toLocaleString("es-PE");
          clearInterval(intervalo);
        } else {
          contador.textContent = tieneDecimales
            ? valorActual.toFixed(1)
            : Math.floor(valorActual).toLocaleString("es-PE");
        }
      }, 50); // velocidad de animación
    });
  

    
  });