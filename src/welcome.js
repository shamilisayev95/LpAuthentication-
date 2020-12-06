import './style.less';
import Index from "./index";
import SignIn from "./signIn";
class Welcome {
        constructor(userName, dataBase) {
            this._userName = userName;
            this._dataBase = dataBase;
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
        
            let welcome = document.createElement("p");
            welcome.className = ("welcome-text");
            welcome.innerHTML = this._userName + ", welcome to our community!"
            form.append(welcome);
            this.createSignOutButton();
            this.createEffects();
        }
        createSignOutButton = () => {
            let buttonSection = document.createElement("div");
            buttonSection.className = "signout-button-section";
            this._root.append(buttonSection);
            let signOut = document.createElement("button");
            signOut.innerHTML = "SignOut";
            signOut.className = ("sign-out");
            buttonSection.append(signOut);
            signOut.addEventListener('click', this.goToSignInWindow);
        }
        goToSignInWindow = () => {
            let newPage = new Index();
            let root = document.getElementById("root");
            root.remove();
            newPage.createNewRoot();
            newPage.createButtons();
            let modalPage = new SignIn(this._dataBase);
            modalPage.createSignInWindow();    
        }
        createEffects = () => {
            let wrapper = document.querySelector(".welcome-form");
            let text = document.querySelector(".welcome-text");
            let textCont = text.textContent;
            text.style.display = "none";
            for (let i = 0; i < textCont.length; i++) {
                (function(i) {
                    setTimeout(function() {
                        var texts = document.createTextNode(textCont[i])
                        var span = document.createElement('span');
                        span.appendChild(texts);
                        span.classList.add("wave");
                        wrapper.appendChild(span);
                    }, 75 * i);
                }(i));
            }
        }
}

export default Welcome;
