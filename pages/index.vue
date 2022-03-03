<template>
  <div class="div">
    <Section />
    teste
    <p></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Section from '@/components/Section';

export default Vue.extend({
  name: 'IndexPage',

  components: {
    Section,
  },
});
</script>
