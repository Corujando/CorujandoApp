import React from 'react'
import './CRPopUp.scss'

import jojoAssustado from '../../../assets/jojo-assustado.png'

export function CRPopUp() {
  return (
    <div className='modal-popup'>
      <div className='modal-popup_content'>
          <div className="modal-popup_content_title">
            <img src={jojoAssustado} alt="Jojo Assustado" className='modal-popup_content_title_img'/>
            <span className='modal-popup_content_title_text'>Precisa de ajuda?</span>
          </div>
          <div className="modal-popup_content_principal">
            <span className='modal-popup_content_principal_sub-title'>Você está perto de completar 5h30 de viagem e estamos chegando em um ponto de descanso, que tal uma pausa?</span>
            <button className='modal-popup_content_principal_button_blue'>Rota para unidade de atendimento mais próxima</button>
            <button className='modal-popup_content_principal_button_white'>Fechar</button>
          </div>
      </div>
    </div>
  )
}