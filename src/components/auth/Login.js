import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    
    //State apra iniciar sesión
    const [usuario, guardarUsuario] = useState({

        email: '',
        password: ''

    });

    //Extraer usuario
    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    //Cuando el usuario inicia sesión
    const onSubmit = e => {
        e.preventDefault();

        //Validar que no haya campos vacíos


        // Pasarlo al action

    }

    return (  

        <div className="form-usuario">
            <div className="contenedor-form sombra-dark ">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                        <i class="fas fa-envelope fa-2x"></i>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                        />
                        <i class="fas fa-lock fa-2x"></i>

                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                          value="Iniciar Sesión"  />
                    
                    </div>

                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>

            </div>
        
        </div>

    );
}
 
export default Login;



