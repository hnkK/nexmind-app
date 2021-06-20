<template>
  <div>
    <div class="container">
      <div class="start">
        <h1>Bienvenue sur Easy-App</h1>
        <img src="../assets/soleil.png" alt srcset />
        <p>Configurez votre projet facilement et rapidement à l'aide de notre application de devis personnalisé, Easy-app !</p>
        <div class="button_start">
          <router-link :to="'/project'">Commencer</router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.start {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button_start {
  transition: 0.3s all ease;
  a {
    color: #3e3d3d;
    background-color: white;
    border: 1px solid black;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    padding-right: 3em;
    padding-left: 3em;
    font-family: "Noto Sans UI";
    border-radius: 50px;
    text-decoration: none;
    text-align: center;
    margin-top: 0;
  }
}

.button_start:hover {
  filter: brightness(120%);
  a {
    font-weight: bolder;
  }
}

img {
  padding-top: 1.5em;
  width: 150px;
}

h1 {
  margin-top: 0;
  text-align: center;
  font-family: "Cocogoose";
  font-size: 3em;
  color: #1b3a45;
}
p {
  padding: 2em;
  font-family: "Roboto";
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 2em;
  width: 50%;
}

@media screen and (max-width: 576px) {
  p {
    width: 80%;
  }
}
@media screen and (max-width: 1200px) {
  h1 {
    font-size: 2em;
    width: 80%;
  }
  p {
    width: 50%;
    font-size: 1em;
    line-height: 1.2em;
  }
}
</style>

<script>
export default {
  components: {},
};
</script>

