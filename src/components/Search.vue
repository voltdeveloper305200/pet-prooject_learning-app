<template>
    <div class="content-top__search">
        <img class="search-icon" src="../assets/zoom-icon.svg" alt="" />
        <input
            :value="search"
            @input="updateInput"
            placeholder="Поиск..."
            class="search-field"
            type="text"
        />
    </div>
</template>

<script>
export default {
    props: {
        search: [String, Number],
    },
    methods: {
        updateInput(evt) {
            this.$emit("input", evt.target.value);
        },
    },
};
</script>

<style></style>
