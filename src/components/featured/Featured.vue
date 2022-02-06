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
        margin-top: 3vh;
        margin-left: 3vh;
        width: 95%;
        height: auto;
        flex-wrap: wrap;
        @include flex (space-between,space-between, row);
        .first-top-column{
            min-height: 60vh;
            flex: 1 1 40%;
            @include flex (flex-start,center, column);
            .last-sale-img{
                flex: 1 1 10rem;
                img{
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            .last-sale-text{
                margin-top: 1vh;
                flex: 0 1 auto;
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
                        width: 20%;
                        height: 20%;
                        object-fit: contain;
                    }
                    h4{
                        font-size: 1.5rem;
                    }
                }
            }
        }
        .second-top-column{
            min-height: 60vh;
            flex: 1 1 20%;
            @include flex (flex-start,flex-start, column);
            
            .last-bid-card{
                margin: 0.5rem 5rem 2rem 0rem;
                padding: 0.7rem;
                @include flex (center,center, row);
                .last-bid-card-img{
                    flex: 1 1 auto;
                    img{
                        box-sizing: border-box;
                        width: 90%;
                        height: 90%;
                        object-fit: cover;
                    }
                }
                .last-bid-card-content{
                    margin-left: 2rem;
                    flex: 1 1 100%;
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
                        margin-top: 1.5rem;
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
            min-height: 60vh;
            flex: 1 1 30%;
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
                margin: 0.5rem 5rem 2rem 0rem;
                padding: 0.7rem;
                @include flex (center,center, row);
                .top-collections-card-number{
                    margin: 1rem;
                    flex: 1 1 auto;
                }
                .top-collections-card-img{
                    flex: 1 1 auto;
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
                        margin-left: 16px;
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




        @media screen and (max-width:1140px){
            /*Featured vue*/
            .top-section {
                border: solid 1px red;
                flex-wrap: wrap;
                height: auto;
                margin: 0;
                @include flex (center,center, column);
                .first-top-column{
                    height: auto;
                    flex: 1 0;
                    .last-sale-img{
                        @include flex (center,center, column);
                        padding: 0rem;
                        margin: 0rem;
                        img{
                            width: 80%;
                            height: 85%;
                        }
                    }
                    .last-sale-text{
                        @include flex (center,center, column);
                        .last-sale-tittle{
                            flex: 1 0;
                            h4{
                                font-size: 6vw;   
                            }
                            span{
                                display: none;    
                            }
                        }

                        .last-sale-bid{
                            span{
                                display: none;
                            }
                            h4{
                                font-size: 5vw;
                            }
                            img{
                                display: none;
                            }
                        }
                        
                        
                    }
                    
                }
                .second-top-column{
                    /*background-color: blue;*/
                    flex: 1 0 100%;
                    height: auto;
                    margin-top: 3vh;
                    .last-bid-card{
                        border-bottom: 1px solid $border-bottom-color;
                        padding-bottom: 2rem;
                        @include flex (center,center, row);

                        .last-bid-card-img{
                            flex: 1 0;
                            margin: 2rem 5rem 0rem 0rem;
                            img{
                                width: 10vh;
                                height: 10vh;
                            }
                        }
                        .last-bid-card-content{
                            @include flex (center,center, column);
                            .last-bid-card-tittle{
                                h4{
                                    font-size: 7vw;
                                }
                            }
                            .last-bid-card-button
                            {
                                button{
                                    padding: 2rem;
                                    font-size: 6vw;
                                }
                            }
                            .last-bid-card-price{
                                margin-top: 1rem;
                                span{
                                    margin-left: 1rem;
                                    font-size: 6vw;
                                }
                                img{
                                    width:10%;
                                    height:10%;
                                }
                            }
                            
                            
                        }
                    }
                    
                    
                }
                .third-top-column{
                    flex: 1 0;
                    height: auto;
                    min-height: auto;
                    margin-top: 3vh;
                    .top-collections-tittle{
                        padding: 2rem;
                        h3{
                            font-size: 6vw;
                        }
                        h5{
                            font-size: 4vw;
                        }
                    }
                    .top-collections-card{
                        margin: 2rem 0rem 0rem 0rem;
                        border-bottom: 1px solid $border-bottom-color;
                        padding-bottom: 2rem;
                        .top-collections-card-number{
                            flex: 1 0 5vw;
                            h4{
                                font-size: 6vw;
                            }
                            
                        }
                        .top-collections-card-img{
                            flex: 1 0 20vw;
                            img{
                                width: 60%;
                                height: 60%;
                            }
                        }
                        .top-collections-card-content{
                            flex: 1 0 50vw;
                            @include flex (center,center, column);
                            .top-collections-card-tittle{
                                h5{
                                    font-size: 3vh;
                                }
                                img{
                                    width: 10%;
                                    height: 10%;
                                }
                            }
                        .top-collections-card-price{                            
                            span{
                                margin-left: 1rem;
                                font-size: 2.5vh;
                            }
                        }
                        .top-collections-card-stats{
                            margin-top: 1rem;
                            span{
                                font-size: 2.5vh;
                            }
                        }
                    }
                }
            }
            
        }
            /*Fin featured vue*/
    }
</style>
