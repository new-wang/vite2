<script setup>
import { ref, useAttrs, useSlots } from "vue";

const props = defineProps({
  msg: String,
});
console.log(props);

// 获取上下文
//  useSlots useAttrs
// const ctx = useAttrs()
// const ctx2 = useSlots()
// console.log(ctx,ctx2)

// 定义事件
const emit = defineEmits(["myclick"]);
const onclick = () => {
  emit("myclick");
};

const count = ref(0);

// 对外暴露
defineExpose({
  someMethod() {
    console.log("some message from helloworld");
  },
});

// 请求
fetch("/api/getUsers", { name: "dadd" })
  .then((res) => res.json())
  .then((data) => {
    console.log("userData", data);
  });
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <button @click="emit('myclick')">emit</button>
  <button @click="onclick">emit</button>

  <p @click="$store.commit('add')">
    $store-counter: {{ $store.state.counter }}
  </p>
  <el-button>element3 btn</el-button>
  <el-input></el-input>
</template>
