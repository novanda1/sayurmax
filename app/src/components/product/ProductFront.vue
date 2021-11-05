<template>
    <div class="bg-white pt-5 px-3">
        <div class="flex justify-between items-center">
            <h3 class="font-bold">Lagi Promo</h3>
            <ion-button v-on:click="onClick()" fill="clear" size="small">
                Lihat Semua
            </ion-button>
        </div>
        <div class="-mx-1 mt-3">
            <ion-slides :options="slideOpts">
                <ion-slide>
                    <product-front-single />
                </ion-slide>
                <ion-slide>
                    <product-front-single />
                </ion-slide>
                <ion-slide>
                    <product-front-single />
                </ion-slide>
                <ion-slide>
                    <product-front-single />
                </ion-slide>
            </ion-slides>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductFrontSingle from "./ProductFrontSingle.vue";

export default defineComponent({
    name: "ProductFront",
    components: {
        ProductFrontSingle,
    },
    setup() {
        const slideOpts = {
            initialSlide: 0,
            slidesPerView: 2.2,
            spaceBetween: 0,
            speed: 400,
        };

        return {
            slideOpts,
        };
    },
});
</script>
