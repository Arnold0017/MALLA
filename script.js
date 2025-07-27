const cursos = [
  { nombre: "Matemáticas I", prerrequisitos: [] },
  { nombre: "Física I", prerrequisitos: ["Matemáticas I"] },
  { nombre: "Programación I", prerrequisitos: [] },
  { nombre: "Matemáticas II", prerrequisitos: ["Matemáticas I"] },
  { nombre: "Física II", prerrequisitos: ["Física I", "Matemáticas II"] },
  { nombre: "Estructuras de Datos", prerrequisitos: ["Programación I"] }
];

const contenedor = document.getElementById("malla");

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${curso.nombre}</h3>
    <p><strong>Prerrequisitos:</strong> ${curso.prerrequisitos.join(", ") || "Ninguno"}</p>
  `;
  contenedor.appendChild(div);
});
