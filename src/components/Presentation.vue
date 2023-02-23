<template>
  <div class="flex flex-col w-11/12 mx-auto pt-[8vh] h-[135vh] relative justify-between">
    <div class="haut w-full flex flex-row h-[80%] relative">
      <div class="left w-[40%] h-full overflow-hidden">
        <img class="object-cover h-full" src="imgs/books-l.jpg" alt="books">
      </div>
      <div class="center w-2/3 justify-center items-start flex flex-col">
        <h2 class="font-paprika text-9xl relative capitalize ml-[5vh]">
          <div class="absolute -left-[50%] -top-[120%]">
            <span class=" bg-white bg-opacity-25 blur-sm p-4 absolute w-full h-[15vh] z-[0]"></span>
            <p class="ml-4 z-[10]">A new way</p>
          </div>
          <p>to read</p>
        </h2>
        <p class="w-7/12 text-xl leading-10 mt-[5vh] ml-[5vh] tracking-[0.3vh]">Abonnez-vous à notre système d'abonnement e-book pour accéder à des milliers de livres en ligne !</p>
        <button class="ml-[5vh] mt-[5vh] tracking-widest text-xl leading-10 border-noir border-2 p-4">En savoir plus</button>
      </div>
      <div class="others w-1/3 flex flex-row justify-around">
        <div class="h-[60vh] absolute -bottom-[30vh] right-[25vh]  w-[20vh] overflow-hidden"><img class="h-full object-cover"  src="imgs/books.jpg" alt="books"></div>
        <div class="h-[60vh] absolute -bottom-[15vh] right-0  w-[20vh] overflow-hidden"><img class="transform -scale-x-100 h-full object-cover" src="imgs/books-women.jpg" alt="books"></div>
      </div>
    </div>
    <div class="bottom w-5/3 h-[30%] mt-[8vh]">
      <h3 class="font-paprika text-6xl w-7/12 leading-[8vh]">Nous savons que la lecture est importante pour vous.</h3>
      <p class="text-xl leading-10 tracking-[0.3vh] w-7/12 mt-[2vh]">C'est pourquoi nous avons créé un système d'abonnement e-book pour vous permettre de lire autant de livres que vous le souhaitez, quand vous le souhaitez.</p>
    </div>
  </div>
</template>

<script>

  export default {
    name : 'PresentationView',
  }

</script>
