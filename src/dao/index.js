import { ProductManager } from "./filesystem/productManager.js";
import { CartManager } from "./filesystem/cartManager.js";
import { config } from "../config/config.js";
import { ProductManagerMongo } from "./mongo/productManagerMongo.js";
import { CartManagerMongo } from "./mongo/cartManagerMongo.js";
import {connectDB} from "../config/dbConnection.js";
import { UsersMongo } from "./managers/users.mongo.js";


connectDB();
export const productsDao = new ProductManagerMongo();
export const cartService = new CartManagerMongo();





export {productsDao, cartService}
export const usersDao = new UsersMongo();


