<template>
    <div>
        <main>
            <div id="headers" class="row">
                <div
                    class="cell"
                    v-for="header in formattedHeaders"
                    :key="header.key"
                    @click="handleHeaderClick(header.key)"
                    v-html="header.label"
                />
            </div>
            <div class="row" v-for="state in formattedStates" :key="state.name">
                <div class="cell" v-text="state.name" />
                <div class="cell" v-text="state.south" />
                <div class="cell" v-text="state.north" />
                <div class="cell" v-text="state.west" />
                <div class="cell" v-text="state.east" />
                <div class="cell" v-text="state.height" />
                <div class="cell" v-text="state.width" />
                <div class="cell" v-text="state.elongation" />
            </div>
        </main>
        <div id="github-link">
            <a href="https://github.com/tedthemusician/states" target="_blank">
                How was this calculated?
            </a>
        </div>
    </div>
</template>

<script>
import states from '@/assets/developer/stateDims.json'

export default {
    data: () => ({
        sortKey: 'name',
        isAscending: true,
        headers: [
            {key: 'name', label: 'Name'},
            {key: 'south', label: 'South'},
            {key: 'north', label: 'North'},
            {key: 'west', label: 'West'},
            {key: 'east', label: 'East'},
            {key: 'height', label: 'Height (mi)'},
            {key: 'width', label: 'Width (mi)'},
            {key: 'elongation', label: 'Elongation'},
        ],
    }),
    computed: {
        formattedHeaders() {
            return this.headers.map(({ key, label }) => {
                let formattedLabel
                if (key === this.sortKey) {
                    if (this.isAscending) {
                        formattedLabel = `&#9650; ${label}`
                    } else {
                        formattedLabel = `&#9660; ${label}`
                    }
                } else {
                    formattedLabel = label
                }
                return { key, label: formattedLabel }
            })
        },
        formattedStates() {
            const sortedStates = [...states].sort((s1, s2) => {
                const ordering = s1[this.sortKey] > s2[this.sortKey] ? 1 : -1
                const direction = this.isAscending ? 1 : -1
                return ordering * direction
            })
            return sortedStates.map(state => ({
                ...state,
                south: state.south.toFixed(2) + '°',
                north: state.north.toFixed(2) + '°',
                west: state.west.toFixed(2) + '°',
                east: state.east.toFixed(2) + '°',
                height: state.height.toFixed(2),
                width: state.width.toFixed(2),
                elongation: (state.elongation * 100).toFixed(0) + '%',
            }))
        },
    },
    methods: {
        handleHeaderClick(key) {
            if (key === this.sortKey) {
                this.isAscending = !this.isAscending
            } else {
                this.sortKey = key
                this.isAscending = true
            }
        },
    },
}
</script>

<style>
main {
    display: table;
}

#headers {
    background: #3d5a51;
    color: #edf;
    font-weight: bold;
    cursor: pointer;
}

.row {
    display: table-row;
    background: #281b2b;
}

.row:nth-child(even) {
    background: #371c3a;
}

.cell {
    display: table-cell;
    padding: 0.35rem;
    border: 0.025rem solid rgb(98, 84, 112);
}

#github-link {
    margin-top: 2rem;
}
</style>