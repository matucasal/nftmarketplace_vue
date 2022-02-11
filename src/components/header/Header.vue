<template>
    <header class="main-head">
        <nav>
            <div class="logo">
                <h1>VUE NFT</h1>
            </div>
            <div class="burger-header">
                 <BurgerMenu/> 
            </div>
            <div class="menu-header">
                <ul>
                    <li><a class="active" href="/">Home</a></li>
                    <li><a href="./projects/" >Projects</a></li>
                    <li><a href="/contact/" >Contact</a></li>
                </ul>
                <div class="actions-header">
                    <section class="search-section">
                        <form action="">
                            <input type="text" name="search" id="search" placeholder="Buscar">
                        </form>
                    </section>
                    <section class="actions-section">
                        <!-- <button class="upload-button" type="submit">Subir</button>-->
                        <CoolBlueButton texto="Subir"/>
                        <button class="connect-wallet-button" type="submit">Conectar Wallet</button>
                    </section>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>

import BurgerMenu from './BurgerMenu.vue'
import CoolBlueButton from '../common/components/CoolBlueButton.vue'

export default {
    components: {
        BurgerMenu,
        CoolBlueButton
    }
}
</script>

<style lang="scss" scoped>

.main-head{
    width: 95%;
    margin: 0 0 0 auto;
}

nav{
    @include flex(space-between, center, row);
    min-height: 10vh;
    width: 95%;
    flex-wrap: wrap;
    .logo{
        font-family: 'Play', sans-serif;
        @include flex(flex-start, center, row);
        flex: 1 1 5rem;
        h1{
            margin: 2rem;
        }
    }
    .burger-header {
        display: none;
    }
    .menu-header{
        @include flex(flex-start, center, row);
        flex: 1 1 auto;
        ul{
            @include flex(space-around, center, row);
            flex: 1 1 20rem;
        }
        .actions-header{
            @include flex(space-around, center, row);
            flex: 1 1 auto;
            margin: 1rem;
        }
        .actions-section{
            @include flex(flex-end, center, row);
            flex: 1 1 auto;
            margin: 1rem;
        }
    }
    

    .connect-wallet-button{
        width: 80%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: none;
        background-color: black;
        color: white;
        border-color: black;
        border-radius: 30px;
        min-height: 46px;
        padding-left: 1rem;
        padding-right: 1rem;
        margin: 1rem;
        box-sizing: inherit;
    }

    input {
        box-sizing: border-box;
        cursor: text;
        display: flex;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        border: 1px solid rgb(229, 232, 235);
        width: 100%;
        min-width: 5rem;
        padding: 1rem;
        box-shadow: rgba(4, 17, 29, 0.25) 0px 0px 8px 0px;
        height: 4rem;
    }


}

/*
@media screen and (max-width:930px){
        nav .menu-header { 
            display: none;
        }
        nav .burger-header {
            display: inline;
        }

        .main-head{
            width: 100%;
        }
        nav {
            align-items: center;
            justify-content: center;
            width: 100%;
        }
    }
*/

</style>