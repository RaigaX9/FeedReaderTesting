/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This will loop through each feed in the 'allFeeds' object as well as
         * determine whether or not the URL is valid or not.
         */
        it('Valid define URLs', function() {
            allFeeds.forEach(function(x) {
                expect(x.url).toBeDefined();
                expect(x.url.length).toBeGreaterThan(1);
            });
        });

        /* This is similar to the one above where it loops each feed in the 'allFeeds' objects,
         * but checks whether the name is empty or not.
         */
        it('Valid defined names', function() {
            allFeeds.forEach(function(x) {
                expect(x.name).toBeDefined();
                expect(x.name.length).toBeGreaterThan(1);
            });
        });
    });

    //Calling test suite for 'The menu'
    describe('The menu', function() {
        var body = $('body');
        var menuicon = $('.menu-icon-link');
        /* This will test if the menu element is hidden by default by checking
         * the 'menu-hidden' class.
         */
        it('Hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /* Checks that the menu icon changes its visibility when you
         * click on it.
         */
        it('Menu icon visibility changes from being clicked', function() {
            menuicon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuicon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    //Calling test suite for 'Initial Entries'
    describe('Initial Entries', function() {
        /* This will call 'loadFeed()' where if there is at least a single '.entry' in '.feed',
        *  it will complete the process.
        *  */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('Have at least a single entry', function(done) {
            var entry = $('.feed').find('.entry');
            expect(entry.length >= 1).toBe(true);
            done();
        });
    });

    //Calling test suite 'New Feed Selection'
    describe('New Feed Selection', function() {
        //Initializing pre and post variables for setting the contents of the feed
        var pre;
        var post;

        /* This will use 'loadFeed' again so that it will ensure the necessary features
         * and changes are completed.
         */
        beforeEach(function(done) {

            //Test at least two feeds
            expect(allFeeds.length >= 2).toBe(true);

            // Loading the feed at 0
            loadFeed(0, function() {
                /* Sets for before in the feed */
                pre = $('.header-title').text() + $('.feed').find('.entry').text().replace(/ +/g, " ");
                /* Load second feed at index 1 */
                loadFeed(1, function() {
                    /* Sets for after in the feed */
                    post = $('.header-title').text() + $('.feed').find('.entry').text().replace(/ +/g, " ");
                    done();
                });
            });
        });

        /* After the new feed is created, it will now complete its process
        *  where 'loadFeed' will show what contents have been changed.
        */
        it('Content change', function(done) {
            expect(pre != post).toBe(true);
            done();
        });
    });
}());
