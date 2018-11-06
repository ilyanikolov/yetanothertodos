<template>
  <div class="tasks">
    <div class="tasks-heading">
      <h3>Tasks</h3>
    </div>
    <div class="tasks-list">
      <div :class="['task', {completed: task.completed}]" v-for="(task, index) in tasks" :key="index">
        <div class="task-status" @click="task.completed = !task.completed">
          <i v-if="task.completed" class="material-icons">check_box</i>
          <i v-else class="material-icons">check_box_outline_blank</i>
        </div>
        <div class="task-contents">
          <div class="task-contents__label">{{task.label}}</div>
          <div class="task-contents__date">{{task.scheduled | date}}</div>
        </div>
        <div class="task-delete" @click="removeTask(index)">
          <i class="material-icons">delete</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: Array.from({length: 10}).map(item => ({ completed: false, label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', scheduled: new Date() })),
    }
  },
  filters: {
    date(value) {
      let res;

      try {
        res = new Date(value).toDateString();
      } catch(err) {
        res = '';
      }

      return res;
    }
  },
  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  },
}
</script>

<style lang="scss">
.tasks-list {
  max-width: 700px;
  .task {
    width: 100%;
    min-height: 50px;
    cursor: pointer;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 50px 1fr;

    &-status, &-delete {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 10px 0;
    }

    &-delete {
      display: none;
      justify-content: center;
    }

    &-contents {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 10px 0;

      &__label {

      }
      &__date {
        font-size: 1.2rem;
        color: #959595;
      }
    }

    &.completed {
      .task-contents {
        
        &__label, &__date {
          text-decoration: line-through;
          color: #c0c0c0;
        }
      }
    }

    &:hover {
      grid-template-columns: 50px 1fr 50px;
      // background-color: #f1f2f6;

      .task-delete {
        display: flex;
      }
    }
  }
}
</style>
