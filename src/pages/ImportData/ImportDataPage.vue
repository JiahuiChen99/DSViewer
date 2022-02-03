<template>
    <section id="import_data" class="relative w-full h-full p-20">
        <div class="flex w-full h-full bg-secondary rounded-lg p-40">
            <!-- Dotted Drop Area -->
            <div class="flex flex-col w-full border-black border-2 rounded-lg border-dashed justify-center items-center
                 space-y-6"
                 :class="{'bg-primary dark:bg-dark_primary transition_all duration-300' : active}"
                 @dragenter.prevent="toggleActive"
                 @dragleave.prevent="toggleActive"
                 @dragover.prevent
                 @drop.prevent="select_file"
                 >
                <input type="file" ref="ds_file" class="hidden" @change="select_file">
                <SvgIcon class="w-1/4 h-1/4 justify-center" type="mdi" :path="upload_file_icon"/>
                <span class="font-bold text-center text-5xl"> Drag & Drop file here </span>
                <span class="text-center text-4xl"> or </span>
                <!-- Import File Button -->
                <IconButton class="w-max"
                            :class="{'bg-secondary dark:bg-dark_secondary transition-all duration-300' : active}"
                            :icon="upload_file_icon"
                            status="true"
                            text="Browse File"
                            @click="this.$refs.ds_file.click()"
                />
            </div>
        </div>
        <!-- Confirmation PopUp -->
        <UploadConfirmation v-if="file_selected" @buttonClick="confirm_upload" :selected_file_name="selected_file_name"/>
    </section>
</template>

<script>
import UploadConfirmation from "@/components/ImportData/UploadConfirmation";
import SvgIcon from "@jamescoyle/vue-icon";
import {mdiFileUpload} from "@mdi/js";
import IconButton from "@/components/UI/IconButton";
import { ref } from 'vue'

export default {
    name: "ImportDataPage",
    components: {
        IconButton,
        SvgIcon,
        UploadConfirmation
    },
    setup() {
        const active = ref(false)
        const toggleActive = () => {
            active.value = !active.value;
        }

        return { active, toggleActive }
    },
    methods: {
        toggle_popup: function () {
            this.file_selected = !this.file_selected;
            this.selected_file_name = this.selected_file.name;
            this.selected_file = "";
        },
        /**
         * Upload confirmation
         * Cancel: buttonID 0
         * Upload: buttonID 1
         * @param buttonID Identifies pressed button
         */
        confirm_upload: function (buttonID) {
            if ( buttonID ) {
                // TODO: Process data
            }
            // Toggles the popup
            this.toggle_popup();
        },
        /**
         * Checks whether is a drop or a input change event
         * Stores the selected file and enables a popup
         * for the user to confirm the upload to the backend
         * @param e: drop or change event
         */
        select_file: function (e) {
            let uploaded_file;
            if (e.type === "drop") {
                this.toggleActive();
                uploaded_file = e.dataTransfer.files[0];
                if ( !uploaded_file ) return;
                this.data_file = uploaded_file;
                this.selected_file_name = this.data_file.name;
                this.confirm_upload();
                return;
            }
            uploaded_file = e.target.files[0];
            if ( !uploaded_file ) return;
            this.data_file = uploaded_file;
            this.selected_file_name = this.data_file.name;
            this.$refs.ds_file.value = null;
            this.confirm_upload();
        },
    },
    data() {
        return {
            file_selected: false,
            selected_file_name: "",
            selected_file: null,
            show_popUp : false,
            upload_file_icon: mdiFileUpload
        }
    }
}
</script>

<style scoped>

</style>