import { Router } from 'express';
import { createUserController } from '@/controllers/user.controller';
import { loginController } from '@/controllers/auth.controller';
import { authMiddleware } from '@/middlewares/auth.middleware';
import { changePasswordController } from '@/controllers/change.controller';
import { createProductController } from './controllers/product/product.controller';
import { createCategoryController } from './controllers/category/category.controller';
import { createIngredientController } from './controllers/ingredient/ingredient.controller';
import { createSizeController } from './controllers/size/size.controller';
import { createTableController } from './controllers/table/table.controller';
import { createWaiterController } from './controllers/waiter/waiter.controller';
import { createTipController } from './controllers/tip/createTip.controller';
import { createOrderController } from './controllers/order/order.controller';
import { createItemController } from './controllers/item/item.controller';
import { listItemsByOrderController } from './controllers/item/listbyorder.controller';
import { listAllorderController } from './controllers/order/listAlorder.controller';
import { listCategoryController } from './controllers/category/listcategory.controller';

const routes = Router();

//user
routes.post('/createuser', createUserController);
routes.post('/auth/login', loginController);
routes.put('/auth/changepassword', authMiddleware, changePasswordController)

//products
routes.post('/product/create',authMiddleware, createProductController)

//category
routes.post("/category/create", authMiddleware, createCategoryController);
routes.get("/category/list", authMiddleware, listCategoryController);

//ingredient
routes.post("/ingredient/create", authMiddleware, createIngredientController);

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
