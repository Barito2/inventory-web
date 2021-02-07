import React, { useState, useEffect } from "react";
import { reduxForm, Field } from "redux-form";
import { Form } from 'react-bootstrap'
import { connect } from "react-redux";
import { findById, save } from "../../actions/unit"
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import { BackComponent } from "../../components";
import CodeValidation from "../../validations/CodeValidation";

const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    onChange,
    value,
    meta: { touched, error, warning },
}) => (
    <Row>
        <Col md="12">
            <Label htmlFor="{input}" className="col-form-label">
                {label}
            </Label>
        </Col>
        <Col md="12">
            <Input
                {...input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                readOnly={readOnly}
            ></Input>
            {touched &&
                ((error && <p style={{ color: "red" }}>{error}</p>) ||
                    (warning && <p style={{ color: "brown" }}>{warning}</p>))}
        </Col>
    </Row>
);

const UnitForm2 = ({
    isLoading, unit, savedUnit,
    findById, save
}) => {

    const { id } = useParams();
    const [data, setData] = useState({})
    const [redirect] = useState(false)
    const history = useHistory();

    useEffect(() => {
        if (id) {
            findById(parseInt(id))
        }

    }, [id, findById])

    useEffect(() => {
        //check if there is id and unit; if id exist then unit must also exist
        if (id && unit) {
            setData({
                ...unit
            })
        }
    }, [id, unit])

    useEffect(() => {
        if (savedUnit) {
            history.push('/units')
        }

    }, [savedUnit, history])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        save(data)
    }

    if (redirect === true) {
        return (<Redirect to="/units" />)
    }

    return (
        <div className="mt-5 center">
            <div className="card p-4 shadow">
                <h3 className="text-center mb-5">
                    {data?.id ? 'Edit' : 'add'} Unit
                    <BackComponent url="/units" />
                    {/* <Link to="/units" className="btn btn-secondary float-right">Back</Link> */}
                </h3>
                {!isLoading ?
                    <form onSubmit={handleSubmit}>

                        {/* <input onChange={handleChange} type="text" value={data?.id || ''} name="id" hidden={true} /> */}

                        <FormGroup>
                            <Field
                                type="text"
                                name="id"
                                component={renderField}
                                value={data?.id || ''}
                                disabled="true"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Field
                                type="text"
                                name="code"
                                component={renderField}
                                label="Code :"
                                onChange={handleChange}
                                value={data?.code || ""}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Field
                                type="text"
                                name="code"
                                component={renderField}
                                label="Code :"
                                onChange={handleChange}
                                value={data?.code || ""}
                            />
                        </FormGroup>

                        <input type="submit" className="btn btn-primary" value={data?.id ? 'Update' : 'Submit'} />
                    </form>
                    : <div>Loading ...</div>}
            </div>
        </div>
    )
}

FormComponent = reduxForm({
    form: "formCreateCode",
    validate: CodeValidation,
    enableReinitialize: true,
})(UnitForm2);

const mapStateToProps = (state) => {
    return {
        isRemoved: state.removeUnitById.data,
        units: state.findAllUnit.data || [],
        savedUnit: state.saveUnit.data,
        isLoading: state.findAllUnit.isLoading || state.removeUnitById.loading,
        error: state.findAllUnit.error || state.removeUnitById.error,
    }
}


const mapDispatchToProps = { findAll, removeById }

export default connect(mapStateToProps, mapDispatchToProps)(UnitForm2)
