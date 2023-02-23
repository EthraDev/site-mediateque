<template>
  <header class="bg-blanc bg-opacity-50 flex flex-row justify-between w-full text-2xl h-[8vh] fixed top-0 z-[90] items-center text-noir border-b-noir border-b-2">
    <div class="content w-11/12 mx-auto flex flex-row justify-between items-center">
      <div class="menu flex flex-row w-4/12 justify-between h-full items-center">
        <a href="#">Home</a>
        <a href="#">Abonnements</a>
        <a href="#">Témoignages</a>
        <a href="#">About Us</a>
      </div>
      <div class="title flex flex-row justify-center w-1/3 h-full items-center font-paprika text-3xl">
        <h1>Paris Médiathèque</h1>
      </div>
      <div class="others flex flex-row justify-between w-[15%] h-full items-center">
        <a href="#">Faq</a>
        <a class=" underline-offset-4 underline" href="#">Contact</a>
        <a class="bg-noir rounded-full w-[5vh] h-[5vh] flex items-center justify-center" href="#"><ion-icon class="w-[3vh] h-[3vh] fill-blanc" name="person"></ion-icon></a>
      </div>
    </div>
  </header>
</template>

<script>

  export default {
    name : 'HeaderView',
  }

</script>