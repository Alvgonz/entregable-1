import "reflect-metadata";
import { PostgresDatabase } from "./data/postgres/postgres-database";
import { envs } from "./config/envs";
import { Server } from "./presentation/server";
import { AppRoutes } from "./presentation/routes";

export async function main() {
    const postgres = new PostgresDatabase({
        username: envs.PGUSER,
        password: envs.PGPASSWORD,
        host: envs.PGHOST,
        database: envs.PGDATABASE,
        port: envs.PGPORT,
    });
    await postgres.connect();

    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    });

    await server.start()
}

main();