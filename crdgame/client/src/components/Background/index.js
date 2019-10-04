<svg id=svg viewbox=-100,-100,200,200>
    <g></g>
</svg>



let rnd = i => Math.floor(Math.random()*i);
for (var r =0,i=0; i<50; i++, r = 100-i*2)
    svg.innerHTML += `<circle style="--rot:${Math.random()>0.5?360:-360}rad;animation:rr ${300+rnd(900)}s linear infinite"
        stroke=hsla(${rnd(360)},${60+rnd(25)}%,${60+rnd(25)}%,0.8) 
        stroke-dasharray="${Array(2+rnd(r)).fill(0).map(e=>rnd(r)).join(' ')}" r=${r} fill=none ></circle>`

