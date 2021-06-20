<template>
  <div id="app">
    <div class="sidebar">
      <router-link :to="'/'">
        <img src="./assets/soleil.png" alt="logo nexmind" srcset />
      </router-link>
      <div class="links">
        <ul>
          <li>
            <a href="https://nexmind.be" target="_blank">
              <i class="fas fa-home"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Nexmind-2357195911228563" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/nexmind/?originalSubdomain=be"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
/* Transitions */

.fade-enter,
.fade-leave-to {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 0;
  transition: all 0.3s ease;
}

/* Flexbox */

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 17%;
  height: 100vh;
  h2 {
    font-family: "Arimo", sans-serif;
    font-size: 2.5em;
  }
  h3 {
    font-family: "Merriweather Sans", sans-serif;
  }
  @media screen and (max-width: 1200px) {
    //height: 100vh;
    margin-left: 0;
    h2 {
      font-size: 1.5em;
      text-align: center;
      width: 80%;
    }
    h3 {
      font-size: 0.9em;
    }
  }
}

/* Navigation */

.buttons_nav {
  width: 75%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-left: 0;
  }
}

.button_link {
  a {
    color: white;
    padding-top: 1.2em;
    padding-bottom: 1.2em;
    padding-right: 2em;
    padding-left: 2em;
    font-family: "Noto Sans UI";
    font-size: 1.2em;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
  }
  i {
    padding: 0;
    margin: 0;
    font-size: 1em;
  }
  i:hover {
    color: white;
    cursor: pointer;
  }
  @media screen and (max-width: 1200px) {
    font-size: 0.8em;
    margin: 0;
    a {
      padding-top: 0.8em;
      padding-bottom: 0.8em;
      padding-right: 0.6em;
      padding-left: 0.4em;
      margin-right: 0;
    }
    i {
      padding: 0;
      font-size: 0.8em;
    }
  }
}

.next {
  margin-right: 0.5em;
  a {
    background-color: #ff7648;
  }
}

.next:hover {
  transform: translateX(5px);
  transition: 0.2s ease-in-out;
  a {
    background: #ff7648;
    box-shadow: 5px 5px 10px #ff7648, -5px -5px 10px #ffffff;
  }
}

.return {
  margin-left: 0.5em;

  a {
    background-color: #1b3a45;
  }
}

.return:hover {
  transform: translateX(-5px);
  transition: 0.2s ease-in-out;
  a {
    background: #1b3a45;
    box-shadow: 5px 5px 10px #1b3a45, -5px -5px 10px #ffffff;
  }
}

.hide {
  display: none;
  pointer-events: none;
}

/* VUE JS */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Sidebar */

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

i {
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 2.5em;
  color: #bec3c5;
  width: 60px;
  height: 60px;
  padding-left: 0;
}

i:hover {
  color: #ff7648;
}

.sidebar {
  z-index: 100;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  height: 100vh;
  width: 17%;
  img {
    width: 80%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: -2.7em;
    margin-bottom: 5em;
  }
}

@media screen and (max-width: 1200px) {
  ul {
    display: flex;
    flex-direction: row;
    margin-top: 2em;
  }
  i {
    font-size: 1.5em;
  }
  .sidebar {
    width: 100%;
    height: 10%;
    flex-direction: row;
    justify-content: space-around;
    img {
      width: 150px;
      margin: 0;
    }
  }
}
</style>

<script>
export default {};
</script>
