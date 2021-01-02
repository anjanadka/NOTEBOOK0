let express = require('express'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  database = require('./database'),
  bodyParser = require('body-parser');


  
const mongoDB_URL='mongodb+srv://User:root@cluster0.rctkw.mongodb.net/Notebook?retryWrites=true&w=majority';

// Connect mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB_URL || database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected")
  },
  error => {
    console.log("Database could't be connected to: " + error)
  }
)

//file-upload
const docRoute = require('../backend/routes/document.route')

const app5 = express();
app5.use(bodyParser.json());
app5.use(bodyParser.urlencoded({
  extended: false
}));
app5.use(cors());


// Make Images "Uploads" Folder Publicly Available
app5.use('/public', express.static('public'));


// API Route
app5.use('/api', docRoute)

const port5 = process.env.PORT || 6000;
const server5 = app5.listen(port5, () => {
  console.log('Connected to port ' + port5)
})


// Error
app5.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error('Something went wrong'));
  });
});

app5.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

//lecture



const lectureAPI = require('../backend/routes/lecture.route.js')

const quizAPI = require('../backend/routes/quiz.route.js')

const assignmentAPI = require('../backend/routes/assignment.route.js')

const notesAPI = require('../backend/routes/notes.route.js')

const textbookAPI = require('../backend/routes/textbook.route.js')

const homeworkAPI = require('../backend/routes/homework.route.js')

const qaAPI = require('../backend/routes/qa.route.js')

const qpAPI = require('../backend/routes/qp.route.js')

const chatAPI = require('../backend/routes/chat.route.js')
const actAPI = require('../backend/routes/activities.route.js')

const assignment_sAPI = require('../backend/routes/assignment_student.route.js')
const homework_sAPI = require('../backend/routes/homework_student.route.js')

const s_actAPI = require('../backend/routes/activities_student.route.js')
const reportAPI = require('../backend/routes/report.route.js')

const adminAPI = require('../backend/routes/admin.route.js')
const attAPI = require('../backend/routes/attendence.route.js')
const st_attAPI = require('../backend/routes/st_attendence.route.js')

const app4 = express();
app4.use(bodyParser.json());
app4.use(bodyParser.urlencoded({
  extended: false
}));
app4.use(cors());

// Make Images "Uploads" Folder Publicly Available
app4.use('/public', express.static('public'));


// API
app4.use('/api/lecture_link', lectureAPI)
app4.use('/api/qa', qaAPI)
app4.use('/api/quiz', quizAPI)
app4.use('/api/Assignment', assignmentAPI)
app4.use('/api/Notes', notesAPI)
app4.use('/api/Textbook', textbookAPI)
app4.use('/api/Homework', homeworkAPI)
app4.use('/api/QuestionPaper', qpAPI)
app4.use('/api/chat',chatAPI )
app4.use('/api/report',reportAPI )
app4.use('/api/activities',actAPI )

app4.use('/api/admin',adminAPI )

app4.use('/api/student_activities',s_actAPI )
app4.use('/api/Assignment_student', assignment_sAPI)
app4.use('/api/Homework_student', homework_sAPI)
app4.use('/api/attendence', attAPI)
app4.use('/api/st_attendence', st_attAPI)
// Create port
const port4 = process.env.PORT || 2000;
const server4 = app4.listen(port4, () => {
  console.log(`Connected to port ${port4}`)
})

// Find 404
app4.use((req, res, next) => {
  next(createError(404));
});

// error handler
app4.use(function (err, req, res,next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});



//announcement

const annAPI = require('../backend/routes/annoncement.route')
const app2 = express();
app2.use(bodyParser.json());
app2.use(bodyParser.urlencoded({
  extended: false
}));
app2.use(cors());

// API
app2.use('/api', annAPI)

// Create port
const port2 = process.env.PORT || 7000;
const server2 = app2.listen(port2, () => {
  console.log(`Connected to port ${port2}`)
})

// Find 404
app2.use((req, res, next) => {
  next(createError(404));
});

// error handler
app2.use(function (err, req, res) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});


//teacher
const teacherAPI = require('../backend/routes/teacher.route')
const app1 = express();
app1.use(bodyParser.json());
app1.use(bodyParser.urlencoded({
  extended: false
}));
app1.use(cors());

// API
app1.use('/api', teacherAPI)

// Create port
const port1 = process.env.PORT || 5000;
const server1 = app1.listen(port1, () => {
  console.log(`Connected to port ${port1}`)
})

// Find 404
app1.use((req, res, next) => {
  next(createError(404));
});

// error handler
app1.use(function (err, req, res) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

//student
const studentAPI = require('../backend/routes/student.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// API
app.use('/api', studentAPI)
//app.use('/api/teacher',teacherAPI)




// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Connected to port ${port}`)
})

// Find 404
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});