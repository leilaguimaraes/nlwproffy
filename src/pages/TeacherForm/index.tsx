import React from 'react'
import PageHeader from '../../components/PageHeader'
import './styles.css'
import Input from "../../components/input"
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/TextArea'
import Select from "../../components/Select"

function TeacherForm(){
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que incrível que você quer dar aulas."
            description= "O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="Whatsapp"/>
                    <Textarea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a Aula</legend>

                    <Select 
                    name="subject" 
                    label="Matéria"
                    options={[
                        {value: 'Artes', label:'Artes'},
                        {value: 'Matemática', label:'Matemática'},
                        {value: 'Biologia', label:'Biologia'},
                        {value: 'Programação', label:'Programação'},
                        {value: 'História', label:'História'},
                        {value: 'Física', label:'Física'},
                    ]}
                    />

                    <Input name="cost" label="Custo da sua Hora por Aula"/>

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar Cadastro</button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm