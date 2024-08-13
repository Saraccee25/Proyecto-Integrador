window.addEventListener("load", function () {

    document.querySelectorAll('.gestion').forEach(function (element) {
        element.addEventListener('mouseover', function () {
            this.classList.add('active');
        });

        element.addEventListener('mouseout', function () {
            this.classList.remove('active');
        });
    });

    // Agregar odontologo
    document.getElementById('agregar-odontologo').addEventListener('click', function () {
        document.querySelector('main').innerHTML = `
            <div class="card">
                <h1>Agregar Odontólogo</h1>
                <form id="agregar-odontologo-form">
                    <div>
                        <label for="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" required>
                    </div>
                    <div>
                        <label for="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required>
                    </div>
                    <div>
                        <label for="matricula">Matrícula:</label>
                        <input type="text" id="matricula" name="matricula" required>
                    </div>
                    <div>
                        <button type="submit">Agregar</button>
                    </div>
                </form>
            </div>
        `;
    });

    // Modificar odontologo
    document.getElementById('modificar-odontologo').addEventListener('click', function () {
        document.querySelector('main').innerHTML = `
            <div class="card">
                <h1>Modificar Odontólogo</h1>
                <form id="modificar-odontologo-form">
                    <div>
                        <label for="id">ID del Odontólogo:</label>
                        <input type="text" id="id" name="id" required>
                    </div>
                    <div>
                        <label for="campo">Campo a Modificar:</label>
                        <select id="campo" name="campo" required>
                            <option value="apellido">Apellido</option>
                            <option value="nombre">Nombre</option>
                            <option value="matricula">Matrícula</option>
                        </select>
                    </div>
                    <div>
                        <label for="nuevo-dato">Nuevo Valor:</label>
                        <input type="text" id="nuevo-dato" name="nuevo-dato" required>
                    </div>
                    <div>
                        <button type="submit">Modificar</button>
                    </div>
                </form>
            </div>
        `;
    });

    //agregar paciente
    document.getElementById('agregar-paciente').addEventListener('click', function () {
        document.querySelector('main').innerHTML = `
            <div class="card">
                <h1>Agregar Paciente</h1>
                <form id="agregar-paciente-form">
                    <div>
                        <label for="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required>
                    </div>
                    <div>
                        <label for="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" required>
                    </div>
                    <div>
                        <label for="domicilio">Domicilio:</label>
                        <input type="text" id="domicilio" name="domicilio" required>
                    </div>
                    <div>
                        <label for="dni">DNI:</label>
                        <input type="text" id="dni" name="dni" required>
                    </div>
                    <div>
                        <label for="fecha-alta">Fecha de Alta:</label>
                        <input type="date" id="fecha-alta" name="fecha-alta" required>
                    </div>
                    <div>
                        <button type="submit">Agregar</button>
                    </div>
                </form>
            </div>
        `;
    });
    
    //modificar paciente
    document.getElementById('modificar-paciente').addEventListener('click', function () {
        document.querySelector('main').innerHTML = `
            <div class="card">
                <h1>Modificar Paciente</h1>
                <form id="modificar-paciente-form">
                    <div>
                        <label for="id">ID del Paciente:</label>
                        <input type="text" id="id" name="id" required>
                    </div>
                    <div>
                        <label for="campo">Campo a Modificar:</label>
                        <select id="campo" name="campo" required>
                            <option value="nombre">Nombre</option>
                            <option value="apellido">Apellido</option>
                            <option value="domicilio">Domicilio</option>
                            <option value="dni">DNI</option>
                            <option value="fecha-alta">Fecha de Alta</option>
                        </select>
                    </div>
                    <div>
                        <label for="nuevo-dato">Nuevo Valor:</label>
                        <input type="text" id="nuevo-dato" name="nuevo-dato" required>
                    </div>
                    <div>
                        <button type="submit">Modificar</button>
                    </div>
                </form>
            </div>
        `;
    });
    
    

});
