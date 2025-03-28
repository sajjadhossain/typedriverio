Feature: Test WebDriverIO Features with Serenity

    Scenario: Navigate to a URL
        Given Sajjad navigates to "learning.amplify.com/home/"
        When they choose to login with Amplify
        And they fill in "username" with "t.jericson@example.com"
        And they fill in "password" with "login2000"
        And they press "kc-login"
        Then they should see "Welcoaame, Educator Jacob!"