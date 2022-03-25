import React from "react";
import './About.css'
// import img2 from '../../img/FotoCV.jpg'
import img2 from '../../img/z.jpg'
import html from '../../img/icons/html5.svg'
import css from '../../img/icons/css3.svg'
import js from '../../img/icons/javascript.svg'
import node from '../../img/icons/nodejs.svg'
import react from '../../img/icons/react.svg'
import redux from '../../img/icons/redux.svg'
import express from '../../img/icons/express.svg'
import sequelize from '../../img/icons/sequelize.svg'
import psql from '../../img/icons/postgresql.svg'
import git from '../../img/icons/git.svg'
import bootstrap from '../../img/icons/bootstrap.svg'
import github from '../../img/icons/github.png'
import next from '../../img/icons/next.svg'
import mui from '../../img/icons/mui.png'
import tailwind from '../../img/icons/tailwind.png'
import fb from '../../img/icons/firebase.svg'
import Up from "../Up/Up";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Toaster, toast} from "react-hot-toast";

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('about')
    let posicionObj1 = animacion.getBoundingClientRect().top
    let tamañoPantalla = window.innerHeight

    if (posicionObj1 < tamañoPantalla){
        animacion.style.animation = 'slide-in-bottom 2s ease-out'
    }
})

export default function About() {
    return (
        <div id='about' >
            <Up />
            <div className="title"><hr /></div> 
            <div className="asd2">DESARROLLADORA FULL STACK</div>
            <div className="parentabout">
                <div className="asd3">
                    <img src={img2} alt="photo"/>
                </div>
                <div className="asd4">
                    <div className="div1"><b>Habilidades:</b> </div>
                    <div className="div2"><img src={html} alt="icon" /></div>
                    <div className="div3"> HTML</div>
                    <div className="div4"><img src={css} alt="icon" /></div>
                    <div className="div5"> CSS</div>
                    <div className="div6"><img src={react} alt="icon" /></div>
                    <div className="div7"> React Js</div>
                    <div className="div8"><img src={redux} alt="icon" /></div>
                    <div className="div9"> Redux</div>
                    <div className="div10"><img src={bootstrap} alt="icon" />
                    </div><div className="div11">Bootstrap</div>
                    <div className="div12"><img src={mui} alt="icon" /></div>
                    <div className="div13">Material UI</div>
                    <div className="div14"><img src={next} alt="icon" /></div>
                    <div className="div15">Next Js</div>
                    <div className="div16"><img src={tailwind} alt="icon" /></div>
                    <div className="div17">Tailwind</div>
                    <div className="div18"><img src={js} alt="icon" /></div>
                    <div className="div19">Javascript</div>
                    <div className="div20"><img src={node} alt="icon" /></div>
                    <div className="div21">Node Js</div>
                    <div className="div22"><img src={express} alt="icon" className="ex" /></div>
                    <div className="div23">Express Js</div>
                    <div className="div24"><img src={sequelize} alt="icon" /></div>
                    <div className="div25">Sequelize</div>
                    <div className="div26"><img src={psql} alt="icon" /></div>
                    <div className="div27">PostgreSQL</div>
                    <div className="div28"><img src={git} alt="icon" /></div>
                    <div className="div29"> Git</div>
                    <div className="div30"><img src={fb} alt="icon" /></div>
                    <div className="div31"> Firebase</div>
                    <div className="div32"><img src={github} alt="icon" /></div>
                    <div className="div33"> Github</div>
                </div>
                <div className="asd5">
                    <b>Habilidades blandas:</b>
                    <br />
                    Proactividad <b> ● </b>
                    Trabajo en equipo<b> ● </b>
                    Comunicación  <b> ● </b>
                    Responsabilidad  <b> ● </b>
                    Creatividad  <b> ● </b>
                    Organización  <b> ● </b>
                    Autodidacta  <b> ● </b>
                    Liderazgo  <b> ● </b>
                    Orientación al cliente <b> ● </b>
                    Metodologías ágiles
                </div>
                <div className="lang">
                    <b>Lenguajes:</b>
                    <br />
                    Español (Nativo) <b> ● </b>
                    Inglés (Intermedio)
                </div>
                <div className="asd6">
                    <div className="d1"><b>Contact:</b></div>
                    <div className="d2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#40c267" className="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                    </div>
                    <div className="d7">
                        <a href="https://api.whatsapp.com/send?phone=+543415994708" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none', color:"#ddcfcf" }} > +54 9 341 599-4708 </a>
                    </div>
                    <div className="d3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                    </div>
                    <div className="d8">
                        <CopyToClipboard text='kimey.-@hotmail.com'>
                        <div onClick={() => toast.success("Copiado al portapapeles", {
                                            position: "top-center",
                                            style: {
                                                color: '#fff',
                                                background: '#000'
                                            }
                                            }) }>
                            kimey.-@hotmail.com
                        </div> 
                        </CopyToClipboard>
                        <Toaster />
                    </div>
                    <div className="d4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#054280" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                    </div>
                    <div className="d9">
                        <a href="https://www.linkedin.com/in/kimey-mastrangelo/" target="_blank" style={{ textDecoration: 'none', color:"#ddcfcf" }}>Kimey Mastrángelo</a>
                    </div>
                    <div className="d5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </div>
                    <div className="d10">
                        <a href="https://github.com/KimeyM" target="_blank" style={{ textDecoration: 'none', color:"#ddcfcf" }}>KimeyM</a>
                    </div>
                    <div className="d6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#c93033" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                    </div>
                    <div className="d11">Rosario, Santa Fe - Argentina</div>
                </div>
            </div>
        </div>
    )}