document.addEventListener('DOMContentLoaded', () => {
    
    const panels = document.querySelectorAll('.slide-panel');

    if (panels.length > 0) {
        panels[0].classList.add('is-active');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                    panels.forEach(panel => panel.classList.remove('is-active'));
                    entry.target.classList.add('is-active');
                }
            });
        }, {
            threshold: 0.6
        });

        panels.forEach(panel => {
            observer.observe(panel);
        });
    }
});
