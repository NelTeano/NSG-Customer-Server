
// MODELS
import Orders from "../models/orderModel.js"

const getOrders = async (req, res) => {

    try {
        const data = await Orders.find({})
        res.send(data);
        console.log("Get issues Data Success");
    } catch (error) {
        console.log("Failed getting the issues data", error);
        res.status(500).json({ message: "Error Get issues", error });
    }
}

const createOrder = async (req, res) => {
    const { 
        order_list, 
        addons, 
        status, 
        total 
    } = req.body;

    const newOrder = new Orders({
        order_list, 
        addons, 
        status, 
        total
    });

    try {
        const data = await newOrder.save();
        res.json(data);
        console.log('Order created successfully');
    } catch (error) {
        res.status(400).json({ message: "Error creating order", error });
    }
};

export { getOrders, createOrder }

