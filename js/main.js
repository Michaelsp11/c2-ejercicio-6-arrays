const pacientes = [{
        paciente: {
            nombre: "Manuel",
            edad: 25,
            sexo: "H",
        },
        diasIngresado: 3,
        dieta: "Baja en fibra",
    },
    {
        paciente: {
            nombre: "Marta",
            edad: 56,
            sexo: "M",
        },
        diasIngresado: 5,
        dieta: "Diabetes",
    },
    {
        paciente: {
            nombre: "Julia",
            edad: 38,
            sexo: "M",
        },
        diasIngresado: 1,
        dieta: "Sin sal",
    },
    {
        paciente: {
            nombre: "Esteban",
            edad: 40,
            sexo: "H",
        },
        diasIngresado: 3,
        dieta: "Diabetes",
    },
    {
        paciente: {
            nombre: "Arturo",
            edad: 19,
            sexo: "H",
        },
        diasIngresado: 2,
        dieta: "Baja en fibra",
    },
    {
        paciente: {
            nombre: "Isabel",
            edad: 63,
            sexo: "M",
        },
        diasIngresado: 6,
        dieta: "Sin sal",
    },
];
const nMayoresEdad = (pacientes) =>
    pacientes.filter(({ paciente } = ficha) => paciente.edad >= 18).length;
const nHombresDiabeticos = (pacientes) =>
    pacientes.filter(
        (ficha) => ficha.paciente.sexo === "H" && ficha.dieta === "Diabetes"
    ).length;
const totalDiasIngreso = (pacientes) =>
    pacientes.reduce((acumulador, ficha) => acumulador + ficha.diasIngresado, 0);
const mediaEdadMujeres = (pacientes) =>
    pacientes
    .filter(({ paciente } = ficha) => paciente.sexo === "M")
    .reduce(
        (acumulador, { paciente } = ficha, i, ficha) =>
        acumulador + paciente.edad / ficha.length,
        0
    );
const analisisPacientes = (pacientes) => ({
    nPacientes: pacientes.length,
    nMayoresEdad: nMayoresEdad(pacientes),
    nHombresDiabeticos: nHombresDiabeticos(pacientes),
    totalDiasIngreso: totalDiasIngreso(pacientes),
    mediaEdadMujeres: mediaEdadMujeres(pacientes),
});
console.log(analisisPacientes(pacientes));