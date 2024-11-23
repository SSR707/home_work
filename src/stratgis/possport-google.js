import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { config } from "../config/index.js";

export default passport.use(
  new Strategy(
    {
      clientID: config.client.id,
      clientSecret: config.client.secret,
      callbackURL: "http://localhost:3000/api/v1/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log({
        accessToken,
        refreshToken,
        profile,
        done,
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
