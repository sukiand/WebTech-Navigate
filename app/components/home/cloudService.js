var cloudService = function(){
    return{
        cloud: function(words,size_w,size_h,position){
            var fill = d3.scale.category20();

            d3.layout.cloud().size([size_w,size_h])
                .words(words
                    .map(function(d){
                    return {text:d,size:24+Math.random()*50};
                }))
                .padding(5)
                .rotate(function(){
                return ~~(Math.random()*2)*90;
                })
                .font('Impact')
                .fontSize(function(d){return d.size;})
                .on("end", draw)
                .start();

            function draw(words) {
                d3.select("#"+position).append("svg")
                    .attr("width", size_w)
                    .attr("height",size_h)
                    .append("g")
                    // .attr("transform", "translate(500,150)")
                    .attr("transform", "translate(" + size_w / 2 + "," + size_h / 2 + ")")
                    .selectAll("text")
                    .data(words)
                    .enter().append("text")
                    .style("font-size", function(d) { return d.size + "px";  })
                    .style("font-family", "Impact")
                    .style("fill", function(d, i) { return fill(i);  })
                    .attr("text-anchor", "middle")
                    .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                     })
                    .text(function(d) { return d.text;  });
                    }
        }
    };
};

angular
    .module('WebTech')
    .service('cloudService',[cloudService]);
