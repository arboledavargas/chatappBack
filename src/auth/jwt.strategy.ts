import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';

const strategyOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKeyProvider: passportJwtSecret({
    jwksUri: 'https://dev-dcr1tflkwnijlpv7.us.auth0.com/.well-known/jwks.json',
    cache: true,
  }),
  audience: 'localhost:4000',
  issuer: 'https://dev-dcr1tflkwnijlpv7.us.auth0.com/',
};

export class JWTstrategy extends PassportStrategy(Strategy) {
  constructor() {
    super(strategyOptions);
  }

  async validate(payload: any) {
    return { userId: payload.sub };
  }
}
