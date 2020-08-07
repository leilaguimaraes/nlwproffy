import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/input'
import './styles.css'
import TeacherItem from '../../components/TeacherItem'
import Select from '../../components/Select'

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria"/>
                    <Input name="week_day" label="Dia da Semana"/>
                    <Input name="time" label="Hora" type= "time"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList