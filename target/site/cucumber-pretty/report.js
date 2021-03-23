$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login OrangeHRM page",
  "description": "",
  "id": "login-orangehrm-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-orangehrm-page;verify-invalid-login-for-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter \u003cusername\u003e into username text fields on login screen",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \u003cpassword\u003e into password text fields on login screen",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on login screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am invalid login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-orangehrm-page;verify-invalid-login-for-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "login-orangehrm-page;verify-invalid-login-for-multiple-users;;1"
    },
    {
      "cells": [
        "caglar@gmail.com",
        "test123"
      ],
      "line": 17,
      "id": "login-orangehrm-page;verify-invalid-login-for-multiple-users;;2"
    },
    {
      "cells": [
        "ahmetturk@hotmail.com",
        "abc+987"
      ],
      "line": 18,
      "id": "login-orangehrm-page;verify-invalid-login-for-multiple-users;;3"
    },
    {
      "cells": [
        "support@mibgate.com",
        "qwerty753/"
      ],
      "line": 19,
      "id": "login-orangehrm-page;verify-invalid-login-for-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11006011900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.verifyLoginPage()"
});
formatter.result({
  "duration": 491738299,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-orangehrm-page;verify-invalid-login-for-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter caglar@gmail.com into username text fields on login screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter test123 into password text fields on login screen",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on login screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "caglar@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "LoginPageSD.enterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 286150400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 217338400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.clickOnLoginBtn()"
});
formatter.result({
  "duration": 818046601,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyLoginErrorMessage()"
});
formatter.result({
  "duration": 41516200,
  "status": "passed"
});
formatter.after({
  "duration": 834034500,
  "status": "passed"
});
formatter.before({
  "duration": 6425257100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.verifyLoginPage()"
});
formatter.result({
  "duration": 7771100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-orangehrm-page;verify-invalid-login-for-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter ahmetturk@hotmail.com into username text fields on login screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter abc+987 into password text fields on login screen",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on login screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ahmetturk@hotmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 35
    }
  ],
  "location": "LoginPageSD.enterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 146920200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc+987",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 102564199,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.clickOnLoginBtn()"
});
formatter.result({
  "duration": 819972501,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyLoginErrorMessage()"
});
formatter.result({
  "duration": 40681100,
  "status": "passed"
});
formatter.after({
  "duration": 885796900,
  "status": "passed"
});
formatter.before({
  "duration": 6725423400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.verifyLoginPage()"
});
formatter.result({
  "duration": 11226000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-orangehrm-page;verify-invalid-login-for-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter support@mibgate.com into username text fields on login screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter qwerty753/ into password text fields on login screen",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on login screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "support@mibgate.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 33
    }
  ],
  "location": "LoginPageSD.enterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 189249700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty753/",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 24
    }
  ],
  "location": "LoginPageSD.enterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 132178600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.clickOnLoginBtn()"
});
formatter.result({
  "duration": 889705099,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyLoginErrorMessage()"
});
formatter.result({
  "duration": 47372199,
  "status": "passed"
});
formatter.after({
  "duration": 891254400,
  "status": "passed"
});
});