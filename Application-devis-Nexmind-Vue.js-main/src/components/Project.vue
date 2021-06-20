<template>
  <div class="container">
    <h2>
      Quel service pouvons-nous mettre
      <br />à votre disposition ?
    </h2>
    <div class="select_project">
      <div class="project">
        <router-link :to="'/mobile'">
          <img src="../assets/smartphone.png" alt srcset />
          <h3>
            Développement
            <br />App mobile
          </h3>
        </router-link>
      </div>
      <div class="project">
        <router-link :to="'/features'">
          <img src="../assets/web-page.png" alt srcset />
          <h3>
            Développement
            <br />Site Web
          </h3>
        </router-link>
      </div>
      <div class="project">
        <router-link :to="'/message'">
          <img src="../assets/team.png" alt srcset />
          <h3>
            Accompagnement
            <br />analyse
          </h3>
        </router-link>
      </div>
    </div>
    <div class="buttons_nav">
      <div class="button_link return" @click="hasHistory() ? $router.go(-1) : $router.push('/')">
        <a>
          <i class="fas fa-arrow-left"></i> Retour
        </a>
      </div>
      <div class="button_link next hide" aria-disabled>
        <router-link :to="'/message'">
          Suivant
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss">

.select_project {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin-top: 3em;
  margin-bottom: 3em;
}

.project {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  width: 175px;
  height: 175px;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    h3 {
      font-size: 0.6em;
    }
    width: 25%;
    padding: 0.8em;
    margin: 0.5em;
    height: 150px;
  }
  img {
    width: 50px;
  }
}

.project:hover {
  cursor: pointer;
  border-radius: 20px;
  background: #f6f6f6;
  box-shadow: 12px 12px 24px #afafaf, -12px -12px 24px #ffffff;
  transform: translateX(-10px);
  transform: translateY(-10px);
  transition: 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
  }
}
</style>

<script>
export default {
  methods: {
    hasHistory() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
};
</script>

