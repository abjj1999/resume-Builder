import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Card, DatePicker } from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select time!",
    },
  ],
};
const WorkExp = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
    //[rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')]
  };
  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="Experience" className="w-100 ">
        {(fields, { add, remove }) => (
          <div className="row d-flex justify-content-center align-items-center">
            {fields.map(({ key, name, ...restField }) => (
              <>
                <divs key={key} style={{ margin: 8 }} className=" col-4">
                  <Card className=" d-flex justify-content-center align-items-center">
                    <Form.Item
                      label="Job Title"
                      {...restField}
                      name={[name, "title"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing title",
                        },
                      ]}
                    >
                      <Input placeholder="Job Title" />
                    </Form.Item>
                    <Form.Item
                      label="Company"
                      {...restField}
                      name={[name, "company"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing company",
                        },
                      ]}
                    >
                      <Input placeholder="comapny" />
                    </Form.Item>
                    <Form.Item
                      name="range-picker"
                      label="Dates"
                      {...rangeConfig}
                    >
                      <RangePicker />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Card>
                </divs>
              </>
            ))}
            <Form.Item className="d-flex justify-content-center align-items-center">
              <Button
                type="dashed"
                className="d-flex justify-content-center align-items-center"
                onClick={() => add()}
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
  );
};

export default WorkExp;
