//lecture7. Enter, Update, Exit

//enter : DOM elements(fewer) < data elements(more) -> extra(corresponding DOM element가 없는) data element에 placeholder를 부여
//update : DOM elements = data elements
//exit : DOM elements(more) > data elements(fewer)

/* About enter and update
const data = [10, 20];
*/
const data = [10];

const canvas = d3.select("body")
              .append("svg")
              .attr("width", 500)
              .attr("height", 500);

const circle1 = canvas.append("circle")
                .attr("cx", 50)
                .attr("cy", 100)
                .attr("r", 25);

const circle2 = canvas.append("circle")
                .attr("cx", 50)
                .attr("cy", 200)
                .attr("r", 25);

/* About enter and update
const circles = canvas.selectAll("circle")
                .data(data)
                .attr("fill", "red")  //update : Already existing DOM element와 corresponding 하는 data element에 적용되는 attribute
                .enter()
                  .append("circle")
                  .attr("cx", 50)
                  .attr("cy", 50)
                  .attr("fill", "orange") // enter : extra data element에 적용되는 attribute
                  .attr("r", 25);
*/

/* About exit */
const circles = canvas.selectAll("circle")
                .data(data)
                .attr("fill", "green")
                .exit()
                    .attr("fill", "blue");  // exit : extra DOM element에 적용되는 attribute