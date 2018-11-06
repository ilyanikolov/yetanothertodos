<template>
  <div class="tools">
    <div class="tools-heading">
      <h3>Tools</h3>
    </div>
    <div class="list">
         <div class="list-item">Today</div>
         <div class="list-item">All</div>
         <div class="list-item">Scheduled</div>
      </div>
      <div class="divider"></div>
      <div class="list">
         <div class="list-item" v-for="(list, index) in lists" :key="index">{{list.name}}</div>
         <div class="list-item">
            <input type="text"
              v-model="newList.name"
              @keypress.enter="createList"
              placeholder="New list.."
              class="list-item__input">
         </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newList: {
        name: '',
        color: '',
      },
      lists: [
        {
          name: 'Home',
          color: '',
        },
        {
          name: 'Work',
          color: '',
        },
        {
          name: 'Study',
          color: '',
        },
        {
          name: 'Misc',
          color: '',
        },
        {
          name: 'Films',
          color: '',
        }
      ]
    }
  },
  methods: {
    createList() {
      if(this.newList.name) {
        this.lists.push({...this.newList});

        this.newList.name = '';
        this.newList.color = '';
      }
    }
  },
}
</script>

<style lang="scss">
.tools {
  &-heading {
    padding: 0 40px;
  }
}
</style>
