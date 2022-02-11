<template>
    <button class="cool-blue-button" type="submit" @click="handleClick">{{ texto }}</button>
</template>

<script>
export default {

    props:{
        texto: String
    },

    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
}
</script>

<style lang="scss" scoped>
.cool-blue-button{
    width: 80%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    background-color: #3D00B7;
    color: white;
    border-color: #3D00B7;
    border-radius: 30px;
    min-height: 46px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 0px;
    margin: 1rem;
    box-sizing: inherit;
}
</style>