// Definición de los cursos con sus prerrequisitos (los cursos que desbloquean este curso)
const cursos = [
  // Semestre 1
  { nombre: "Anatomía-Fisiología I", semestre: 1, dependientes: ["Anatomía -Fisiología II", "Parasitología", "Técnicas Parasitológicas"] },
  { nombre: "Química", semestre: 1, dependientes: ["Bioquímica I"] },
  { nombre: "Biología Celular", semestre: 1, dependientes: ["Parasitología", "Técnicas Parasitológicas", "Bioquímica I"] },
  { nombre: "Bases de la Investigación Formativa", semestre: 1, dependientes: ["Salud Pública", "Bioestadística"] },
  { nombre: "Bases para el Laboratorio Clínico", semestre: 1, dependientes: ["Análisis Instrumental"] },
  { nombre: "Ofimática para Laboratorio Clínico", semestre: 1 },
  { nombre: "Lenguaje y Comunicación", semestre: 1 },

  // Semestre 2
  { nombre: "Bioestadística", semestre: 2, dependientes: ["Metodología de la Investigación I"] },
  { nombre: "Anatomía -Fisiología II", semestre: 2, dependientes: ["Bioquímica II", "Micología", "Hematología I", "Uroanálisis"] },
  { nombre: "Análisis Instrumental", semestre: 2, dependientes: ["Gestión y Control de la Calidad", "Bacteriología I"] },
  { nombre: "Bioquímica I", semestre: 2, dependientes: ["Bioquímica II"] },
  { nombre: "Técnicas Parasitológicas", semestre: 2 },
  { nombre: "Parasitología", semestre: 2, dependientes: ["Prácticas de Laboratorio Básico I"] },
  { nombre: "Salud Pública", semestre: 2, dependientes: ["Epidemiología"] },

  // Semestre 3
  { nombre: "Micología", semestre: 3, dependientes: ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"] },
  { nombre: "Bioquímica II", semestre: 3, dependientes: ["Bioquímica Clínica II", "Prácticas de Laboratorio Básico I"] },
  { nombre: "Hematología I", semestre: 3, dependientes: ["Prácticas de Laboratorio Básico I", "Hematología II"] },
  { nombre: "Uroanálisis", semestre: 3, dependientes: ["Prácticas de Laboratorio Básico I"] },
  { nombre: "Epidemiología", semestre: 3, dependientes: ["Bioética"] },
  { nombre: "Bacteriología I", semestre: 3, dependientes: ["Bacteriología II"] },

  // Semestre 4
  { nombre: "Gestión y Control de la Calidad", semestre: 4, dependientes: ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"] },
  { nombre: "Bioquímica Clínica I", semestre: 4, dependientes: [] }, // Prerrequisito Bioquímica Clínica II (enunciado con error)
  { nombre: "Virología", semestre: 4 },
  { nombre: "Hematología II", semestre: 4, dependientes: ["Inmunología", "Inmunohematología", "Citología"] },
  { nombre: "Prácticas de Laboratorio Básico I", semestre: 4, dependientes: ["Prácticas de Laboratorio Básico II", "Prácticas de Servicio Comunitario I"] },
  { nombre: "Bacteriología II", semestre: 4, dependientes: ["Prácticas de Laboratorio Básico II", "Prácticas de Servicio Comunitario I"] },

  // Semestre 5
  { nombre: "Inmunología", semestre: 5, dependientes: [] }, // Prerrequisito Genética, Biología Molecular
  { nombre: "Bioquímica Clínica II", semestre: 5, dependientes: [] }, // Prerrequisito Genética
  { nombre: "Prácticas de Laboratorio Básico II", semestre: 5, dependientes: ["Prácticas de Laboratorio de Especialidad I", "Análisis Clínico en Laboratorio I", "Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"] },
  { nombre: "Inmunohematología", semestre: 5, dependientes: ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"] },
  { nombre: "Metodología de la Investigación I", semestre: 5, dependientes: ["Metodología de la Investigación II"] },
  { nombre: "Bioética", semestre: 5 },
  { nombre: "Prácticas de Servicio Comunitario I", semestre: 5, dependientes: ["Prácticas de Servicio Comunitario II Actividad de Vinculación"] },

  // Semestre 6
  { nombre: "Prácticas de Laboratorio de Especialidad I", semestre: 6, dependientes: ["Administración y Legislación", "Prácticas de Laboratorio de Especialidad II"] },
  { nombre: "Citología", semestre: 6, dependientes: ["Histología"] },
  { nombre: "Análisis Clínico en Laboratorio I", semestre: 6, dependientes: ["Análisis Clínico en Laboratorio II"] },
  { nombre: "Biología Molecular", semestre: 6 },
  { nombre: "Prácticas de Servicio Comunitario II Actividad de Vinculación", semestre: 6, dependientes: ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"] },
  { nombre: "Metodología de la Investigación II", semestre: 6, dependientes: ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica", "Unidad de Integración Curricular: Diseño y Aplicación de la Praxis en Laboratorio Clínico I"] },
  { nombre: "Genética", semestre: 6, dependientes: ["Citogenética"] },

  // Semestre 7
  { nombre: "Desarrollo de Emprendedores", semestre: 7, dependientes: ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"] },
  { nombre: "Administración y Legislación", semestre: 7 },
  { nombre: "Análisis Clínico en Laboratorio II", semestre: 7, dependientes: ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"] },
  { nombre: "Histología", semestre: 7, dependientes: ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"] },
  { nombre: "Prácticas de Laboratorio de Especialidad II", semestre: 7, dependientes: ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"] },
  { nombre: "Citogenética", semestre: 7, dependientes: ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"] },

  // Semestre 8
  { nombre: "Perfeccionamiento Microbiología", semestre: 8, dependientes: [] }, // Prerrequisito: Perfeccionamiento: Histología y Citología, Práctica Laboral: Perfeccionamiento en Laboratorio Clínico
  { nombre: "Perfeccionamiento Hematología-Inmunología", semestre: 8, dependientes: [] },
  { nombre: "Perfeccionamiento Biología Molecular-Citogenética", semestre: 8, dependientes: [] },
  { nombre: "Perfeccionamiento Bioquímica", semestre: 8, dependientes: [] },
  { nombre: "Unidad de Integración Curricular: Diseño y Aplicación de la Praxis en Laboratorio Clínico I", semestre: 8, dependientes: ["Unidad de Integración Curricular: Diseño y Aplicación de la Praxis en el Laboratorio Clínico II"] },

  // Semestre 9
  { nombre: "Unidad de Integración Curricular: Diseño y Aplicación de la Praxis en el Laboratorio Clínico II", semestre: 9 },
  { nombre: "Perfeccionamiento: Histología y Citología", semestre: 9 },
  { nombre: "Práctica Laboral: Perfeccionamiento en Laboratorio Clínico", semestre: 9 },
];

// Set para almacenar cursos aprobados
const aprobados = new Set();

// Mapa para vincular nombres de cursos con sus elementos HTML
const mapaCursos = new Map();

// Crea el div de un ramo con clases y evento click
function crearRamo(curso) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = curso.nombre;
  div.title = `Semestre ${curso.semestre}`;
  div.onclick = () => toggleCurso(curso);
  mapaCursos.set(curso.nombre, div);
  return div;
}

// Maneja click en un curso para aprobar o desaprobar
function toggleCurso(curso) {
  const div = mapaCursos.get(curso.nombre);
  if (div.classList.contains("bloqueado")) return; // no hace nada si está bloqueado

  if (div.classList.contains("aprobado")) {
    div.classList.remove("aprobado");
    aprobados.delete(curso.nombre);
  } else {
    div.classList.add("aprobado");
    aprobados.add(curso.nombre);
  }

  actualizarCursos();
}

// Actualiza el estado (bloqueado/aprobado) de cada curso según prerrequisitos
function actualizarCursos() {
  cursos.forEach(curso => {
    const div = mapaCursos.get(curso.nombre);

    // Si no tiene dependientes (prerrequisitos), siempre desbloqueado
    if (!curso.dependientes || curso.dependientes.length === 0) {
      div.classList.remove("bloqueado");
      return;
    }

    // Verificar si todos los prerrequisitos están aprobados
    const desbloqueado = curso.dependientes.every(dep => aprobados.has(dep));

    if (desbloqueado) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
      div.classList.remove("aprobado");
      aprobados.delete(curso.nombre);
    }
  });
}

// Renderiza toda la malla por semestre
function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (let semestre = 1; semestre <= 9; semestre++) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";

    const titulo = document.createElement("div");
    titulo.className = "titulo-semestre";
    titulo.textContent = `Semestre ${semestre}`;
    divSemestre.appendChild(titulo);

    cursos
      .filter(c => c.semestre === semestre)
      .forEach(c => divSemestre.appendChild(crearRamo(c)));

    contenedor.appendChild(divSemestre);
  }

  actualizarCursos();
}

// Ejecuta la carga inicial
renderMalla();
