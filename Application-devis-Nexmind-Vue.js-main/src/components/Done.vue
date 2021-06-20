<template>
  <div>
    <div class="container">
      <h2>Nous avons bien reçu votre demande</h2>
      <p>
        Nous allons traiter dans les plus brefs délais votre demande.
        <br />
        <br />Au vu des informations que vous nous avez fournies, nous estimons
        votre projet à
      </p>

      <span>{{ number }} € HTVA</span>

      <p>Vous pouvez également reformuler une nouvelle demande</p>

      <div class="new">
        <router-link :to="'/project'">Nouveau devis</router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.new {
  padding: 3em;
  a {
    color: white;
    background-color: #1b3a45;
    padding-top: 1.2em;
    padding-bottom: 1.2em;
    padding-right: 2em;
    padding-left: 2em;
    font-family: "Noto Sans UI";
    font-size: 1em;
    border-radius: 50px;
    text-decoration: none;
    @media screen and (max-width: 1200px) {
      padding-top: 0.6em;
      padding-bottom: 0.6em;
      padding-right: 1em;
      padding-left: 1em;
      font-size: 1em;
    }
  }
}

.new:hover {
  transition: 0.2s ease-in-out;
}

h2 {
  color: #73d286;
  text-align: center;
  @media screen and (max-width: 1200px) {
    text-align: center;
  }
}

p {
  font-size: 1.2em;
  text-align: left;
  @media screen and (max-width: 576px) {
    text-align: center;
    width: 100%;
  }
  @media screen and (max-width: 1200px) {
    text-align: center;
    font-size: 0.8em;
    margin-left: 1em;
    margin-right: 1em;
    width: 80%;
  }
}

span {
  font-family: "Merriweather Sans", sans-serif;
  font-size: 2em;
  padding: 1.5em;
  @media screen and (width: 1200px) {
    font-size: 2.4em;
    padding: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      number: 0,
    };
  },
  mounted() {
    this.number = Math.floor(Math.random() * 10000);
  },
};
</script>

