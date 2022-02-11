<template>
    <section class="signup-section">
        <div class="signup-section-row">
            <div class="signup-section-row-imgs">
                <SignUpImage/>
            </div>
            <div class="signup-section-row-info">
                <div class="signup-section-row-info-tittle"><h3>Soy SignUp Info</h3></div>
                <div class="signup-section-row-info-content"></div>
                <div class="signup-section-row-info-button"><CoolBlueButton v-on:click="signUp()"/></div>
            </div>
        </div>
    </section>
</template>


<script>

import SignUpImage from './SignUpImages.vue'
import CoolBlueButton from '../common/components/CoolBlueButton.vue'

export default {
    components: {
        SignUpImage,
        CoolBlueButton
    },

    methods: {
        signUp(){
            console.log("quiero hacer signup")
        }
    }

    
}
</script>

<style lang="scss">
.signup-section{
    margin-top: 3vh; 
    width: 100%;
    height: auto;
    padding: 2rem;
    .signup-section-row{
        flex-wrap: wrap;
        @include flex (space-between,center, row);
        .signup-section-row-imgs{
            flex: 1 1 50%;
            border: 1px solid blue;
        }
        .signup-section-row-info{
            flex: 1 1 50%;
            border: 1px solid red;
        }
    }

}   

@media screen and (max-width:1140px){
    .signup-section{
        padding: 3rem;
    }
}
</style>