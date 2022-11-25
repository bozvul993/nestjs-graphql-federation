import { Module } from "@nestjs/common";
import { GraphQLModule } from '@nestjs/graphql';
import {
    ApolloFederationDriver,
    ApolloFederationDriverConfig,
  } from '@nestjs/apollo';
import { App1GraphQLModule } from "./app1/app1-graphql.module";
import {ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core';
import { App2GraphQLModule } from "./app2/app2-graphql.module";

@Module({
    imports: [
        GraphQLModule.forRootAsync<ApolloFederationDriverConfig>({
            driver: ApolloFederationDriver,
            useFactory: async () => ({
              // introspection
              path: '/app1-graphql',
              playground: false,
              typePaths: ['**/app1.graphql'],
              include: [App1GraphQLModule],
              context: ({ req, res }) => ({ req, res }),
              plugins: [ApolloServerPluginLandingPageLocalDefault()]
            })
        }),
        GraphQLModule.forRootAsync<ApolloFederationDriverConfig>({
            driver: ApolloFederationDriver,
            useFactory: async () => ({
              // introspection
              path: '/app2-graphql',
              playground: false,
              typePaths: ['**/app2.graphql'],
              include: [App2GraphQLModule],
              context: ({ req, res }) => ({ req, res }),
              plugins: [ApolloServerPluginLandingPageLocalDefault()]
            })
        })
    ],
})
export class AppGraphQLModule {}