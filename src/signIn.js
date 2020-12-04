import Data from './data';
class SignIn {
    constructor(dataBase) {
        this._root = null;
        this._dataBase = dataBase;
        this._userName = null;
        this._errorInfo = null;
        this._signInForm = null;
        this._userPassword = null;
        this._signInButton = null;
    }
    createSignInWindow = () => {
        this._root = document.getElementById("root");
    
        let divSignIn = document.createElement("div");
        divSignIn.className = ("signin-page");
        this._root.append(divSignIn);
        
        let form = document.createElement("form");
        form.className = ("signin-window");
        divSignIn.append(form);

        let divFormSection = document.createElement("div");
        divFormSection.className = ("form-section");
        form.append(divFormSection);
        
        let labelName = document.createElement("label");
        labelName.className = ("label-name");
        labelName.innerHTML = "Username";
        divFormSection.append(labelName);

        let inputUserName = document.createElement("input");
        inputUserName.placeholder = "Enter Username";
        inputUserName.className = ("input-name");
        inputUserName.type = "text";
        inputUserName.setAttribute("required", "required");
        divFormSection.append(inputUserName);

        let labelPassword = document.createElement("label");
        labelPassword.className = "label-password";
        labelPassword.innerHTML = "Password";
        divFormSection.append(labelPassword);

        let inputPassword = document.createElement("input");
        inputPassword.placeholder = "Enter Password";
        inputPassword.type = "password";
        inputPassword.id = "password"
        inputPassword.className = ("input-password");
        inputPassword.setAttribute("required", "required");
        divFormSection.append(inputPassword);

        let showPassword = document.createElement("input");
        showPassword.type = "checkbox";
        showPassword.className = ("show-password");
        divFormSection.append(showPassword);

        let showPasswordLabel = document.createElement("p");
        showPasswordLabel.className = "show-password-label";
        showPasswordLabel.innerHTML = "Show password";
        divFormSection.append(showPasswordLabel);


        let signInButton = document.createElement("button");
        signInButton.innerHTML = "SignIn";
        signInButton.className = ("signin-modal");
        divFormSection.append(signInButton);

        let errorBox = document.createElement("div");
        errorBox.className = ("error-box");
        divFormSection.append(errorBox); 
        let errorInfo = document.createElement("p");
        errorInfo.className = ("error");
        errorBox.append(errorInfo);
        this._errorInfo = errorBox;
        this._errorInfo.style.display = "none";

        showPassword.addEventListener('click', this.showPassword);

        this._signInForm = divFormSection;
        this._userName = document.querySelector(".input-name");
        this._userPassword = document.querySelector(".input-password");

        signInButton.addEventListener('click', this.checkInputs);
    }
    showPassword = () => {
        let x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    }
    checkInputs = event =>{
        console.log(this._userName.value);
        console.log(this._userPassword.value);
        console.log(this._dataBase);
        console.log(this._userPassword.value.length);
        event.preventDefault();
        if(this.checkString(this._userName.value) === false || this.checkString(this._userPassword.value) === false){
            let answer = "No info";
            this._errorInfo.innerHTML = answer;
            this._errorInfo.style.display = "block";
        }else if(this.checkPassword() === false){
            let answer = "Password is too short";
            this._errorInfo.innerHTML = answer;
            this._errorInfo.style.display = "block";
        }else if (this._dataBase.searchInDatabase(this._userName.value, this._userPassword.value)){
            console.log("cicey");//запуск др окна
            this._errorInfo.style.display = "none";
        }else{
            this._errorInfo.innerHTML = "Wrong username or password";
            this._errorInfo.style.display = "block";
        }
    }
    checkString = (inputString) => {
        if (inputString === ""){
            return false;
        }
        else{
            return true;
        }
    }
    checkPassword = () => {
           if (this._userPassword.value.length >= 8){

                return true;
           }else{

                return false;
           }      
    }
}
export default SignIn;