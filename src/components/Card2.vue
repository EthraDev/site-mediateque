<template>
  <div class="h-[50vh] w-[37vh] border-noir border-2 relative">
    <div class="haut h-2/3 w-full overflow-hidden">
      <img class="h-full w-full object-cover" :src="url" alt="image">
    </div>
    <div class="bas bg-noir h-1/3 text-blanc items-center flex flex-col text-center justify-center">
      <div class="txt w-11/12 mx-auto text-start">
        <p class=" text-2xl">{{ titre }}</p>
        <p class=" text-xl">{{ desc }}</p>
      </div>
      <div class="icone absolute flex items-center border-noir border-2 bg-blanc rounded-full p-4 text-noir -bottom-10 left-[45%] w-[6vh]">
        <img class="w-[4vh] h-[4vh]" :src="icon" alt="icone">
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
      icon : String
    }
  }

</script>
