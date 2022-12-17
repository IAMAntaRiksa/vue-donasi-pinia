<template>
  <!-- Header  -->
  <Header />
  <!-- content -->
  <RouterView />
  <!-- footer -->
  <Footer />

</template>

<script>
import Header from './components/Headers.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import '@/assets/css/style.css';
</style>