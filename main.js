const LinksSocialMedia = {
  github: 'viviancesario',
  youtube: 'channel/UCcTRINJ_MrX0U-_OsAimm2g',
  facebook: 'profile.php?id=100072113751475',
  instagram: 'viviancesario',
  twitter: 'viviancesario'
}

//li é uma variável de scopo

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //  alert(li.children[0].href)
    // alert(social)
    //alert(li.getAttribute('class'))
  }
}

changeSocialMediaLinks()

//Arrow function é uma forma contraída da função

// (arg1, arg2) => {

// }

// arg1 =>
// {

// }

//criar uma função que pega as informações do github e trazer para cá para depois substituir no html

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  //fetch - comando que vai bater na url da API e pega o json que a API responde e vai trazer ´para dentro
  //O retorno vai para dentro do then, é armazenado na variável response e joga pro json

  fetch(url)
  .then(response => response.json())
  //.then(data => alert(data.login))
  //a variável que está guardando o json é data abaixo, para referênciar uma variavel especifica la no api do git usar data.login, data.id...
  .then(data => { 
    userName.textContent = data.login
    userBio.textContent = data.id
    userLink.href = data.id
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
     })

}

getGithubProfileInfos()

// function changeSocialMediaLinks(){
//   document.getElementById('userName').textContent = 'Maria'
//   userName.textContent = 'Outros nome'
// }

// changeSocialMediaLinks()

//formas de escrever constantes:
// camelCase
// PascalCase
// snake_case

// const github = 'viviancesario'
// const youtube = 'channel/UCcTRINJ_MrX0U-_OsAimm2g'
// const facebook = 'profile.php?id=100072113751475'
// const instagram = 'viviancesario'
// const twitter = 'viviancesario'

// function ShowMeSomething(){
//   alert(links.github)
// }
// function ShowMeSomething(text){
//   alert(text)
// }

// ShowMeSomething(links.github)

// através do DOM (document object model), o javascript consegue acessar o mapeamento de objetos do html e acessa-lo
