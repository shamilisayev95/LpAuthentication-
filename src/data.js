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

    searchInDatabase = (userName, userPassword) => {
     
        return this._dataBase.find(
            item => item.username === userName && item.password === userPassword
        );
    }

    serchUserNameInDataBase = (userName) => {

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