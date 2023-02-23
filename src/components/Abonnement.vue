<template>
  <div class="w-10/12 mx-auto h-[80vh]">
    <div class="titre w-full flex flex-col">
      <h2 class="text-7xl font-paprika">Notre système d’abonnement </h2>
      <span class="bg-noir w-full h-[2px] my-[5vh]"></span>
    </div>
    <div class="content w-full h-full flex flex-row justify-between">
      <div class="gauche w-[48%] h-full overflow-hidden">
        <img class="w-full h-full" src="/imgs/books-l.jpg" alt="books">
      </div>
      <div class="droite w-[48%] h-full flex flex-col justify-between">
        <div class="img w-full h-2/3 overflow-hidden">
          <img class="w-full " src="/imgs/books.jpg" alt="books">
        </div>
        <div class="txt w-full h-1/3 text-xl leading-10 tracking-[0.3vh] flex items-center">
          <p>Notre système d'abonnement e-book est simple et pratique. Vous pouvez lire en ligne ou télécharger les livres sur votre tablette ou votre smartphone. Vous pouvez également ajouter des notes, des signets et des surlignages pour vous aider à mieux comprendre et retenir ce que vous avez lu.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name : 'AbonnementView',
  }

</script>
