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
    const data = await lyricsReponse.json()
    if(data.lyrics) {
      lyric_element.innerHTML = data.lyrics;
    } else {
      lyric_element.innerHTML = data.error;
    }
  } catch(error) {
    lyric_element.innerHTML = `Oops! ${error}`;
  }
}
