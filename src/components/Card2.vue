<template>
  <div class="h-[50vh] w-[35vh] border-noir border-2 relative">
    <div class="haut h-2/3 overflow-hidden">
      <img class="h-full" :src="url" alt="image">
    </div>
    <div class="bas bg-noir h-1/3 text-blanc items-center flex flex-col text-center justify-center">
      <div class="txt">
        <p class=" text-3xl">{{ titre }}</p>
        <p class=" text-2xl">{{ desc }}</p>
      </div>
      <div class="icone absolute flex items-center border-noir border-2 bg-blanc rounded-full p-4 text-noir -bottom-10 left-[45%] w-[6vh]">
        <ion-icon class="w-[4vh] h-[4vh]" name="basket"></ion-icon>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name : 'CardView',

    props: {
      url: String,
      titre: String,
      desc: String,
    }
  }

</script>
