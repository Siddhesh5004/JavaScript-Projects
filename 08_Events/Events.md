## JAVASCRIPT - Synchronous and Single threaded

## Events in Javascript

1. Click Event

element.addEventListener('click', function(event) {
   
});
2. Hover Event
JavaScript doesn't have a direct hover event, but you can use mouseover and mouseout events.

element.addEventListener('mouseover', function(event) {
    
});

element.addEventListener('mouseout', function(event) {
    
});
3. Load Event

window.addEventListener('load', function(event) {
   
});
4. Focus Event

element.addEventListener('focus', function(event) {
    
});
5. Blur Event

element.addEventListener('blur', function(event) {
    
});
6. Change Event

element.addEventListener('change', function(event) {

});
7. Submit Event

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
 
});
8. Resize Event

window.addEventListener('resize', function(event) {
    
});
9. Scroll Event

window.addEventListener('scroll', function(event) {
    
});
10. Keydown Event

document.addEventListener('keydown', function(event) {
    
});

11. Keyup Event

document.addEventListener('keyup', function(event) {
    
});

12. Mouseover Event

element.addEventListener('mouseover', function(event) {
    
});
13. Mouseout Event

element.addEventListener('mouseout', function(event) {
    
});
14. Drag and Drop Events

element.addEventListener('dragstart', function(event) {
    
});

element.addEventListener('drag', function(event) {
   
});

element.addEventListener('dragenter', function(event) {
   
});

element.addEventListener('dragover', function(event) {
    event.preventDefault();  // Necessary for the drop event to work
    
});

element.addEventListener('dragleave', function(event) {
   
});

element.addEventListener('drop', function(event) {
    event.preventDefault();
    
});

element.addEventListener('dragend', function(event) {
    
});

15. Touch Events

element.addEventListener('touchstart', function(event) {
   
});

element.addEventListener('touchmove', function(event) {
    
});

element.addEventListener('touchend', function(event) {
    
});

element.addEventListener('touchcancel', function(event) {
    
});