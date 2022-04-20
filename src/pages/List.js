import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Table, Button, Modal, Empty } from 'antd';
import { deleteAddress } from '../redux/actions/addressActions';

const List = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.addresses);
  const [addresses, setAddresses] = useState(list);

  useEffect(() => {
    setAddresses(list);
  }, [list]);

  const columns = [
    {
      title: 'Actions',
      render: (value, record) => (
        <div className="actions-block">
          <p role="presentation" onClick={() => history.push(`/edit/${record.id}`)}>
            Edit
          </p>
          <p
            role="presentation"
            onClick={() =>
              Modal.confirm({
                title: 'Are you sure you want to delete?',
                type: 'error',
                onOk: () => dispatch(deleteAddress(record.id)),
              })
            }
          >
            Delete
          </p>
        </div>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Cell No.',
      dataIndex: 'cellNo',
    },
    {
      title: 'Email Addresses',
      dataIndex: 'email',
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
    },
  ];

  return (
    <div className="list">
      <h1>Address Book</h1>
      <Table
        bordered
        rowKey="id"
        dataSource={addresses}
        columns={columns}
        pagination={false}
        locale={{
          emptyText: (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No Addresses Found" />
          ),
        }}
      />
      <div className="add-address-wrapper">
        <Button className="add-address" type="primary" onClick={() => history.push('/add')}>
          +
        </Button>
      </div>
    </div>
  );
};

export default List;
