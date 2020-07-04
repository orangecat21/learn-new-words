import React from 'react';

import { fire } from '../../services/firebase';

import { Layout, Form, Input, Button  } from 'antd';

import className from './loginPage.module.css';

const { Content } = Layout;


export default class LoginPage extends React.Component {

    state={
        isLoading: false,
        errorMessage: null,
    }

    onFinish = ({email, password}) => {
        this.setState({
            isLoading: true,
        });
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                this.setState({
                    isLoading: false,
                    errorMessage: err.message,
                });
            });
    }

    onFinishFailed = (value) => {
        console.error('Error', value);
    }

    renderForm = () => {

        const { isLoading } = this.state;

        const layout = {
            labelCol: {
                span: 7,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 9,
                span: 7,
            },
        };

        return (
            <Form
                {...layout}
                name="login"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="Почта"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите ваш email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите ваш пароль!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Войти
                </Button>
                </Form.Item>
            </Form>
        );
    }


    render() {
        const { errorMessage } = this.state;

        return (
            <Layout>
                <Content>
                    <div className={className.root}>
                        <div className={className.form_wrap}>
                            {errorMessage && <p className={className.error}>{errorMessage}</p>}
                            {this.renderForm()}
                        </div>
                    </div>
                </Content>
            </Layout>
        );
    }



}