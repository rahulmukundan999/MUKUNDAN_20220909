import { Server } from './graphql';


const main = async (): Promise<void> => {
    const server = new Server();
    server.start();
    server.setGraphql();
    server.seedData();
};

main();