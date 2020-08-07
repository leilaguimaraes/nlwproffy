import React from 'react'
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGXOAQJ7UAQAw/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=ux8Up_Moi8aogwi0wO0LLgT_kSqVAWGqPlvRvP-c3lw" alt="Leila Guimarães"/>
            <div>
                <strong>Leila Guimarães</strong>
                <span>Programação</span>
            </div>
        </header>
        <p>
            Arquiteta e Urbanista | Desenvolvedora Front-End. 
            Apaixonada por programação e Design. Aulas divertidas e Ilustradas!
        </p>
        <footer>
            <p>
                Preço/hora 
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}
export default TeacherItem;