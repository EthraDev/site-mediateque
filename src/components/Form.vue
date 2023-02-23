<template>
  <div class="w-11/12 mx-auto flex flex-row justify-between h-[80vh]">
    <div class="left w-1/2 flex flex-row h-full justify-between">
      <div class="left w-[45%] flex">
        <img class=" object-cover" src="/imgs/books-women.jpg" alt="books">
      </div>
      <div class="right w-[45%] h-10/12 mx-auto flex flex-col justify-between">
        <div class="haut w-full h-1/2 flex my-[5vh]">
          <img class="h-full w-full" src="/imgs/books-l.jpg" alt="books">
        </div>
        <div class="bottom w-full h-1/2 flex">
          <p class="text-xl leading-10 tracking-[0.3vh]">Nous offrons une période d'essai gratuite de 7 jours pour que vous puissiez tester notre service sans risque. Vous pouvez annuler à tout moment pendant la période d'essai sans aucun frais.</p>
        </div>
      </div>
    </div>
    <div class="right w-1/2 h-11/12 justify-around flex flex-col">
      <div class="content w-11/12 mx-auto h-full flex flex-col justify-between">
        <div class="titre h-[25%] flex flex-col w-full justify-center">
          <h2 class="font-paprika text-7xl">S’inscrire</h2>
          <p class="text-xl leading-10 tracking-[0.3vh] mt-[3vh]">Inscrivez-vous maintenant pour profiter de tous ces avantages et plus encore.</p>
        </div>
        <form action="post" class="flex flex-col justify-between w-10/12 h-[75%] items-start mt-10">
          <div class="flex flex-col w-full">
            <label class="text-2xl" for="Prénom">Prénom</label>
            <input placeholder="|" class="text-noir placeholder:text-noir text-xl bg-transparent border-noir border-2 w-full p-4 mt-4" type="text">
          </div>
          <div class="flex flex-col w-full">
            <label class="text-2xl" for="Nom">Nom</label>
            <input placeholder="|" class="text-noir placeholder:text-noir text-xl bg-transparent border-noir border-2 w-full p-4 mt-4" type="text">
          </div>
          <div class="flex flex-col w-full">
            <label class="text-2xl" for="Email">Email</label>
            <input placeholder="|" class="text-noir placeholder:text-noir text-xl bg-transparent border-noir border-2 w-full p-4 mt-4" type="mail">
          </div>
          <div class="flex flex-col w-full">
            <label class="text-2xl" for="Password">Password</label>
            <input placeholder="|" class="text-noir placeholder:text-noir text-xl bg-transparent border-noir border-2 w-full p-4 mt-4" type="password">
          </div>
          <button class="font-paprika tracking-widest text-2xl leading-10 border-noir border-2 p-4 flex flex-row items-center mt-10" >
            <input value="Submit" type="submit">
            <svg class="ml-[2vh]" width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill="black"/>
            </svg>

          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name : 'FormView',
  }

</script>