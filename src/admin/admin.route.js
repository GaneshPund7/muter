     const {verifyToken} = require('./user.service')
const verifyUser = require('../auth/user-login/user.login');
const verifyAdmin = require('../auth/admin-login/admin.login');
const { getAdmin, addAdmin, updateAdmin, deleteAdmin, forgetPassword, verifyOtp, updatePassword } = require('./admin.controller');
const route = express.Router();

route.get('/admin', getAdmin);
route.post('/admin', addAdmin);
route.put('/admin/:id', updateAdmin);
route.delete('/admin/:id', deleteAdmin);

route.post('/login', verifyAdmin);
route.post('/forgot-password', forgetPassword);
route.post('/verify-otp', verifyOtp);
route.post('/update-password', updatePassword);

route.get('/verifyToken', verifyToken ,(req, res)=>{
res.send("You can access this properties")
});

module.exports = route;
