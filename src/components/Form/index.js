import React, { useState } from 'react';
import './Form.css';
import FormQuote from './FormQuote';
import Success from './Success';
import  Room  from '../../images/familyroom1.jpg'
import { Form, Input,InputNumber, Button, Checkbox } from 'antd';
const { TextArea } = Input;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  

const Formm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  const onFinish = values => {
    console.log(values);
  };
  return (
    <>
     <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Start your journey here.</h2>
          <p>
Want to get started on a custom build?<br/>Let us know what you have in mind and we'll be in touch soon.</p>
        </div>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'number']} label="Number" rules={[{ type: 'number' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'subject']} label="Subject">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'message']} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        {/* <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
         
            name="fullname"
            rules={[
              { 
                required: true,
                message: 'Please enter your full name!' 
              }]
            }
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Email Address"/>
          </Form.Item>
          <Form.Item
            name="telephone"
          >
            <Input placeholder="Telephone" />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Form.Item 
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Submit
            </Button>
          </Form.Item>
        </Form> */}
      </div>
    </div>  
      {/* <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img display=flex className='form-img' src={Room} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormQuote submitForm={submitForm} />
        ) : (
          <Success />
        )}
      </div> */}
    </>
  );
};

export default Formm;


