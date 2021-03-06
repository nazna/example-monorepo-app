import { Field, ID, InterfaceType } from '@nestjs/graphql'

@InterfaceType()
export abstract class Node {
  @Field(() => ID)
  readonly id: string
}
