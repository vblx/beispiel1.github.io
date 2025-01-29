function toggleSection(sectionId) {
	const content = document.getElementById(sectionId + '-content');
	content.classList.toggle('hidden');
	const arrow = document.querySelector(`svg[data-section="${sectionId}"]`);
	if (arrow) {
		arrow.classList.toggle('rotate-180');
	}
}
