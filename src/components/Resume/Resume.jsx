import React from "react";
import './Resume.css'
import cv from '../../img/KimeyMastrángelo-CV-FullStackWebDeveloper.pdf'

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('resume')
    let posicionObj1 = animacion.getBoundingClientRect().top
    let tamañoPantalla = window.innerHeight

    if (posicionObj1 < tamañoPantalla){
        animacion.style.animation = 'slide-in-bottom 2s ease-out'
    }
})

export default function Resume() {
    return (
        <div id='resume'>
            <div className="title"><hr /></div>
            <div className="proyectos">
                <div className="tit">EXPERIENCIA ACADÉMICA</div>
                <br />
                <div className="pflex">
                    <div className="proy">
                        <b>Proyecto "Countries App"</b>
                        <br /> <br /> Se trata de Single Page Application (SPA) de países con sus características detalladas, en la cual se accedió a dicha información a través de la API "Rest Countries".
                        <br /> <br /> Es posible buscar los países por nombre, ordenarlos, filtrarlos e incluso crear actividades turísticas a cada país mediante un formulario controlado.
                        <br /> <br /> CSS, ReactJs, Redux, NodeJs, Express, Sequelize, PostgreSQL
                        <br /> <br />
                        <a href="#projects">+</a>
                    </div>
                    <div className="proy">
                        <b>Proyecto "E-commerce"</b>
                        <br /> <br /> Equipo de 6 desarrolladores.
                        <br /> <br /> Participación en un proyecto ágil con sprints de una semana, presentando a un Product Owner el progreso de desarrollo de la app.
                        <br /> <br /> Utilizamos tres roles. invitado, usuario y administrador.
                        <br /> <br /> Se pueden registrar mediante usuario y contraseña o con su cuenta de Google.
                        <br /> <br /> El pago de las compras se realiza con MercadoPago.
                        <br /> <br /> CSS, ReactJs, Redux, NodeJs, Express, Sequelize, PostgreSQL, SCRUM, Digital Ocean, Heroku
                        <br /> <br />
                        <a href="#projects">+</a>
                    </div>
                </div>
            </div>
            <div className="estudios">
                <div className="titt">ESTUDIOS</div><br />
                <div className="henry">
                    <b>HENRY Bootcamp</b>  <br />
                    <br /> Full Stack Developer <br />
                    Más de 800hs de cursado teórico-práctico
                </div>
                <div className="autodidacta">
                    <b>Autodidacta</b>  <br />
                    <br /> Cursos realizados de HTML, CSS y Javascript
                </div>
                <div className="tzuzul">
                    <b>Tzuzul Code</b>  <br />
                    <br /> NextJs, Firebase y Tailwind
                </div>
            </div>
            <a className="btncv" href={cv} download>
                <button>Ver currículum</button>
            </a>
        </div>
    )}