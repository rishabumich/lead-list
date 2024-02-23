import React, { useEffect, useState} from 'react'
import {Table, Button, Form, Input} from 'antd'
import LeadCell from './LeadCell'
import { render } from '@testing-library/react';

export default function DataGrid({leads, leadSetter}) {
  const [dataSource, setDataSource] = useState([]);
  const [editRow, setEditingRow] = useState(null);
  const [form] = Form.useForm()

  useEffect(() => {
    setDataSource(leads);
  },[])

  useEffect(() => {
    setDataSource([...leads])
  }, [leads])

  useEffect(() => {
    leadSetter([...dataSource])
  }, [dataSource])


  const columns = [
    {
      title: 'Name',
      dataIndex: "name",
      render: (text, record)=>{
        if (editRow === record.id){
           return <Form.Item
           name="name"
           rules={[{
            required: true,
            message: 'Enter Name'
           }]}
           >
            <Input />
          </Form.Item>
        } else{
          return <p>{text}</p>
        }
      }
    },
    {
      title: 'Email',
      dataIndex: "email",
      render: (text, record)=>{
        if (editRow === record.id){
           return <Form.Item
           name="email"
           rules={[{
            required: true,
            message: 'Enter Email'
           }]}
           >
            <Input />
          </Form.Item>
        } else{
          return <p>{text}</p>
        }
      }
    },
    {
      title: 'Phone Number',
      dataIndex: "phone",
      render: (text, record)=>{
        if (editRow === record.id){
           return <Form.Item
           name="phone"
           rules={[{
            required: true,
            message: 'Enter Phone Number'
           }]}
           >
            <Input />
          </Form.Item>
        } else{
          return <p>{text}</p>
        }
      }
    },
    {
      title: 'Contacted',
      dataIndex: "contacted",
      render: (_, record) =>{
        return <input type="checkbox" onChange={() => {
          const newData = [...dataSource]
          newData[record.id].contacted = !newData[record.id].contacted
        }} />
      }
    },
    {
      title: 'Actions',
      render: (_, record)=>{
        return <>
        <Button type='link' onClick={() => {
          setEditingRow(record.id)
          form.setFieldsValue({
            name:record.name,
            email: record.email,
            phone: record.phone,
            contacted: record.contacted
          })
        }}>Edit</Button>
        <Button type='link' htmlType='submit'>Save</Button>
        </>
      }
    }
  ];
  const onFinish = (values) => {
    const updatedDataSource = [...dataSource]
    updatedDataSource[editRow] = {id: editRow, name: values.name, email: values.email, phone: values.phone, contacted: false}
    setDataSource(updatedDataSource);
    setEditingRow(null);
  }
  return (
    <div>
      <Form form={form} onFinish={onFinish}>
        <Table
        columns={columns}
        dataSource={dataSource}
        >

        </Table>
      </Form>
    </div>
  )
}
