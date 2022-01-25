<template>
    <div class="webapp">
        <Header/>
        <Home/>
        <Featured/>
    </div>
</template>

<script>

import Header from './header/Header.vue';
import Home from './home/Home.vue';
import Featured from './featured/Featured.vue';

export default {
    name: 'NftApp',
    components: {
        Header,
        Home,
        Featured
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

    @media screen and (max-width:912px){
        html, body {
            font-size: 50%;
            margin: 0;
            padding: 0;
        }

        
        /* header */
        .main-head{
            width: 95%;
        }


        .main-head nav{
            @include flex(center, center, row);
                
            .logo{
                flex: 1 1 10rem;
                margin-top: 2rem;
            }
            .menu-header { 
                display: none;
            }
            .burger-header {
                flex: 1 1 10rem;
                display: block;
            }
        }
        /* fin header */
   
    }

</style>


