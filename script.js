document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.querySelector('.form-left');

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector('input[name="name"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const person = document.querySelector('select[name="person"]').value;
        const date = document.querySelector('input[name="reservation-date"]').value;
        const time = document.querySelector('select[name="time"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        // Assuming you have a function to validate the form data
        if (validateForm(name, phone, person, date, time)) {
            // Assuming you have a function to send the reservation data to the server
            sendReservationData(name, phone, person, date, time, message);
        } else {
            alert("Please fill in all the fields correctly.");
        }
    });

    // Function to validate form data
    function validateForm(name, phone, person, date, time) {
        // Basic validation, you can add more specific validation as needed
        if (name.trim() === "" || phone.trim() === "" || person.trim() === "" || date.trim() === "" || time.trim() === "") {
            return false;
        }
        return true;
    }

    // Function to send reservation data to the server
    function sendReservationData(name, phone, person, date, time, message) {
        // You can perform an AJAX request here to send the data to the server
        // For demonstration, let's just log the data to the console
        console.log("Name:", name);
        console.log("Phone:", phone);
        console.log("Person:", person);
        console.log("Date:", date);
        console.log("Time:", time);
        console.log("Message:", message);

        // Optionally, you can reset the form after successful submission
        bookingForm.reset();
    }
});
