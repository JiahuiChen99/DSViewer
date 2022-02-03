<template>
    <div class="flex absolute inset-0 justify-center place-items-center bg-gray-400 bg-opacity-75 transition-opacity"
        role="dialog" aria-modal="true">
        <div class="flex flex-col w-2/6 h-auto bg-secondary dark:bg-dark_secondary rounded-lg space-y-2 pb-3 drop-shadow-xl z-50">
            <!-- Uploaded file section -->
            <div class="flex flex-row rounded-lg m-5 px-5 py-4 border border-black">
                <svg-icon type="mdi" :path="file_icon"/>
                <span class="ml-5"> {{ selected_file_name }} </span>
            </div>

            <div class="flex justify-center">
                <DropDown :options="data_structures" @selection="select_ds"/>
            </div>

            <!-- Upload Confirmation Buttons -->
            <div class="flex flex-row justify-center">
                <IconButton :icon="cancel_icon" status="true" text="Cancel" @click="$emit('buttonClick', false)"/>
                <IconButton :icon="upload_icon" :status="alive" text="Upload" @click="$emit('buttonClick', true)"/>
            </div>
        </div>
        <div class="absolute w-full h-full filter backdrop-blur-sm z-10"></div>
    </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiClose, mdiFile, mdiUpload } from "@mdi/js";
import IconButton from "@/components/UI/IconButton";
import DropDown from "../UI/DropDown";

export default {
    name: "UploadConfirmation",
    components: {
        DropDown,
        IconButton,
        SvgIcon
    },
    emits: ['buttonClick'],
    props: ['selected_file_name'],
    methods: {
        /**
         * Stores user's DS selection
         * in vuex
         * @param selection chosen DS
         */
        select_ds: function (selection) {
            this.$store.commit('select_ds', selection);
        }
    },
    data() {
        return {
            file_icon: mdiFile,
            cancel_icon: mdiClose,
            upload_icon: mdiUpload,
            alive: true,
            data_structures: ['Graph', 'Tree']
        }
    }
}
</script>

<style scoped>

</style>