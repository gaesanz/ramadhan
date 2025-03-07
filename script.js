function calculateWinrate() {
    let fasts = parseInt(document.getElementById("fasts").value) || 0;
    let terawih = parseInt(document.getElementById("terawih").value) || 0;
    let noon = parseInt(document.getElementById("noon").value) || 0;
    let asar = parseInt(document.getElementById("asar").value) || 0;
    let sunset = parseInt(document.getElementById("sunset").value) || 0;
    let isha = parseInt(document.getElementById("isha").value) || 0;
    let dawn = parseInt(document.getElementById("dawn").value) || 0;
    
    let totalDays = 30;
    let totalWorshipSessions = totalDays * 5;
    let totalWorshipCompleted = noon + asar + sunset + isha + dawn;

    let fastingWinrate = ((fasts / totalDays) * 100).toFixed(2);
    let terawihWinrate = ((terawih / totalDays) * 100).toFixed(2);
    let worshipWinrate = ((totalWorshipCompleted / totalWorshipSessions) * 100).toFixed(2);

    // Display results directly on the page
    document.getElementById("fastingResult").innerText = fastingWinrate + "%";
    document.getElementById("terawihResult").innerText = terawihWinrate + "%";
    document.getElementById("worshipResult").innerText = worshipWinrate + "%";
    
    // Show the results section
    document.getElementById("results").style.display = "block";
    
    // Scroll to results
    document.getElementById("results").scrollIntoView({ behavior: 'smooth' });
    
    // Add encouraging message based on overall progress
    let overallProgress = (parseFloat(fastingWinrate) + parseFloat(terawihWinrate) + parseFloat(worshipWinrate)) / 3;
    let message = "";
    
    if (overallProgress >= 90) {
        message = "MashaAllah! Your dedication is exemplary. May Allah reward your efforts abundantly.";
    } else if (overallProgress >= 70) {
        message = "Alhamdulillah! You're doing great in your worship. Keep up the excellent work!";
    } else if (overallProgress >= 50) {
        message = "Good progress! With consistent effort, you can achieve even more in your spiritual journey.";
    } else {
        message = "Every act of worship counts. Set small goals and build your consistency step by step.";
    }
    
    document.getElementById("message").innerHTML = `<p>${message}</p>`;
}

// Dynamically load the header image
document.addEventListener('DOMContentLoaded', function() {
    // Randomly choose between the two Ramadhan images
    const randomImage = Math.random() > 0.5 ? "RAMADHAN.jpeg" : "RAMADHAN.jpeg";
    document.getElementById("header-img").src = randomImage;
});