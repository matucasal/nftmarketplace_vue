<template>
    <section class="top-section">
        <div class="first-top-column">
            
            <div class="last-sale-img">
                <img src="@/assets/imgs/splashbid_img.png" alt="splash-bid">
            </div>
            <div class="last-sale-text">
                <div class="last-sale-tittle">
                    <h4>The Futr Abrstr</h4>
                    <span>Oferta hace 10 minutos</span>
                </div>
                <div class="last-sale-bid">
                    <span>Oferta más alta</span>
                    <div class="last-sale-bid-price">
                        <img src="@/assets/icons/eth_icon.svg" alt="ethereum-symbol">    <h4>0.25 ETH </h4>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="second-top-column">
            <div v-for="item in featured_bids" :key="item.id" class="last-bid-card">
                <div class="last-bid-card-img">
                    <img src="@/assets/imgs/splashbid_img.png" alt="">
                </div>
                <div class="last-bid-card-content">
                    <div class="last-bid-card-tittle">
                        <h4>{{ item.tittle }}</h4>
                    </div>
                    <div class="last-bid-card-price">
                        <span>Price</span>    
                    </div>
                    <div class="last-bid-card-button">
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="third-top-column">hola</div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            featured_bids: [
                { id: 0,tittle: 'Item 1' },
                { id: 1,tittle: 'Item 2' },
                { id: 2,tittle: 'Item 3' },
            ]
        }
    
    
    }
}
</script>

<style lang="scss">
    .top-section {
        border-top: 1px solid red;
        min-height: 90vh;
        width: 90%;
        flex-wrap: wrap;
        @include flex (flex-start,center, row);
        .first-top-column{
            flex: 1 1 10rem;
            border: 1px solid red;
            @include flex (space-between,center, column);
            .last-sale-img{
                img{
                    box-sizing: border-box;
                    width: 400px;
                    height: 400px;
                    object-fit: contain;
                }
            }
            .last-sale-text{
                margin: 1rem;
                @include flex (space-between,center, row);
                .last-sale-tittle{
                    margin: 0rem 5rem 0rem 5rem;
                    flex: 1 1 8rem;
                }
                .last-sale-bid{
                    margin: 0rem 5rem 0rem 5rem;
                    flex: 1 1 2rem;
                    @include flex (space-between,center, column);
                    .last-sale-bid-price{
                        @include flex (space-between,center, row);
                    }
                    img {
                        box-sizing: border-box;
                        width: 20px;
                        height: 20px;
                        object-fit: contain;
                    }
                    h4{
                        font-size: 1.5rem;
                    }
                }
            }
        }
        .second-top-column{
            flex: 1 1 10rem;
            border: 1px solid red;
            @include flex (space-between,center, column);
            .last-bid-card{
                margin: 0rem 5rem 5rem 5rem;
                flex: 1 1 10rem;
                border: 1px solid red;
                @include flex (space-between,center, row);
                .last-bid-card-img{
                    flex: 1 1 10rem;
                    border: 1px solid red;
                    img{
                        box-sizing: border-box;
                        width: 100;
                        height: 100px;
                        object-fit: contain;
                    }
                }
                .last-bid-card-content{
                    margin: 0rem 5rem 0rem 3rem;
                    flex: 1 1 10rem;
                    border: 1px solid red;
                    @include flex (flex-start,flex-start, column);
                }
            }
        }
        .third-top-column{
            flex: 1 1 1rem;
            border: 1px solid red;
        }
    }


</style>