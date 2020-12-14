<template>
  <div style="direction: rtl">
    <v-toolbar color="orange">
      <v-app-bar-nav-icon
        class="hidden-lg-and-up"
        @click="drawShow = !drawShow"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-3"> {{ $t('price_online') }} </v-toolbar-title>

      <nuxt-link to="/Gold" class="hidden-sm-and-down">
        <div class="ml-3">
          <span> {{ $t('price_gold') }} </span>
        </div>
      </nuxt-link>

      <nuxt-link to="/arz" class="hidden-sm-and-down">
        <div class="ml-3">
          <span> {{ $t('price_arz') }} </span>
        </div>
      </nuxt-link>

      <nuxt-link to="/Iron" class="hidden-sm-and-down">
        <div class="ml-3">
          <span> {{ $t('price_iron') }} </span>
        </div>
      </nuxt-link>

      <v-spacer></v-spacer>

        <!-- start language -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item-avatar v-bind="attrs" v-on="on">
                  <v-img
                    src="data:image/jpeg;base64,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"
                  ></v-img>
                </v-list-item-avatar>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <nuxt-link :to="switchLocalePath('fa')"> {{ $t('lang_fa')}} </nuxt-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <nuxt-link :to="switchLocalePath('en')"> {{ $t('lang_en') }} </nuxt-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- end language -->

    </v-toolbar>
    <!-- <nuxt-link :to="switchLocalePath('fa')">Italian</nuxt-link>
            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link> -->

    <!-- size phone drawer -->
    <v-card v-if="drawShow">
      <div v-model="drawer" :mini-variant.sync="mini" permanent>
        <v-list-item class="px-2">
          <nuxt-link to="/">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-avatar v-bind="attrs" v-on="on">
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Facebook_Home_logo.svg/1024px-Facebook_Home_logo.svg.png"
                  ></v-img>
                </v-list-item-avatar>
              </template>
              <span> {{ $t('home') }} </span>
            </v-tooltip>
          </nuxt-link>

          <nuxt-link to="/Gold">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-avatar v-bind="attrs" v-on="on">
                  <v-img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CzkhHZqwNMjnCBOd1Z5F_w18Q1BFAyek6g&usqp=CAU"
                  ></v-img>
                </v-list-item-avatar>
              </template>
              <span> {{ $t('price_gold') }} </span>
            </v-tooltip>
          </nuxt-link>

          <nuxt-link to="/arz">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-avatar v-bind="attrs" v-on="on">
                  <v-img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2GLPg32Vfiap5pVYwWzNI7epQOURi8wosA&usqp=CAU"
                  ></v-img>
                </v-list-item-avatar>
              </template>
              <span> {{ $t('price_arz') }} </span>
            </v-tooltip>
          </nuxt-link>

          <nuxt-link to="/Iron">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-avatar v-bind="attrs" v-on="on">
                  <v-img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHrahgN3vUutO2nwbrmB17cvhpaPK1fPxHA&usqp=CAU"
                  ></v-img>
                </v-list-item-avatar>
              </template>
              <span> {{ $t('price_iron') }} </span>
            </v-tooltip>
          </nuxt-link>
        </v-list-item>
        <v-divider></v-divider>
      </div>
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
