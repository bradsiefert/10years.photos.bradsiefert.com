<template>
  <main>
    <div v-if="content.type == 'image'">
      <div class="width-contain">
        <div class="photo">
          <img :src="'/static/photos/' + content.image" :alt="content.title">
        </div>
        <div class="details">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md date-time">{{ content.date }}</div>
              <div class="col-md photo-metadata">{{ content.settings }}</div>
              <div class="col-md gps-location">{{ content.location }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="content.type == 'text'" class="container">
      <div class="row">
        <div class="col-lg-9 col-xl-7 m-auto">
          <div class="text-block" :inner-html.prop="content.text">
          </div>
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
  created() {
    this.content = this.findMetaByRoute(this.$route.path);
    document.title = `${this.content.title} | ${this.$title}`;
  },
  methods: {
    findMetaByRoute(path) {
      const page = this.$router.options.routes.filter(el => el.path === path);
      return page[0].meta;
    },
  },
};
</script>
