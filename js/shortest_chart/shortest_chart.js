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
        
        for (var i=0; i<=s.length-1; i++)
        {
            var y = h-((h / mx) * s[i]);
            var x = (w / s.length) * i;
            
            ctx.lineTo(x, y);
        }
        ctx.lineWidth = 2;
        ctx.strokeStyle = c;
        ctx.stroke();
    }
}