<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components:{
    Navbar
  },

}
</script>

<style>
a{
  text-decoration: none;
}
a:hover{
  text-decoration: none;
}
</style>
