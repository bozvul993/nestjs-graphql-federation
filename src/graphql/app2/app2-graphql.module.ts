import { Module } from "@nestjs/common";
import { RandomIntResolver } from "./random-int.resolver";

@Module({
    providers: [RandomIntResolver]
})
export class App2GraphQLModule {}