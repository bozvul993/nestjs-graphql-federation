import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RandomStringResolver {
  @Query('randomString')
  public async execute(): Promise<string> {
    return "Welcome";
  }
}
