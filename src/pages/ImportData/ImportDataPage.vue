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
export default {
    name: "ImportDataPage"
}
</script>

<style scoped>

</style>