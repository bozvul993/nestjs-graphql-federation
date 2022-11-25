import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RandomIntResolver {
  @Query('randomInt')
  public async execute(): Promise<number> {
    return 1;
  }
}
