const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
  
    get inputUsername () {
        return $('//android.view.View[1]/android.widget.EditText');
    }

    get inputPassword () {
        return $('//android.view.View[3]/android.widget.EditText');
    }

    get btnLogin () {
        return $('//*[@text="Login"]');
    }

    async login (username, password) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
