<template>
  <div id="app">
    <navbar-block/>
    <transition name="fade">
      <router-view :key="$route.fullPath" :next="next" :previous="previous"/>
    </transition>
    <footer-block :next="next" :previous="previous"/>
  </div>
</template>

<script>
import NavbarBlock from '@/components/blocks/NavbarBlock';
import FooterBlock from '@/components/blocks/FooterBlock';

export default {
  name: 'App',
  components: {
    NavbarBlock, FooterBlock,
  },
  data() {
    return {
      previous: null,
      next: null,
    };
  },
  created() {
    this.handlePagination();

    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 37 && this.previous) {
        this.$router.push(this.previous);
      } else if (e.keyCode === 39 && this.next) {
        this.$router.push(this.next);
      }
    });
  },
  watch: {
    $route() {
      this.handlePagination();
    },
  },
  methods: {
    handlePagination() {
      this.previous = null;
      this.next = null;

      Object.keys(this.$router.options.routes).forEach((key) => {
        const index = parseInt(key, 10);

        if (this.$router.options.routes[index].path === this.$route.path) {
          if (index !== 0) {
            this.previous = this.$router.options.routes[index - 1].path;
          }

          if (index !== this.$router.options.routes.length - 2) {
            this.next = this.$router.options.routes[index + 1].path;
          }
        }
      });
    },
  },
};
</script>
