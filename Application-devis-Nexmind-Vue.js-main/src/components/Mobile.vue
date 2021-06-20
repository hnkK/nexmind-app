<template>
  <div>
    <div class="container">
      <h2>
        Quel est le support sur lequel vous souhaitez
        <br>développer votre application ?
      </h2>
      <div class="select_project">
        <div class="project">
          <router-link :to="'/features'">
            <img src="../assets/apple.png" alt srcset />
            <h3>IOS</h3>
          </router-link>
        </div>
        <div class="project">
          <router-link :to="'/features'">
            <img src="../assets/android.png" alt srcset />
            <h3>Android</h3>
          </router-link>
        </div>
        <div class="project both">
          <router-link :to="'/features'">
            <img src="../assets/both.png" alt srcset />
            <h3>Tous</h3>
          </router-link>
        </div>
      </div>
      <div class="buttons_nav">
        <div class="button_link return" @click="hasHistory() ? $router.go(-1) : $router.push('/')">
          <a>
            <i class="fas fa-arrow-left"></i> Retour
          </a>
        </div>
        <div class="button_link hide">
          <router-link :to="'/message'">
            Suivant
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
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

