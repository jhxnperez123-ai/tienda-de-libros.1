
document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('search').value.toLowerCase();
    const books = document.querySelectorAll('.book');
    
    books.forEach(book => {
        const title = book.getAttribute('data-title').toLowerCase();
        if (title.includes(query)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const bookTitle = this.parentElement.querySelector('h3').textContent;
        alert(`¡${bookTitle} agregado al carrito!`);
    });
});