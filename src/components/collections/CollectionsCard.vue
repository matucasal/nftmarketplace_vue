<template>
    <div class="collections-section-content-card">
        <div class="collections-section-content-card-imgs">
            <div class="collections-section-content-card-imgs-1"><img src="@/assets/imgs/splashbid_img.png" alt="splash-bid"></div>
            <div class="collections-section-content-card-imgs-2"><img src="@/assets/imgs/splashbid_img.png" alt="splash-bid"></div>
            <div class="collections-section-content-card-imgs-3"><img src="@/assets/imgs/splashbid_img.png" alt="splash-bid"></div>
            <div class="collections-section-content-card-imgs-4"><img src="@/assets/imgs/splashbid_img.png" alt="splash-bid"></div>
        </div>
        <div class="collections-section-content-card-info">
            <div class="collections-section-content-card-info-tittle-artist"><h4>Amazing Collection</h4> <div class="collections-section-content-card-info-artist"> <img src="@/assets/imgs/splashbid_img.png" alt="autor"> <span>By Carlos </span></div></div>
            <div class="collections-section-content-card-info-stats">
                <button>Total 54 items</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .collections-section-content-card{
        border: 1px solid green;
        max-width: 50%;
        padding: 0 4px;
        .collections-section-content-card-imgs{
            border: 1px solid blue;
            position:relative;
            display: grid;
            min-height: 50vh;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-column-gap: 2rem;
            grid-row-gap: 2rem;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .collections-section-content-card-imgs-1{
                grid-area: 1 / 1 / 4 / 3;
                background-color:yellow
            }

            .collections-section-content-card-imgs-2{
                grid-area: 1 / 3 / 2 / 4;
                background-color:green;
            }
            .collections-section-content-card-imgs-3{
                grid-area: 2 / 3 / 3 / 4; 
                background-color:red;
            }
            .collections-section-content-card-imgs-4{
                grid-area: 3 / 3 / 4 / 4;
                background-color:blue;
            }
        }
        .collections-section-content-card-info{
            border: 1px solid orange;
            @include flex (flex-start,center, row);
            .collections-section-content-card-info-tittle-artist{
                border: 1px solid black;
                .collections-section-content-card-info-artist{
                    @include flex (flex-start,center, row);
                    img{
                        margin: 0.3rem;
                        height: 6%;
                        width: 6%;
                        border-radius: 50%;
                    }
                    span{
                        margin: 0.3rem;
                        font-weight: bold;
                    }
                }
                
            }
            .collections-section-content-card-info-stats{
                border: 1px solid blue;
                margin-left: auto;
                button{
                    width: 100%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-color: white;
                    color: #3D00B7;
                    border: 2px solid #3D00B7;
                    border-radius: 30px;
                    min-height: 46px;
                    padding-left: 0.5rem;
                    padding-right: 0.5rem;
                    margin: 1rem;
                    box-sizing: inherit;
                    font-size: 1rem;
                }
            }
        }
    }

    @media screen and (max-width:912px){
        .collections-section-content-card{
            border: 1px solid green;
            max-width: 100%;
            padding: 0;
            .collections-section-content-card-info{
                .collections-section-content-card-info-tittle-artist{

                }
                .collections-section-content-card-info-stats{
                    button{
                        padding: 1rem;
                        font-size: 2.5vw;
                    }
            }

            }
        }
    }
</style>