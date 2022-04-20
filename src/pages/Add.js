import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Row, Col, Input, Button } from 'antd';
import { addAddress, editAddress, getAddress } from '../redux/actions/addressActions';

const { TextArea } = Input;

const Add = ({ isEditMode = false }) => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const initialState = isEditMode
    ? getAddress(params.id)
    : { name: '', cellNo: '', email: '', notes: '' };

  const handleSubmit = values => {
    dispatch(
      isEditMode
        ? editAddress(initialState.id, { id: initialState.id, ...values })
        : addAddress({ id: Date.now(), ...values })
    );
    form.resetFields();
    history.push('/');
  };

  const handleFailed = () => console.log('failed');

  return (
    <div className="add">
      <Form
        form={form}
        initialValues={initialState}
        name="address-form"
        onFinish={handleSubmit}
        onFinishFailed={handleFailed}
      >
        <h1 className="title">{isEditMode ? 'Edit' : 'Add'} Address</h1>
        <Row>
          <Col className="address-block" xs={24}>
            <p>Name</p>
            <Form.Item name="name" rules={[{ required: true, message: 'Please provide a name' }]}>
              <Input className="address-input" placeholder="Enter Name" required />
            </Form.Item>
          </Col>
          <Col className="address-block" xs={24}>
            <p>Cell No.</p>
            <Form.Item
              name="cellNo"
              rules={[
                {
                  required: true,
                  message: 'Please provide a Cell Number',
                  min: 10,
                  max: 10,
                },
              ]}
            >
              <Input
                type="tel"
                className="address-input"
                placeholder="Enter Cell Number"
                maxLength={10}
                required
              />
            </Form.Item>
          </Col>
          <Col className="address-block" xs={24}>
            <p>Email</p>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please provide a Email', type: 'email' }]}
            >
              <Input
                type="email"
                className="address-input"
                placeholder="Enter Email Address"
                required
              />
            </Form.Item>
          </Col>
          <Col className="address-block" xs={24}>
            <p>Notes</p>
            <Form.Item name="notes" rules={[{ required: true, message: 'Please provide a Note' }]}>
              <TextArea cols={6} className="address-input" placeholder="Enter Notes" required />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end">
          <Button className="address-button" type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={() => history.push('/')}>
            Cancel
          </Button>
        </Row>
      </Form>
    </div>
  );
};

Add.propTypes = {
  isEditMode: PropTypes.bool,
};

Add.defaultProps = {
  isEditMode: false,
};

export default Add;
