import './style.less';

    class View {
    constructor() {
        this._userName = null;
        this._dataBase = null;
        this._userPassword = null;
        this._signInButton = null;
        this._signUpButton = null;
        this._signInForm = null;
        this._signUpForm = null;
        this._userPasswordRepeat = null;
        this._errorInfo = null;
        this._email = null;

        this.createButtons();
    }
    createButtons = () => {
        let div = document.createElement("div");
        div.className = "Buttons";
        document.body.append(div);
        this._signUpButton = document.createElement("button");
        this._signUpButton.innerHTML = "SignUp";
        this._signUpButton.className = ("signUp");
        let signUpButton = this._signUpButton;
        this._signInButton = document.createElement("button");
        this._signInButton.innerHTML = "SignIn";
        this._signInButton.className = ("signIn");
        let signInButton = this._signInButton;
        div.append(signUpButton);
        div.append(signInButton);
        this.createSignInWindow();
        this._signUpButton.addEventListener('click', this.createSignUpWindow, {once: true});
        //this._signUpButton.addEventListener('click', document.getElementById('modal-page-signup').style.display='block');
    };

    createSignInWindow = () => {

        let div = document.createElement("div");
        div.className = ("signin-page");
        document.body.append(div);

        let form = document.createElement("form");
        form.className = ("signin-window");
        div.append(form);

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
        this.createDatabase();

        signInButton.addEventListener('click', this.checkInDatabase);
        //document.querySelectorAll('signin-page').style.display ='block';

    }

    showPassword = () => {
        let x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    createDatabase = () => {
        this._dataBase = [
            {
                username: "shamil",
                password: "12345678"
            },
            {
                username: "vika",
                password: "123"
            },
            {
                username: "ali",
                password: "12345678"
            }
        ];
    }

    checkInDatabase = event =>{
        console.log(this._userName.value);
        console.log(this._userPassword.value);
        console.log(this._dataBase);
        event.preventDefault();
        if(this.checkInput(this._userName.value) === false || this.checkInput(this._userPassword.value) === false){
            let answer = "No info";
            this._errorInfo.innerHTML = answer;
            this._errorInfo.style.display = "block";
        }else if (this.searchInDatabase()){
            console.log("cicey");//запуск др окна
            this._errorInfo.style.display = "none";
        }else{
            this._errorInfo.innerHTML = "Wrong username or password";
            this._errorInfo.style.display = "block";
        }
    }

    searchInDatabase = () =>{
        let nameInput = this._userName.value;
        let passwordInput = this._userPassword.value;
        console.log(nameInput);
        console.log(passwordInput);

        return this._dataBase.find(
            item => item.username === nameInput && item.password === passwordInput
        );
    }

    createSignUpWindow = () => {

        this._signInForm.remove();

        let div = document.createElement("div");
        div.className = ("signin-page");
        document.body.append(div);

        let form = document.createElement("form");
        form.className = ("signin-window");
        div.append(form);

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
        this._signUpForm.style.display = 'block';

        this._userName = document.querySelector(".input-name-reg");
        this._userPassword = document.querySelector(".input-password-reg");
        this._userPasswordRepeat = document.querySelector(".input-password-repeat");
        this._email = document.querySelector(".input-email");

        signUpButton.addEventListener('click', this.checkNewInfo);
    }
    checkInput = (inputString) => {
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
        //console.log("uuu");
        console.log(this._userName.value);
        console.log(this._userPassword.value);
        console.log(this._userPasswordRepeat.value);
        console.log(this._email.value);
        if(this.checkInput(this._userName.value) === false || this.checkInput(this._userPassword.value) === false || this.checkInput(this._userPasswordRepeat.value) === false || this.checkInput(this._email.value) === false){
            let answer = "No info";
            this._errorInfo.innerHTML = answer;
            this._errorInfo.style.display = "block";
        }else{
            this.checkPassword();
        }
    }
    checkTwoPasswords = () =>{
        console.log(this._userPassword.value);
        console.log(this._userPasswordRepeat.value);
        this._errorInfo.style.display = "none";
        if (this._userPassword.value === this._userPasswordRepeat.value){
            this._userPassword.style.color = 'green';
            this._userPasswordRepeat.style.color = 'green';
            this.checkUserName();
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

            return true;
        }else{
            let answer = "Password is too short";
            this._errorInfo.innerHTML = answer;
            this._errorInfo.style.display = "block";

            return false;
        }
    }
    checkEmail = () => {
        if (this.validateEmail()){
            this.addToDatabase();
            this._signUpForm.remove();
            this.createSignInWindow();
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

    checkUserName = () => {
        if (this.serchUserNameInDataBase()){
            this._errorInfo.innerHTML = "Wrong username";
            this._errorInfo.style.display = "block";

        }else{
            console.log("cicey");
            let answer = "Uraaaaaaaaaaaaa";
            this._errorInfo.innerHTML = answer;
            this._errorInfo.style.display = "block";
            this.checkEmail();
        }
    }
    serchUserNameInDataBase = () => {
        let nameInput = this._userName.value;
        console.log(nameInput);

        return this._dataBase.find(
            item => item.username === nameInput
        );
    }
    addToDatabase = () => {

        let newObj = {username: this._userName.value, password: this._userPassword.value};
        this._dataBase.push(newObj);
        console.log(this._dataBase);

    }
}
new View();