<template>
  <div >
    <div class="source" >
      <div class="main">
    <h1 class="heading">Edit Form</h1>
      <el-form
        ref="postForm"
        :model="postForm"
        :rules="rules"
      >
        <el-form-item
         v-if="this.$route.params.id == null"
          style="margin-bottom: 20px;"
          label=""
          prop="productId"
        >
          <el-input
            v-model="postForm.productId"
            name="productId"
            style="width:100%"
            required
             class="inputClass"
            placeholder="product Id"
            
          />
        </el-form-item>
        <el-form-item
          style="margin-bottom: 20px;"
          label=""
          prop="productName"
        >
          <el-input
            v-model="postForm.productName"
            name="productName"
            style="width:100%"
            required
             class="inputClass"
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
          <el-button
            v-loading="loading"
            v-waves
             class="editBtn"
             :plain="true"
            type="success"
            @click="updateProduct"
          >
          Edit
          </el-button>
         
        </el-form-item>
      </el-form>
      </div>
     
    </div>
</div>
</template>
<script>


export default {
  name: 'EditForm',

    data() {
    return {
      postForm: {
        
        productName: '',
        price: '',
        

      },
      items: [],
      rules: {
       
        productName: [{ required: true, message: 'Product Name is required', trigger: 'blur' }],
         price: [
          { required: true, message: 'Price is required', trigger: 'blur' },
        
          { pattern: /^\d+$/, message: 'Price must contain only digits', trigger: ['blur', 'change'] },
         
        ],
       
      }
      
  }
    },

    mounted(){
    this.postForm.productId = this.$route.params.id; 
    this.fetchData();

      console.log(this.$route.params.id,'id')
    },

   methods: {
     fetchData() {
      const product = JSON.parse(localStorage.getItem('product-info')) || [];
      const products = product.find(p => p.productId === this.postForm.productId);
      
      if (products) {
        this.postForm.productId = products.productId;
        this.postForm.productName = products.productName;
        this.postForm.price = products.price;
       
      } 
       
    },
    
  
     updateProduct() {
         this.$refs.postForm.validate(valid => {
        if (valid) {
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
         });
  },
},
   


  

 
  
}
</script>
<style>
.form-block {
  width: 100%;
  /* background-color: #fcfcfc; */
  /* border: 1px solid #ebebeb; */
  border-radius: 3px;
  transition: .2s;
  width: -webkit-fill-available;
  /* margin: 24px; */
 
}
.source {
  width: 100%;
  display: flex;
   justify-content: center;
  align-items: center;
   background: #ebebeb;
  /* background: #2b4881; */
  max-width: 600px; 
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
  width: 80%; 
  padding: 10px 5px; 
  /* padding-right: 100px; */
  /* padding-left: 10px; */
}

.inputClass textarea {
  width: 80%; 
  padding: 10px 2px; 
  /* padding-right: 100px; */
  /* padding-left: 10px; */
}
.editBtn{
  background: green;
  color: #ebebeb;
  padding: 8px 30px;
  margin: 0px 10px;
  cursor: pointer;
}
.resetBtn{
  background: white;
  color: black;
  padding: 10px 30px;
}

.el-form-item__error {
  margin-top: 5px;
  color: red; 
}

</style>