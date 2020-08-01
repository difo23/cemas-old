import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authenticationService } from '../../_services';
import { history } from '../../_helpers';

export const Navbar = () => {
	let user = authenticationService.currentUserValue;
	if (typeof user === 'string') user = JSON.parse(user);

	const logout = () => {
		authenticationService.logout();
		history.push('/login');
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link className="navbar-brand" to="/calificaciones">
				CEMAS
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/calificaciones">
						Académicas
					</NavLink>

					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/opcion1">
						Técnicas
					</NavLink>

					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/opcion2">
						Registro
					</NavLink>

					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/opcion3">
						Profesor
					</NavLink>

					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/opcion4">
						Reportes
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
				<ul className="navbar-nav ml-auto">
					<NavLink activeClassName="active" className="nav-item nav-link" exact to={`/user/${user._id}`}>
						{`Bienvenido ${user.firstName} ${user.lastName} `}
					</NavLink>
					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/login" onClick={logout}>
						Salir
					</NavLink>
				</ul>
			</div>
		</nav>
	);
};
