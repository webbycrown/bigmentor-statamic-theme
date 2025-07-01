document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'load-more-btn') {
        e.preventDefault();
        const button = e.target;
        const nextPageUrl = button.getAttribute('data-next-page');
        const caseStudiesList = document.querySelector('#case-studies-list');

        const appEnv = document.querySelector('meta[name="app-env"]')?.getAttribute('content');
        if (appEnv === 'production') {
            if (nextPageUrl && nextPageUrl.startsWith("http:")) {
                nextPageUrl = nextPageUrl.replace(/^http:/, "https:");
            }
        }

        // Store original button content
        const originalContent = button.innerHTML;

        // Show loader state
        button.innerHTML = '<span class="loader mr-2"></span> Loading...';
        button.disabled = true;

        fetch(nextPageUrl, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                const newEntries = doc.querySelectorAll('#case-studies-list > *');

                newEntries.forEach(entry => {
                    // Add Tailwind transition + transform + opacity utilities
                    entry.classList.add(
                        'opacity-0',
                        'translate-y-4',  // shift down a little
                        'transition',
                        'duration-500',
                        'ease-out'
                    );

                    caseStudiesList.appendChild(entry);

                    // Force reflow so transition triggers
                    void entry.offsetWidth;

                    // Trigger the fade + slide in
                    entry.classList.remove('opacity-0', 'translate-y-4');
                    entry.classList.add('opacity-100', 'translate-y-0');
                });

                const newButton = doc.querySelector('#load-more-btn');
                if (newButton) {
                    button.setAttribute('data-next-page', newButton.getAttribute('data-next-page'));
                    button.innerHTML = originalContent;
                    button.disabled = false;
                } else {
                    button.remove();
                }
            })
            .catch(error => {
                console.error('Load More error:', error);
                button.innerHTML = 'Error. Try again';
                button.disabled = false;
            });
    }
});

