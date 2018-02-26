<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs4 class="pr-4">
          <v-card color="accent" class="white--text pa-2">
            <v-card-title primary-title>
              <v-layout row>
                <v-flex xs6>
                  <div class="display-2">108</div>
                </v-flex>
                <v-flex xs6>
                  <div class="body-1 text-xs-right">Outlet</div>
                </v-flex>
              </v-layout>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs4 class="pr-4">
          <v-card color="secondary" class="white--text pa-2">
            <v-card-title primary-title>
              <v-layout row>
                <v-flex xs6>
                  <div class="display-2">34</div>
                </v-flex>
                <v-flex xs6>
                  <div class="body-1 text-xs-right">Salesman</div>
                </v-flex>
              </v-layout>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs4 class="pr-4">
          <v-card color="error" class="white--text pa-2">
            <v-card-title primary-title>
              <v-layout row>
                <v-flex xs6>
                  <div class="display-2">215</div>
                </v-flex>
                <v-flex xs6>
                  <div class="body-1 text-xs-right">Product</div>
                </v-flex>
              </v-layout>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {}
</script>

