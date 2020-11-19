import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NuevaCuenta = () => {
    
    //State apra iniciar sesión
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        email: '',
        password: '',
        confirmarPass: ''

    });

    //Extraer usuario
    const { nombre, email, password, confirmarPass } = usuario;

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

        //Validar Password mínimo 6 caracteres

        //Validar que los dos Passwrod deben ser iguales

        //Pasarlo al action

    }

    return (  

        <div className="form-usuario">
            <div className="contenedor-form sombra-dark ">
                <h1>Obtener una Cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                        <i class="fas fa-user fa-2x"></i>
                    </div>
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
                        <i class="fa fa-unlock-alt fa-2x"></i>

                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmarPass">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmarPass"
                            name="confirmarPass"
                            placeholder="Repite tu password"
                            value={confirmarPass}
                            onChange={onChange}
                        />
                        <i class="fas fa-lock fa-2x"></i>

                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                          value="Registrarme"  />
                    
                    </div>

                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a iniciar Sesión
                </Link>

            </div>
        
        </div>

    );
}
 
export default NuevaCuenta;


