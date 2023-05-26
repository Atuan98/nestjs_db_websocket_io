import { DataSource , DataSourceOptions} from "typeorm";
import * as dotenv from 'dotenv';
import * as fs from 'fs';
const envConfig = dotenv.parse(fs.readFileSync('.env'))
// const configSevice = new ConfigService()

// const dataSourceOptions: DataSourceOptions = {
//         type: 'postgres',
//         host: process.env.DATABASE_HOST'),
//         port: process.env.DATABASE_PORT'),
//         username: process.env.DATABASE_USER'),
//         password: process.env.DATABASE_PASSWORD'),
//         database: process.env.DATABASE_NAME'),
//         entities: ["dist/**/*.entity.js"],
//         migrations: ["dist/migrations/*{.ts,.js}"],
//         synchronize: false
// }
// export default dataSourceOptions

export const dataSourceOptions: DataSourceOptions = {
        type: 'postgres',
        host: envConfig.DATABASE_HOST,
        port: parseInt(envConfig.DATABASE_PORT),
        username: envConfig.DATABASE_USER,
        password: envConfig.DATABASE_PASSWORD,
        database: envConfig.DATABASE_NAME,
        entities: ["dist/**/*.entity.js"],
        migrations: ["dist/db/migrations/*.js"],
        synchronize: false
}
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;