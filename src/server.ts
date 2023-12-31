import app from './app';
import config from './app/config';
import mongoose from 'mongoose';
// We will get connectivity with server calling the function
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main(); //If we don't call, it won't connect mongoose also cannot listen app
