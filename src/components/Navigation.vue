<template>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'props'}">Props</router-link>
        </li>
        <li>
          <router-link :to="{name: 'vuex'}">VueX</router-link>
        </li>
        <li>
          <router-link :to="{name: 'bulma'}">Bulma</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavigationComponent'
  }
  </script>
  
  <style scoped>
  nav {
    background-color: var(--dark);
    height: 70px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
  }
  
  ul {
    list-style: none;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    width: 80%;
    margin: auto;
  }
  
  li {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  a:link, a:visited, li {
    color: var(--main-lighter);
    font-size: 1.1em;
    text-decoration: none;
    font-family: var(--title-font);
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>