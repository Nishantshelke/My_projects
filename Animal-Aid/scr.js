// JavaScript for Animation and Message
document.getElementById('donateButton').addEventListener('click', function() {
    // Animation effect
    document.querySelector('.donate-form').style.transform = 'scale(0.9)';
    setTimeout(() => {
        document.querySelector('.donate-form').style.transform = 'scale(1)';
    }, 300);
    
    // Display message
    alert('Thank you for your donation! Your support means a lot to us.');
});
