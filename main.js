// Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('img');
 
 // Assign the function to the onclick event on that element
 foxImage.onclick = sayOuch;

 function show() {
 
 /* Access image by id and change the display property to block*/
            document.getElementById('image')
                    .style.display = "block";
 
            document.getElementById('')
                    .style.display = "none";
        }

function hide() { 
            document.getElementById('image')
            .style.visibility = 'hidden';        
}