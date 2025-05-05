// plindrome
const styles = ["style1", "style2", "style3", "style4"];
let index = 0;
const palindromeSpan = document.querySelector("#palindrome");

setInterval(() => {
    palindromeSpan.classList.remove(styles[(index - 1 + styles.length) % styles.length]); // Remove previous style
    palindromeSpan.classList.add(styles[index]); // Add new style
    index = (index + 1) % styles.length; // Loop through styles
}, 500);

// cursor           
const cursor = document.querySelector(".cursor");
const hoverElements = document.querySelectorAll(".about-palindrome h2, .about-palindrome p, .dfa-nfa  h2, .dfa-nfa p, .pda h2, .pda p");

// Smooth movement using requestAnimationFrame
document.addEventListener("mousemove", (e) => {  
    requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;    
    });         
});

// Add hover effect on target elements   
hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {     
        cursor.classList.add("hover"); 
    });

    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover"); 
    });  
});

document.getElementById("checkPalindromeBtn").addEventListener("click", function() {
    window.location.href = "detector.html";  
});
