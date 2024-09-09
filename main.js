document.addEventListener('DOMContentLoaded', function () {
  const foto = document.querySelector('#foto');
  const nome = document.querySelector('#nome');
  const usuario = document.querySelector('#username');
  const repositorios = document.querySelector('#repositorios');
  const seguidores = document.querySelector('#seguidores');
  const seguindo = document.querySelector('#seguindo')
  const link = document.querySelector('#link');


  fetch('https://api.github.com/users/josevaldirfilho')
    .then(function (resposta) {
      return resposta.json();
    }).then(function (json) {
      foto.src = json.avatar_url;
      nome.innerText = json.name;
      usuario.innerText = json.login;
      repositorios.innerText = json.public_repos;
      seguidores.innerText = json.followers;
      seguindo.innerText = json.following;
      link.href = json.html_url;
    })




});