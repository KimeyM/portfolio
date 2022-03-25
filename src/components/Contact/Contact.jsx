import './Contact.css'
import React, { useState } from "react";
import axios from "axios";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Toaster, toast} from "react-hot-toast";

window.addEventListener('scroll', function(){
  let animacion = document.getElementById('contacto')
  let posicionObj1 = animacion.getBoundingClientRect().top
  let tamañoPantalla = window.innerHeight

  if (posicionObj1 < tamañoPantalla){
      animacion.style.animation = 'slide-in-bottom 2s ease-out'
  }
})

function Contact() {

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xeqnlqll", 
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, <p className='enviado'>Enviado con éxito! Te responderé pronto</p>, form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <div id="contacto" >
      <div className="title"> <hr /></div>
      <div className="tit">CONTÁCTAME</div>
      <br />
      <div id='contact'>
        <div className="grid">
            <div id='lat' className="lateral">
                <div className="df2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ddcfcf" className="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                </div>
                <div className="df7">
                  <a href="https://api.whatsapp.com/send?phone=+543415994708" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none', color:"#ddcfcf" }} > +54 9 341 599-4708 </a>
                </div>
                <div className="df3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ddcfcf" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                </div>
                <div className="df8">
                  <CopyToClipboard text='kimey.-@hotmail.com'>
                  <p onClick={() => toast.success("Copiado al portapapeles", {
                                      position: "top-center",
                                      style: {
                                        color: '#fff',
                                        background: '#000'
                                      }
                                    }) }>
                    kimey.-@hotmail.com
                  </p> 
                  </CopyToClipboard>
                  <Toaster />
                </div>
            </div>
            <div id='big' className="big">
              <form onSubmit={handleOnSubmit} autocomplete="off">
                <div className="name">
                  <input id="Nombre" type="text" name="Nombre" placeholder="Nombre" required />
                </div>
                <div className="email">
                  <input id="Email" type="email" name="Email" placeholder="Email" required />
                </div>
                <div className="asunto">
                  <input id="Asunto" type="text" name="Asunto" placeholder="Asunto" required />
                </div>
                <div className="msje">
                  <textarea id="Mensaje" name="Mensaje" placeholder="Mensaje" cols="30" rows="8" required></textarea>
                </div>
                <button className="btn" type="submit" disabled={serverState.submitting}>
                  Enviar
                </button>
                {serverState.status && (
                  <p id='enviadoexito' className={!serverState.status.ok ? "errorMsg" : ""}>
                    {serverState.status.msg}
                  </p>
                )}
              </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;