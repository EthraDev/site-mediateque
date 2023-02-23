<template>
  <div class="bg-blanc h-full">
    <Header/>
    <Presentation/>
    <div class="abonnements w-8/12 h-[70vh] justify-between flex flex-col mx-auto my-[10vh]">
      <div class="cards flex flex-row justify-between">
        <Card url="/imgs/books-hand.jpg" titre="lorem ipsum" desc="35€"/>
        <Card2 url="/imgs/books-read.jpg" titre="lorem ipsum" desc="35€"/>
        <Card url="/imgs/books-man.jpg" titre="lorem ipsum" desc="35€"/>
      </div>
      <div class="txt text-xl leading-10 tracking-[0.3vh]">
        <p>Avec notre abonnement e-book, vous pouvez accéder à des milliers de livres en ligne, incluant les derniers best-sellers, les classiques de la littérature, les livres pour enfants, les livres en français et bien plus encore. Nous mettons régulièrement à jour notre collection pour vous offrir les dernières nouveautés.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Presentation from '@/components/Presentation.vue'
import Card from '@/components/Card.vue'
import Card2 from '@/components/Card2.vue'


export default {

  name: 'HomeView',

  components: {
    Header,
    Presentation,
    Card,
    Card2,
  }
}
</script>