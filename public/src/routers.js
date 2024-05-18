import { createRouter , createWebHistory} from "vue-router"
 import AddForm from './components/AddForm.vue'
 import LoginPage from './components/LoginPage.vue'
 import TableData from './components/TableData.vue'
 import ProductList from './components/ProductList.vue'



const routes = [
    {
        name:"Login",
        component:LoginPage,
        path:'/'
    },
     {
        name:"TableData",
        component:TableData ,meta: { requiresAuth: true },
        path:'/product'
    },
    {
        name:"AddForm",
        component:AddForm,
        meta: { requiresAuth: true }, 
        path:'/add/:id?'
    },
     {
        name:"ProductList",
        component:ProductList,
        path:'/product-list'
    }
    
];

const router = createRouter({
    history:createWebHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('auth');
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
      next('/');
    } else {
      next();
    }
  });

export default router;