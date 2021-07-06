const expressJwt = require('express-jwt');
const config = require("config");


module.exports = authorize;

function authorize(roles = []) {

	const secret = config.get("secret");
    // roles param can be a single role string (e.g. Role.User or 'User') 
    // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [

        // authenticate JWT token and attach user to request object (req.user)
        // expressJwt({ secret:  process.env.JWT_SECRET, algorithms: ['RS256'] })
        expressJwt({ secret: secret, algorithms: ['HS256'] }),

        // authorize based on user role
        (req, res, next) => {
            if (roles.length && !roles.includes(req.user.role)) {
            	// console.log(roles.length);
            	// console.log(req.user);
                // user's role is not authorized
                return res.status(401).json({ message: 'You are not allowed to access this page.' });
            }

            // authentication and authorization successful
            next();
        }
    ];
}