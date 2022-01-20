<template>
    <div class="webapp">
        <Header/>
        <Home/>
        <Top/>
    </div>
</template>

<script>

import Header from './header/Header.vue';
import Home from './home/Home.vue';
import Top from './top/Top.vue';

export default {
    name: 'NftApp',
    components: {
        Header,
        Home,
        Top
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

    @media screen and (max-width:712px){
        html, body {
            font-size: 40.5%;
            margin: 0;
            padding: 0;
        }

        
        /* header */
        .main-head{
            width: 100%;
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

        /*Texto y titulo*/
        .intro {
            @include flex(center, center, column);

            .intro-text{
                margin-top: 5rem;
                text-align: center;
                align-items: center;
                
                .intro-button{
                    flex: 2 1 10rem;
                    .explore-button{
                        width: 100%;
                    }
                }
                .intro-stats{
                    flex: 1 1 10rem;
                    .column_stats1{margin: 2rem;}
                    .column_stats2{margin: 2rem;}
                    .column_stats3{margin: 2rem;}
                }
                
            }
            .intro-images{
                    margin-top: 5rem;
                    svg {
                        display: block;
                        margin: auto;
                    }
                }
           
        }
        /*fin texto y titulo*/

        .intro-extra{
            flex: 1 1 10rem;
            .column_extra1{margin-top: 2rem;}
            .column_extra2{margin-top: 4rem;}
            .column_extra3{margin-top: 2rem;}
        }
       

       
    }

</style>


