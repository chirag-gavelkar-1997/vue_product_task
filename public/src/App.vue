<template>
 <div>

 <router-link   v-if="showProductListButton"  to="/product-list"><el-button  class="productList" >Product List</el-button></router-link>
  <button class="logBtn" v-if="showLogoutButton" @click="logout">Logout</button>
  <router-view></router-view>

 </div>
  
</template>

<script>


export default {
  name: 'App',
  components: {
 
  },
   computed: {
    showLogoutButton() {
      return this.$route.path !== '/' && this.$route.path !== '/product-list';
    },

    showProductListButton(){
      return this.$route.path == '/' ;

    }
  },
  methods:{
        logout() {
      localStorage.removeItem('auth');
      this.$router.push('/');
    }
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
.logBtn{
  position: absolute;
  top: 2%;
  right: 2%;
  background:  #3366cc;
  border: #3366cc;
  color:white;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
}
.productList{
  position: absolute;
  top: 2%;
  right: 2%;
  background:  #3366cc;
  border: #3366cc;
  color:white;
  padding: 10px 15px;
  cursor: pointer;
}
</style>
