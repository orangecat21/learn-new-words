import React from 'react';


import { Layout, Form, Input, Button, Space  } from 'antd';

import className from './registerPage.module.css';
import FirebaseContext from '../../context/firebaseContext';

const { Content } = Layout;


export default class RegisterPage extends React.Component {

    state={
        registerBusy: false,
        errorMessage: null,
    }

    onFinish = ({email, password}) => {
        const { createUser } = this.context;
        const { switchPage } =this.props;

        this.setState({
            registerBusy: true,
        });

        createUser(email, password)
            .then(()=>{
                switchPage();
            })
            .catch(err => {
                let msg = '';
                switch (err.code) {
                    case 'auth/email-already-in-use':
                        msg = 'Пользователь с таким Email уже зарегестрирован!';
                        break;

                    case 'auth/invalid-email':
                        msg = 'Введен неверный email!';
                        break;

                    case 'auth/weak-password':
                        msg = 'Слишком слабый пароль!';
                        break;
                    
                    case 'auth/too-many-requests':
                        msg = 'Слишком много попыток! Попробуйте позже!';
                        break;

                    default:
                        msg = 'Произошла ошибка! Попробуйте еще раз';    
                }
                console.error(err.code, ': ', err.message);
                this.setState({
                    registerBusy: false,
                    errorMessage: msg,
                });
            });
    }

    onFinishFailed = (value) => {
        console.error('Error', value);
    }

    renderForm = () => {

        const { switchPage } = this.props;

        const { registerBusy } = this.state;

        const layout = {
            labelCol: {
                span: 6,
            },
            wrapperCol: {
                span: 20,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 1,
                span: 16,
            },
        };

        return (
            <Form
                {...layout}
                name="register"
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
                    <Space size={13}>
                        <Button type="primary" htmlType="submit" loading={registerBusy}>
                            Зарегистрироваться
                        </Button>

                        <Button type="link" onClick={switchPage}>
                            Войти
                        </Button>
                    </Space>
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

RegisterPage.contextType = FirebaseContext;