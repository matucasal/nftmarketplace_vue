<template>

    <Slide right width="400">
        <div class="menu-burger">
            <ul>
                <li><a class="active" href="/">Mercado</a></li>
                <li><a href="./projects/" >Recursos</a></li>
                <li><a href="/contact/" >Acerca</a></li>
            </ul>
            <div class="actions-header">
                <section class="search-section">
                    <form action="">
                        <input type="text" name="search" id="search" class="search-input" placeholder="Buscar">
                    </form>
                </section>
                <section class="actions-section">
                    <button class="upload-button" type="submit">Subir</button>
                    <button class="connect-wallet-button" type="submit">Conectar Wallet</button>
                </section>
            </div>
        </div>
    </Slide>
</template>
<script>

import { Slide } from 'vue-burger-menu' 

export default {
    components: {
        Slide // Register your component
    }
}
</script>

<style lang="scss" scoped>

    .menu-burger{
        width: 90%;
        height: 100%;
        top: 0;
        flex-direction: column;
        align-items: center;
        transition: transform 1s ease;

        
    }

    .menu-burger a{
        color: white;
        font-size: $header3;
    }

    .menu-burger li {
        padding: 2rem 2rem;
        margin: 1rem 1rem;
    }

    .actions-header {
        padding: 2rem 2rem;
        margin: 2rem 2rem;
    }

    .upload-button{
        font-size: $header3;
        width: 100%;
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
        min-height: 8rem;
        padding-left: 1rem;
        padding-right: 1rem;
        margin: 0px;
        margin: 1rem;
        box-sizing: inherit;
    }
    .connect-wallet-button{
        font-size: $header3;
        width: 100%;
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
        min-height: 8rem;
        padding-left: 1rem;
        padding-right: 1rem;
        margin: 1rem;
        box-sizing: inherit;
    }

    .search-input{
        font-size: $header3;
        box-sizing: border-box;
        cursor: text;
        display: flex;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        border: 1px solid rgb(229, 232, 235);
        min-width: 5rem;
        padding: 1rem;
        box-shadow: rgba(4, 17, 29, 0.25) 0px 0px 8px 0px;
        width: 100%;
        min-height: 8rem;
        margin: 1rem 0rem 4rem 1rem;
    }



</style>