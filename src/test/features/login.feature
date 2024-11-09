Feature: User Authentication tests

  Background:
    Given User navigates to the application

  Scenario: Login should be success
    And User enter the username as "nammatn24@gmail.com"
    And User enter the password as "Qwerty@0930"
    When User click on the login button
    