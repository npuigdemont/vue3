<template>
  <div class="hello">
   <p>Parent
    
   </p> 
    <ChildN />
  </div>
</template>

<script>
import ChildN from './ChildN.vue'
export default {
  name: 'ParentN',
  components: {
      ChildN
  }
}
</script>