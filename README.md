# Project Overview

In this project, I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we were left with an application with an incomplete test suite. That's where I came in.

### To see this app in operation, download or clone the repo and then seek out the file: P6-feedreader/index.html in the browser.

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether we work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What did I learn?

I learned how to use Jasmine to write a number of tests against a pre-existing application. These test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give us the ability to quickly analyze whether new code breaks an existing feature within our codebase, without having to manually test all of the functionality.


## How did I complete this project?

1. Downloaded the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. Reviewed the functionality of the application in browser.
3. Explored the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works.
4. Explored the Jasmine spec file in *./jasmine/spec/feedreader.js*

### "All Feeds" suite:
5. Edited the allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in the application.
6. Returned the allFeeds variable to a passing state.
7. Wrote a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
8. Wrote a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

### "The Menu" suite:
9. Wrote a new test suite named "The menu".
10. Wrote a test that ensures the menu element is hidden by default. I had to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
11. Wrote a test that ensures the menu changes visibility when the menu icon is clicked. This test should has two expectations: does the menu display when clicked and does it hide when clicked again.

### "Initial Entries" suite:
12. Wrote a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test requires the use of Jasmine's beforeEach and asynchronous done() function.

### "New Feed Selection" suite:
13. Wrote a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. As above, loadFeed() is asynchronous.


#### When completed - all of my tests passed.

consulted:
<https://lostechies.com/derickbailey/2012/08/18/jasmine-async-making-asynchronous-testing-with-jasmine-suck-less/>

<http://www.htmlgoodies.com/beyond/javascript/stips/using-jasmine-2.0s-new-done-function-to-test-asynchronous-processes.html>

<http://blogs.lessthandot.com/index.php/webdev/uidevelopment/javascript/testing-asynchronous-javascript-w-jasmine/>

<http://www.html5rocks.com/en/tutorials/es6/promises/>

<https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md>

and of course:
<https://github.com/jasmine/jasmine>
