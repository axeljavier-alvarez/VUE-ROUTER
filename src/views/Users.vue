<template>
    
    <div v-if="$route.params.userId">
        <h1>Aquí podrás ver el detalle de un usuario</h1>
    </div>

    <div v-else>
       <h1>Aquí podrás ver la lista de usuarios</h1>
    </div>
    <div id="nav">
        <router-link :to="'/users/' + $route.params.userId">Inicio</router-link>
        <router-link :to="'/users/' + $route.params.userId + '/profile'">Perfil</router-link>
        <router-link :to="'/users/' + $route.params.userId + '/courses'">Cursos</router-link>
    </div>
    <router-view />
</template>
<script>
</script>
<style>

</style>