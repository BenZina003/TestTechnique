<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="white"
            dark
            v-bind="attrs"
            v-on="on"
            @click="openDialog()"
          >
            + Review
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5"> <h1>New Review</h1></span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col id="field" cols="4">Review Type :</v-col>
                <v-col cols="8">
                  <v-select
                    :items="reviewTypes"
                    name="type"
                    v-model="selectedType"
                    item-text="title"
                    return-object
                  >
                  </v-select>
                </v-col>
              </v-row>

              <div v-for="(field, index) in selectedType.fields" :key="index">
                <v-row>
                  <v-col id="field" cols="4">{{ field.title }} :</v-col>
                  <v-col cols="8">
                    <v-select
                      v-if="field.type == 'select'"
                      v-model="field.value"
                      :items="field.options"
                    ></v-select>
                    <v-text-field
                      v-if="field.type == 'text'"
                      v-model="field.value"
                    ></v-text-field>
                    <v-textarea
                      outlined
                      v-model="field.value"
                      v-if="field.type == 'textarea'"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Cancel
            </v-btn>
            <v-btn color="blue darken-1" text :disabled="disabled" @click="save()">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>



<script>
import { mapGetters } from 'vuex';

export default {
  name: 'newType',

  data() {
    return {
      dialog: false,
      disabled: true,
      reviewTypes: [],
      selectedType: {}
    };
  },

  computed: {
    ...mapGetters(['getReviewTypes']),
  },

  methods: {
    async cancel() {
      this.dialog = false;
    },

    async openDialog() {

      this.reviewTypes = JSON.parse(JSON.stringify(this.getReviewTypes())) ;
      this.selectedType = this.reviewTypes[0];
    },

    async save() {
      this.dialog = false;
      console.log(this.selectedType);
    },
  },

  watch: {
    selectedType: {
      deep: true,
      handler: function() {
        this.disabled = false;
        this.selectedType.fields.forEach(element => {
          if (element.required) {
            this.disabled = element.value === undefined || element.value === '';
          }
        });
      },
    },
  },
};
</script>

<style lang="scss">

@import "@/scss/_colors.scss";
h1 {
			display: inline-block;
			color: $blue-02;
			font-size: 24px;
			font-weight: 900;
			margin-right: 12px;
		}
#field {

  margin-top: 20px;
}   
</style>