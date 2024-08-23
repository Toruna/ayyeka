import SignInFunctionality from "../support/SignIn/signin-helpers";
import { Constants } from "../support/Methods/constants";
import Validators from "../support/Methods/validators";
import DataVisualization from "../support/DataVisualization/dataVisualization_helpers";


describe('verify data visualization functionality', () => {
    const signIn = new SignInFunctionality();
    const validator = new Validators();
    const data = new DataVisualization();
    const randomEmail = Constants.randomEmail();
    const randomPassword = Constants.randStr();



    beforeEach('verify data visualization functionality', () => {
        cy.visit('/login');
        signIn.login(randomEmail, randomPassword);
    });

    it('verify that all tabs are visible', () => {
        validator.validateDashboardTabIsVisible();
        validator.validateBasinsTabIsVisible();
        validator. validateSettingsTabIsVisible();
    });

    it('verify that all buttons are clickable', () => {
        validator.validateCSOReportButtonIsClickable();
        validator.validateRainGaugeButtonIsClickable();
        validator.validateDateButtonIsClickable();
    });

    it('verify that user can select date', () => {
        data.selectDate();
        validator.validateSelectedDate('2024-08-23')
    });

    it('verify that dashboard graph is visible', () => {
        validator.validateDashboardGraphIsVisible();
    });

    it('verify that user is able to send email', () => {
        data.clickCSOReportAndSendToEmailAndValidate();
    });
});