$(document).ready(function() {
    $('.popup-vimeo').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?h=a96de50b7e&autoplay=1'
                }
            }
        },
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});
