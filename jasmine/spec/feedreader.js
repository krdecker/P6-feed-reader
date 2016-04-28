/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in the application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Our second test: loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('all have URLs ', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* Our third test: loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('all have names ', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* A second test suite concerned with the sliding menu and the
       handling of the click events on the menu icon. */
    describe('The Menu', function() {
        /* Firstly, a test that ensures the menu element is
         * hidden by default.  Based on analysis of our predecessor's
         * HTML and CSS, determined that we are performing the
         * hiding/showing of the menu element by use of a class
         * attribute called 'menu-hidden' applied to the <body> element
         * of the document.
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         // Secondly, a test that ensures the menu changes
         // * visibility via clicks on the menu icon. This test
         // * has two expectations: the menu slides into view when
         // * icon is clicked and it hides when icon is clicked again.

        it('toggles display when icon is clicked', function() {
            // simulate user clicking mouse on icon
            $('.menu-icon-link').click();
            // menu should not be hidden now
            expect($('body').hasClass('menu-hidden')).toBe(false);
            // wait a second (just because I want to see the
            // menu slide in) then click it again
            // and menu should be hidden
            setTimeout( function(){
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
            }, 1000);
        });
    });



    /* Third test suite concerned with the initial state of the feed display
     * and whether it indeed has any entries.
     */
    describe('Initial Entries', function () {
        beforeEach(function(done) {
                loadFeed(0, done);
        });

        /* Test to ensure when the loadFeed function is called and completes its work
         * there is at least a single .entry element within the .feed container.
         * As loadFeed() is asynchronous, this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('are at least one', function () {
            // grab the array of entries and check the lengthdx
            expect($('.feed > .entry-link > .entry').length).toBeGreaterThan(0);
        });
    });

    /* Fourth test suite concerned with switching to new feed */
    describe('New Feed Selection', function () {
        var oldLink = "";
        // store first link in list, then change feed
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldLink = $('.feed > .entry-link').attr("href");
                loadFeed(1,done);
            });
        });

        /* Test that when a new feed is loaded by the loadFeed function
         * the content actually changes.
         * As above, loadFeed() is asynchronous, so we wait for the done
         * function to return.
         */
        // test if the link has changed
        it('changes content', function (){
            expect($('.feed > .entry-link').attr("href")).not.toBe(oldLink);
        });

        // reset to initial state
        setTimeout(function(){
            loadFeed(0);
        }, 3000);
    });
}());
