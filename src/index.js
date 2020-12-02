
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
        errorInfo.innerHTML = "Wrong username or password";
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
        event.preventDefault();
        if (this.searchInDatabase()){
            console.log("cicey");//запуск др окна
            this._errorInfo.style.display = "none";
        }else{
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
        inputPassword.className = ("input-password");
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
        signUpButton.innerHTML = "SignIn";
        signUpButton.className = ("signin-modal");
        divFormSection.append(signUpButton);

        this._signUpForm = divFormSection;
        this._signUpForm.style.display = 'block';
         
        this._userName = document.querySelector(".input-name");
        this._userPassword = document.querySelector(".input-password");
        this._userPasswordRepeat = document.querySelector(".input-password-repeat");
        //this.createNewDatabase();
        
        //signInButton.addEventListener('click', );
        
    }
};
new View();