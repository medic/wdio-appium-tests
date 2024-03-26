const { $ } = require('@wdio/globals')
const Page = require('./page');

class PeoplePage extends Page {
   
    get btnSearch() {
        return $('//*[@text="Performance"]');
    }

    get firstHouseholdKE () {
        return $('(//android.widget.TextView[@text="visits"])[1]');
    }

    get firstHousehold () {
        return $('(//android.view.View[@text="icon-family"])[1]');
    }

    get btnAdd () {
        return $('//android.widget.Button');
    }

    get textNewPerson () {
        return $('//*[@text="Add new Person"]');
    }

    get inputFirstName () {
        return $('//*[@text="First name"]//parent::android.view.View/android.widget.EditText');
    }

    get inputMiddletName () {
        return $('//*[@resource-id="contact-form"]/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText');
    }

    get inputLastName () {
        return $('//*[@text="Last name"]//parent::android.view.View/android.widget.EditText');
    }

    get radioMale () {
        return $('//*[@text="Male"]');
    }

    get radioFemale () {
        return $('//*[@text="Female"]');
    }

    get radioInterSex () {
        return $('//*[@text="Intersex"]');
    }

    get radioDobWithCalendar () {
        return $('//*[@text="With calendar (preferred)"]');
    }

    get radioDobWithAge () {
        return $('//*[@text="Date of birth with current age"]');
    }

    get inputDOB () {
        return $('//*[@text="Date of Birth"]//parent::android.view.View/android.widget.EditText');
    }

    get radioAgeYears () {
        return $('//*[@text="Age* Age in years"]');
    }

    get radioAgeMonths () {
        return $('//*[@text="0, Months* And how many months?"]');
    }

    get radioIsKenyanYes () {
        return $('//*[@text="Yes"]');
    }

    get radioIsKenyanNo () {
        return $('//*[@text="No"]');
    }

    get radioBornInKenyaYes () {
        return $('(//*[@text="Yes"])[2]');
    }

    get radioBornInKenyaNo () {
        return $('(//*[@text="No"])[2]');
    }

    get inputCounty () {
        return $('(//android.view.View[@text="..."])[1]');
    }

    get selectCounty () {
        return $('//android.widget.CheckedTextView[@text="BUSIA"]');
    }

    get inputSubCounty () {
        return $('(//android.view.View[@text="..."])[2]');
    }

    get selectSubCounty () {
        return $('//android.widget.CheckedTextView[@text="BUTULA"]');
    }

    get inputWard () {
        return $('//android.view.View[@text="..."]');
    }

    get selectWard () {
        return $('//android.widget.CheckedTextView[@text="KINGANDOLE"]');
    }

    get inputVillage () {
        return $('//*[@text="Village"]//parent::android.view.View/android.widget.EditText');
    }

    get radioIdentificationBirthCert () {
        return $('//*[@text="Birth Certificate"]');
    }

    get radioIdentificationNone () {
        return $('//*[@text="None"]');
    }

    get inputBirthCertNumber () {
        return $('(//*[@text="Birth Certificate"])[2]//parent::android.view.View/android.widget.EditText');
    }

    get inputNextOfKin () {
        return $('//*[contains(@text="next of kin")]//parent::android.view.View/android.widget.EditText');
    }

    get radioNextOfKinRelationship () {
        return $('//*[@text="Mother"]');
    }

    get inputAddress () {
        return $('//*[contains(@text="Physical address")]//parent::android.view.View/android.widget.EditText');
    }

    get inputPrimaryMobile () {
        return $('//*[contains(@text="primary mobile number")]//parent::android.view.View/android.widget.EditText');
    }

    get inputSecondaryMobile () {
        return $('//*[contains(@text="secondary mobile number")]//parent::android.view.View/android.widget.EditText');
    }

    get inputEmail () {
        return $('//*[contains(@text="Email address")]//parent::android.view.View/android.widget.EditText');
    }

    get radioHouseholdRelationship () {
        return $('//android.widget.RadioButton[@text="Child"]');
    }

    get radioDisabilityNo () {
        return $('(//android.widget.RadioButton[@text="No"])[1]');
    }

    get radioIllnessNo () {
        return $('(//android.widget.RadioButton[@text="No"])[2]');
    }

    get btnSubmit () {
        return $('//*[@text="Submit"]');
    }

    get householdPerson () {
        return $('//*[contains(@text, "years")]');
    }

    get iconBack () {
        return $('//*[@text="Back"]');
    }

    get textCHVArea () {
        return $('//*[contains(@text, "CHV")]');
    }

    async createPerson (firstName, middleName, lastName, ageYears, ageMonths) {
        await super.tabPeople.waitForDisplayed();
        await super.toggleAirplaneMode('on');
        await super.tabPeople.click();
        await this.clickDisplayedElem(this.firstHousehold);
        await this.btnAdd.click();
        await this.textNewPerson.click()
        await this.inputFirstName.setValue(firstName);
        await this.inputMiddleName.setValue(middleName);
        await this.inputLastName.setValue(lastName);
        await this.radioMale.click();
        
        await super.scrollView;
        await (await this.inputDOB).setValue('1988-02-20');

        await super.scrollView;
        await this.radioIsKenyanYes.click();
        await this.radioBornInKenyaYes.click();
        await this.inputCounty.click();
        await super.clickDisplayedElem(this.selectCounty);
        await this.inputSubCounty.click();
        await super.clickDisplayedElem(this.selectSubCounty);
        await this.inputWard.click();
        await super.clickDisplayedElem(this.selectWard);
        await this.inputVillage.setValue("Village");
        await browser.pause(5000);

        await this.radioIdentificationBirthCert.click();
        await this.inputBirthCertNumber.setValue("123456");
        await this.inputNextOfKin.setValue(`${lastName} ${middleName}`);
        await this.radioNextOfKinRelationship.click();

        await this.inputAddress.setValue('312 Glendale Mews E34T65');
        await this.inputPrimaryMobile.setValue('0775588331');
        await this.inputSecondaryMobile.setValue('0775588332');
        await this.inputEmail.setValue(`${firstName}@gmail.com`);
        await this.radioHouseholdRelationship.click();
        await this.radioDisabilityNo.click();
        await this.radioIllnessNo.click();
        await browser.pause(10000);
        await this.btnSubmit.click();
    }
    
    async viewPerson () {
        await super.tabPeople.waitForDisplayed();
        await super.toggleAirplaneMode('on');
        await super.tabPeople.click();
        await super.clickDisplayedElem(this.firstHousehold);
        await this.householdPerson.click();
        await this.iconBack.click();
        await this.firstHousehold.waitForDisplayed();
    }

    async viewCHPArea () {
        await super.clickDisplayedElem(super.tabPeople);
        await super.clickDisplayedElem(this.textCHVArea);
        await browser.pause(2000);
        await this.iconBack.click();
        await this.textCHVArea.waitForDisplayed();
    }
}

module.exports = new PeoplePage();
