import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ReloadComponent, AddComponent, EditComponent, DeleteComponent } from "../../components";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Col, Row } from 'react-bootstrap';

const { SearchBar } = Search;

function ItemTable(props) {
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
            dataField: 'name',
            text: 'Name',
            headerStyle: () => {
                return {
                    backgroundColor: 'black',
                    color: 'white'
                }
            },
            sort: true
        },
        {
            dataField: 'price',
            text: 'Price',
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
            text: 'Action', headerStyle: () => {
                return {
                    width: "25%",
                    backgroundColor: 'black',
                    color: 'white'
                }
            },
            formatter: (rowContent, row) => {
                return (
                    <Container>
                        <EditComponent url={`item/${row.id}/edit`} />
                        <DeleteComponent onDeleted={props.onDeleted} id={row.id} />

                        {/* <Link className="btn btn-warning mr-2" to={`item/${row.id}/edit`}> Edit </Link>
                        <button onClick={() => props.onDeleted(row.id)} className="btn btn-danger"> Delete </button> */}
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
        <div>
            <ToolkitProvider
                bootstrap4
                keyField="id"
                data={props.items}
                columns={columns}
                defaultSorted={defaultSorted}
                striped
                hover
                condensed
                search
            >
                {
                    props => (
                        <div className="mb-5">
                            <Row>
                                <Col>
                                    <AddComponent url="item/add" />
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
                                    {...props.baseProps}
                                    pagination={paginationFactory()}
                                />
                            </div>
                        </div>
                    )
                }
            </ToolkitProvider>
        </div>
    )
}

export default ItemTable
