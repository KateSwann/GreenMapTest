<template>
  <div>
    <Header />
    <div style="width: 600px;">
      <slick class="slider-main" ref="slick" :options="slickOptions1">
        <a href="#"><img src="http://placehold.it/600x200" alt=""></a>
        <a href="#"><img src="http://amolife.com/image/images/stories/Animals/Dogs/25_sweet_puppies.jpg" alt=""></a>
        <a href="#"><img src="http://placehold.it/600x200" alt=""></a>
        <a href="#"><img src="http://amolife.com/image/images/stories/Animals/Dogs/25_sweet_puppies.jpg" alt=""></a>
        <a href="#"><img src="http://placehold.it/600x200" alt=""></a>
      </slick>

      <slick class="slider-nav" ref="slick" :options="slickOptions2">
        <a href="#"><img src="http://placehold.it/200x100" alt=""></a>
        <a href="#"><img src="http://amolife.com/image/images/stories/Animals/Dogs/25_sweet_puppies.jpg" alt=""></a>
        <a href="#"><img src="http://placehold.it/200x100" alt=""></a>
        <a href="#"><img src="http://amolife.com/image/images/stories/Animals/Dogs/25_sweet_puppies.jpg" alt=""></a>
        <a href="#"><img src="http://placehold.it/200x100" alt=""></a>
      </slick>
    </div>

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
import '@/node_modules/slick-carousel/slick/slick.scss'
import '@/node_modules/slick-carousel/slick/slick-theme.scss'

export default {
  components: {
    AppLogo,
    Header,
    PlacePreview
  },

    data() {
        return {
            slickOptions1: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                arrows:true,
                adaptiveHeight:true,
                asNavFor: '.slider-nav'
            },
            slickOptions2: {
                slidesToShow: 3,
                asNavFor: '.slider-main',
                dots: true,
                centerMode: true,
                arrows:false,
                adaptiveHeight:true,
                focusOnSelect: true
            }
        };
    },

    // All slick methods can be used too, example here
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        }
    }
}
</script>

<style>
  .slider-nav img {
    width: 200px;
    height: 100px;
  }
</style>