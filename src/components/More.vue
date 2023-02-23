<template>
  <div class="h-[40vh] w-11/12 mx-auto mt-[10vh]">
    <div class="content w-full flex flex-col">
      <div class="titre">
        <h2 class="text-7xl font-paprika">Vous voulez en savoir plus ?</h2>
        <span class="w-full h-[3px] bg-noir flex my-[5vh]"></span>
      </div>
      <div class="bas w-full flex flex-row justify-between">
        <div class="left w-[48%]">
          <p class=" w-11/12 text-xl leading-10 tracking-[0.3vh]"> Consultez notre foire aux questions ou contactez-nous directement pour obtenir de l'aide.</p>
          <button class="font-paprika tracking-widest text-2xl leading-10 border-noir border-2 p-4 flex flex-row items-center mt-10">
            <p>Cliquez ici</p>
            <svg class="ml-[2vh]" width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill="black"/>
            </svg>
          </button>
        </div>
        <div class="right w-[48%]">
          <p class=" w-11/12 text-xl leading-10 tracking-[0.3vh]">Inscrivez-vous maintenant pour accéder à des milliers de livres en ligne et découvrir de nouveaux mondes à explorer.</p>
          <button class="font-paprika tracking-widest text-2xl leading-10 border-noir border-2 p-4 flex flex-row items-center mt-10">
            <p>Cliquez ici</p>
            <svg class="ml-[2vh]" width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill="black"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name : 'MoreView'
  }

</script>