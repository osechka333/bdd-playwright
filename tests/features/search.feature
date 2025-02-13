Feature: Metaltix search

  Scenario: Search for artist
    Given I am on home page
    When I search for "AC/DC"
    And I click on the search page button
    Then I am redirect to the page with tickets "AC/DC"