function findLyrics(artist, music) {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${music}`);
}

const form = document.querySelector('#lyric-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  doSubmit();
})

async function doSubmit() {
  const lyric_element = document.querySelector('#lyrics');
  const artist = document.querySelector('#artist');
  const music = document.querySelector('#music');

  lyric_element.innerHTML = '<div class="teste">Carregando...</div>';

  try {
    const lyricsReponse = await findLyrics(artist.value, music.value);
<<<<<<< HEAD
    const data = await lyricsReponse.json();
=======
    const data = await lyricsReponse.json()
>>>>>>> adc93baee8ca5ab86fe25d3402821d34f0c47283
    if(data.lyrics) {
      lyric_element.innerHTML = data.lyrics;
    } else {
      lyric_element.innerHTML = data.error;
    }
  } catch(error) {
    lyric_element.innerHTML = `Oops! ${error}`;
  }
}
