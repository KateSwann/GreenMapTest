<template>
	<nuxt-link :to="'/places/' + id">
		<article class="place-item">
			<div
				class="place-thumbnail"
				:style="{backgroundImage: 'url(' + thumbnail + ')'}">
			</div>
			<div class="place-content">
				<h2 class="place-title">{{title}}</h2>
				<p class="place-content">{{previewText}}</p>
			</div>
		</article>
	</nuxt-link>
</template>


<script>
	export default {
		name: 'PlacePreview',
		props: {
			id: {
				type: String,
				required: true
			},
			title: {
				type: String,
				required: true
			},
			previewText: {
				type: String,
				required: true
			},
			thumbnail: {
				type: String,
				required: true
			},
		}
	}
</script>


<style>
	.place-thumbnail {
	  width: 100%;
	  height: 200px;
	  background-position: center;
	  background-size: cover;
	}
</style>