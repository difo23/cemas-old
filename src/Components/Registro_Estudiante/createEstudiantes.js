


function createEstudiantes(estudiantes) {


    return Array(estudiantes * 1).fill(1).map((e, i) => {


        return {
            numero: i + 1,
            nombres: '',
            apellidos: '',
            rne: '',
            telefono: '',
            sexo: '',
            edad: '',
            fecha_nacimiento: '',
            estado: true

        }


    })

}

export default createEstudiantes;