Feature: 01__mentoring

    @mentoring 
    Scenario: C001: Mentee request session
        Given User visit dealls mentoring page 
        When User search and select a mentor
        And User requesting for session
        Then User success request mentoring session