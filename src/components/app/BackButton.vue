<template>
<!-- Generator: Adobe Illustrator 23.0.6, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg :style="style" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 250 221" style="enable-background:new 0 0 250 221;" xml:space="preserve">
    <polygon points="250,48 137.9,48 137.9,0 0,110.5 137.9,221 137.9,173 250,173 "/>
</svg>

</template>

<script>
export default {
	computed: {
		style() {
			return this.$store.getters.getStyle('app', 'navButton')
		},
    },
}
</script>