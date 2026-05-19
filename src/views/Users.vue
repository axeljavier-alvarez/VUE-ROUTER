<template>
    
    <div v-if="$route.params.userId">
        <h1>Aquí podrás ver el detalle de un usuario</h1>
    </div>

    <div v-else>
       <h1>Aquí podrás ver la lista de usuarios</h1>
    </div>

</template>
<script>

</script>
<style>

</style>