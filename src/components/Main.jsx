import React from 'react'
import SoftSkills from './SoftSkills'
import Estudios from './Estudios'
import '../css/stylePaginaPrincipal.css'

const MainInicio = () => {
    return (
        <main>
            <div class="contenedorMain">
                <div class="cont">
                    <div id="sobreMi" class="tarjeta">
                        <h2>Sobre Mí</h2>
                        <p>Soy Juan Manuel Agostino Colombres, tengo 24 años y estudio para ser programador en la Facultad Regional Tucumán Tecnológia Nacional, me interesa todo lo que
                            esta relacionado con la tecnología. Tengo experiencia con HTML, CSS, JavaScript, PHP, SQL y C#.</p>
                    </div>

                    <SoftSkills/>

                    <div class="tarjeta">
                        <h2>Experiencia Laboral</h2>
                        <p><strong>Desarrollador Web - Freelancer</strong></p>
                        <p>Responsable del desarrollo y mantenimiento de sitios web utilizando tecnologías modernas como HTML, CSS,
                            JavaScript y React. Implementación de mejoras en la usabilidad y rendimiento de plataformas digitales.
                        </p>
                        <p><strong>Analista de Datos - Data Insights</strong></p>
                        <p>Encargado de la recopilación y análisis de datos para la toma de decisiones estratégicas. Creación de
                            informes detallados con visualizaciones interactivas y modelos predictivos para optimizar procesos.</p>
                    </div>

                    <Estudios/>

                    <div id="contacto" class="tarjeta">
                        <h2>Contacto</h2>
                        <p><strong>Email:</strong> Juanmauelagostino@gmail.com<br /> <strong>Tel:</strong> +54 381 6 848 399</p>
                    </div>
                    <div id="contacto" class="tarjeta">
                        <h2>Contacto</h2>
                        <p><strong>Email:</strong> Juanmauelagostino@gmail.com<br /> <strong>Tel:</strong> +54 381 6 848 399</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainInicio
