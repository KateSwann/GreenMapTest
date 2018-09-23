<template>
  <div>
    <Header />

    <FlickitySlider />
    
    <h1>Welcome home dude</h1>

    <section class="places-list">
      <PlacePreview
        id="1"
        thumbnail="https://img.huffingtonpost.com/asset/59b1b4a81400002000fa8856.jpeg"
        title="Hello there"
        previewText="This is my first post!" />

      <PlacePreview
        id="2"
        thumbnail="https://img.huffingtonpost.com/asset/59b1b4a81400002000fa8856.jpeg"
        title="Hello there again"
        previewText="This is my second post!" />

      <PlacePreview
        id="3"
        thumbnail="https://img.huffingtonpost.com/asset/59b1b4a81400002000fa8856.jpeg"
        title="Hello again and again"
        previewText="This is my third post!" />
    </section>
  </div>
</template>


<script>
import AppLogo from '@/components/AppLogo.vue'
import Header from '@/components/Header.vue'
import PlacePreview from '@/components/Place/PlacePreview.vue'
import FlickitySlider from '@/components/FlickitySlider.vue'

export default {
  components: {
    AppLogo,
    Header,
    PlacePreview,
    FlickitySlider
  }
}
</script>
