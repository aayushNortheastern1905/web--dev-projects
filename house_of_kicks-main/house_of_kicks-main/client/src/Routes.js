const routes = {
    BASE_URL:'http://house-of-kicks-backend.us-east-1.elasticbeanstalk.com',
    base:'/auth',
    LANDINGPAGE:'/home',
    USER_PROFILE:'/profile',
    UPDATE_USER:'/updateProfile',
    PRODUCTS: '/products/*',
    PRODUCT: '/product/:modelName',
    ADMIN:'/admin',
    DOESNOTEXIST: '*',
    CART: '/cart',
    demo :'/demo'
  };
  
  export default routes;
  