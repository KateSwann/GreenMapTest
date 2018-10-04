<template>
  <div>
    <nuxt-link :to="'/places/' + id">
      <b-card title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
        <div
          class="place-thumbnail"
          :style="{backgroundImage: 'url(' + thumbnail + ')'}">
        </div>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <div class="place-content">
          <h2 class="place-title">{{title}}</h2>
          <p class="place-content">{{previewText}}</p>
        </div>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </nuxt-link>
  </div>
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