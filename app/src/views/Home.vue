<template>
    <ion-page class="bg-gray-300">
        <ion-header :translucent="true" mode="ios">
            <ion-toolbar mode="ios">
                <div class="flex items-center mx-3 mt-7 mb-3">
                    <div class="mr-2">
                        <img
                            src="https://picsum.photos/50/50"
                            alt="Pasar Dev"
                        />
                    </div>
                    <div class="flex flex-col w-full">
                        <ion-text color="medium">
                            <span class="text-xs">Kamu berada di pasar</span>
                        </ion-text>
                        <div class="flex items-center justify-between">
                            <h2 class="font-bold">Pasar Templek</h2>
                            <ion-button
                                class="m-0"
                                fill="clear"
                                color="primary"
                                size="small"
                            >
                                Ganti Pasar
                            </ion-button>
                        </div>
                    </div>
                </div>

                <ion-searchbar
                    placeholder="Mau belanja apa hari ini"
                ></ion-searchbar>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="h-full mt-4">
                <div class="mx-3">
                    <ion-slides pager="true" :options="promoSlideOpts">
                        <ion-slide>
                            <img
                                src="https://picsum.photos/400/200"
                                alt="lorem"
                            />
                        </ion-slide>
                        <ion-slide>
                            <img
                                src="https://picsum.photos/400/200"
                                alt="lorem"
                            />
                        </ion-slide>
                        <ion-slide>
                            <img
                                src="https://picsum.photos/400/200"
                                alt="lorem"
                            />
                        </ion-slide>
                    </ion-slides>
                </div>
                <div id="cat" class="bg-white px-3 py-4 mt-10">
                    <div class="flex justify-between">
                        <h3 class="font-bold mb-3">Category</h3>
                    </div>

                    <div class="-mx-2">
                        <ion-slides :options="catSlideOpts">
                            <ion-slide>
                                <div class="flex">
                                    <ion-button
                                        fill="clear"
                                        v-on:click="onClick()"
                                    >
                                        <div class="flex flex-col">
                                            <img
                                                src="https://picsum.photos/50/50"
                                                alt="lorem"
                                            />
                                            <span class="text-black mt-2"
                                                >Sayuran</span
                                            >
                                        </div>
                                    </ion-button>
                                </div>
                            </ion-slide>
                            <ion-slide>
                                <div class="flex">
                                    <ion-button
                                        fill="clear"
                                        v-on:click="onClick()"
                                    >
                                        <div class="flex flex-col">
                                            <img
                                                src="https://picsum.photos/50/50"
                                                alt="lorem"
                                            />
                                            <span class="text-black mt-2"
                                                >Sayuran</span
                                            >
                                        </div>
                                    </ion-button>
                                </div>
                            </ion-slide>
                            <ion-slide>
                                <div class="flex">
                                    <ion-button
                                        fill="clear"
                                        v-on:click="onClick()"
                                    >
                                        <div class="flex flex-col">
                                            <img
                                                src="https://picsum.photos/50/50"
                                                alt="lorem"
                                            />
                                            <span class="text-black mt-2"
                                                >Sayuran</span
                                            >
                                        </div>
                                    </ion-button>
                                </div>
                            </ion-slide>
                            <ion-slide>
                                <div class="flex">
                                    <ion-button
                                        fill="clear"
                                        v-on:click="onClick()"
                                    >
                                        <div class="flex flex-col">
                                            <img
                                                src="https://picsum.photos/50/50"
                                                alt="lorem"
                                            />
                                            <span class="text-black mt-2"
                                                >Sayuran</span
                                            >
                                        </div>
                                    </ion-button>
                                </div>
                            </ion-slide>
                            <ion-slide>
                                <div class="flex">
                                    <ion-button
                                        fill="clear"
                                        v-on:click="onClick()"
                                    >
                                        <div class="flex flex-col">
                                            <img
                                                src="https://picsum.photos/50/50"
                                                alt="lorem"
                                            />
                                            <span class="text-black mt-2"
                                                >Sayuran</span
                                            >
                                        </div>
                                    </ion-button>
                                </div>
                            </ion-slide>
                        </ion-slides>
                    </div>
                </div>

                <div>
                    <product-front />
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/vue";
import ProductFront from "../components/product/ProductFront.vue";

import { defineComponent } from "vue";
import gql from "graphql-tag";
import { useQuery, useResult } from "@vue/apollo-composable";

const HELLO_QUERY = gql`
    query {
        hello
    }
`;

export default defineComponent({
    name: "Home",
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonToolbar,
        ProductFront,
    },
    setup() {
        const { result } = useQuery(HELLO_QUERY);

        const hello = useResult(result, null, (data) => data.hello);

        const promoSlideOpts = {
            initialSlide: 0,
            slidesPerView: 1.2,
            spaceBetween: 20,
            speed: 400,
        };
        const catSlideOpts = {
            initialSlide: 0,
            slidesPerView: 4.7,
            spaceBetween: 10,
            speed: 400,
        };

        return {
            hello,
            promoSlideOpts,
            catSlideOpts,
        };
    },
});
</script>

<style>
ion-content {
    --background: #e5e5e5;
}
ion-slides {
    overflow: visible !important;
}
ion-slides .swiper-pagination-bullets {
    bottom: -25px !important;
}
#cat ion-button {
    height: max-content;
}
</style>
