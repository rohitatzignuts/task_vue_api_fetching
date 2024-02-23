<script setup lang="ts">
defineProps<{
    showPoster: string;
    showName: string;
    avgRating: number;
    genres: string[];
    summary: string;
    officialSite: string;
}>()
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
    <v-card-title color="primary">{{ showName }}</v-card-title>
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

    <div>{{ summary }}</div>
    </v-card-text>

    <v-card-actions>
    <v-btn density="compact" plain variant="text" color="teal-accent-4"
        >
        <a :href='officialSite'></a>
    </v-btn>
    </v-card-actions>
    </v-card>
</template>
<style scoped>
a{
    color: black;
}
</style>