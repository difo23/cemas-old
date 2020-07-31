import { authenticationService } from '../../../_services';
import getPeriodos from './getPeridos';

export const getInitialValues = (params) => {
	let user = authenticationService.currentUserValue;
	if (typeof user === 'string') user = JSON.parse(user);

	const PERIODOS = getPeriodos();
	const TYPES = [ 'GENERALES', 'EXTRAORNIDARIAS', 'COMPLETIVAS', 'TECNICAS' ];
	const { CURSOS, ASIGNATURAS } = user.cursos_materias[0];

	console.log(user);
	const initialValues = {
		type: TYPES[0],
		periodo: PERIODOS[0],
		curso: CURSOS[0],
		asignatura: ASIGNATURAS[0],
		file: '',
		TYPES,
		PERIODOS,
		CURSOS,
		ASIGNATURAS,
		user
	};

	return initialValues;
};
