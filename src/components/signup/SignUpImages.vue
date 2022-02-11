<template>
    <div class="parent">
        <div class="div1"><img src="@/assets/imgs/splashbid_img.png" alt="splash-bid"></div>
        <div class="div2"><img src="@/assets/imgs/splashbid_img.png" alt="splash-bid"></div>
        <div class="div3"><img src="@/assets/imgs/splashbid_img.png" alt="splash-bid"></div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss">
.parent {
    position:relative;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 0.5fr) 1fr;
    grid-template-rows: 1fr 0.5fr;
    grid-column-gap: 3rem;
    grid-row-gap: 4rem;
}

img{
    width: 80%;
    height: 80%;
    object-fit: cover;
    border-radius: 10%;
    
}

.div1 { 
    grid-area: 1 / 1 / 2 / 3; 
    align-self: center; 
    text-align: right;
}
.div2 { 
    grid-area: 2 / 2 / 3 / 3; 
    align-self: center; 
    text-align: right;
}
.div3 { 
    grid-area: 1 / 3 / 3 / 4;
    align-self: center; 
    
}
</style>