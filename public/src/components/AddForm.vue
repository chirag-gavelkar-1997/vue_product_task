<template>
  <div>
    <div class="source">
       <div class="main">
    <h1  v-if="this.pdId == null" class="heading">Add Form</h1>
    <h1  v-if="this.pdId !== null" class="heading">Edit Form</h1>

      <el-form
        ref="postForm"
        :model="postForm"
        :rules="rules"
      >
       
        <el-form-item
          style="margin-bottom: 20px;"
          label=""
          prop="productName"
        >
          <el-input
            v-model="postForm.productName"
            name="productName"
            style="width:100%;"
             class="inputClass"
            required
            placeholder="Product Name"
            show-word-limit
          />
        </el-form-item>

        <el-form-item
          style="margin-bottom: 20px;"
          label=""
          prop="price"
        >
          <el-input
            v-model="postForm.price"
            name="price"
            style="width:100%"
            required
             class="inputClass"
            placeholder="Price"
            auto-complete="off"
          />
        </el-form-item>
        
        <el-form-item>
          <span>
          <el-button
           v-if="this.pdId == null" 
            v-loading="loading"
            v-waves
            class="addBtn"
            type="success"
            @click="submitForm"
          >
          Add
          </el-button>
           <el-button
            v-else
            v-loading="loading"
            v-waves
            class="addBtn"
            type="success"
            @click="submitForm"
          >
           Update
          </el-button>
          </span>
          <el-button
           v-if="this.pdId == null" 
           v-waves
            type="reset"
             class="resetBtn"
            @click="resetForm"
          >
           Reset
          </el-button>
        </el-form-item>
      </el-form>
       </div>
    </div>
</div>
</template>
<script>


export default {
  name: 'AddForm',

    data() {
    return {
      postForm: {
        productId: '',
        productName: '',
        price: '',
      

      },
      pdId :'',
      items: [],
   rules: {
      
        productName: [{ required: true, message: 'Product Name is required', trigger: 'blur' }],
         price: [
          { required: true, message: 'Price is required', trigger: 'blur' },
        
          { pattern: /^\d+$/, message: 'Price must contain only number', trigger: ['blur', 'change'] },
         
        ],
       
      }
      
  }
    },

    mounted(){
       if(this.$route.params.id){
    
        this.pdId = this.$route.params.id;
         console.log(this.pdId,'id')
         this.fetchData();
       } else{
         this.pdId = null;
      
       }

     
    },

   methods: {
    
      fetchData() {
      if(this.pdId){
      
      const product = JSON.parse(localStorage.getItem('product-info')) || [];
       

      const products = product.find(p => p.productId == this.pdId);
       console.log(products,'price')
      
      if (products) {
        this.postForm.productId = products.productId;
        this.postForm.productName = products.productName;
        this.postForm.price = products.price;
        console.log(this.postForm.price,'price')
       
      } 
       
    }else{
      this.postForm = [];
    }
     },
   
     submitForm() {
        this.$refs.postForm.validate(valid => {
        if (valid) {
       if(this.pdId){
          let existingData = JSON.parse(localStorage.getItem('product-info'));
       const updatedProfiles = existingData.map(p => {
        if (p.productId === this.postForm.productId) {
          return this.postForm; 
        }
        return p;
      });
      localStorage.setItem('product-info', JSON.stringify(updatedProfiles));
      this.$router.push({ name: "TableData" });
      console.log(this.postForm,'data')

        }
        else{
            this.postForm.productId = Date.now(); 
          let existingData = JSON.parse(localStorage.getItem('product-info'));

if (!Array.isArray(existingData)) {
  console.error("Data retrieved from localStorage is not an array:", existingData);
  existingData = [];
}
existingData.push(this.postForm);
localStorage.setItem("product-info", JSON.stringify(existingData));
this.$router.push({ name: "TableData" });
 }
        }
 });
 },
   
resetForm() {
      this.$refs.postForm.resetFields();
    },
  },

 
  
}
</script>
<style>
.form-block {
  background-color: #fcfcfc;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  width: -webkit-fill-available;
  margin: 24px;
}
.source {
  width: 100%;
  display: flex;
   justify-content: center;
  align-items: center;
  background: #ebebeb;
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
.addBtn{
  background: green;
  color: #ebebeb;
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