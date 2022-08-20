const { application } = require('express');
var indexRouter = require('./routes/index');
application.use('/',indexRouter);