// Malla en formato por columnas (tipo tabla)

const malla = [
  [ // Semestre I
    { nombre: "Administración General", creditos: 5 },
    { nombre: "Derecho Empresarial", creditos: 3 },
    { nombre: "Álgebra I", creditos: 6 },
    { nombre: "Habilidades Sociales", creditos: 4 },
    { nombre: "Contabilidad I", creditos: 6 },
    { nombre: "Formación Integral I", creditos: 3 },
  ],
  [ // Semestre II
    { nombre: "Administración Estratégica", creditos: 6 },
    { nombre: "Álgebra II", creditos: 6 },
    { nombre: "Cálculo I", creditos: 6 },
    { nombre: "Introducción a la Economía", creditos: 3 },
    { nombre: "Contabilidad II", creditos: 6 },
    { nombre: "Inglés I", creditos: 4 },
    { nombre: "Formación Integral Act. Extraprogramatica I", creditos: 2 },
  ],
  [ // Semestre III
    { nombre: "Marketing I", creditos: 5 },
    { nombre: "Cálculo II", creditos: 6 },
    { nombre: "Microeconomía I", creditos: 6 },
    { nombre: "Costos", creditos: 5 },
    { nombre: "Inglés II", creditos: 4 },
    { nombre: "Formación Integral II", creditos: 3 },
  ],
  [ // Semestre IV
    { nombre: "Marketing II", creditos: 5 },
    { nombre: "Estadística I", creditos: 6 },
    { nombre: "Macroeconomía I", creditos: 6 },
    { nombre: "Microeconomía II", creditos: 6 },
    { nombre: "Inglés para Negocios I", creditos: 4 },
    { nombre: "Inglés III", creditos: 4 },
  ],
  [ // Semestre V
    { nombre: "Gestión de Recursos Humanos I", creditos: 5 },
    { nombre: "Sistemas de Información", creditos: 4 },
    { nombre: "Estadística II", creditos: 6 },
    { nombre: "Macroeconomía II", creditos: 6 },
    { nombre: "Gestión Financiera de Corto Plazo", creditos: 5 },
    { nombre: "Inglés para Negocios II", creditos: 4 },
    { nombre: "Formación Integral Act. Extraprogramatica II", creditos: 2 },
  ],
  [ // Semestre VI
    { nombre: "Comportamiento Organizacional", creditos: 4 },
    { nombre: "Econometría", creditos: 6 },
    { nombre: "Economía Internacional", creditos: 4 },
    { nombre: "Mercados de Capitales", creditos: 5 },
    { nombre: "Inglés para Negocios III", creditos: 4 },
    { nombre: "Práctica Profesional I", creditos: 5 },
  ],
  [ // Semestre VII
    { nombre: "Comercio Exterior", creditos: 5 },
    { nombre: "Gestión de Recursos Humanos II", creditos: 5 },
    { nombre: "Administración de la Producción", creditos: 6 },
    { nombre: "Control de Gestión", creditos: 5 },
    { nombre: "Formulación y Evaluación de Proyectos", creditos: 6 },
    { nombre: "Formación Integral Act. Extraprogramatica III", creditos: 2 },
  ],
  [ // Semestre VIII
    { nombre: "Emprendimiento", creditos: 5 },
    { nombre: "Desarrollo Organizacional", creditos: 5 },
    { nombre: "Responsabilidad Social", creditos: 6 },
    { nombre: "Dirección Estratégica I", creditos: 6 },
    { nombre: "Gestión Financiera de Largo Plazo", creditos: 6 },
    { nombre: "Oferta Institucional III", creditos: 3 },
  ],
  [ // Semestre IX
    { nombre: "Electivo I", creditos: 5 },
    { nombre: "Electivo II", creditos: 4 },
    { nombre: "Electivo III", creditos: 4 },
    { nombre: "Dirección Estratégica II", creditos: 6 },
    { nombre: "Práctica Profesional II", creditos: 11 },
    { nombre: "Actividades Extraprogramáticas IV", creditos: 2 },
  ],
  [ // Semestre X
    { nombre: "Habilitación Profesional", creditos: 4 },
    { nombre: "Electivo IV", creditos: 4 },
    { nombre: "Electivo V", creditos: 4 },
    { nombre: "Taller Integrado", creditos: 5 },
    { nombre: "Oferta Institucional IV", creditos: 3 },
  ]
];

function generarTabla() {
  const container = document.getElementById("malla-container");
  const table = document.createElement("table");
  table.classList.add("malla-tabla");

  const maxFilas = Math.max(...malla.map(col => col.length));
  const trHeader = document.createElement("tr");
  malla.forEach((_, i) => {
    const th = document.createElement("th");
    th.textContent = `Semestre ${i + 1}`;
    trHeader.appendChild(th);
  });
  table.appendChild(trHeader);

  for (let i = 0; i < maxFilas; i++) {
    const fila = document.createElement("tr");
    malla.forEach(columna => {
      const celda = document.createElement("td");
      const ramo = columna[i];
      if (ramo) {
        celda.innerHTML = `<strong>${ramo.nombre}</strong><br><small>${ramo.creditos} SCT</small>`;
        celda.classList.add("ramo");
        celda.onclick = () => celda.classList.toggle("aprobado");
      }
      fila.appendChild(celda);
    });
    table.appendChild(fila);
  }

  container.appendChild(table);
}

document.addEventListener("DOMContentLoaded", generarTabla);
