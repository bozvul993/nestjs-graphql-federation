import { Module } from "@nestjs/common";
import { RandomStringResolver } from "./random-string.resolver";

@Module({
    providers: [RandomStringResolver],
    exports: [RandomStringResolver]
})
export class App1GraphQLModule {}