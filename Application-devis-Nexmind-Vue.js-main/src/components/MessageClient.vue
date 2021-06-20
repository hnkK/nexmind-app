<template>
  <div>
    <div class="container">
      <h2>
        Décrivez-nous votre projet, vos idées,
        que souhaiteriez vous ?
      </h2>
      <span class="example">
        Exemple : Application de co-voiturage pour personnes âgées
        <br />
        <br />Je souhaiterai développer un projet autour du gaspillage alimentaire
      </span>

      <textarea aria-disabled></textarea>

      <div class="buttons_nav">
        <div class="button_link return" @click="hasHistory() ? $router.go(-1) : $router.push('/')">
          <a>
            <i class="fas fa-arrow-left"></i> Retour
          </a>
        </div>
        <div class="button_link next">
          <router-link :to="'/email'">
            Suivant
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.buttons_nav {
  width: 55%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
textarea {
  width: 50%;
  height: 300px;
  font-family: "Roboto";
  padding: 1em;
  resize: none;
  @media screen and (max-width: 768px) {
    width: 75%;
    height: 25%;
  }
}

h2 {
  width: 70%;
  margin-top: 3em;
}

.example {
  color: gray;
  padding: 1.7em;
}

span {
  margin-top: -1em;
  padding: 1em;
  text-align: left;
  color: #888888;
  font-size: 1em;
  @media screen and (max-width: 768px) {
    font-size: 0.6em;
    padding: 0em;
  }
}

.seconde {
  color: white;
}
</style>

<script>
export default {
  methods: {
    hasHistory() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

