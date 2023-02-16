// const { use } = require('passport');
const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;


const GOOGLE_CLIENT_ID = '777115455028-2l3prgn1tb9ac72iae513tct89m593h5.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET="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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      done(null,profile);
    }
  
));

passport.serializeUser((user,done)=>{
    done(null,user);
});
passport.deserializeUser((user,done)=>{
    done(null,user);
});
