import "./style.css";

console.log("Hello Typescript!");

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  //////////////////////////   APARTADO 1   //////////////////////////

  let listaPacientesPediatria: Pacientes[] = [];

  const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]) => {
    listaPacientesPediatria.push(...pacientes);
  };

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad == "Pediatra") {
      obtenPacientesAsignadosAPediatria([pacientes[i]]);
    }
  }

  let listaPacientesPediatriaMenoresDe10: Pacientes[] = [];

  const obtenPacientesAsignadosAPediatriaMenoresDe10 = (
    pacientes: Pacientes[]
  ) => {
    listaPacientesPediatriaMenoresDe10.push(...pacientes);
  };

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad == "Pediatra" && pacientes[i].edad < 10) {
      obtenPacientesAsignadosAPediatriaMenoresDe10([pacientes[i]]);
    }
  }

  console.log("Pediatria: ", listaPacientesPediatria);
  console.log("Pediatria, menores de 10: ", listaPacientesPediatriaMenoresDe10);

  //////////////////////////   APARTADO 2   //////////////////////////

  const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo = false;
    let pacientesUrgencias = [];

    activarProctolo = true;
    pacientesUrgencias.push(...pacientes);
    return activarProctolo;
    console.log("Protocolo de urgencia activado? ", activarProctolo);
  };
  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].temperatura > 39 &&
      pacientes[i].frecuenciaCardiaca > 100
    ) {
      activarProtocoloUrgencia([pacientes[i]]);
    }
  }
});
