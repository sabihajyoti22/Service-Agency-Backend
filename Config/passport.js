const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID: "271615084492-spuft71ovq1ufvpn73se19tm2tknt1cq.apps.googleusercontent.com",
			clientSecret: "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",
			callbackURL: "https://service-agency-2022.herokuapp.com/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
