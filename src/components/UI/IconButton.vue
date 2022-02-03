<template>
    <button type="button" class="flex flex-row bg-primary dark:bg-dark_primary rounded-lg px-4 py-2 mx-2 my-2 font-bold"
            :class="{ 'disabled:opacity-50' : !status, 'hover:bg-primary_variant dark:hover:bg-dark_primary_variant' : status }"
            :disabled="!status"
    >
        <SvgIcon type="mdi" :path="icon"/>
        <span class="ml-3"> {{ text }} </span>
    </button>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";

export default {
    name: "IconButton",
    props: ['icon', 'text', 'status'],
    components: {
        SvgIcon
    }
}
</script>

<style scoped>

</style>