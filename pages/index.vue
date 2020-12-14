<template>
  <v-app>
    <h1>Home Page</h1>

    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Left
        </v-btn>
      </template>
      <span>Left tooltip</span>
    </v-tooltip>
  </v-app>
</template>

<script>

export default {
  components: {
  }
}
</script>
