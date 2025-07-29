body {
  font-family: Arial, sans-serif;
  background-color: #fff0f5;
  color: #4b2c2c;
  padding: 2rem;
}

h1 {
  text-align: center;
  color: #c71585;
  margin-bottom: 2rem;
}

table.malla-tabla {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

table.malla-tabla th {
  background-color: #f8bbd0;
  color: #4b2c2c;
  padding: 0.5rem;
  border: 1px solid #f4a0bd;
}

table.malla-tabla td {
  vertical-align: top;
  padding: 0.5rem;
  border: 1px solid #f4a0bd;
  background-color: #ffe6f0;
  transition: background 0.3s ease;
  cursor: pointer;
  font-size: 0.85rem;
}

table.malla-tabla td:hover {
  background-color: #fce4ec;
}

table.malla-tabla td.aprobado {
  background-color: #f3d1e2;
  box-shadow: inset 0 0 0 2px #e91e63;
}
