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
                <div v-for="item in top_collections" :key="item.id" class="top-collections-card">
                    <div class="top-collections-card-number"><h4>{{item.id}}</h4></div>
                    <div class="top-collections-card-img">
                        <img src="@/assets/imgs/splashbid_img.png" alt="">
                    </div>
                    <div class="top-collections-card-content">
                        <div class="top-collections-card-tittle">
                            <h5>{{ item.tittle }}</h5> <br/>
                            <div class="top-collections-card-price">
                                <img src="@/assets/icons/eth_icon.svg" alt="ethereum-symbol">  <span>{{ item.value }} ETH </span> 
                            </div>
                        </div>
                        <div class="top-collections-card-stats">
                            <span v-if="item.stats > 0" style="color: green">{{ item.stats }} %</span> 
                            <span v-else style="color: #FF002E" >{{ item.stats }} %</span> 
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
            ],
            top_collections: [
                { id: 0,tittle: 'CryptoFunks', value:20050, stats: '23.52' },
                { id: 1,tittle: 'CryptoCars', value:1050, stats: '-40.12' },
                { id: 2,tittle: 'BombCrypto', value:999050, stats: '-20.13' },
                { id: 3,tittle: 'Axie Infinity', value:1550, stats: '-40.15' },
                { id: 4,tittle: 'Dinox', value:10020, stats: '-0.37' },
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
                        width: 100px;
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
            @include flex (flex-start, flex-start, column);
            .top-collections-tittle{
                h3{
                    font-size: $header4;
                }
                h5{
                    margin-top: 0.5rem;
                    font-size: $header5;
                    color: #3D00B7;
                }
            }
            .top-collections-card{
                margin: 2rem 5rem 2rem 0rem;
                padding: 0.7rem;
                @include flex (center,center, row);
                .top-collections-card-number{
                    margin: 1rem;
                    flex: 1 1 1rem;
                }
                .top-collections-card-img{
                    flex: 1 1 2rem;
                    img{
                        box-sizing: border-box;
                        width: 50px;
                        height: 50px;
                        object-fit: contain;
                    }
                }
                .top-collections-card-content{
                    flex: 1 1 100%;
                    @include flex (flex-start,center, row);
                    .top-collections-card-tittle{
                        flex: 1 1 auto;
                        margin-right: 16px;
                        font-size: 16px;
                        
                        .top-collections-card-price{
                            @include flex (flex-start,flex-start, row);
                        }
                        
                        img{
                            box-sizing: border-box;
                            width: 15px;
                            height: 15px;
                            object-fit: contain;
                        }

                        span{
                            font-size: 1.3rem;
                        }
                    }

                    .top-collections-card-stats{
                        span{
                            font-size: 1.5rem;
                            letter-spacing: 0.4px;
                            word-spacing: 1.4px;
                            font-weight: 1000;
                        }
                    }
                }
            }

        }
    }




        @media screen and (max-width:712px){
            /*Featured vue*/
            .top-section {
                margin-top: 5rem;
                width: 100%;
                flex-wrap: wrap;
                @include flex (flex-start,center, column);
                .first-top-column{
                    margin-right: 0;
                    padding: 0;
                    border: 1px solid red;
                    height: 70vh;
                    min-height: 50vh;
                    .last-sale-img{
                        @include flex (flex-start,center, column);
                        border: 1px solid red;
                        padding: 1rem;
                        margin: 1rem;
                        img{
                            width: 100%;
                            border: 1px solid red;
                            width: 200;
                            height: 200px;
                        }
                    }
                    .last-sale-text{
                        margin-right: 0;
                        border: 1px solid red;
                        @include flex (flex-start,center, column);
                    }
                    
                }
                .second-top-column{
                    border: 1px solid red;
                }
                .third-top-column{
                    border: 1px solid red;
                }
            
            }
            /*Fin featured vue*/
        }
</style>