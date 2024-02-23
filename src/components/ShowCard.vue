<script setup lang="ts">
const props = defineProps<{
    showPoster: string;
    showName: string;
    avgRating: number;
    genres: string[];
    summary: string;
    officialSite: string;
}>()

// Function
const goTo = () => {
    window.open(props?.officialSite)
}
</script>

<template>
    <v-card
    class="mx-auto"
    max-width="400"
    variant="elevated"
    >
    <v-img
    class="align-end text-white"
    height="500"
    :src=showPoster
    cover
    >
    <v-card-title color="white">{{ showName }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
    {{ avgRating }}
    </v-card-subtitle>

    <v-card-text>
        <v-chip
        class="ma-2"
        color="pink"
        label
        >
        {{ genres }}
    </v-chip>

    <div v-html="summary" />
    </v-card-text>

    <v-card-actions>
    <v-btn color="success" @click="goTo">
        goto
        <!-- <a :href='officialSite' class="link"></a> -->
    </v-btn>
    </v-card-actions>
    </v-card>
</template>
<style scoped>
.link{
    /* color: black; */
}
</style>