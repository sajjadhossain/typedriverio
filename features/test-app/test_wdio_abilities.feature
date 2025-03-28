Feature: Test WebDriverIO Features with Serenity

    Scenario: Navigate to a URL

        Given Sajjad navigates to "https://sajjad.nyc/"
        When they press "play"
        Then they should hear the song playing