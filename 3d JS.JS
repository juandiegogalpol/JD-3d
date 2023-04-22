<script src="https://d3js.org/d3.v7.min.js"></script>
<div id="grafico"></div>
// Selecciona el contenedor del gráfico
const contenedor = d3.select("#grafico");

// Crea los datos para el gráfico
const datos = [1, 2, 3, 4, 5];

// Crea una escala lineal para los datos
const escala = d3.scaleLinear()
  .domain([1, 5])
  .range([0, 100]);

// Agrega elementos SVG al contenedor y dibuja el gráfico
contenedor.append("svg")
  .selectAll("rect")
  .data(datos)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 20)
  .attr("y", (d) => 100 - escala(d))
  .attr("width", 15)
  .attr("height", (d) => escala(d))
  .attr("fill", "steelblue");