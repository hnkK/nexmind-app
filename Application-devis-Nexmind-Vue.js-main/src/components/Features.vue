<template>
  <div>
    <div class="container">
      <h2>Quelles sont les fonctionnalités que vous désirez ?</h2>
      <div class="radio_container">
        <label class="checkbox" v-for="(option, i) in options" :key="i">
          <div class="tooltip">
            {{ option.name }}
            <span class="tooltiptext">{{ option.details }}</span>
          </div>
          <input type="checkbox" name="radio" />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="buttons_nav">
        <div class="button_link return" @click="hasHistory() ? $router.go(-1) : $router.push('/')">
          <a>
            <i class="fas fa-arrow-left"></i> Retour
          </a>
        </div>
        <div class="button_link next">
          <router-link :to="'/message'">
            Suivant
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped >
.container {
  @media screen and (max-width: 768px) {
    height: 100%;
  }

  h2 {
    @media screen and (max-width: 1200px) {
      padding-top: 4em;
    }
  }
}

.tooltip {
  position: relative;
  display: inline-block;
  @media screen and (max-width: 768px) {
    font-size: 0.8em;
  }
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 100%;
  border-radius: 6px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-shadow: 5px 5px 7px #737373, -5px -5px 7px #ffffff;
  color: #191919;
  text-align: center;
  padding: 0.5em;
  font-size: 0.8em;
  font-family: "Roboto";
  font-weight: 400;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  width: 300px;
  top: 100%;
  left: 50%;
  margin-left: -150px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.radio_container {
  padding: 5em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  label {
    padding-left: 1.7em;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}

.info {
  font-family: "Roboto";
  font-size: 1em;
  margin-top: -1.5em;
  color: #888888;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
}

//////////
.checkbox {
  display: block;
  flex-direction: row;
  position: relative;
  padding-left: 25px;
  margin: 1em;
  width: 200px;
  text-align: left;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
}

.checkmark {
  position: absolute;
  top: 0;
  left: -10px;
  height: 25px;
  width: 25px;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 5px 5px 10px #c9c9c9, -5px -5px 5px #ffffff;
}

.checkbox:hover input ~ .checkmark {
  background-color: #ccc;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #212121;
}
</style>

<script>
export default {
  data() {
    return {
      options: [
        {
          id: 0,
          name: "Interface utilisateur sur mesure",
          details:
            "Template, mockup ou tout élément de design que vous souhaiteriez refaire.",
        },
        {
          id: 1,
          name: "Interface d'administration",
          details:
            "Contenus modifiables via une interface administrateur personnalisée.",
        },
        {
          id: 2,
          name: "Localisation et traductions",
          details: "Localisation de votre projet en plusieurs langues",
        },
        {
          id: 3,
          name: "Messagerie instantanée",
          details: "Implémentation d'un système de messagerie instantanée type chat",
        },
        {
          id: 4,
          name: "Partage de documents",
          details:
            "Images, vidéos, photos, documents PDF, ...",
        },
        {
          id: 5,
          name: "Intégrations d'outils extérieurs",
          details: "Dropbox, Slack, Monday, ...",
        },
        { id: 6, name: "Systèmes de paiement", details: "Personnalisé ou externe (tel que Paypal)" },
        {
          id: 7,
          name: "Notifications smartphone",
          details: "Système de notifcations directs pour vos utilisateurs.",
        },
                {
          id: 7,
          name: "Système de navigation",
          details: "Implémentation d'un système de navigation personnalisé.",
        }  
      ],
    };
  },
  methods: {
    hasHistory() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>



