# World smallest chart 1.0 in native JS

This js implementation may be the smallest source code for a useful chart to date (to my knowledge)! The <i>World smallest chart</i> plots only positive values, namely it takes values from zero up to an upper bound. To take into account the negative values, you can use the chart project that is shown [here](https://github.com/Gagniuc/World-smallest-js-chart-v2.0). The projects in this repository show two js charts and both use the HTML5 canvas object. The first one from file "shortest_chart.html" contains the shortest chart source code. Basically the chart is represented by a function that draws a sequence of numbers on a canvas object. The second chart found in file "simplest_chart_with_axes.html" contains an addition to the first, namely it adds the x-axis and y-axis, and the corresponding baseline ticks. For more detailed information, note that these native Charts in Javascript, were published in the supplementary materials of the book entitled <i>Algorithms in Bioinformatics: Theory and Implementation</i>.

Function call:
```
Chart(signal, '#ff0000', 'y');
```

```
Chart('23,45,66,77,44,33,99', '#ff0000', 'y');
```

A function Chart that draws signals on a canvas object is added here. This function is called for each signal separately, while the previous plots can be maintained. The Chart function receives three parameters. A parameter (q) containing the signal (n values – each value separated by a delimiter, namely ","). A second parameter is the color of the line identifying each signal (c). A third parameter (e) that indicates to the function whether the canvas object should be cleared or not (’y’ for clear/erase). Inside the Chart function, the maximum value above the sequence of numbers (s) is detected and this value is stored in the mx variable.

World shortest Chart:
```
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

```
Output:
```
<kbd><img src="https://github.com/Gagniuc/World-smallest-js-chart-v1.0/blob/main/img/shortest_chart.png?raw=true"></kbd>


The Chart function contains a loop that makes a number of iterations (i) equal to the number of terms present in the number sequence (s). Inside the main loop, the coordinates
above the canvas object are calculated based on the maximum value, namely according to the value found in the mx variable. Thus, the y-axis is represented by the height (h) of the canvas object divided by the value in the mx variable (h/mx), and the result is multiplied by the current value in the number sequence (s[i]). To position the zero values at the bottom of the chart, the y-axis is reversed by subtracting the result (the y value) from the height (h) of the canvas
object:

<img src="https://github.com/Gagniuc/World-smallest-chart/blob/main/img/x.png?raw=true" height="100">

In contrast, the x-axis is calculated by dividing the length of the canvas object by the total number of terms in the sequence of numbers (w/s.length), and the
result is multiplied by the iteration number (<i>i</i>):

<img src="https://github.com/Gagniuc/World-smallest-chart/blob/main/img/y.png?raw=true" height="100">

Once the two values are computed, the line is drawn from the previous coordinates to the current x and y coordinates (ctx.lineTo(x, y);). This concludes the discussions related to the Chart function.


```
A chart with axes:
```
<kbd><img src="https://github.com/Gagniuc/World-smallest-js-chart-v1.0/blob/main/img/chart-axes.png?raw=true"></kbd>


Live: https://gagniuc.github.io/World-smallest-js-chart-v1.0/


# References

<i>Paul A. Gagniuc. Algorithms in Bioinformatics: Theory and Implementation. John Wiley & Sons, Hoboken, NJ, USA, 2021, ISBN: 9781119697961.</i>



