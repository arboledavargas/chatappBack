import { Module } from '@nestjs/common';
import { JWTGuard } from './jwt.guard';
import { JWTstrategy } from './jwt.strategy';

@Module({
  providers: [JWTGuard, JWTstrategy],
})
export class AuthModule {}
