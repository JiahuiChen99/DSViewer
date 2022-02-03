<template>
    <!-- Dropdown Button -->
    <div class="relative inline-block text-left">
        <div>
            <button type="button"
                    @click="toggle_dropdown"
                    class="flex justify-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-secondary hover:bg-primary" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Select DS
                <SvgIcon type="mdi" :path="dropdown_icon"/>
            </button>
        </div>
        <!-- Selection Menu -->
        <div v-if="press" class="absolute mt-2 w-full rounded-md shadow-lg bg-secondary z-50" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
                <div class="block px-4 py-2 hover:cursor-pointer hover:bg-primary"
                     v-for="( option, index ) in options" :key="index"
                     @click="select_dropdown(option)"
                >
                    {{ option }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {mdiChevronDown} from "@mdi/js";

export default {
    name: "DropDown",
    components: {
        SvgIcon
    },
    emits: ['selection'],
    props: ['options'],
    methods: {
        /**
         * Toggles the dropdown
         */
        toggle_dropdown: function () {
            this.press = !this.press;
        },
        /**
         * Emits a selection event to the parent
         * and sends the chosen value
         * @param selection chosen value
         */
        select_dropdown: function (selection) {
            this.$emit('selection', selection);
            this.toggle_dropdown();
        }
    },
    data() {
        return {
            dropdown_icon: mdiChevronDown,
            press: false,
        }
    }
}
</script>

<style scoped>

</style>