import { serverHttp } from "./app";

const port = process.env.PORT || 4003 ;

serverHttp.listen(port, () => {
    console.log(`Server is running in port: ${port}`);
}); 