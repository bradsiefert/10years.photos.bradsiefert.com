<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-sm-10 col-lg-10 m-auto">
          <img src="static/images/intro.jpg" class="img-fluid" alt="">
        </div>
      </div>
    </div>

    <footer-block :next="next" :previous="previous"/>
  </main>
</template>

<script>
import FooterBlock from '@/components/blocks/FooterBlock';

export default {
  components: {
    FooterBlock,
  },
  props: {
    previous: String,
    next: String,
  },
};
</script>
