// Definir todos los ramos con sus dependencias
const courses = {
  "Anatomía-Fisiología I": ["Anatomía-Fisiología II", "Parasitología", "Técnicas Parasitológicas"],
  "Química": ["Bioquímica I"],
  "Biología Celular": ["Parasitología", "Técnicas Parasitológicas", "Bioquímica I"],
  "Bases de la Investigación Formativa": ["Salud Pública", "Bioestadística"],
  "Bases para el Laboratorio Clínico": ["Análisis Instrumental"],
  "Ofimática para Laboratorio Clínico": [],
  "Lenguaje y Comunicación": [],

  "Bioestadística": ["Metodología de la Investigación I"],
  "Anatomía -Fisiología II": ["Bioquímica II", "Micología", "Hematología I", "Uroanálisis"],
  "Análisis Instrumental": ["Gestión y Control de la Calidad", "Bacteriología I"],
  "Bioquímica I": ["Bioquímica II"],
  "Técnicas Parasitológicas": [],
  "Parasitología": ["Prácticas de Laboratorio Básico I"],
  "Salud Pública": ["Epidemiología"],

  "Micología": ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"],
  "Bioquímica II": ["Bioquímica Clínica II", "Prácticas de Laboratorio Básico I"],
  "Hematología I": ["Prácticas de Laboratorio Básico I", "Hematología II"],
  "Uroanálisis": ["Prácticas de Laboratorio Básico I"],
  "Epidemiología": ["Bioética"],
  "Bacteriología I": ["Bacteriología II"],

  "Gestión y Control de la Calidad": ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"],
  "Bioquímica Clínica I": ["Bioquímica Clínica II"],
  "Virología": [],
  "Hematología II": ["Inmunología", "Inmunohematología", "Citología"],
  "Prácticas de Laboratorio Básico I": ["Prácticas de Laboratorio Básico II", "Prácticas de Servicio Comunitario I"],
  "Bacteriología II": ["Prácticas de Laboratorio Básico II", "Prácticas de Servicio Comunitario I"],

  "Inmunología": ["Genética", "Biología Molecular"],
  "Bioquímica Clínica II": ["Genética"],
  "Prácticas de Laboratorio Básico II": ["Prácticas de Laboratorio de Especialidad I", "Análisis Clínico en Laboratorio I", "Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"],
  "Inmunohematología": ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"],
  "Metodología de la Investigación I": ["Metodología de la Investigación II"],
  "Bioética": [],
  "Prácticas de Servicio Comunitario I": ["Prácticas de Servicio Comunitario II Actividad de Vinculación"],

  "Prácticas de Laboratorio de Especialidad I": ["Administración y Legislación", "Prácticas de Laboratorio de Especialidad II"],
  "Citología": ["Histología"],
  "Análisis Clínico en Laboratorio I": ["Análisis Clínico en Laboratorio II"],
  "Biología Molecular": [],
  "Prácticas de Servicio Comunitario II Actividad de Vinculación": ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"],
  "Metodología de la Investigación II": ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica", "Unidad de Integración Curricular: Diseño y Aplicación de la Praxis en Laboratorio Clínico I"],
  "Genética": ["Citogenética"],

  "Desarrollo de Emprendedores": ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"],
  "Administración y Legislación": [],
  "Análisis Clínico en Laboratorio II": ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"],
  "Histología": ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"],
  "Prácticas de Laboratorio de Especialidad II": ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"],
  "Citogenética": ["Perfeccionamiento Microbiología", "Perfeccionamiento Hematología-Inmunología", "Perfeccionamiento Biología Molecular-Citogenética", "Perfeccionamiento Bioquímica"],

  "Perfeccionamiento Microbiología": ["Perfeccionamiento: Histología y Citología", "Práctica Laboral: Perfeccionamiento en Laboratorio Clínico"],
  "Perfeccionamiento Hematología-Inmunología": ["Perfeccionamiento: Histología y Citología", "Práctica Laboral: Perfeccionamiento en Laboratorio Clínico"],
  "Perfeccionamiento Biología Molecular-Citogenética": ["Perfeccionamiento: Histología y Citología", "Práctica Laboral: Perfeccionamiento en Laboratorio Clínico"],
  "Perfeccionamiento Bioquímica": ["Perfeccionamiento: Histología y Citología", "Práctica Laboral: Perfeccionamiento en Laboratorio Clínico"],
  "Unidad de Integración Curricular: Diseño y Aplicación de la Praxis en Laboratorio Clínico I": ["Unidad de Integración Curricular: Diseño y Aplicación de la Praxis en el Laboratorio Clínico II"],

  "Unidad de Integración Curricular: Diseño y Aplicación de la Praxis en el Laboratorio Clínico II": [],
  "Perfeccionamiento: Histología y Citología": [],
  "Práctica Laboral: Perfeccionamiento en Laboratorio Clínico": []
};

const grid = document.getElementById('grid');
const state = {};

function createCard(name) {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerText = name;
  div.dataset.name = name;
  state[name] = { completed: false, element: div };

  div.addEventListener('click', () => {
    if (!div.classList.contains('active')) return;
    div.classList.remove('active');
    div.classList.add('completed');
    state[name].completed = true;

    (courses[name] || []).forEach(dep => {
      const allReady = Object.entries(courses)
        .filter(([_, deps]) => deps.includes(dep))
        .every(([p]) => state[p]?.completed);
      if (allReady) {
        state[dep].element.classList.add('active');
      }
    });
  });

  grid.appendChild(div);
}

// Crear todas las tarjetas
Object.keys(courses).forEach(name => createCard(name));

// Activar los ramos sin requisitos
Object.entries(courses).forEach(([name, prereqs]) => {
  if (prereqs.length === 0) {
    state[name].element.classList.add('active');
  }
});
