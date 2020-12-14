<template>
  <div style="direction: rtl">
    <v-toolbar color="orange">
      <v-app-bar-nav-icon
        class="hidden-lg-and-up"
        @click="drawShow = !drawShow"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-3">قیمت آنلاین</v-toolbar-title>

      <router-link to="/Gold" class="hidden-sm-and-down ">
        <div class="ml-3">
          <span>قیمت طلا</span>
        </div>
      </router-link>

      <router-link to="/arz" class="hidden-sm-and-down ">
        <div class="ml-3">
          <span>قیمت ارز</span>
        </div>
      </router-link>

      <router-link to="/Iron" class="hidden-sm-and-down ">
        <div class="ml-3">
          <span>قیمت آهن</span>
        </div>
      </router-link>

    </v-toolbar>

    <!-- size phone drawer -->
    <v-card v-if="drawShow">
      <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
        <v-list-item class="px-2">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-avatar v-bind="attrs" v-on="on">
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Facebook_Home_logo.svg/1024px-Facebook_Home_logo.svg.png"
                ></v-img>
              </v-list-item-avatar>
            </template>
            <span>Home</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-avatar v-bind="attrs" v-on="on">
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Facebook_Home_logo.svg/1024px-Facebook_Home_logo.svg.png"
                ></v-img>
              </v-list-item-avatar>
            </template>
            <span>Home</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-avatar v-bind="attrs" v-on="on">
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Facebook_Home_logo.svg/1024px-Facebook_Home_logo.svg.png"
                ></v-img>
              </v-list-item-avatar>
            </template>
            <span>Home</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-avatar v-bind="attrs" v-on="on">
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Facebook_Home_logo.svg/1024px-Facebook_Home_logo.svg.png"
                ></v-img>
              </v-list-item-avatar>
            </template>
            <span>Home</span>
          </v-tooltip>
        </v-list-item>
        <v-divider></v-divider>
      </v-navigation-drawer>
    </v-card>
    <!-- end size phone drawer -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawShow: false,
    }
  },
}
</script>
