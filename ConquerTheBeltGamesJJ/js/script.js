
document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent successfully!");
});


document.getElementById("enquiryForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Order sent! We will be in touch soon.");
});
