<template>
  <div>
    <div class="container">
      <h2>C'est presque finit !</h2>
      <span class="advertise">
        Afin de mieux traiter votre demande, nous avons besoin de votre e-mail
        <br />afin de vous recontacter au plus vite
      </span>

      <div class="form">
        <div class="form__group field">
          <input type="input" class="form__field" placeholder="Name" name="name" id="name" required />
          <label for="name" class="form__label">Nom</label>
        </div>
        <div class="form__group field">
          <input type="input" class="form__field" placeholder="Name" name="name" id="name" required />
          <label for="name" class="form__label">Message</label>
        </div>
        <div class="form__group field">
          <input type="input" class="form__field" placeholder="Name" name="name" id="name" required />
          <label for="name" class="form__label">E-mail</label>
        </div>
      </div>

      <div class="buttons_nav">
        <div class="button_link return" @click="hasHistory() ? $router.go(-1) : $router.push('/')">
          <a>
            <i class="fas fa-arrow-left"></i> Retour
          </a>
        </div>
        <div class="button_link send">
          <router-link :to="'/done'">
            Envoyer
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
span {
  font-family: "Merriweather Sans", sans-serif;
  font-size: 1.2em;
  margin-top: 1em;
}

@media screen and (max-width: 1200px) {
  h2 {
    margin-top: 3em;
  }
}

.buttons_nav {
  margin-top: 1em;
  @media screen and (min-width: 1200px){
    width: 50%;
  }
}


.next:hover {
  transform: translateY(0px);
  transition: 0.2s ease-in-out;
}

.send {
  margin-top: -3em;
  a {
    background-color: #73d286;
    border-radius: 180px;
    padding-left: 3em;
    padding-right: 3em;
  }
}

.advertise {
  padding-top: 1em;
  padding-bottom: 1em;
  @media screen and (max-width: 1200px) {
    font-size: 0.9em;
    text-align: center;
    width: 80%;
  }
}

//////////////

.form {
  margin-left: -18em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    margin-left: -8em;
  }
}

$primary: black;
$secondary: black;
$white: #fff;
$gray: #9b9b9b;
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin: 2em;
  width: 50%;
  font-family: "Merriweather Sans", sans-serif;
  @media screen and (max-width: 1200px) {
    width: 70%;
    margin: 1em;
  }
}

.form__field {
  margin-left: 3em;
  font-family: inherit;
  width: 550px;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3em;
  color: black;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
    @media screen and (max-width: 1200px){
      font-size: 1em;
      padding-left: 1em;
    }
  }
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
}

.form__label {
  position: absolute;
  top: 0;
  margin-left: 3em;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: black;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary, $secondary);
  border-image-slice: 1;
}

.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
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

