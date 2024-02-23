<script setup lang="ts">
import { ref , defineEmits} from 'vue';

const loaded = ref(false);
const loading = ref(false);
const searchValue = ref<string>('the office')
const emit = defineEmits(['searchShow'])

const onClick = () => {
    loading.value = true;

    setTimeout(() => {
        loading.value = false;
        loaded.value = true;
    }, 2000);
};

function handleSubmit(){
    emit('searchShow',searchValue.value)
}
</script>

<template>
    <form action="" @submit.prevent="handleSubmit">
    <v-card
    class="mx-auto"
    color="grey-lighten-3"
    max-width="800"
    >
    <v-card-text>
    <v-text-field
        v-model="searchValue"
        :loading="loading"
        density="compact"
        variant="solo"
        label="Search Show..."
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
    ></v-text-field>
    </v-card-text>
    </v-card>
</form>

</template>

