let path= require('path');
module.exports = (app) => {
    const apiRoutes = require('./apiRoute')(app);
    const authRoutes = require('./authRoute');
    app.use('/auth', authRoutes);
    app.use('/api',require('./apiRoute'));
}
