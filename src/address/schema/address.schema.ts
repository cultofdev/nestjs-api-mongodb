import * as mongoose from 'mongoose';

export const AddressSchema = new mongoose.Schema({
    id: Number,
    address: String,
    city: String,
    state: String,
    country: String,
    phone: String,
}, {
    collection: 'address',
});
