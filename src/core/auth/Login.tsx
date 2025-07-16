import {Button, Input, Spin} from 'antd';
import {Controller, useForm} from "react-hook-form";
import type {UserLoginModel} from "./UserLoginModel.ts";


export const Login = () => {

    const {
        handleSubmit,
        control,
        // setValue,
        formState: { errors }
    } = useForm<UserLoginModel>({
        mode: 'onChange',
        defaultValues: {
            userName: '',
            password: '',
            authenticationType: 'database',
            deviceType: 'desktop'
        }
    })


    const loginSubmit = async (data: UserLoginModel) => {
        console.log('login clicked with data: ', data)
    };


    return (
        <Spin spinning={false} fullscreen={false}>
            <div
                className="background-container"
                style={{
                    background: 'linear-gradient(270deg, #17224d 0%, rgba(23, 34, 77, 0.965) 3.5%, rgba(23, 34, 77, 0.625) 37.5%, rgba(23, 34, 77, 0) 100%), url(/images/Login2.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    position: 'relative',
                }}
            >
                <div className="logo-container flex justify-end items-center p-11">
                    <div className="text-white">
                        {/*<img src="/images/nucsoft.png" alt="Logo" />*/}
                        {/*<p className="text-sm font-bold">With you Until Success... And Beyond...</p>*/}
                    </div>
                </div>

                <div className="login-form-wrapper flex justify-end items-center min-h-[calc(100vh-64px)] mr-1/6">
                    <div className="login-form-container bg-cyan-500 p-6 rounded-lg shadow-lg text-white">
                        {/*<h1 className="pb-4 text-2xl font-bold">{'Loan Originating System'}</h1>*/}
                        <form onSubmit={handleSubmit(loginSubmit)} className="space-y-4">
                            <div>
                                <h4 className="text-white font-bold">Username :</h4>
                                <Controller
                                    name={'userName'}
                                    control={control}
                                    render={({ field: { onChange, value, name } }) => (
                                        <>
                                            <Input
                                                type="text"
                                                className={`${errors['userName'] && 'border-red-600'} bg-white text-black rounded-full p-2`}
                                                placeholder="Enter username"
                                                value={value}
                                                onChange={onChange}
                                                name={name}
                                            />
                                            {errors['userName'] ? (
                                                <div className="py-1 ps-1 text-sm font-medium text-red-600">{errors['userName']?.message}</div>
                                            ) : (
                                                ''
                                            )}
                                        </>
                                    )}
                                />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Password :</h4>
                                <Controller
                                    name={'password'}
                                    control={control}
                                    render={({ field: { onChange, value, onBlur } }) => (
                                        <>
                                            <Input
                                                type='password'
                                                className={`${errors['password'] && 'border-red-600'} bg-white text-black rounded-full p-2`}
                                                placeholder="Enter password"
                                                value={value}
                                                onChange={onChange}
                                                onBlur={onBlur}
                                            />
                                            {errors['password'] ? (
                                                <div className="py-2 ps-1 text-sm font-medium text-red-600">{errors['password']?.message}</div>
                                            ) : (
                                                ''
                                            )}
                                        </>
                                    )}
                                />
                            </div>
                            <div className="text-center space-y-4 font-bold">
                                <Button
                                    color="purple" variant="solid"
                                    htmlType="submit"
                                    title="LOGIN"
                                    loading={false}
                                    className="bg-white text-cyan-500 rounded-full px-6 py-2"
                                >
                                    LOGIN
                                </Button>
                                 {/*<p className="text-sm">Login</p>*/}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Spin>
    )
}
