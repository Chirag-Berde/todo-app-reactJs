import * as React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
const TodoList = (props) => {
    return (
        <>
                <section id='todo-list'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Task Name</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.tasks.map((item, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td> <Button onClick={() => props.onEdit(item.id, item.name)} variant="primary">Edit</Button></td>
                                    <td> <Button onClick={() => props.onDelete(item.id)} variant="primary">Delete</Button></td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </section>
        </>
    )
}

export default TodoList