<template>
    <section class="collections-section">
        <div class="collections-section-tittle"> <h3>Colecciones TOP</h3> </div>
        <div class="collections-section-content">
            <ColecctionsCard/>
            <ColecctionsCard/>
            <ColecctionsCard/>
        </div>
    </section>
</template>


<script>
import ColecctionsCard from './CollectionsCard.vue'

export default {
    components: {
        ColecctionsCard
    }
}
</script>

<style lang="scss">
.collections-section{
    margin-top: 20rem;
    min-height: 90vh;
    width: 100%;
    background-color: #D9E0EC;
    padding: 6rem;
    .collections-section-tittle{
        border: 1px solid blue;
        h3{
        }
    }

    .collections-section-content{
        border: 1px solid red;
        @include flex (space-around,center, row);
    }
}   

@media screen and (max-width:912px){
    .collections-section{
        padding: 3rem;
        margin-top: 5rem;
        .collections-section-tittle{
        }
        .collections-section-content{
            border: 1px solid red;
            @include flex (space-around,center, column);
        }
    }
}
</style>