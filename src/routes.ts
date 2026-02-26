import { Router } from 'express';
import { createUserController } from './controllers/user.controller.js';
import { loginController } from './controllers/auth.controller.js';
import { authMiddleware } from './middlewares/auth.middleware.js';
import { changePasswordController } from './controllers/change.controller.js';
import { createProductController } from './controllers/product/product.controller.js';
import { createCategoryController } from './controllers/category/category.controller.js';
import { createIngredientController } from './controllers/ingredient/ingredient.controller.js';
import { createSizeController } from './controllers/size/size.controller.js';
import { createTableController } from './controllers/table/table.controller.js';
import { createWaiterController } from './controllers/waiter/waiter.controller.js';
import { createTipController } from './controllers/tip/createTip.controller.js';
import { createOrderController } from './controllers/order/order.controller.js';
import { createItemController } from './controllers/item/item.controller.js';
import { listItemsByOrderController } from './controllers/item/listbyorder.controller.js';
import { listAllorderController } from './controllers/order/listAlorder.controller.js';
import { listCategoryController } from './controllers/category/listcategory.controller.js';
import { listProductController } from './controllers/product/listproduct.controller.js';
import { detailCategoryController } from './controllers/category/detailcategory.controller.js';
import { detailProductController } from './controllers/product/detail.product.controller.js';
import { listIngredientController } from './controllers/ingredient/listingredient.controller.js';

const routes = Router();

//user
routes.post('/createuser', createUserController);
routes.post('/auth/login', loginController);
routes.put('/auth/changepassword', authMiddleware, changePasswordController);

//products
routes.post('/product/create',authMiddleware, createProductController);
routes.get('/product/list',authMiddleware,listProductController);
routes.get('/product/detail/:ProductId',authMiddleware,detailProductController);

//category
routes.post("/category/create", authMiddleware, createCategoryController);
routes.get("/category/list", authMiddleware, listCategoryController);
routes.get('/category/detail/:CategoryId',authMiddleware,detailCategoryController);

//ingredient
routes.post("/ingredient/create", authMiddleware, createIngredientController);
routes.get("/ingredient/list", authMiddleware, listIngredientController);

//size
routes.post("/size/create", authMiddleware, createSizeController);

//mesa
routes.post("/table/create", authMiddleware, createTableController);

//waiter
routes.post("/waiter/create", authMiddleware, createWaiterController);

//tip
routes.post("/tip/create", authMiddleware, createTipController);

// Order
routes.post("/order/create", authMiddleware, createOrderController);
routes.get("/order/all", authMiddleware,listAllorderController);

//item
routes.post("/item/create", authMiddleware, createItemController);
routes.get("/item/:orderId",authMiddleware, listItemsByOrderController);

export default routes;
