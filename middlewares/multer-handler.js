import multer from "multer";
import multerAzureStorage from "multer-azure-storage";

const upload = multer({
  storage: new multerAzureStorage({
    azureStorageConnectionString: process.env.AZURE_CONNECTION_STRING,
    containerName: process.env.AZURE_CONTAINER,
    containerSecurity: "blob",
  }),
});

const aws = upload.single("image")((handler) => (req, res) => {
    console.log('upload: ', upload)
    try {
        if(!req.file){
            res.status(400).json({error: "No file is provided"});
            res.end();
        }
        handler(req,res);
    } catch (error) {
        res.status(500).json({error: "Internal Server error"});
    }
});

export default aws;
