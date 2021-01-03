<template>
 <div id="app">
   <nav class="main-nav">
     <div class="logo">
       NOTEBOOK
     </div>
     <Burger></Burger>
   </nav>

   <Sidebar>
     <ul class="sidebar-panel-nav">
       <li><a href="#home" >Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#contact">Contact</a></li>
     </ul>
   </Sidebar>
 </div>
</template>

<script>
import Burger from './components/Menu/Burger.vue';
export default {
 name: 'app',
 components: {
   Burger
 }
}
</script>
<style>

</style>