<template>
    <div>
        <Header/>
    </div>
</template>

<script>

import Header from './header/Header.vue';

export default {
    name: 'NftApp',
    components: {
        Header
    }
}
</script>

<style lang="scss">
    /* Global Styles */

    //Import la typo
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Play&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Montserrat', sans-serif;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    h1 {
        font-size: $header1;
    }
    li,
    button,
    label,
    input,
    a,
    p {
        font-size: $text;
    }
    h2 {
    font-size: $header2;
    }
    h3 {
        font-size: $header3;
    }
    h4,
    h5 {
        font-size: $header4;
    }

    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: $gray-text;
    }

</style>


