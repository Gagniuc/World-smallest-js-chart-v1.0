# World smallest chart (0 to upper bound)

This js implementation may be the smallest chart to date (to my knowledge)!


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


# World smallest chart (lower bound to upper bound)

For a better visualization, the implementation of the chart narrows
the y-axis and shows only the region between the two values. To obtain this relative reduction, the minimum similarity score value was taken into account. Thus,
the following change was made to the Chart function:

![screenshot](https://github.com/Gagniuc/World-smallest-chart/blob/main/img/ylu.png?raw=true)

where mn is the minimum value and mx is the maximum value found in the list of
similarity scores, h is the canvas height, and si is the current value of the similarity
index. Note that the inner workings of the Chart function were fully described for
the previous implementations (see Additional algorithm 15.2). This concludes the
changes related to the Chart function.





