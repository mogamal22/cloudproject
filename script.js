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
        
        // Add fade-in animation using CSS class
        output.classList.remove('fade-in');
        // Force reflow to restart animation
        void output.offsetWidth;
        output.classList.add('fade-in');
    });

    console.log('Cloud Project JavaScript loaded successfully!');
});
