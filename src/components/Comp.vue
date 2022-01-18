<script lang="jsx">
import { ref } from "vue" 
export default{
    setup(){
        const counter = ref(0)
        const onclick = ()=>{
            counter.value++
        }

        return () => (
            <>
            <div> Comp </div>
            <p onClick={onclick}>{counter.value}</p>
            </>
        )

    }
}

// 原始jsx
    // export default {
    //     data() {
    //         return {
    //             counter:0
    //         }
    //     },
    //     render() {
    //         return (
    //             <>
    //                 <div>jsx  comp</div>
    //                 <p onclick={this.onclick}>{this.counter}</p>
    //             </>
    //         )
    //     },
    //     methods: {
    //         onclick() {
    //             this.counter++
    //         }
    //     },
    // }
</script>

<style scoped>
</style>