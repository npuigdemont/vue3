<template>
    <div>
        <div><span class="count">{{multiplierCount}}</span></div>
        <br>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="reset">Reset</button>
    </div>
</template>

<script>
export default {
    name: 'CounterN',
    props: {
        multiplier: { type: Number, default: 1},
    },
    data(){
        return {
            count: 0
        };
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement(){
            this.count--;
        },
        reset() {
            this.count=0;
        }
    },
    computed: {
        multiplierCount(){
            return this.count * this.multiplier;
        }
    }
}
</script>