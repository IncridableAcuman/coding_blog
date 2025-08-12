const BaseError=require("../error/base.error");

class FileService{

     async toDB(file){
        try {
            if(!file || !file.data){
                throw BaseError.Badrequest("no file provided");
            }
            return {
                data:file.data,
                contentType:file.mimeyype
            }
        } catch (error) {
            throw BaseError.Badrequest(`Error saving file: ${error}`);
        }
    }
}
module.exports=new FileService();