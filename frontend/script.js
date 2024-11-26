document.addEventListener('DOMContentLoaded', function() {
    const loadPapersButton = document.getElementById('loadPapers');
    const papersTableBody = document.getElementById('papersTable').getElementsByTagName('tbody')[0];

    loadPapersButton.addEventListener('click', function() {
        fetch('http://localhost:5000/papers')
            .then(response => response.json())
            .then(data => {
                const templateSource = document.getElementById('paper-template').innerHTML;
                const template = Handlebars.compile(templateSource);
                const html = template({papers: data});
                papersTableBody.innerHTML = html;
            })
            .catch(error => console.error('Error loading the papers:', error));
    });
});
