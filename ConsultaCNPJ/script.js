function cepAdress(cep) {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`);
}

const form = document.querySelector('#cep_form');

form.addEventListener('submit', event => {
  event.preventDefault();
  doSubmit();
})

async function doSubmit() {
  const cepInfos = document.querySelector('#cep_infos');
  const cep = document.querySelector('#cep');

  try {
    const cepResponse = await cepAdress(cep.value);
    const data = await cepResponse.json();
    if(data.cep) {
      cepInfos.innerHTML = `
      <table class="cep_table">
      <thead>
      <tr>
      <th>Logradouro/Nome</th>
      <th>Bairro</th>
      <th>Localidade/UF</th>
      <th>CEP</th>
      <th>DDD</th>
      </tr>
      </thead>
      <tbody>
      <td>${data.logradouro}${data.complemento}</td>
      <td>${data.bairro}</td>
      <td>${data.localidade}/${data.uf}</td>
      <td>${data.cep}</td>
      <td>${data.ddd}</td>
      </tbody>
      </table>`;
    } else {
      cepInfos.innerHTML = 'CEP Inválido';
    }
  } catch(error) {
    console.log(error);
  }
}