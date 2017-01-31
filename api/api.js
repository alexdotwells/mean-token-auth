var jwt = require('jwt-simple');
var passport = require('passport');

var createSendToken = require('./services/jwt.js');
var googleAuth = require('./services/googleAuth.js');
var facebookAuth = require('./services/facebookAuth.js');
var localStrategy = require('./services/localStrategy.js');
var jobs = require('./services/jobs.js');
var emailVerification = require('./services/emailVerification.js');

var app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	next();
});

app.post('/register', function() {
  res.send("hi");
})

mongoose.connect('mongodb://localhost/jsjwt');

var server = app.listen(3000, function(){
  console.log('API listening on ', server.address().port);
});
