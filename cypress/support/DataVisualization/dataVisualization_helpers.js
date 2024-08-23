import SelectorsSignIn from "./selectors-signin";
import SelectorsSignup from "../SignUp/selectors-signup";
import { MailSlurp } from "mailslurp-client";

const select = new SelectorsSignIn();
const selector = new SelectorsSignup();

class DataVisualization {
    selectDate() {
        cy.get('dateSelector')
            .type('2024-08-23');
    }


    clickCSOReportAndSendToEmailAndValidate() {
        cy.get('CSOReportButtonSelector')
            .click()
            .should('be.visible');

        cy.get('SendCSOReportToEmailButtonSelector')
            .click();
        cy.get('SendCSOReportToEmailFieldSelector')
            .should('be.visible');

        cy.get('SendCSOReportToEmailFieldSelector')
            .type('ayyeka_kettle@gmail.com')
            .should('have.value', 'ayyeka_kettle@gmail.com');

        cy.get('SendToEmailButtonSelector')
            .click();
        cy.contains('Report sent successfully')
            .should('be.visible');

        cy.get('CloseCSOReportPopupButtonSelector')
            .click();
        cy.get('CSOReportPopupSelector')
            .should('not.exist');
    }
}

export default dataVisualization;
