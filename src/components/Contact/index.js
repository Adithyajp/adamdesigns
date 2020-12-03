import React from 'react';

import { InfoContainer,InfoWrapper,TopLine,BtnWrap,InfoRow,Column1,Heading,Subtitle,TextWrapper,Img,ImgWrap,Column2 } from './InfoElements';
import { Button,Form, Input, Radio } from 'antd';
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

const InfoSection3 = ({lightBg,id,imgStart,topLine,lightText,headLine,darkText,description,buttonLabel,cmg,alt,primary,dark,dark2}) => {
  const onFinish = values => {
    console.log(values);
  };
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>

                        </TextWrapper>
                        </Column1>
                        <Column2>
                      
                        
                        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}  name="nest-messages"  >
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'number']} label="Number" rules={[{ type: 'number' }]}>
        <Input />

      </Form.Item>

        <Radio.Group name="radiogroup" defaultValue={1}>
    <Radio  value={1}>Commercial & Individual Plan</Radio>
    <Radio value={2}>Interior & Exterior designs</Radio>
    <Radio value={3}>Estimate</Radio>
    <Radio value={8}>Supervision</Radio>
    <Radio value={5}>Surveying</Radio>
    <Radio value={6}>Sacion drawing</Radio>
    <Radio value={7}>Contract works</Radio>
    <Radio value={8}>Renovation</Radio>

  </Radio.Group>

      <Form.Item name={['user', 'message']} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
                        
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
    </>
    )
}

export default InfoSection3

