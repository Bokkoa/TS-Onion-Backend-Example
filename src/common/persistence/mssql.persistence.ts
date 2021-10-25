import { ConnectionPool } from 'mssql';

let config = {
    server: process.env.DB_MSSQL_HOST as string,
    database: process.env.DB_MSSQL_DATABASE as string,
    user: process.env.DB_MSSQL_USER as string,
    password: process.env.DB_MSSQL_PASSWORD as string,
    options: {
        enableArithAbort: true
    }
};

export default new ConnectionPool( config ).connect();