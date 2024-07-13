const express = require('express');
const path = require('path');
const app = express();
const maxRouter = require('./routes/max');
const averageRouter = require('./routes/average');

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'EXPRESS_CLASS')));

// Routes for array operations
app.use('/max', maxRouter);
app.use('/average', averageRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
