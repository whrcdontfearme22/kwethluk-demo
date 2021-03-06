// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 7;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 50;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
// Zoomlevel lower = zoomed out
var followZoomLevel = 9;
var followBearing = -47.20;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/whrcdontfearme22/ck8erfzss192g1ioj8qn1ctae',
    // style: 'mapbox://styles/mapbox/satellite-v8',
    // style: 'mapbox://styles/mapbox/outdoors-v10',
    accessToken: 'pk.eyJ1Ijoid2hyY2RvbnRmZWFybWUyMiIsImEiOiJjazcwbGI1cmcxaWo0M2xxYTN3bGVrZXR3In0.UAZg4aQz_P2p4XChAQU2Ig',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Woods Hole Research Center. Science on the Fly. Made by Carl Churchill.',
    chapters: [
        {
            id: 'slide-0',
            title: 'The Kwethluk River',
            image: './images/logo/ScienceontheFly_LogoLockup_White-01.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
              //test location for marker
              //center: [-160.37655, 59.86588],
              //zoom: followZoomLevel,
              //pitch: followPitch,
              //bearing: followBearing
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                // location information is from the drive route
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },

        // You can add a normal slide in the middle of the drive slides to take a break
        //{
        //    id: 'slide-4',
        //    title: 'Normal Slide',
        //    image: './path/to/image/source.png',
        //    description: 'Copy these sections to add to your story.',
        //    location: {
        //    },
        //    onChapterEnter: [],
        //    onChapterExit: []
        //},
        {
            id: 'drive-slide-5',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
