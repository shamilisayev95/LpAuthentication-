import './style.less';

class View {
    constructor() {
        this._userLogin = null;
        this._userPassword = null;
        this._signInButton = null;
        this._signUpButton = null;
        this.init();
    }
    init = () => {
        this._signUpButton = document.createElement("div");
        this._userLogin = document.createElement("div");
        this._userPassword = document.createElement("div");
        this._signInButton = document.createElement("div");
        this._signInButton.addEventListener('click', this.);
        this._signUpButton.addEventListener('click', this.);
    };
};