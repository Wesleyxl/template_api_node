import app from "./App";
import appConfig from "@config/app";

app.listen(appConfig.port, () => {
  return console.log(`Server running on ${appConfig.url}/${appConfig.port}`);
});
