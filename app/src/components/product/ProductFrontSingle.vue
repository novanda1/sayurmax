<template>
    <div>
        <ion-card mode="ios">
            <img src="https://picsum.photos/300/250" alt="Pasar Dev" />
            <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <div class="text-left">halo</div>
            </ion-card-content>
        </ion-card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ProductFrontSingle",
});
</script>

<style scoped>
ion-card {
    margin: 0 5px
}
</style>