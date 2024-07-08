document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebarLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    const prevButtons = document.querySelectorAll('.prev');
    const nextButtons = document.querySelectorAll('.next');
    
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            const span = this.nextElementSibling;
            let pageNumber = parseInt(span.textContent, 10);
            if (pageNumber > 1) {
                span.textContent = pageNumber - 1;
                // Load the previous table data
            }
        });
    });
    
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const span = this.previousElementSibling;
            let pageNumber = parseInt(span.textContent, 10);
            span.textContent = pageNumber + 1;
            // Load the next table data
        });
    });
});


//account form
function editField(fieldId) {
    var inputField = document.getElementById(fieldId);
    inputField.readOnly = false;
    inputField.value = ''; // Clear the existing value
    inputField.placeholder = ''; // Clear the placeholder if any
    inputField.focus();
}

function clearForm() {
            document.getElementById('accountForm').reset();
        }

        function saveForm() {
            alert('The form has been submitted.');
            document.getElementById('accountForm').reset();
        }

document.querySelector('.profile-image-container label').addEventListener('click', function() {
    document.getElementById('imageUpload').click();
});

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(){
        document.getElementById('profileImage').src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});

//search bar
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-button').addEventListener('click', function() {
        var searchText = document.getElementById('search-input').value.toLowerCase();
        var elements = document.querySelectorAll('.content, .summary .box, table, .media-container .media-box');

        elements.forEach(function(element) {
            if (element.textContent.toLowerCase().includes(searchText)) {
                element.style.backgroundColor = '#ffff00'; // Highlight color
            } else {
                element.style.backgroundColor = ''; // Reset background
            }
        });
    });
});

