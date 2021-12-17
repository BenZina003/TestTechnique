<template>
  <v-app>
    <div style="height: 100%">
      <div id="main">
        <div>
          <Header />
          <div id="content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>


<script>
import Header from '@/components/Header';

export default {
  name: 'App',

  components: {
    Header,
  },

  beforeMount() {
    this.$store.dispatch('loadReviewTypes');
  },

  data() {
    return {
      message: '',
    };
  }
};

</script>


<style lang="scss">

@import "@/scss/global.scss";

#main {
  background-color: $grey-01;
  height: 100%;
}

#content {
	padding: 32px;
}

</style>
