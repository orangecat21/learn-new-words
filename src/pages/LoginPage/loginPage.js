import React from 'react';


import { Layout, Form, Input, Button, Space  } from 'antd';

import className from './loginPage.module.css';
import FirebaseContext from '../../context/firebaseContext';

const { Content } = Layout;


export default class LoginPage extends React.Component {

    state={
        loginBusy: false,
        errorMessage: null,
    }

    onFinish = ({email, password}) => {
        const { signWithEmail } = this.context;

        this.setState({
            loginBusy: true,
        });

        signWithEmail(email, password)
            .catch(err => {
                let msg = '';
                switch (err.code) {
                    case 'auth/user-not-found':
                        msg = 'Пользователь с таким Email не найден!';
                        break;

                    case 'auth/wrong-password':
                        msg = 'Введен неверный пароль!';
                        break;

                    case 'auth/too-many-requests':
                        msg = 'Слишком много попыток! Попробуйте позже!';
                        break;
                    
                    case 'auth/user-disabled':
                        msg = 'Ваша учетная запись была отключена! Обратитесь за помощью в службу поддержки.';
                        break;

                    case 'auth/invalid-email':
                        msg = 'Введен неверный email!';
                        break;

                    default:
                        msg = 'Произошла ошибка! Попробуйте еще раз';    
                }
                console.error(err.code, ': ', err.message);
                this.setState({
                    loginBusy: false,
                    errorMessage: msg,
                });
            });
    }

    onFinishFailed = (value) => {
        console.error('Error', value);
    }

    renderForm = () => {

        const { loginBusy } = this.state;

        const { switchPage } = this.props;

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
                    <Space size={13}>
                        <Button type="primary" htmlType="submit" loading={loginBusy}>
                            Войти
                        </Button>

                        <Button type="link" onClick={switchPage}>
                            Зарегистрироваться
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

LoginPage.contextType = FirebaseContext;