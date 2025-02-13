Feature: Metaltix tours

  Scenario: Check the top list of tours
    Given I am on home page
    When I see in headline "Special Camping - Wacken Open Air 2025"
    Then I see a list of tours