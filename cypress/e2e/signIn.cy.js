import SignInFunctionality from "../support/SignIn/signin-helpers";
import { Constants } from "../support/Methods/constants";
import Validators from "../support/Methods/validators";
import SignUpFunctionality from "../support/SignUp/signup_helpers";

describe('verify sign In functionality', () => {
    const signUp = new SignUpFunctionality();
    const signIn = new SignInFunctionality();
    const validator = new Validators();
    const randomEmail = Constants.randomEmail();
    const randomString = Constants.randStr();

    beforeEach('verify sign In functionality', () => {
        cy.visit('/login');
    });

    it('verify sign In functionality with valid data', () => {
        signIn.fillEmailAddress(Constants.USER.EMAIL);
        signIn.fillPassword(Constants.USER.PASSWORD);
        signIn.clickOnLoginButton();
        validator.validateLoggedUserName(Constants.USER.NAME);
        signIn.logout();
        validator.validateUrl('/login');
    });

    it('verify sign In functionality with invalid email', () => {
        signIn.fillEmailAddress(Constants.USER.EMAIL.slice(0, 8));
        signIn.fillPassword(Constants.USER.PASSWORD);
        signIn.clickOnLoginButton();
        validator.toShowValidationMessage('[data-qa="login-email"]', Constants.MESSAGE[3]);
    });

    it('verify sign In functionality with invalid password', () => {
        signIn.fillEmailAddress(Constants.USER.EMAIL);
        signIn.fillPassword(Constants.USER.PASSWORD.slice(0, 2));
        signIn.clickOnLoginButton();
        validator.validateErrorMessage('login', Constants.MESSAGE[2]);
    });

    it('verify validation messages', () => {
        ['login-email', 'login-password'].forEach((field) => {
            signIn.clickOnLoginButton();
            validator.toShowValidationMessage(`[data-qa="${field}"]`, Constants.MESSAGE[0]);
            signUp.fillFields(field, randomString, randomEmail);
        });
    });

    it('verify user logout', () => {
        //verify login via api
        signIn.createUserViaApi();
        signIn.loginViaApi(Constants.USER.EMAIL, Constants.USER.PASSWORD);
        signIn.login(Constants.USER.EMAIL, Constants.USER.PASSWORD);
        signIn.logout();
        validator.validateUrl('/login');
    });
});
