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

        return this._dataBase.find(
            item => item.password === userPassword
        );
    }

    searchUserNameInDataBase = (userName) => {

        return this._dataBase.find(
            item => item.username === userName
        );
    }

    addToDatabase = (userName, userPassword) => {     
        let newObj = {username: userName, password: userPassword};
        this._dataBase.push(newObj);
    }
}

export default Data;