<template>
<div class="container">
  <div class="main1">

   <table border="1" style="width:100%;">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Price</th>
        
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in tableData" :key="index">
          <td>{{ product.productId}}</td>
          <td>{{ product.productName }}</td>
          <td>{{ product.price }}</td>
        
        </tr>
      </tbody>
    </table>
   
  </div>
</div>
</template>
<script>


export default {
  name: 'ProductList',

        data() {
        return {
          tableData: [],
          nameFilter: '',
     
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

.el-table th,
.el-table td {
  border: 1px solid black !important; 
  padding: 10px; 
}

</style>