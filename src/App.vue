<template>
  <div id="app">
    <Header ></Header>
    <router-view/>

  </div>
</template>
<script type="application/ld+json">{ "@context": "http://schema.org" }</script>
<script>
import Header from "./components/header/header";

export default {
  components: {
    Header
  },
  name: "App",
  methods: {
    go() {
      this.$router.push({ path: "my" });
    }
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "home",
    // all titles will be injected into this template
    titleTemplate: "%s | hyalorhu",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content:"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" },

    ],
    script: [
      { innerHTML: '{ "@context": "http://schema.org" }', type: 'application/ld+json' ,body: true }
    ]
  }
};
</script>




<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
