<template>
<div class="container">
  <div class="main1">
 <div class="filters">
      <input type="text" class="filterInput" placeholder="Name" v-model="nameFilter" @input="handleInput">
     
      <router-link to="/add"><el-button  class="addBtn1">Add Data</el-button></router-link>
     

   </div>
   <table border="1" style="width:100%;">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Price</th>
         

          <th>Actions</th>

         
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in filteredProducts" :key="index">
          <td>{{ product.productId}}</td>
          <td>{{ product.productName }}</td>
          <td>{{ product.price }}</td>
         


          <td><router-link :to="'/add/' + product.productId "><button class="editBtn">Edit</button></router-link>
          <button class="deleteBtn" @click="deleteProduct(product.productId)">Delete</button>
        </td>

        </tr>
      </tbody>
    </table>
   
  </div>
</div>
</template>
<script>


export default {
  name: 'TableData',

        data() {
        return {
          tableData: [],
          nameFilter: '',
     
        }
      },
       methods: {
         deleteProduct(pdId) {
        let existingData = JSON.parse(localStorage.getItem('product-info')) || [];
        existingData = existingData.filter(product => product.productId !== pdId);
        localStorage.setItem('product-info', JSON.stringify(existingData));
        this.tableData = existingData; 
    },
 
       
      
},

     
computed: {
    filteredProducts(){
       if (Array.isArray(this.tableData)) {
      return this.tableData?.filter(product =>
        product?.productName.toLowerCase().includes(this.nameFilter.toLowerCase()) 
      
      );
    }
    else {
    return [];
  }
  }
},

   created() {
     this.tableData  = JSON.parse(localStorage.getItem('product-info'));
  }

}

</script>
<style scoped>
.custom-icon-size {
  font-size: 10px;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
    /* background: #ebebeb; */
  /* padding: 20px; */
}
.main{
   width: 100%;
   background: black !important;
}

.filters {
   background: #2b4881;
  margin-bottom: 20px;
}



.product-table {
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  border-collapse: collapse; 
}

.el-button {
  margin-right: 10px;
}
.filterInput{
  padding: 5px 0px;
  margin: 10px;
}
.addBtn1{
  padding: 5px 15px;
  color: white;
  background: green;
  cursor: pointer;
}
.addBtn2{
  padding: 5px 15px;
  color: white;
  background: black;
  cursor: pointer;
}
.editBtn{
   padding: 5px 15px;
   background: blue;
   color: white;
   cursor: pointer;
}
.deleteBtn{
   padding: 5px 15px;
   background: red;
   color: white;
   cursor: pointer;
}
.el-table th,
.el-table td {
  border: 1px solid black !important; 
  padding: 10px; 
}

</style>