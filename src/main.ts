import "./style.css";

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

  const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]) => {
    let listaPacientesPediatria: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad == "Pediatra") {
        listaPacientesPediatria.push(pacientes[i]);
      }
    }
    console.log("Pediatria: ", listaPacientesPediatria);
  };
  obtenPacientesAsignadosAPediatria(pacientes);

  const obtenPacientesAsignadosAPediatriaMenoresDe10 = (
    pacientes: Pacientes[]
  ) => {
    let listaPacientesPediatriaMenoresDe10: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad == "Pediatra" && pacientes[i].edad < 10) {
        listaPacientesPediatriaMenoresDe10.push(pacientes[i]);
      }
    }
    console.log(
      "Pediatria, menores de 10: ",
      listaPacientesPediatriaMenoresDe10
    );
  };
  obtenPacientesAsignadosAPediatriaMenoresDe10(pacientes);

  //////////////////////////   APARTADO 2   //////////////////////////

  const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo = false;
    for (let i = 0; i < pacientes.length; i++) {
      if (
        pacientes[i].temperatura > 39 &&
        pacientes[i].frecuenciaCardiaca > 100
      ) {
        activarProctolo = true;
        break;
      }
    }
    return activarProctolo;
  };

  console.log(
    "Protocolo de urgencia activado? ",
    activarProtocoloUrgencia(pacientes)
  );

  //////////////////////////   APARTADO 3   //////////////////////////

  const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    let pacientesPediatraCambiadosMedicoFamilia: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
      pacientesPediatraCambiadosMedicoFamilia.push(pacientes[i]);
      if (pacientes[i].especialidad == "Pediatra") {
        Object.defineProperty(
          pacientesPediatraCambiadosMedicoFamilia[i],
          "especialidad",
          { value: "Medico de familia" }
        );
      }
    }
    return pacientesPediatraCambiadosMedicoFamilia;
  };
  console.log(
    "Pacientes con medicos reasignados: ",
    reasignaPacientesAMedicoFamilia(pacientes)
  );

  //////////////////////////   APARTADO 4   //////////////////////////

  //////////////-------------DOUBLECHECK----------------////////////////////
  //////////////////////////reasignaPacientesAMedicoFamilia modifies especialidad globally
  ////////////////////////////////////////////////////

  const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let hayPacientes: boolean = false;
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad == "Pediatra") {
        hayPacientes = true;
        break;
      }
    }
    return hayPacientes;
  };
  console.log(
    "Hay pacientes para pediatria: ",
    HayPacientesDePediatria(pacientes)
  );

  //////////////////////////   APARTADO 5   //////////////////////////

  interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }

  const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
  ): NumeroPacientesPorEspecialidad => {
    let numeroPacientesPorEspeciadadlidad: NumeroPacientesPorEspecialidad = {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0,
    };
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad == "Medico de familia") {
        numeroPacientesPorEspeciadadlidad.medicoDeFamilia += 1;
      } else if (pacientes[i].especialidad == "Pediatra") {
        numeroPacientesPorEspeciadadlidad.pediatria += 1;
      } else if (pacientes[i].especialidad == "Cardiólogo") {
        numeroPacientesPorEspeciadadlidad.cardiologia += 1;
      }
    }
    return numeroPacientesPorEspeciadadlidad;
  };
  console.log(
    "Numero de pacientes por expecialidad: ",
    cuentaPacientesPorEspecialidad(pacientes)
  );
});
