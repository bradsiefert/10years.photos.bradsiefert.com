<template>
  <div>
    <router-link
      class="mobile-next"
      v-if="next !== null"
      :to="next">
      Next <i class="ion-chevron-right"></i>
    </router-link>

    <router-link
      class="mobile-prev"
      v-if="previous !== null"
      :to="previous">
      <i class="ion-chevron-left"></i> Prev
    </router-link>

    <footer class="footer">
      <nav class="navbar navbar-expand">
        <div class="container">
          <router-link class="nav-link" v-if="previous !== null" :to="previous">
            <i class="ion-chevron-left"></i> Prev
          </router-link>
          <div class="nav-link" v-if="previous === null">
            &nbsp;
          </div>

          <router-link class="nav-link" to="/toc/01/">Table of Contents</router-link>

          <router-link class="nav-link" v-if="next !== null" :to="next">
            Next <i class="ion-chevron-right"></i>
          </router-link>
          <div class="nav-link" v-if="next === null">
            &nbsp;
          </div>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    previous: String,
    next: String,
  },
};
</script>
