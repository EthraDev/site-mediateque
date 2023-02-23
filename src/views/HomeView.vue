<template>
  <div class="bg-blanc h-full">
    <Header/>
    <Presentation/>
    <div class="abonnements w-9/12 h-[70vh] justify-between flex flex-col mx-auto my-[10vh]">
      <div class="cards flex flex-row justify-between">
        <Card url="/imgs/books-hand.jpg" titre="Abonnement n°1" desc="35€" icon="/imgs/basket.svg"/>
        <Card2 url="/imgs/books-read.jpg" titre="Abonnement n°2" desc="35€" icon="/imgs/basket.svg"/>
        <Card url="/imgs/books-man.jpg" titre="Abonnement n°3" desc="35€" icon="/imgs/basket.svg"/>
      </div>
      <div class="txt text-xl leading-10 tracking-[0.3vh]">
        <p>Avec notre abonnement e-book, vous pouvez accéder à des milliers de livres en ligne, incluant les derniers best-sellers, les classiques de la littérature, les livres pour enfants, les livres en français et bien plus encore. Nous mettons régulièrement à jour notre collection pour vous offrir les dernières nouveautés.</p>
      </div>
    </div>
    <Abonnement/>
    <div class="avis w-11/12 h-[70vh] justify-between flex flex-col mx-auto my-[10vh] mt-[30vh] text-end items-end">
      <div class="titre text-5xl font-paprika w-9/12 leading-[7vh] tracking-[0.3vh]">
        <h2>Vous ne nous croyez pas sur parole, voici ce que nos utilisateurs ont à dire :</h2>
      </div>
      <div class="cards flex flex-row justify-between w-10/12 mx-auto">
        <Card url="/imgs/women.jpg" titre="Je me suis récemment abonné à ce service de livre électronique et je suis ravie de ..." icon="/imgs/speech.svg"/>
        <Card2 url="/imgs/men.jpg" titre="L'un des avantages de ce service est que je peux emprunter plusieurs livres à la fois..." icon="/imgs/speech.svg"/>
        <Card url="/imgs/women2.jpg" titre="L'expérience de lecture elle-même est fantastique, le texte est clair et facile à lire ..." icon="/imgs/speech.svg"/>
      </div>
    </div>
    <span class="h-[10vh] w-full flex"></span>
    <Form/>
    <More/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Presentation from '@/components/Presentation.vue'
import Card from '@/components/Card.vue'
import Card2 from '@/components/Card2.vue'
import Abonnement from '@/components/Abonnement.vue'
import Form from '@/components/Form.vue'
import More from '@/components/More.vue'

export default {

  name: 'HomeView',

  components: {
    Header,
    Presentation,
    Card,
    Card2,
    Abonnement,
    Form,
    More
  }
}
</script>