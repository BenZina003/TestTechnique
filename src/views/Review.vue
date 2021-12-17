<template>
  <div>
    <CreateReview style="float: center;" id="CreateReview" />
  </div>
</template>

<script>

import CreateReview from '@/components/dialogs/CreateReview';

export default {
  name: 'Home',

  components: {
    CreateReview,
  }
};
</script>

<style lang="scss" scoped>

@import "@/scss/_colors.scss";

h2 {
	font-size: 16px;
	font-weight: 700;
	color: $blue-02;
	margin-bottom: 20px;
}

</style>
