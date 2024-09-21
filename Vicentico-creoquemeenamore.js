// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Fue un segundo tan incandescente", time : 20 },
  { text: "Me sentí tan diferente<br/>Y ya no pude pensar", time : 25 },
  { text: "Un dolor tan hondo y cristalino", time : 34 },
  { text: "Un recuerdo del destino", time : 38 },
  { text: "Una luz en la ciudad", time : 42 },
  { text: "Seguí su fuego brillando en el cielo", time : 49 },
  { text: "Te encontré, te encontré <br/>Y me desperté", time : 56 },
  { text: "Te encontré, te encontré <br/>Y me desperté", time : 63 },
  { text: "Y sonó una triste melodía", time : 85 },
  { text: "Que me dio tanta alegría", time : 87 },
  { text: "Solo yo pude escuchar, ahh", time : 92 },
  { text: "Fuiste una presencia tan ausente", time : 99 },
  { text: "Que brillaba entre la gente", time : 102 },
  { text: "Que me hizo recordar", time : 104 },
  { text: "Seguí tu fuego brillando en el cielo", time : 113 },
  { text: "Te encontré, te encontré <br/>Y me desperté", time : 120 },
  { text: "Te encontré, te encontré <br/>Y me desperté", time : 126 },
  { text: "Lejos, veo tu reflejo", time : 135 },
  { text: "Rojo como el sol, oh ohh oh", time : 140 }
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);