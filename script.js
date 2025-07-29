// Malla en formato por columnas (tipo tabla)

const malla = [
  [ // Semestre I
    { nombre: "Administración General", codigo: "610184", creditos: 5 },
    { nombre: "Derecho Empresarial", codigo: "613042", creditos: 3 },
    { nombre: "Álgebra I", codigo: "220118", creditos: 6 },
    { nombre: "Cálculo I", codigo: "220120", creditos: 6 },
    { nombre: "Habilidades Sociales", codigo: "612109", creditos: 4 },
    { nombre: "Contabilidad I", codigo: "612167", creditos: 6 },
    { nombre: "Formación Integral I", codigo: "340555", creditos: 3 },
  ],
  [ // Semestre II
    { nombre: "Administración Estratégica", codigo: "610185", creditos: 6 },
    { nombre: "Sistemas de Información", codigo: "620430", creditos: 4 },
    { nombre: "Álgebra II", codigo: "220119", creditos: 6 },
    { nombre: "Cálculo II", codigo: "220121", creditos: 6 },
    { nombre: "Introducción a la Economía", codigo: "611030", creditos: 3 },
    { nombre: "Contabilidad II", codigo: "612168", creditos: 6 },
    { nombre: "Inglés I", codigo: "340209", creditos: 4 },
  ],
  [ // Semestre III
    { nombre: "Marketing I", codigo: "610186", creditos: 5 },
    { nombre: "Comportamiento Organizacional", codigo: "610189", creditos: 4 },
    { nombre: "Estadística I", codigo: "220122", creditos: 6 },
    { nombre: "Macroeconomía I", codigo: "611032", creditos: 6 },
    { nombre: "Microeconomía I", codigo: "611031", creditos: 6 },
    { nombre: "Costos de Corto Plazo", codigo: "612169", creditos: 5 },
    { nombre: "Inglés II", codigo: "340210", creditos: 4 },
  ],
  [ // Semestre IV
    { nombre: "Marketing II", codigo: "610187", creditos: 5 },
    { nombre: "Gestión de Recursos Humanos I", codigo: "610190", creditos: 5 },
    { nombre: "Estadística II", codigo: "220123", creditos: 6 },
    { nombre: "Macroeconomía II", codigo: "611034", creditos: 6 },
    { nombre: "Microeconomía II", codigo: "611033", creditos: 6 },
    { nombre: "Gestión Financiera de Corto Plazo", codigo: "611035", creditos: 5 },
    { nombre: "Inglés para Negocios I", codigo: "612175", creditos: 4 },
  ],
  [ // Semestre V
    { nombre: "Gestión de Comercio Exterior", codigo: "610188", creditos: 5 },
    { nombre: "Desarrollo Organizacional", codigo: "610193", creditos: 5 },
    { nombre: "Econometría", codigo: "611036", creditos: 6 },
    { nombre: "Economía Internacional", codigo: "611037", creditos: 4 },
    { nombre: "Control de Gestión", codigo: "612184", creditos: 5 },
    { nombre: "Mercados de Capitales", codigo: "611038", creditos: 5 },
    { nombre: "Inglés para Negocios II", codigo: "612181", creditos: 4 },
  ],
  [ // Semestre VI
    { nombre: "Electivo I", codigo: "611039", creditos: 5 },
    { nombre: "Electivo II", codigo: "610195", creditos: 4 },
    { nombre: "Administración de la Producción", codigo: "610191", creditos: 6 },
    { nombre: "Responsabilidad Social", codigo: "612194", creditos: 6 },
    { nombre: "Dirección Estratégica I", codigo: "612195", creditos: 6 },
    { nombre: "Formulación y Evaluación de Proyectos", codigo: "612193", creditos: 6 },
    { nombre: "Inglés para Negocios III", codigo: "612182", creditos: 4 },
  ],
  [ // Semestre VII
    { nombre: "Gestión de Recursos Humanos II", codigo: "610192", creditos: 5 },
    { nombre: "Electivo III", codigo: "610196", creditos: 4 },
    { nombre: "Electivo IV", codigo: "610198", creditos: 4 },
    { nombre: "Dirección Estratégica II", codigo: "612196", creditos: 6 },
    { nombre: "Gestión Financiera de Largo Plazo", codigo: "611041", creditos: 6 },
    { nombre: "Formación Integral III", codigo: "340211", creditos: 4 },
    { nombre: "Oferta Institucional II", codigo: "340555", creditos: 3 },
  ],
  [ // Semestre VIII
    { nombre: "Electivo V", codigo: "610199", creditos: 4 },
    { nombre: "Habilitación Profesional", codigo: "610194", creditos: 4 },
    { nombre: "Taller Integrado", codigo: "610205", creditos: 5 },
    { nombre: "Práctica Profesional I", codigo: "612183", creditos: 5 },
    { nombre: "Actividades Extraprogramáticas III", codigo: "350200", creditos: 2 },
    { nombre: "Oferta Institucional III", codigo: "340555", creditos: 3 },
  ],
  [ // Semestre IX
    { nombre: "Práctica Profesional II", codigo: "612197", creditos: 11 },
    { nombre: "Actividades Extraprogramáticas IV", codigo: "350200", creditos: 2 },
    { nombre: "Oferta Institucional IV", codigo: "340555", creditos: 3 },
  ],
  [ // Semestre X
    { nombre: "Licenciatura", codigo: "", creditos: 28 },
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
        celda.innerHTML = `<strong>${ramo.nombre}</strong><br><small>${ramo.codigo || 'N/A'} - ${ramo.creditos} SCT</small>`;
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
