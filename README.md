# Feed Reader Testing

This website is for the Front-End Web Developer nanodegree project where we have test the RSS Feeds by using Jasmine,
which is a Javascript testing framework. The goal is to have all the test cases to pass without any kind of failures.

## Running the program

Download or clone this repository and run `index.html`.

## Tests Cases
These test cases are all in `jasmine/spec/feedreader.js`.
 
- `RSS Feeds`
    - __'are defined'__
        - Tests to see if all the `allFeeds` variable is defined.
    - __'Valid define URLs'__
        - Will check each feed whether the URLs are valid or not.
    - __'Valid defined names'__
        - Will check each feed whether the names are empty or not.
- `The menu`
    - __'Hidden by default'__
        - Will test if the menu element is hidden by default by checking the `menu-hidden` class.
    - __'Menu icon visibility changes from being clicked'__
        - Checks that the menu icon changes its visibility when you click on it.
- `Initial Entries`
    - __'Have at least a single entry'__
        - Will check if there is a single entry in `.feed` class.
- `New Feed Selection`
    - __'Content change'__
        - Will use loadFeed to complete the process of after the changes have been made to the content.
        
## Resources
- [Udacity - JavaScript Testing](https://www.udacity.com/course/javascript-testing--ud549)
- [Jasmine Tutorial on Github](http://jasmine.github.io/2.0/introduction.html)
- [JavaScript Testing With Jasmine Video Tutorials](https://www.youtube.com/watch?v=Kfkmzd64hNQ&list=PLOxOmO43E6Jt0SruKGxtZs-W3PJN90G_a&index=2)
- [Unit Testing Javascript with Jasmine](https://www.youtube.com/watch?v=uWFDqecjWLg)
- [Testing Your JavaScript with Jasmine](http://code.tutsplus.com/tutorials/testing-your-javascript-with-jasmine--net-21229)
- Stack Overflow