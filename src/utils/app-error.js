class AppError {
    constructor(name,message,explanation,StatusCode){
        this.name=name;
        this.message=message;
        this.explanation=this.explanation;
        this.StatusCode=StatusCode;
    }
};
module.exports=AppError;