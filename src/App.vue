<template>
  <div>
    <NavN />
  <img alt="Vue logo" src="./assets/logo.png">
  <TodoApp/>

  <ParentN />

  <CounterN />
  </div>
</template>

<script>
import TodoApp from './components/TodoApp.vue';
import NavN from './components/NavN.vue';
import ParentN from './components/ParentN.vue';
import CounterN from './components/CounterN.vue';

export default {
  name: 'App',
  components: {
    TodoApp,
    NavN,
    ParentN,
    CounterN
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
