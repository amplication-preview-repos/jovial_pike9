/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsInt, ValidateNested } from "class-validator";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { Type } from "class-transformer";
import { RetweetCreateNestedManyWithoutTweetsInput } from "./RetweetCreateNestedManyWithoutTweetsInput";

@InputType()
class TweetCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  likeCount?: number | null;

  @ApiProperty({
    required: false,
    type: () => LikeCreateNestedManyWithoutTweetsInput,
  })
  @ValidateNested()
  @Type(() => LikeCreateNestedManyWithoutTweetsInput)
  @IsOptional()
  @Field(() => LikeCreateNestedManyWithoutTweetsInput, {
    nullable: true,
  })
  likes?: LikeCreateNestedManyWithoutTweetsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  message?: string | null;

  @ApiProperty({
    required: false,
    type: () => RetweetCreateNestedManyWithoutTweetsInput,
  })
  @ValidateNested()
  @Type(() => RetweetCreateNestedManyWithoutTweetsInput)
  @IsOptional()
  @Field(() => RetweetCreateNestedManyWithoutTweetsInput, {
    nullable: true,
  })
  retweets?: RetweetCreateNestedManyWithoutTweetsInput;
}

export { TweetCreateInput as TweetCreateInput };
