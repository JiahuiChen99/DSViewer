<template>
    <div id="app" class="flex h-screen w-screen select-none bg-primary dark:bg-dark_primary">
        <!-- Left navigation bar -->
        <NavigationBar/>
        <!-- Page rendered by router -->
        <router-view/>
    </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";

export default {
    name: 'App',
    components: {
        NavigationBar
    }
}
</script>

<style scoped>

</style>
