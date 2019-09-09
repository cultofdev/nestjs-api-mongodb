import * as mongoose from 'mongoose';

export const StockSchema = new mongoose.Schema({
    id: Number,
    stock_market: String,
    stock_symbol: String,
    stock_name: String,
    stock_market_cap: String,
    stock_sector: String,
    stock_industry: String,
}, {
    collection: 'stocks',
});
