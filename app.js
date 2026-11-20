
const loader = document.getElementById("pageLoader");

document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener("click", function(event) {
        const url = new URL(this.href);

        
        if (
            url.origin !== window.location.origin ||
            url.pathname === window.location.pathname ||
            this.target === "_blank" ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey ||
            event.button !== 0
        ) {
            return;
        }

        event.preventDefault();

        loader.classList.add("active");

        setTimeout(() => {
            window.location.href = this.href;
        }, 600);
    });
});



window.addEventListener("pageshow", () => {
    if (loader) {
        loader.classList.remove("active");
    }
});



const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        bookingForm.innerHTML = `
            <div class="success-message">
                <div class="success-icon">✓</div>

                <h2>Дякуємо за заявку!</h2>

                <p>
                    Ми отримали вашу заявку на тест-драйв.
                    Наш менеджер скоро вам зателефонує!
                </p>

                <a href="index.html" class="button">
                    На головну
                </a>
            </div>
        `;
    });
}