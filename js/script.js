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

});
