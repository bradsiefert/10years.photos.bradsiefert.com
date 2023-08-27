<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-lg-11 col-xl-10 m-auto">
          <div class="text-block">
            <div class="row">
              <div class="col-md-3 col-lg-3 ml-auto mr-auto">
                <img
                src="static/images/aboutme.jpg"
                class="img-fluid mb-3 avatar"
                alt="Brad Siefert self portrait">
              </div>
              <div class="col-md-9 col-lg-9">
                <h2>About Me</h2>
                <p>
                  I spend my days designing web and mobile apps, but an incredible part
                  of my time and energy is focused on being a better photographer. Learning the
                  fundamentals of photography took me a very long time before it clicked for me.
                  From that time, I have been driven to learn more and more about how to make great
                  images and how to tell small stories with those images. I am married to a
                  wonderful woman, Nicole, who never complains or shames me when I want to take
                  photos. For that, I am incredibly grateful.
                </p>
                <h3>Self Portrait</h3>
                <div class="details">
                  <div class="row">
                    <div class="col-lg">
                      2015/05/28 8:00pm
                    </div>
                    <div class="col-lg">
                      35mm f/4 1/180th 200 ISO
                    </div>
                    <div class="col-lg">
                      41°55’49” N 87°42’23” W
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  data() {
    return {
      routes: {},
    };
  },
};
</script>
