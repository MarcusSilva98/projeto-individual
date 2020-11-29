module.exports = {
    production: {
        username: 'marcus',
        password: '#Gf47207747845',
        database: 'ProjetoIndividual',
        host: 'marcusprojeto.database.windows.net',
        dialect: 'mssql',
        xuse_env_variable: 'DATABASE_URL',
        dialectOptions: {
            options: {
                encrypt: true
            }
        },
        pool: {
            max: 5,
            min: 1,
            acquire: 5000,
            idle: 30000,
            connectTimeout: 5000
        }
    }
};