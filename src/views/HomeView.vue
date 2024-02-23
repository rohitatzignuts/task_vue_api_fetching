<script setup lang="ts">
import ShowCard from '@/components/ShowCard.vue';
import ShowSearch from '@/components/ShowSearch.vue';
import { ref } from 'vue';

interface Show {
  id: number;
  image?: { original?: string , medium?:string } | null;
  name: string;
  rating: { rating: number };
  genres: string[];
  summary: string;
  officialSite: string | null; 
}

const searchValue = ref<string>('')
const showList = ref<Show[]>([]);

const fetchList = async (value: string) => {
    try {
        const response = await window.fetch(`http://api.tvmaze.com/search/shows?q=${value}`);
        const data = await response.json();
        return data.map((item: { show: any; }) => item.show); 
    } catch (error) {
        console.error('Error fetching shows:', error);
        throw error;
    }
};


function handleSearch(value :string){
  searchValue.value = value
  fetchList(value)
    .then(shows => showList.value = shows)
    .catch(error => console.error(error));
}
</script>

<template>
  <v-container>
    <ShowSearch 
      @searchShow="handleSearch"
    />
    <v-row
        align="center"
        style="height: fit-content;"
      >
      <v-col
        v-for="show in showList" 
        :key="show.id"
        cols="auto">
        <ShowCard 
        :showPoster="show.image.original || show.image.medium"
        :showName="show.name"
        :avgRating="show.rating.rating"
        :genres="show.genres.map(genre => genre)"
        :summary="show.summary"
        :officialSite="show.officialSite"
      />
      </v-col>
    </v-row>
  </v-container>
</template>
