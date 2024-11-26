
document.addEventListener('DOMContentLoaded', function() {
    const loadPapersButton = document.getElementById('loadPapers');
    const papersTableBody = document.getElementById('papersTable').getElementsByTagName('tbody')[0];

    loadPapersButton.addEventListener('click', function() {
        fetch('http://localhost:5000/papers') // Ensure this URL matches your backend configuration
            .then(response => response.json())
            .then(data => {
                papersTableBody.innerHTML = ''; // Clear the table body to avoid duplicate entries
                data.forEach(paper => {
                    const row = papersTableBody.insertRow();
                    const idCell = row.insertCell(0);
                    const nameCell = row.insertCell(1);
                    const descriptionCell = row.insertCell(2);
                    const createdDateCell = row.insertCell(3);
                    const statusCell = row.insertCell(4);

                    idCell.textContent = paper.Id;
                    nameCell.textContent = paper.Name;
                    descriptionCell.textContent = paper.Description;
                    createdDateCell.textContent = paper['Created Date'];
                    statusCell.textContent = paper.Status;
                });
            })
            .catch(error => console.error('Error fetching papers:', error));
    });
});
