const fs=require('fs');
const path=require('path');
const {v4:uuidv4}=require('uuid');
const BaseError=require("../error/base.error");
class FileService{

     async save(file){
        try {
            const fileName=uuidv4()+path.extname(file.name);
            const currentDir=__dirname;
            const staticDir=path.join(currentDir,"..","static");
            const filePath=path.join(staticDir,fileName);

            if(!fs.existsSync(staticDir)){
                fs.mkdirSync(staticDir,{recursive:true});
            }
            await file.mv(filePath);

            return fileName;
        } catch (error) {
            throw BaseError.Badrequest(`Error saving file: ${error}`);
        }
    }
}
module.exports=new FileService();