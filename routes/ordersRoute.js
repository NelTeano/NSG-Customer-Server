import { Router } from "express";

// CONTROLLERS
import { getOrders, createOrder } from "../controllers/orders.controller.js";

const orderRoute = Router();

orderRoute.get('/orders', getOrders);
orderRoute.post('/create-order', createOrder )

export default orderRoute;