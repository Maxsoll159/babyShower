
import confetti from 'canvas-confetti';
import { useRef } from 'react';

function App() {
  let duration = 15 * 1000;
  var animationEnd = Date.now() + duration;

  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
  }, 250);



  return (
    <main className="min-h-screen fondo p-5 bg-cover bg-no-repeat">
      <article className="container mx-auto">

        <img loading="lazy" src="/img/Bienvenido.webp" alt="Baby Shower" width={500} className="mx-auto animate-wiggle animate-infinite " />
        <h1 className="text-center text-7xl lg:text-8xl font-bold text-[#00a099] relative z-50">Mateo Eduardo</h1>
        <img loading="lazy" src="/img/conejoBabyShower.png" alt="Baby Shower" width={500} className="animate-jump-in animate-oncem mx-auto z-0 relative w-[400px] lg:w-[600px] -mt-10 lg:-mt-28" />

        <div className="bg-[#00a099] text-white py-1 w-full lg:w-[250px] mx-auto lg:-mt-28 z-50 relative">
          <p className="text-2xl font-bold text-center">EL DIA 23 DE MARZO</p>
        </div>

        <p className='text-center text-3xl relative z-50'>Hora: 7:00 PM</p>

        <p className="text-center text-2xl lg:text-3xl font-bold w-full lg:w-[1000px] mx-auto mt-5">Estamos muy emocionados porque se acerca el nacimiento de nuestro pequeño bebé y queremos celebrarlo con personas tan especiales como ustedes.</p>

      </article>
  
    </main>
  )
}

export default App
