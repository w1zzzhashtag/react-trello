import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'

import { rootState } from './../../redux/reducers/rootReducer'

import { selectActallyDashboard } from './../../redux/actions/dashboardListAction'
import { toggleCompletedTodo, removeTodo } from './../../redux/actions/todosActions'
import {addSection} from './../../redux/actions/sectionsAction'

import { AddTodo, Todo } from './children/'


const DashboardActually = () => {
    const { id }: any = useParams()
    const dispatch = useDispatch()

    const imageUrl = 'https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    const [countSections, setCountSections] = React.useState(0)
    const [sectionAddPopupIsOpen, setSectionAddPopupIsOpen] = React.useState(false)
    const [sectionAddValue, setSectionAddValue] = React.useState('')

    const actuallyDashboard = useSelector((state: rootState) => state.dashboardList.current)
    const sections = useSelector((state: rootState) => state.sections.items)
    const todos = useSelector((state: rootState) => state.todos.items)


    React.useEffect(() => {
        dispatch(selectActallyDashboard(Number(id)))
    }, [])

    React.useEffect(() => {
        sections.map(section => {
            if (section.dashboardId === Number(id)) {
                setCountSections(prev => prev + 1)
            }
        })
    }, [id, sections])

    // Управление измененного значения в todo
    const todoCompletedChange = (id: number) => {
        dispatch(toggleCompletedTodo(id))
    }

    // Удаление todo
    const todoRemoveClick = (id: number, name: string) => {
        if (window.confirm(`You really want remove '${name}'`)) {
            dispatch(removeTodo(id))
        }
    }

    // Открытие-Закрытие popup для добавяления новой секции
    const openPopupSectionAdd = () => {
        setSectionAddPopupIsOpen(!sectionAddPopupIsOpen)
    }

    // Управление измененного значения в поле "наименование" новой секции
    const handleChangeSectionAddValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSectionAddValue(event.target.value)
    }

    // Создание секции
    const handleClickSectionAdd = () => {
        if(sectionAddValue) {
            dispatch(addSection(Number(id), sectionAddValue))
            setSectionAddValue('')
            setSectionAddPopupIsOpen(false)
            setCountSections(0)
        }
    }

    return (
        <>
            {actuallyDashboard?.map(dashboard => (
                <div key={dashboard.id} className="d-act">
                    <NavLink
                        to="/"
                        exact
                        className="d-act__back-btn col btn-floating btn-large waves-effect waves-light red"
                        title="Back to start page">
                        <i className="material-icons">navigate_before</i>
                    </NavLink>
                    <button 
                        className="d-act__add-section-btn col btn-floating btn-large waves-effect waves-light red" 
                        title="Create section"
                        onClick={openPopupSectionAdd}>
                        <i className="material-icons">add</i>
                    </button>

                    <div className={classNames({
                        ['input-field d-act__section-popup']: true,
                        ['d-act__section-popup--active'] : sectionAddPopupIsOpen
                    })}>
                        <input 
                            type="text" 
                            id="name"
                            placeholder="Enter section name"
                            onChange={handleChangeSectionAddValue}
                            value={sectionAddValue} 
                        />
                        <button className="btn red" onClick={handleClickSectionAdd}>Add</button>
                    </div>

                    <img className="d-act__img"
                        src={dashboard.imageUrl ? dashboard.imageUrl : imageUrl}
                        alt={dashboard.name} />

                    <div className="d-act__container">
                        <div className="container">
                            <h1>{dashboard.name}</h1>

                            <p>{dashboard.desc}</p>

                            <div
                                className="d-act__inner"
                                style={{ width: `${330 * (countSections === 0 ? 1 : countSections)}px` }}
                            >
                                {sections.map(section => {
                                    if (section.dashboardId === dashboard.id) {
                                        return (
                                            <div className="d-act__section" key={section.id}>
                                                <h6 className="d-act__section-title">
                                                    {section.name}
                                                </h6>

                                                {todos.map(todo => {
                                                    if (todo.dashboardId === dashboard.id && todo.sectionId === section.id) {
                                                        return <Todo
                                                            key={todo.id}
                                                            data={todo}
                                                            onRemove={todoRemoveClick}
                                                            onToggle={todoCompletedChange} />
                                                    }
                                                })}
                                                <AddTodo dashboardId={dashboard.id} sectionId={section.id} />
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default DashboardActually
