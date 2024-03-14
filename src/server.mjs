import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

// Listen to port
app.listen(process.env.PORT || 3001, function () {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});
