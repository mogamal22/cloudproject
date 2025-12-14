// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the button and output elements
    const button = document.getElementById('actionButton');
    const output = document.getElementById('output');
    
    let clickCount = 0;

    // Add click event listener to the button
    button.addEventListener('click', function() {
        clickCount++;
        
        // Array of different messages
        const messages = [
            'Great job! 🎉',
            'You clicked it! 👍',
            'Awesome! ⭐',
            'Keep going! 🚀',
            'Fantastic! 💪'
        ];
        
        // Get a random message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Update the output
        output.textContent = `${randomMessage} You've clicked ${clickCount} time${clickCount > 1 ? 's' : ''}!`;
        
        // Add a fade-in animation
        output.style.opacity = '0';
        setTimeout(() => {
            output.style.transition = 'opacity 0.5s ease-in';
            output.style.opacity = '1';
        }, 10);
    });

    // Add hover effect to the header
    const header = document.querySelector('header h1');
    header.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    header.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    console.log('Cloud Project JavaScript loaded successfully!');
});
