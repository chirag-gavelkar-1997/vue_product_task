<template>
  <div>
      <div class="source1">
       <div class="main">
    <h2 style="color:white">LOGIN FORM</h2>
     <el-form @submit.prevent="login">
     
         <el-form-item   style="margin-bottom: 20px;">
        <el-input v-model="email" placeholder="email"  style="width:100%"  class="inputClass" type="email" />
         </el-form-item>
    
         <el-form-item   style="margin-bottom: 20px;">
       
        <el-input v-model="password" placeholder="password"   style="width:100%"   class="inputClass" type="password" />
         </el-form-item>
    
      <button type="submit"   class="loginBtn">Login</button>
    </el-form>
       </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.email === 'admin@admin.com' && this.password === '12345') {
        localStorage.setItem('auth', 'true');
        this.$router.push('/product');
      } else {
        alert('Invalid credentials');
      }
    }
  }
};
</script>
<style>
.form-block {
  /* background-image: linear-gradient(27deg, #013A60 50% ,#004E95 50% ); */
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  width: -webkit-fill-available;
  margin: 24px;
}
.source1 {
  width: 100%;
  display: flex;
   justify-content: center;
  align-items: center;
  background-image: linear-gradient(24deg, #013A60 50% ,#004E95 50% );

  /* background: #ebebeb; */
  /* background: #2b4881; */
  max-width: 600px; /* Adjust maximum width as needed */
  margin: 0 auto;
}
.main{
  width: 100%;
  padding: 20px;
}
.heading{
  /* color: white; */
}
.inputClass input {
  width: 80%; /* Set width as needed */
  padding: 10px 5px; 
  /* padding-right: 100px; */
  /* padding-left: 10px; */
}

.inputClass textarea {
  width: 80%; /* Set width as needed */
  padding: 10px 2px; 
  /* padding-right: 100px; */
  /* padding-left: 10px; */
}
.loginBtn{
  background: white;
  /* background-image: linear-gradient(27deg ,#004E95 50% ,#013A60 50% ); */

  color: black;
  padding: 10px 30px;
  margin: 0px 10px;
  cursor: pointer;
}
.resetBtn{
  background: white;
  color: black;
  padding: 10px 30px;
   cursor: pointer;
}

.el-form-item__error {
  margin-top: 5px;
  color: red; /* Set error message color to red */
}


</style>