import express from "express"
import { graphqlHTTP } from "express-graphql"
import { graphqlUploadExpress } from 'graphql-upload'
import cors from 'cors'
import schema from './Schema';
import root from './Resolvers';
import seed from '../config/seed';
import path from 'path';

export class Server {

    public app: express.Application;
    public port: number;
    constructor() {
        this.app = express();
        this.port = this.getPort();
    }

    public start(): void {
        this.app.listen(this.port);
        console.log(`Running a GraphQL API server at http://localhost:${this.port}/graphql`);
    }

    private getPort = (): number => process.env.PORT ? parseInt(process.env.PORT, 10) : 4001;

    public setGraphql(): void {
        this.app.use(cors());
        this.app.use("/static", express.static(path.join(__dirname, '../../public')));
        this.app.use(
            "/graphql",
            graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
            graphqlHTTP({
                schema: schema,
                rootValue: root,
                graphiql: true,
            })
        )
        this.app.get("/*", (req, res) => {
            res.sendFile(path.join(__dirname, "../../../frontend/build", "index.html"));
        });
    }

    public async seedData(): Promise<void> {
        await seed();
    }
}