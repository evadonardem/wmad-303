document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the button click
    document.querySelector('button').addEventListener('click', checkGrade);
});

function checkGrade() {
    const grade = parseInt(document.getElementById('gradeInput').value);
    let message = '';
    let alertClass = '';  // Class for alert color styling
    let imageUrl = '';    // Placeholder for the image URL

    if (grade >= 95 && grade <= 99) {
        message = 'Success';
        alertClass = 'alert-success';  // Green for success
        imageUrl = 'https://mojiedit.com/wp-content/uploads/2024/05/moai-on-beach-sunset.webp';  // Replace with actual image URL
    } else if (grade >= 90 && grade <= 94) {
        message = 'Great job';
        alertClass = 'alert-primary';  // Blue for great job
        imageUrl = 'https://static01.nyt.com/images/2019/03/24/magazine/24Mag-Tip-1/24Mag-Tip-1-superJumbo.jpg';  // Replace with actual image URL
    } else if (grade >= 85 && grade <= 89) {
        message = 'Good';
        alertClass = 'alert-info';  // Light blue for good
        imageUrl = 'https://static.vecteezy.com/system/resources/previews/029/139/417/original/happy-emoji-happy-emoji-happy-emoji-transparent-background-ai-generative-free-png.png';  // Replace with actual image URL
    } else if (grade >= 80 && grade <= 84) {
        message = 'Nice';
        alertClass = 'alert-warning';  // Yellow for nice
        imageUrl = 'https://i.pinimg.com/736x/d1/93/1e/d1931e1adb9cad5fae7b0cf12fb2b4d0.jpg';  // Replace with actual image URL
    } else if (grade >= 75 && grade <= 79) {
        message = 'Clutch';
        alertClass = 'alert-secondary';  // Grey for clutch
        imageUrl = 'https://ih1.redbubble.net/image.4946448660.1892/raf,360x360,075,t,fafafa:ca443f4786.jpg';  // Replace with actual image URL
    } else if (grade >= 1 && grade <= 74) {
        message = 'Dinosaur';
        alertClass = 'alert-danger';  // Red for dinosaur
        imageUrl = 'https://i.ytimg.com/vi/R4Tq7-7NEDM/maxresdefault.jpg';  // Replace with actual image URL
    } else {
        message = 'Invalid grade';
        alertClass = 'alert-dark';  // Black for invalid grade
        imageUrl = 'https://w7.pngwing.com/pngs/945/187/png-transparent-emoji-alien-noto-fonts-github-%E3%82%AB%E3%83%A9%E3%83%BC%E6%96%87%E5%AD%97-emoji-smiley-emoticon-extraterrestrial-life.png';  // Replace with actual image URL
    }

    // Display the message with dynamic color and larger image
    const gradeMessageElement = document.getElementById('gradeMessage');
    gradeMessageElement.innerHTML = `<div class="alert ${alertClass}" style="text-align: center; padding: 20px; border-radius: 10px;">
                                        <h4>${message}</h4>
                                        <div style="overflow: hidden; width: 300px; height: 300px; border-radius: 10px; margin: 10px auto; position: relative;">
                                            <img src="${imageUrl}" alt="${message}" style="width: 100%; height: auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                                        </div>
                                     </div>`;
    
    // Dynamically adjust the width
    gradeMessageElement.style.width = '90%';  // Make it 90% of the page width
    gradeMessageElement.style.margin = '0 auto';  // Center it horizontally
}
