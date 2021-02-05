import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ReloadComponent, AddComponent, EditComponent, DeleteComponent } from "../../components";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Col, Row } from 'react-bootstrap';

const { SearchBar } = Search;

function UnitTable(props) {
    const columns = [
        {
            dataField: 'id',
            text: '#',
            headerStyle: () => {
                return {
                    width: "5%",
                    backgroundColor: 'black',
                    color: 'white'
                }
            },
            sort: true
        },
        {
            dataField: 'code',
            text: 'Code',
            headerStyle: () => {
                return {
                    backgroundColor: 'black',
                    color: 'white'
                }
            },
            sort: true
        },
        {
            dataField: 'description',
            text: 'Description',
            headerStyle: () => {
                return {
                    backgroundColor: 'black',
                    color: 'white'
                }
            },
            sort: true
        }, {
            dataField: 'link',
            text: 'Action',
            headerStyle: () => {
                return {
                    width: "25%",
                    backgroundColor: 'black',
                    color: 'white'
                }
            },
            formatter: (rowContent, row) => {
                return (
                    <Container>
                        <EditComponent url={`unit/${row.id}/edit`} />
                        <DeleteComponent onDeleted={props.onDeleted} id={row.id} />
                        {/* <button onClick={() => props.onDeleted(row.id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /> Delete </button> */}
                    </Container>
                )
            }
        }
    ]

    const defaultSorted = [{
        dataField: 'id',
        order: 'asc'
    }];

    return (
        <ToolkitProvider
            keyField='id'
            bootstrap4
            data={props.units}
            columns={columns}
            defaultSorted={defaultSorted}
            search>
            {
                props => (
                    <div className="mb-5">
                        <Row>
                            <Col>
                                <AddComponent url="unit/add" />
                                <ReloadComponent onReload={props.onReload} />
                            </Col>
                            <Col>
                                <div className="float-right">
                                    <SearchBar {...props.searchProps} />
                                </div>
                            </Col>
                        </Row>
                        <div className="mt-2">
                            <BootstrapTable
                                striped
                                hover
                                pagination={paginationFactory()}
                                {...props.baseProps}
                            />
                        </div>
                    </div>
                )
            }
        </ToolkitProvider>
    )
}

export default UnitTable
