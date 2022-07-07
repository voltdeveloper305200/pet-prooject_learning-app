<template>
  <div class="pagination mt-4 d-flex justify-content-center pb-3">
    <button @click="prevPage" class="main-btn pagination-btn">&larr;</button>
    <button
    @click="changePage(pageNumber)" 
    v-for="pageNumber in totalPages" :key="pageNumber" 
    class="main-btn pagination-btn"
    :class="{
    'active': page === pageNumber 
    }"
    >
    {{pageNumber}}
    </button>
    <button @click="nextPage" class="main-btn pagination-btn">&rarr;</button>
  </div>
</template>

<script>
export default {
    props: {
        page: {
            type: Number,
            isRequired: true,
        },
        changePage: {
            type: Function,
            isRequired: true,
        },
        nextPage: {
            type: Function,
            isRequired: true,
        },
        prevPage: {
            type: Function,
            isRequired: true,
        },
        totalPages: {
            type: Number,
            isRequired: true,
        }
    }
}
</script>

<style>

</style>