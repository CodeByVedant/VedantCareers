import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const DatauriParser = require("datauri");

const getDataUri = (file) => {
    const parser = new DatauriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
}

export default getDataUri;