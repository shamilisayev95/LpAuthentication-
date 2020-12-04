import Data from './data';
class SignUp {
    constructor(dataBase) {
        this._root = null;
        this._email = null;
        this._userName = null;
        this._errorInfo = null;
        this._signUpForm = null;
        this._userPassword = null;
        this._signUpButton = null;
        this._dataBase = dataBase;
        this._userPasswordRepeat = null;
    }
    
    createSignUpWindow = () => {
    
        this._root = document.getElementById("root");
    
        let divSignUp = document.createElement("div");
        divSignUp.className = ("signup-page");
        this._root.append(divSignUp);
        
        let form = document.createElement("form");
        form.className = ("signUp-window");
        divSignUp.append(form);

        let divFormSection = document.createElement("div");
        divFormSection.className = ("form-section");
        form.append(divFormSection);
        
        let labelName = document.createElement("label");
        labelName.className = ("label-name");
        labelName.innerHTML = "Username";
        divFormSection.append(labelName);

        let inputUserName = document.createElement("input");
        inputUserName.placeholder = "Enter Username";
        inputUserName.className = ("input-name-reg");
        inputUserName.type = "text";
        inputUserName.setAttribute("required", "required");
        divFormSection.append(inputUserName);

        let labelEmail = document.createElement("label");
        labelEmail.className = ("label-email");
        labelEmail.innerHTML = "Email";
        divFormSection.append(labelEmail);

        let inputEmail = document.createElement("input");
        inputEmail.placeholder = "Enter your Email";
        inputEmail.className = ("input-email");
        inputEmail.type = "email";
        inputEmail.setAttribute("required", "required");
        divFormSection.append(inputEmail);

        let labelPassword = document.createElement("label");
        labelPassword.className = "label-password";
        labelPassword.innerHTML = "Password";
        divFormSection.append(labelPassword);

        let inputPassword = document.createElement("input");
        inputPassword.placeholder = "Enter Password";
        inputPassword.type = "password";
        inputPassword.className = ("input-password-reg");
        inputPassword.setAttribute("required", "required");
        divFormSection.append(inputPassword);

        let labelPasswordRepeat = document.createElement("label");
        labelPasswordRepeat.className = "label-password-repeate";
        labelPasswordRepeat.innerHTML = "Password";
        divFormSection.append(labelPasswordRepeat);

        let inputPasswordRepeat = document.createElement("input");
        inputPasswordRepeat.placeholder = "Repeate Password";
        inputPasswordRepeat.type = "password";
        inputPasswordRepeat.className = ("input-password-repeat");
        inputPasswordRepeat.setAttribute("required", "required");
        divFormSection.append(inputPasswordRepeat);

        let signUpButton = document.createElement("button");
        signUpButton.innerHTML = "SignUp";
        signUpButton.className = ("signup-modal");
        divFormSection.append(signUpButton);

        let errorBox = document.createElement("div");
        errorBox.className = ("error-box");
        divFormSection.append(errorBox); 
        let errorInfo = document.createElement("p");
        errorInfo.className = ("error");
        errorBox.append(errorInfo);
        this._errorInfo = errorBox;
        this._errorInfo.style.display = "none";
        this._signUpForm = divFormSection;
         
        this._userName = document.querySelector(".input-name-reg");
        this._userPassword = document.querySelector(".input-password-reg");
        this._userPasswordRepeat = document.querySelector(".input-password-repeat");
        this._email = document.querySelector(".input-email");

        signUpButton.addEventListener('click', this.checkNewInfo);
    }
    checkString = (inputString) => {
        if (inputString === ""){
            return false;
        }
        else{
            console.log ('ok');
            return true;
        }
    }
    checkNewInfo = event => {
        event.preventDefault();
        console.log(this._userName.value);
        console.log(this._userPassword.value);
        console.log(this._userPasswordRepeat.value);
        console.log(this._email.value);
        if(this.checkString(this._userName.value) === false || this.checkString(this._userPassword.value) === false || this.checkString(this._userPasswordRepeat.value) === false || this.checkString(this._email.value) === false){
            let answer = "No info";
            this._errorInfo.innerHTML = answer;
            this._errorInfo.style.display = "block";
        }else{
            this.checkUserName();
        }
    }
    checkEmail = () => {
        if (this.validateEmail()){

            this.checkPassword();
        }else {
            console.log("email is not working");
            this._errorInfo.innerHTML = "Wrong Email Type";
            this._errorInfo.style.color = 'red';
            this._errorInfo.style.display = "block";
        }
    }

    validateEmail = () => {
        if (this._email.value) {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(this._email.value).toLowerCase());
        }
    }
    checkTwoPasswords = () =>{
        console.log(this._userPassword.value);
        console.log(this._userPasswordRepeat.value);
        this._errorInfo.style.display = "none";
        if (this._userPassword.value === this._userPasswordRepeat.value){
            this._userPassword.style.color = 'green';
            this._userPasswordRepeat.style.color = 'green';
            let answer = "Uraaaaaaaaaaaaa";
            this._errorInfo.innerHTML = answer;
            this._errorInfo.style.display = "block";
            this._dataBase.addToDatabase(this._userName.value, this._userPassword.value);    
        } else {
            this._userPassword.style.color = 'red';
            this._userPasswordRepeat.style.color = 'red';
            this._errorInfo.style.color = 'red';
            this._errorInfo.innerHTML = 'not matching';
            this._errorInfo.style.display = "block";
        }
    }
    checkPassword = () => {
        if (this._userPassword.value.length >= 8){
            this.checkTwoPasswords();
        }else{
            let answer = "Password is too short";
            this._errorInfo.innerHTML = answer;
            this._errorInfo.style.display = "block";
        }      
    }
    checkUserName = () => {
        if (this._dataBase.serchUserNameInDataBase(this._userName.value)){
            this._errorInfo.innerHTML = "Wrong username";
            this._errorInfo.style.display = "block";
        }else{
            console.log("cicey");
            this.checkEmail();  
        }
    }  
};
export default SignUp;
