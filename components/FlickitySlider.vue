<template>
  <div>
    <no-ssr>
      <flickity ref="flickity" :options="flickityOptions">
        <div class="carousel-cell">1</div>
        <div class="carousel-cell">2</div>
        <div class="carousel-cell">3</div>
        <div class="carousel-cell">4</div>
        <div class="carousel-cell">5</div>
      </flickity>
    </no-ssr>
  </div>
</template>


<style>
.carousel {
  background: #EEE;
}

.carousel-cell {
  width: 28%;
  height: 200px;
  margin-right: 10px;
  background: #8C8;
  counter-increment: gallery-cell;
}

.carousel-cell.is-selected {
  background: #ED2;
}

/* cell number */
.carousel-cell:before {
  display: block;
  text-align: center;
  content: counter(gallery-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}

/* no circle */
.flickity-button {
  background: transparent;
}
/* big previous & next buttons */
.flickity-prev-next-button {
  width: 100px;
  height: 100px;
}
/* icon color */
.flickity-button-icon {
  fill: white;
}
/* hide disabled button */
.flickity-button:disabled {
  display: none;
}
</style>

<script>
import Flickity from 'vue-flickity'

export default {
  components: {
    Flickity
  },

  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true
        
        // any options from Flickity can be used
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
}
</script>

