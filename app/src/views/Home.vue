<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <div>
                    <img src="https://picsum.photos/50/50" alt="Pasar Dev">
                </div>
                <div>
                    <p>Kamu berada di pasar</p>
                    <ion-nav-link href="asd">
                        a
                    </ion-nav-link>
                </div>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div v-html="hello"></div>

            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Blank</ion-title>
                </ion-toolbar>
            </ion-header>

            <div id="container">
                <strong>Ready to create an app?</strong>
                <p>
                    Start with Ionic
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ionicframework.com/docs/components"
                        >UI Components</a
                    >
                </p>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/vue";
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
        IonTitle,
        IonToolbar,
    },
    setup() {
        const { result } = useQuery(HELLO_QUERY);

        const hello = useResult(result, null, (data) => data.hello);

        return {
            hello,
        };
    },
});
</script>
