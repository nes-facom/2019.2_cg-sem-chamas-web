const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://localhost:9000',
       options : {
       'sonar.sources': '.',
       'sonar.inclusions' : 'frontend-app/src/**, frontend-web/src/**, back-end/app/**' // Entry point of your code
       }
     }, () => {});