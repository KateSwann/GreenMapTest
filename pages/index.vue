<template>
  <div>
    <Header />

    <section>
      <h2>Example heading <b-badge>New</b-badge></h2>

      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
      </nav>

      <div>
        <b-card title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>

      <!-- card-1.vue -->

      <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using button-content slot -->
              <template slot="button-content">
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

      <!-- navbar-1.vue -->
    </section>

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
            isImageModalActive: false,
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