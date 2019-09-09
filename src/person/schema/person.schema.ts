import * as mongoose from 'mongoose';

export const PersonSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String,
}, {
    collection: 'persons',
});
