import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space } from 'antd'

const Education = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values)
  }
  return (
    <div>
      <h4 className="m-2 text-center mb-4">Education</h4>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.List name="education">
          {(fields, { add, remove }) => (
            <div className="border p-3 m-3">
              {fields.map(({ key, name, ...restField }) => (
                <div className="">
                  <Space
                    key={key}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <Form.Item
                      {...restField}
                      label="School Name"
                      name={[name, 'School']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing School Name',
                        },
                      ]}
                    >
                      <Input placeholder="School " />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'degree']}
                      label="Degree"
                      rules={[
                        {
                          required: true,
                          message: 'Missing Degree',
                        },
                      ]}
                    >
                      <Input placeholder="Degree" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'date']}
                      label="Date"
                      rules={[
                        {
                          required: true,
                          message: 'Missing Date',
                        },
                      ]}
                    >
                      <Input placeholder="Date" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'GPA']}
                      label="GPA"
                      rules={[
                        {
                          required: true,
                          message: 'Missing GPA',
                        },
                      ]}
                    >
                      <Input className="w-50" placeholder="GPA" />
                    </Form.Item>
                    <Form.Item>
                      <MinusCircleOutlined
                        className="fs-5"
                        onClick={() => remove(name)}
                      />
                    </Form.Item>
                  </Space>
                </div>
              ))}

              <Form.Item className="d-flex justify-content-center">
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </div>
          )}
        </Form.List>
        <h4 className="m-2 text-center mb-4">Skills</h4>
        <Form.List name="Skills">
          {(fields, { add, remove }) => (
            <div className="border p-3 m-3">
              {fields.map(({ key, name, ...restField }) => (
                <div className="">
                  <Space
                    key={key}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <Form.Item
                      {...restField}
                      label="Skill"
                      name={[name, 'skill']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing Skill',
                        },
                      ]}
                    >
                      <Input placeholder="Skill" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'years']}
                      label="Years of Experience" 
                      rules={[
                        {
                          required: true,
                          message: 'Missing Years of Experience',
                        },
                      ]}
                    >
                      <Input placeholder="Years" />
                    </Form.Item>
                    <Form.Item>
                      <MinusCircleOutlined
                        className="fs-5"
                        onClick={() => remove(name)}
                      />
                    </Form.Item>
                  </Space>
                </div>
              ))}

              <Form.Item className="d-flex justify-content-center">
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </div>
          )}
        </Form.List>
       

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Education
