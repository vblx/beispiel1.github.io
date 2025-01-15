$(document).ready(function() {
    $('.nav a').on('click', function() {
        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    function scrollAndOpen(sectionId, event) {
        event.preventDefault();
        $('.dropdown').removeClass('open');
        $('.navbar-collapse').collapse('hide');

        const section = document.querySelector('.leistungen-section');
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => toggleSection(sectionId), 500);
    }

    window.scrollAndOpen = scrollAndOpen;
});
