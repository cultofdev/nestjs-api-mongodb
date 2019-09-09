export class CreateStockDto {
    readonly id: number;
    readonly stockMarket: string;
    readonly stockSymbol: string;
    readonly stockName: string;
    readonly stockMarketCap: string;
    readonly stockSector: string;
    readonly stockIndustry: string;
}
