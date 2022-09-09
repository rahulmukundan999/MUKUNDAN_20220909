"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
// const DATABASE_URL = `postgresql://${process.env.DB_SERVER}/${process.env.POSTGRES_DB}?schema=public`;
var DATABASE_URL = "postgresql://casper:casper@123@localhost:5432/casperDb?schema=public";
console.log("DATABASE_URL", DATABASE_URL);
var PrismaDb = new client_1.PrismaClient({
    datasources: {
        db: {
            url: DATABASE_URL,
        }
    }
});
exports.default = PrismaDb;
