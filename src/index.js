import Data from './data';
import SignIn from './signIn';
import SignUp from './signUp';

class Index {
    constructor () {
        this._modalPage = null;
        this._signInButton = null;
        this._signUpButton = null;
        this._root = document.getElementById("root");
        this._dataBase = new Data();

        this.getSignInWindow();
    }
    createButtons = () => {
        let buttonsSection = document.createElement("div");
        buttonsSection.className = "Buttons";
        this._root.append(buttonsSection);
        this._signUpButton = document.createElement("button");
        this._signUpButton.innerHTML = "SignUp";
        this._signUpButton.className = ("signUp");
        this._signInButton = document.createElement("button");
        this._signInButton.innerHTML = "SignIn";
        this._signInButton.className = ("signIn");
        buttonsSection.append(this._signUpButton);
        buttonsSection.append(this._signInButton);
        this._signUpButton.addEventListener('click', this.getSignUpWindow);
        this._signInButton.addEventListener('click', this.getSignInWindow);
    };
    createNewRoot = () => {
        let newRoot = document.createElement("div");
        newRoot.id = ("root");
        document.body.append(newRoot);
        this._root = newRoot;
    }
    getSignInWindow = () => {
        let root = document.getElementById("root");
        root.remove();
        this.createNewRoot();
        this.createButtons();
        this._modalPage = new SignIn(this._dataBase);
        this._modalPage.createSignInWindow();
    }
    getSignUpWindow = () => {
        let root = document.getElementById("root");
        root.remove();
        this.createNewRoot();
        this.createButtons();
        this._modalPage = new SignUp(this._dataBase);
        this._modalPage.createSignUpWindow();
    }
}

new Index();

export default Index