// Replace entire content of leistungen.js with:
$(document).ready(function(){
  const $dropdown = $('.dropdown');
  const $dropdownToggle = $('.dropdown-toggle');

  // Close on page click
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.dropdown').length) {
      $dropdown.removeClass('open');
    }
  });

  // Toggle on dropdown click
  $dropdownToggle.on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $dropdown.toggleClass('open');
  });

  // Close on navbar items
  $('.nav-link').not($dropdownToggle).on('click', function() {
    $dropdown.removeClass('open');
  });

  // Update scrollAndOpen to close dropdown
  window.scrollAndOpen = function(sectionId, event) {
    event.preventDefault();
    const section = document.querySelector('.leistungen-section');
    section.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => toggleSection(sectionId), 500);
    $dropdown.removeClass('open');
  }
});



//// graveyard below



// document.addEventListener("DOMContentLoaded", function () {
// 	// Handle scroll and section opening
//     function scrollAndOpen(sectionId, event) {
//         event.preventDefault();
//         const section = document.querySelector('.leistungen-section');
//         section.scrollIntoView({ behavior: 'smooth' });
//         setTimeout(() => toggleSection(sectionId), 500);
//     }

//     window.scrollAndOpen = scrollAndOpen;
// });

// $(document).ready(function(){
// 	// Initialize dropdown
// 	$('.dropdown-toggle').dropdown();

// 	window.scrollAndOpen = function(sectionId, event) {
// 		event.preventDefault();
// 		const section = document.querySelector('.leistungen-section');
// 		section.scrollIntoView({ behavior: 'smooth' });
// 		setTimeout(() => toggleSection(sectionId), 500);

// 		// Close dropdown after clicking menu item
// 		$('.dropdown-toggle').dropdown('toggle');
// 	}
// });







// $(document).ready(function(){
//  const $dropdown = $('.dropdown-toggle');

//  // Close on page load
//  $('.dropdown-menu').hide();

//  // Toggle on "Leistungen" click
//  $dropdown.click(function(e){
//    e.preventDefault();
//    $(this).parent().toggleClass('open');
//  });

//  // Close on navbar items click
//  $('.nav-link').not($dropdown).click(function(){
//    $('.dropdown').removeClass('open');
//  });

//  // Keep original scrollAndOpen
//  window.scrollAndOpen = function(sectionId, event) {
//    event.preventDefault();
//    const section = document.querySelector('.leistungen-section');
//    section.scrollIntoView({ behavior: 'smooth' });
//    setTimeout(() => toggleSection(sectionId), 500);
//  }
// });



// $(document).ready(function(){
//   const $dropdown = $('.dropdown');
//   const $dropdownToggle = $('.dropdown-toggle');

//   $dropdownToggle.click(function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     $dropdown.toggleClass('open');
//   });

//   $('.nav-link').not($dropdownToggle).click(function(){
//     $dropdown.removeClass('open');
//   });

//   window.scrollAndOpen = function(sectionId, event) {
//     event.preventDefault();
//     const section = document.querySelector('.leistungen-section');
//     section.scrollIntoView({ behavior: 'smooth' });
//     setTimeout(() => toggleSection(sectionId), 500);
//     $dropdown.removeClass('open');
//   }
// });







// $(document).ready(function(){
//  const $dropdown = $('.dropdown');
//  const $dropdownToggle = $('.dropdown-toggle');

//  $dropdownToggle.click(function(e){
//    e.preventDefault();
//    e.stopPropagation();
//    $dropdown.toggleClass('open');
//  });

//  $('.nav-link').not($dropdownToggle).click(function(){
//    $dropdown.removeClass('open');
//  });

//  window.scrollAndOpen = function(sectionId, event) {
//    event.preventDefault();
//    const section = document.querySelector('.leistungen-section');
//    section.scrollIntoView({ behavior: 'smooth' });
//    setTimeout(() => toggleSection(sectionId), 500);
//    $dropdown.removeClass('open');
//  }
// });




// $(document).ready(function(){
//  const $dropdown = $('.dropdown');
//  const $dropdownToggle = $('.dropdown-toggle');

//  $dropdownToggle.click(function(e){
//    e.preventDefault();
//    e.stopPropagation();
//    $dropdown.toggleClass('open');
//  });

//  $('.nav-link').not($dropdownToggle).click(function(){
//    $dropdown.removeClass('open');
//  });

//  window.scrollAndOpen = function(sectionId, event) {
//    event.preventDefault();
//    const section = document.querySelector('.leistungen-section');
//    section.scrollIntoView({ behavior: 'smooth' });
//    setTimeout(() => toggleSection(sectionId), 500);
//    $dropdown.removeClass('open');
//  }
// });
