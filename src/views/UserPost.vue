<template>
<!-- <h1>Vista de un post de un determinado usuario</h1> -->
<h1>Vista del post {{ $route.params.post }} del usuario {{ $route.params.user }}</h1>
</template>
<script>
export default {
    mounted(){
        console.log(this.$route.params);
    }
}
</script>
<style>

</style>