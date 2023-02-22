<template>
  <header class="bg-white bg-opacity-50 flex flex-row justify-between w-11/12 mx-auto text-lg h-[6vh] items-center">
    <div class="menu flex flex-row w-3/12 justify-between bg-red-500">
      <a href="#">Home</a>
      <a href="#">Abonnements</a>
      <a href="#">Témoignages</a>
      <a href="#">About Us</a>
    </div>
    <div class="title flex flex-row justify-center bg-blue-500 w-1/3">
      <h1>Paris Médiathèque</h1>
    </div>
    <div class="others flex flex-row justify-between bg-green-500 w-1/12">
      <a href="#">Faq</a>
      <a href="#">Contact</a>
      <a href="#"><ion-icon name="person"></ion-icon></a>
    </div>
  </header>
</template>

<script>

  export default {
    name : 'HeaderView',
  }

</script>