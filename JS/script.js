document.addEventListener('DOMContentLoaded', () => {

    const welcomeSpan = document.getElementById('welcome-name');
    if (welcomeSpan) {
        const userName = prompt("Please enter your name:", "Driver");
        welcomeSpan.textContent = userName || "Driver"; // Jika user cancel, gunakan "Driver"
    }

    // Poin 5: Validate Form "Book a Test Drive" & show value
    const testDriveForm = document.getElementById('test-drive-form');
    const formOutput = document.getElementById('form-output');

    if (testDriveForm) {
        testDriveForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Mengambil nilai dari setiap input
            const fullName = document.getElementById('full-name').value;
            const phoneNumber = document.getElementById('phone-number').value;
            const carModel = document.getElementById('car-model').value;
            const testDriveDate = document.getElementById('test-drive-date').value;

            // Validasi sederhana
            if (fullName.trim() === '' || phoneNumber.trim() === '' || carModel === '' || testDriveDate === '') {
                alert('All fields are required to book a test drive!');
                return;
            }

            // Tampilkan nilainya di container output
            const currentTime = new Date().toLocaleString('id-ID');
            
            document.getElementById('output-time').textContent = currentTime;
            document.getElementById('output-name').textContent = fullName;
            document.getElementById('output-phone').textContent = phoneNumber;
            document.getElementById('output-model').textContent = carModel;
            document.getElementById('output-date').textContent = testDriveDate;
            
            // Tampilkan container output dengan efek
            formOutput.classList.add('show');

            alert(`Thank you, ${fullName}! Your test drive request for the ${carModel} has been submitted.`);
            
            // Opsional: reset form setelah submit
            testDriveForm.reset();
        });
    }

});