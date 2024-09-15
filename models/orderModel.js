import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence';

const AutoIncrement = mongooseSequence(mongoose);

const orderSchema = new mongoose.Schema({
    order_id: { 
        type: Number, 
        unique: true // Ensure order_id is unique
    },
    order_list: {
        type: Array,
        required: true,
    },
    addons: {
        type: Array,
    },
    status: {
        type: Boolean,
        default: false,
    },
    total: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => addHoursToDate(new Date(), 8),
    },
    updatedAt: {
        type: Date,
        default: () => addHoursToDate(new Date(), 8),
    }
});


orderSchema.plugin(AutoIncrement, { 
    inc_field: 'order_id', 
    start_at: 1,            
    increment_by: 1         
});

function addHoursToDate(date, hours) {
    return new Date(date.getTime() + hours * 60 * 60 * 1000);
}

const Orders = mongoose.model('Orders', orderSchema);

export default Orders;
