const {StatusCodes}=require('http-status-codes');
const AppError=require('./app-error');
class ClientError extends AppError{
    constructor(error){
        let name=error.name;
        let explanation=[];
        error.errors.forEach(element => {
            explanation.push(element.message);
        });
        super(name,"No such user exist ",explanation,StatusCodes.NOT_FOUND);
    }
};
module.exports=ClientError;