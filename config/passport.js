import dotenv from "dotenv";
dotenv.config();

import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { usersDao } from "../db/db.js";

const jwtSecret = process.env.JWT_SECRET || "no_olvide_el_jwt_secret";

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,
    },
    async (jwtPayload, done) => {
      try {
        const user = await usersDao.get(jwtPayload.id);

        if (!user) return done(null, false); // Uy, este usuario no esta!

        const userResponse = {
          id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
          confirmed: user.account.confirmed,
          admin: user.account.admin,
        };

        return done(null, userResponse); // Encontramos al usuario, que alegria!
        
      } catch (err) {
        return done(err, false); // Algo malio sal!
      }
    }
  )
);
