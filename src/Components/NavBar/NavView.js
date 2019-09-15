import React from 'react';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
function NavView(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				CEMAS FyE
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarColor02"
				aria-controls="navbarColor02"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarColor02">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="/centros">
							INICIO<span className="sr-only">(current)</span>
						</a>
					</li>
					{/* <li className="nav-item">
						<a className="nav-link" href="/cursos">
							Cursos
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/maestro">
							Maestros
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/asignaturas">
							Asignatura
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="/estudiantes">
							Estudiantes
						</a>
					</li> */}
					<li className="nav-item">
						<a className="nav-link" href="/calificaciones">
							Calificaciones
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">
							Reporte de Calificaciones
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">
							Estadisticas
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavView;
