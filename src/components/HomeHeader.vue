<template>
    <header>
        <div id="marquee" v-if="theme === 'vintage'">
            <h1>~*~ Ted Oliver! ~*~</h1>
        </div>
        <h1 v-else-if="theme === 'greybeard'">
            Ted Oliver's WWW Home Page
        </h1>
        <h1 id="modern" v-else>Ted Oliver</h1>
    </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            'theme',
        ]),
    },
}
</script>

<style>
#modern {
    font-weight: normal;
}

#marquee {
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
}

#marquee h1 {
    display: inline-block;
    padding-left: 100%;
    will-change: transform;
    animation: marquee 7s linear infinite;
}

@keyframes marquee {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-100%, 0);
    }
}
</style>