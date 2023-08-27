<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-sm-10 col-lg-10 m-auto">
          <img src="static/images/intro.jpg" class="img-fluid" alt="">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    previous: String,
    next: String,
  },
};
</script>
