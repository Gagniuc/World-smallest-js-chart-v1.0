# World smallest chart 1.0 in native JS

This js implementation may be the smallest source code for a useful chart to date (to my knowledge)! The <i>World smallest chart</i> plots only positive values, namely it takes values from zero up to an upper bound. To take into account the negative values, you can use the chart project that is shown [here](https://github.com/Gagniuc/World-smallest-js-chart-v2.0). The projects in this repository show two js charts and both use the HTML5 canvas object. The first one from file <kbd>shortest_chart.html</kbd> contains the shortest chart source code. Basically the implementation is represented by a function named <kbd>Chart</kbd> that draws some consecutive numeric values on a canvas object. The second chart found in file <kbd>simplest_chart_with_axes.html</kbd> contains an addition to the first, namely it adds the <kbd>x-axis</kbd> and <kbd>y-axis</kbd>, and the corresponding baseline ticks. There are also two implementations in the <kbd>js</kbd> folder that store the Chart function in a separate <kbd>".js"</kbd> file. For more detailed information, note that these native Charts in Javascript, were published in the supplementary materials of the book entitled <i>Algorithms in Bioinformatics: Theory and Implementation</i>. The lines below show how this <kbd>Chart</kbd> function can be called:

```js
Chart('23,45,66,77,44,33,99', '#ff0000', 'y');
```

Where the numbers are passed directly as a parameter to the function, or, a situation in which the numbers are stored in a <kbd>signal</kbd> variable which in turn is passed as a parameter to the function:

```js
var signal = '23,45,66,77,44,33,99';
Chart(signal, '#ff0000', 'y');
```

A function Chart that draws signals on a canvas object is added here. This function is called for each signal separately, while the previous plots can be maintained. The Chart function receives three parameters. A parameter (<i>q</i>) containing the signal (<i>n</i> values – each value separated by a delimiter, namely <kbd>","</kbd>). A second parameter is the color of the line identifying each signal (<i>c</i>). A third parameter (<i>e</i>) that indicates to the function whether the canvas object should be cleared or not (’y’ for clear/erase). Inside the Chart function, the maximum value above the input (<i>s</i>) is detected and this value is stored in the <i>mx</i> variable. <i>World shortest Chart</i> is shown below:

```js
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
An example of output:
```
<kbd><img src="https://github.com/Gagniuc/World-smallest-js-chart-v1.0/blob/main/img/shortest_chart.png?raw=true"></kbd>

How does it work? The Chart function contains a loop that makes a number of iterations (<i>i</i>) equal to the number of terms present in the sequence (<i>s</i>). Inside the main loop, the coordinates above the canvas object are calculated based on the maximum value, namely according to the value found in the <i>mx</i> variable. Thus, the y-axis is represented by the height (<i>h</i>) of the canvas object divided by the value in the <i>mx</i> variable (<i>h</i>/<i>mx</i>), and the result is multiplied by the current value in the sequence (s[<i>i</i>]). To position the zero values at the bottom of the chart, the <kbd>y-axis</kbd> is reversed by subtracting the result (the <i>y</i> value) from the height (<i>h</i>) of the canvas object:

<img src="https://github.com/Gagniuc/World-smallest-chart/blob/main/img/y.png?raw=true" height="100">

In contrast, the <kbd>x-axis</kbd> is calculated by dividing the length of the canvas object by the total number of terms in the sequence (<b>w/s.length</b>), and the
result is multiplied by the iteration number (<i>i</i>):

<img src="https://github.com/Gagniuc/World-smallest-chart/blob/main/img/x.png?raw=true" height="100">

Once the two values are computed, the line is drawn from the previous coordinates to the current <i>x</i> and <i>y</i> coordinates (<b>ctx.lineTo(x, y);</b>). This concludes the discussions related to the Chart function. There is also an addition to the chart function shown in the <kbd>simplest_chart_with_axes.html</kbd> file, namely the axis. This longer version can also be used for different applications:

```
A chart with axes:
```
<kbd><img src="https://github.com/Gagniuc/World-smallest-js-chart-v1.0/blob/main/img/chart-axes.png?raw=true"></kbd>

**Live demo**: https://gagniuc.github.io/World-smallest-js-chart-v1.0/

# References

- <i>Paul A. Gagniuc. Algorithms in Bioinformatics: Theory and Implementation. John Wiley & Sons, Hoboken, NJ, USA, 2021, ISBN: 9781119697961.</i>


