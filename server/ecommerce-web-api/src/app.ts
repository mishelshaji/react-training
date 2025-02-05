import express from 'express';
import categoryRoutes from "./routes/categoryRoutes";
import cors from "cors"
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;

app.use(bodyParser.json())
app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE'
}))
app.use(categoryRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
