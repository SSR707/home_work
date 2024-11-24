import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { config } from "../config/index.js";
import email from "../config/email.js";

export default passport.use(
  new Strategy(
    {
      clientID: config.client.id,
      clientSecret: config.client.secret,
      callbackURL: "http://localhost:3000/api/v1/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      const user = {
        name: profile._json.given_name,
        email: profile._json.email,
        googleId: profile.id,
        accessToken,
      };
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
