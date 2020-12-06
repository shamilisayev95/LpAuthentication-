import './style.less';

class Data{
    constructor () {
        this._dataBase = [
            {
                username: "shamil",
                password: "12345678"
            },
            {
                username: "vika",
                password: "12345678"
            },
            {
                username: "ali",
                password: "12345678"
            }
        ]; 
    }

    searchPasswordInDatabase = (userPassword) => {
        console.log("sgol");
     
        return this._dataBase.find(
            item => item.password === userPassword
        );
    }

    searchUserNameInDataBase = (userName) => {
        console.log("slam");

        return this._dataBase.find(
            item => item.username === userName
        );
    }

    addToDatabase = (userName, userPassword) => {     
        let newObj = {username: userName, password: userPassword};
        this._dataBase.push(newObj);
        console.log(this._dataBase);      
    }
}

export default Data;