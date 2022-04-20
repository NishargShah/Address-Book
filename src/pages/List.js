import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Table, Button, Modal, Empty, Input } from 'antd';
import { deleteAddress } from '../redux/actions/addressActions';

const { Search } = Input;

const List = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.addresses);
  const [addresses, setAddresses] = useState(list);
  const [search, setSearch] = useState('');

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

  const filteredAddresses = addresses.filter(cur =>
    [cur.name.toLowerCase(), cur.email.toLowerCase()].some(el => el.includes(search.toLowerCase()))
  );

  return (
    <div className="list">
      <div className="address-header">
        <h1>Address Book</h1>
        <Search
          placeholder="Search with Name/Email"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <Table
        bordered
        rowKey="id"
        dataSource={filteredAddresses}
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
