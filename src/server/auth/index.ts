import { Express } from 'express';
import passport from 'passport';
import { strategy as github } from './github';
import { strategy as google } from './google';
import { strategy as microsoft } from './microsoft';

export const strategies = { github, google, microsoft };
const authStrategyNames = Object.keys(strategies);

export const registerAuthRoutes = (app: Express): void => {
	passport.serializeUser((user, done) => void done(null, user));
	passport.deserializeUser((user, done) => void done(null, user));

	authStrategyNames.forEach(authName => {
		app.get(`/api/auth/${authName}`, passport.authenticate(authName));
		app.get(
			`/api/auth/${authName}/callback`,
			passport.authenticate(authName, {
				failureRedirect: '/login',
			}),
			(req, res) => void res.redirect('/')
		);
	});

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
};

export default {
	registerAuthRoutes,
	strategies,
};
