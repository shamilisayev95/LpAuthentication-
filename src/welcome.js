class Welcome {
        constructor(userName) {

            this._userName = userName;
            this._root = null;        

        }
        createWelcomeWindow = () => {
            this._root = document.getElementById("root");
            
            let divWelcome = document.createElement("div");
            divWelcome .className = ("welcome");
            this._root.append(divWelcome);
            
            let form = document.createElement("form");
            form.className = ("welcome-form");
            divWelcome.append(form);
        
            let welcome = document.createElement("span");
            welcome.className = ("form-section");
            welcome.innerHTML = this._userName + ", welcome to our community!"
            form.append(welcome);
            this.createSignOutButton();
        }
        createSignOutButton = () => {
            let buttonSection = document.createElement("div");
            buttonSection.className = "signout-button-section";
            this._root.append(buttonSection);
            let signOut = document.createElement("button");
            signOut.innerHTML = "SignOut";
            signOut.className = ("sign-out");
            buttonSection.append(signOut);
            this._signUpButton.addEventListener('click', this.getSignIpWindow);
        }
}

export default Welcome;
