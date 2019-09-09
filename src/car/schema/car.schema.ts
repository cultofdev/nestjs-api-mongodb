import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
    id: Number,
    car_make: String,
    car_model: String,
    car_model_year: String,
    car_vin: String,
    color: String,
});
