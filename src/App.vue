<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Inicio</RouterLink>  
    <RouterLink to="/about">About</RouterLink> 
    <RouterLink to="/blog">Blog</RouterLink>

  </nav>

  <main>
    <!-- Aquí es donde se cargará el contenido de Blog.vue -->
    <RouterView />
  </main>
</template>

<style scoped>
/* Un estilo básico para que no se vea todo pegado */
nav {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  margin-bottom: 2rem;
}

nav a {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #35495e;
}

main {
  padding: 0 2rem;
}
</style>