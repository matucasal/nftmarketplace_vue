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
    margin-top: 3vh; 
    width: 100%;
    height: auto;
    background-color: #D9E0EC;
    padding: 2rem;
    .collections-section-tittle{
        h3{
        }
    }

    .collections-section-content{
        @include flex (space-between,center, row);
    }
}   

@media screen and (max-width:1140px){
    .collections-section{
        padding: 3rem;
        .collections-section-tittle{
        }
        .collections-section-content{
            @include flex (space-around,center, column);
        }
    }
}
</style>