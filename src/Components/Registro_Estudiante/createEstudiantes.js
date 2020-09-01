


function createEstudiantes(estudiantes) {


    return Array(estudiantes * 1).fill(1).map((e, i) => {


        return {
            numero: i + 1,
            nombres: '',
            apellidos: '',
            correo: '',
            sexo: '',
            edad: '',
            fecha_nacimiento: '',
            activo: true
        }


    })

}

export default createEstudiantes;