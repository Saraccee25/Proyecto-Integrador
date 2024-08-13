window.addEventListener("load", function () {

    document.querySelectorAll('.gestion').forEach(function (element) {
        element.addEventListener('mouseover', function () {
            this.classList.add('active');
        });

        element.addEventListener('mouseout', function () {
            this.classList.remove('active');
        });
    });

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
    

});
