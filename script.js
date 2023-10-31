document.addEventListener('DOMContentLoaded', () => {
    const contactCards = document.querySelectorAll('.contact-card');
    const searchInput = document.getElementById('searchInput');

    function quitarAcentos(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    searchInput.addEventListener('input', () => {
        const searchValue = quitarAcentos(searchInput.value.toLowerCase());

        contactCards.forEach(contactCard => {
            let isMatch = false;
            contactCard.querySelectorAll('h1, p').forEach(field => {
                const fieldValue = quitarAcentos(field.textContent).toLowerCase();
                if (fieldValue.includes(searchValue)) {
                    isMatch = true;
                }
            });
            if (isMatch) {
                contactCard.style.display = 'block';
            } else {
                contactCard.style.display = 'none';
            }
        });
    });
});
