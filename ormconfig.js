module.exports = {
    type: "sqite",
    database: "./src/database/db.sqlite",
    cli: {
        migrationsDir: "./src/database/migrations"
    }
}