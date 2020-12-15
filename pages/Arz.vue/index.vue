<template>
  <div>
    <h1 class="text-center">{{ $t('price_arz') }}</h1>
    <!-- <h2>{{ arz }}</h2> -->

    <h3 class="text-center"> {{ $t('Last_modified') }} {{ arz.LastModified }} </h3>
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-right"> {{ $t('type') }} </th>
            <th class="text-right"> {{ $t('price_buy')}} </th>
            <th class="text-right"> {{ $t('price_sell')}} </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(arz, index) in arz.Currency" :key="index">
            <td>{{ arz.Currency }}</td>
            <td class="green--text">{{ arz.Sell }}</td>
            <td class="red--text"> {{ arz.Buy }} </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'Arz',
  data() {
    return {
      arz: []
    }
  },
  mounted() {
    this.$store.dispatch('arz').then((resp) => {
      resp.data
    })
    this.arz = this.$store.state.arzs
    console.log(this.arz);
  },
}
</script>

<style></style>
