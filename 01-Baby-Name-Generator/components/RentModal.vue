<!-- Bootstrap-vue "https://bootstrap-vue.org/docs/components/modal" -->
<template>
    <div>
      <b-button id="show-btn" @click="showModal">Rent</b-button>
  
      <b-modal ref="my-modal" hide-footer title="Using Component Methods">
        <div class="calendar-container">
            <div class="text-container">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, temporibus cumque! Id, tempore. Alias praesentium esse neque animi sit unde vel, quaerat earum, voluptates veritatis ab quod asperiores illo doloremque error laboriosam magni odio inventore cum voluptate provident. Numquam, facere.</p>
            </div>
            <vc-date-picker
              v-model="selectedDate"
              value-format="yyyyMMdd"
              locale="kr"
              color="purple"
              is-dark
              is-range
            />
        </div>
        <b-button 
        id="show-btn" 
        variant="outline-danger"
        @click="() => {
          var id = product.id;
          var start = selectedDate.start;
          var end = selectedDate.end;
          hideModal();
          addItem({id, start, end});
        }"
        >Order</b-button>
      </b-modal>
    </div>
  </template>
  
  <script>
    import { mapMutations } from 'vuex'

    export default {
      data() {
        return {
          selectedDate: {
            start: new Date(),
            end: new Date()
          },
        }
      },
      props: ['product'],
      methods: {
        showModal() {
          this.$refs['my-modal'].show()
        },
        hideModal() {
          this.$refs['my-modal'].hide();
        },
        toggleModal() {
          // We pass the ID of the button that we want to return focus to
          // when the modal has hidden
          this.$refs['my-modal'].toggle('#toggle-btn')
        },
        ...mapMutations(['addItem'])
      }
    }
  </script>
  <style scoped>
    button {
        width: 100%;
        border: none;
        padding: 0.5rem;
        color: white;
        font-weight: 700;
        padding: 1rem 4rem;
        border-radius: 100rem;
        background-color: rgb(231, 81, 43);
        color: white;
        font-weight: 700;
        transition: 0.5s;
    }
    .calendar-container {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    p {
      color: grey
    }
    .text-container {
      padding: 0.5rem
    }
</style>