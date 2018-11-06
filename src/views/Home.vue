<template>
  <div class="home-view">
    <div class="section first">
      <tools></tools>
    </div>
    <div class="section second">
      <tasks-list></tasks-list>
    </div>
    <div class="section third"></div>
  </div>
</template>

<script>
import TasksList from '@/components/TasksList';
import Tools from '@/components/Tools';

export default {
  name: 'Home',
  components: {
    Tools,
    TasksList
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.home {
  &-view {
    height: 100%;
    display: grid;

    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }

  @media (min-width: 760px) {
    &-view {
      grid-template-columns: 250px 1fr;
    }
  }
  @media (min-width: 1200px) {
    &-view {
      grid-template-columns: 250px 2fr 1fr;
    }
  }
}

.section {
  padding-top: 20px;
  
  &.first {
    background-color: #f8f8fa;
    width: 100%;
    max-width: 250px;

    transform: translateX(-250px);
  }

  &.first, &.third {
    position: absolute;
    top: 0;
  }

  &.second {
    padding: 40px 25px;
  }

  @media (min-width: 760px) {
    padding-top: 40px;

    &.first {
      position: relative;
      transform: translateX(0);
    }

    &.second {
      padding: 40px;
    }
  }
  @media (min-width: 1200px) {
    padding-top: 60px;

    &.second {
      padding: 60px 40px;
    }
  }
}
</style>
