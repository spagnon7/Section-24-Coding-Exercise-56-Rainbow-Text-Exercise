const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:



const  allSpans = document.querySelectorAll('span')

for (i = 0; i < allSpans.length; i++) {
    allSpans[i].style.color = colors[i];
}