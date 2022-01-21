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
                        <img src="@/assets/icons/eth_icon.svg" alt="ethereum-symbol">  <span>{{ item.price }} ETH </span>  
                    </div>
                    <div class="last-bid-card-button">
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="third-top-column">
            <div class="top-collections-tittle">
                <h3>COLECCIONES TOP</h3>
                <h5>Últimos 5 días</h5>
            </div>
            <div class="top-collections-list">
                <div v-for="item in featured_bids" :key="item.id" class="top-collections-card">
                    <div class="top-collections-card-number">{{item.id}}</div>
                    <div class="last-bid-card-img">
                        <img src="@/assets/imgs/splashbid_img.png" alt="">
                    </div>
                    <div class="top-collections-card-content">
                        <div class="top-collections-card-tittle">
                            <h4>{{ item.tittle }}</h4>
                        </div>
                        <div class="top-collections-card-value">
                            <img src="@/assets/icons/eth_icon.svg" alt="ethereum-symbol">  <span>{{ item.price }} ETH </span>  
                        </div>
                        <div class="top-collections-card-stats">
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            featured_bids: [
                { id: 0,tittle: 'Item 1', price:0.25 },
                { id: 1,tittle: 'Item 2' ,price:0.55},
                { id: 2,tittle: 'Item 3' ,price:0.01},
            ]
        }
    
    
    }
}
</script>

<style lang="scss">
    .top-section {
        min-height: 90vh;
        width: 90%;
        flex-wrap: wrap;
        @include flex (flex-start,center, row);
        .first-top-column{
            height: 70vh;
            min-height: 50vh;
            flex: 1 1 10rem;
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
            height: 70vh;
            min-height: 50vh;
            flex: 1 1 10rem;
            @include flex (space-between,center, column);
            
            .last-bid-card{
                margin-top: 0rem;
                margin: 0rem 5rem 5rem 5rem;
                flex: 1 1 10rem;
                @include flex (space-between,center, row);
                .last-bid-card-img{
                    flex: 1 1 10rem;
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
                    @include flex (center,center, column);
                    .last-sale-bid-price{
                        @include flex (space-between,center, row);
                    }
                    span{
                        margin-top: 0.5rem;
                        font-size: 1.5rem;
                    }
                    img {
                        margin-top: 0.5rem;
                        box-sizing: border-box;
                        width: 15px;
                        height: 15px;
                        object-fit: contain;
                    }
                    .last-bid-card-button{
                        margin-top: 0.5rem;
                        button{
                            font-size: $button-text;
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
                            min-height: 3rem;
                            padding-left: 1rem;
                            padding-right: 1rem;
                            box-sizing: inherit;
                        }
                    }
                }
            }
        }
        .third-top-column{
            height: 70vh;
            min-height: 50vh;
            flex: 1 1 10rem;
            border: 1px solid red;
            @include flex (space-between, flex-start, column);
            .top-collections-tittle{
                h4{
                    font-size: $header4;
                }
                h5{
                    margin-top: 0.5rem;
                    font-size: $header5;
                    color: #3D00B7;
                }
            }

        }
    }


</style>