# World smallest chart (0 to upper bound)

This js implementation may be the smallest chart to date (to my knowledge)!
```
Chart(signal, '#ff0000', 'y');
```

```
Chart('23,45,66,77,44,33,99', '#ff0000', 'y');
```


```
// Chart
function Chart(q,c,e) {
    var s = q.split(",");
    var mx = Math.max.apply(null, s);
    var canvas = document.getElementById('bio');
    var w = canvas.width;
    var h = canvas.height;
    
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        if(e=='y'){ctx.clearRect(0, 0, w, h);}
 
        ctx.moveTo(0, 0);
        ctx.beginPath();
        
        for (var i=0; i<=s.length-1; i++){
            var y = h-((h / mx) * s[i]);
            var x = (w / s.length) * i;
            ctx.lineTo(x, y);
        }
        ctx.lineWidth = 2;
        ctx.strokeStyle = c;
        ctx.stroke();
    }
}
```



The projects in this repository show a series of js charts. Both of these types use the HTML5 canvas object. It provides a normal linear plot and probably shows the shortest source code for a chart made in javascript.These native Charts in Javascript, were published in the supplementary materials of the book entitled Algorithms in Bioinformatics: Theory and Implementation.

A function Chart that draws signals on a canvas object is added to Additional
algorithm 15.2. This function is called for each signal separately, while the
previous plots can be maintained. The Chart function receives three parameters.
A parameter (q) containing the signal (in this case 11 values – each value
separated by a delimiter, namely ","). A second parameter is the color of the line
identifying each signal (c). A third parameter (e) that indicates to the function
whether the canvas object should be cleared or not (’y’ for clear/erase). Inside
the Chart function, the maximum value above the sequence of numbers (s) is
detected and this value is stored in the mx variable.

The Chart function contains
a loop that makes a number of iterations (i) equal to the number of terms
present in the number sequence (s). Inside the main loop, the coordinates
above the canvas object are calculated based on the maximum value, namely
according to the value found in the mx variable. Thus, the y-axis is represented
by the height (h) of the canvas object divided by the value in the mx variable
(h/mx), and the result is multiplied by the current value in the number sequence
(s[i]). To position the zero values at the bottom of the chart, the y-axis is
reversed by subtracting the result (the y value) from the height (h) of the canvas
object:

![screenshot](https://github.com/Gagniuc/World-smallest-chart/blob/main/img/x.png?raw=true)

In contrast, the x-axis is calculated by dividing the length of the canvas object by
the total number of terms in the sequence of numbers (w/s.length), and the
result is multiplied by the iteration number (i):

![screenshot](https://github.com/Gagniuc/World-smallest-chart/blob/main/img/y.png?raw=true)

Once the two values are computed, the line is drawn from the previous coordinates to the current x and y coordinates (ctx.lineTo(x, y);). This concludes
the discussions related to the Chart function.





