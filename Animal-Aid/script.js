document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("appointmentForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        confirmationMessage.classList.remove("hidden");
        form.reset();
        setTimeout(function() {
            confirmationMessage.classList.add("hidden");
        }, 3000);
    });
});
