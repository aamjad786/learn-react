import type {IdealFormProp} from "./IdealFormProp.ts";
import {Controller} from "react-hook-form";
import {Button, Input} from "antd";
import { Radio, Checkbox,DatePicker} from 'antd'
import Select from 'react-select';

const IdealFormTemplate = ({ props }: { props: IdealFormProp }) => {

    const { data, actions } = props; // Destructure props
    const { control, errors,isValid } = data; // Destructure data

    const radioBoxOptions : any = [
        { value: "male", label: "MALE" },
        { value: "female", label: "Female" },
        { value: "other", label: 'Other' },
    ]

    const checkboxOptions: any = [
        {
            "value": 1,
            "label": "Sunday"
        },
        {
            "value": 2,
            "label": "Monday"
        },
        {
            "value": 3,
            "label": "Tuesday"
        },
        {
            "value": 4,
            "label": "Wednesday"
        },
        {
            "value": 5,
            "label": "Thursday"
        },
        {
            "value": 6,
            "label": "Friday"
        },
        {
            "value": 7,
            "label": "Staurday"
        },
    ];

    return (
        <>

            <div className="grid grid-cols-12 gap-4 mt-50">

                <div className="col-span-12">
                    <Controller
                        name={'userName'}
                        control={control}
                        render={({field: {onChange, value, name}}) => (
                            <>
                                <Input
                                    type="text"
                                    className={`${errors['userName'] && 'border-red-600'} bg-white text-black rounded-full p-2`}
                                    placeholder="Enter username"
                                    value={value}
                                    onChange={onChange}
                                    name={name}
                                />
                                {errors['userName'] ? (<div
                                        className="py-1 ps-1 text-sm font-medium text-red-600">{errors['userName']?.message}</div>)
                                    : ('')
                                }
                            </>
                        )}
                    />
                </div>

                <div className="col-span-12">
                    <Controller
                        name={'mobileNumber'}
                        control={control}
                        render={({field: {onChange, value, name}}) => (
                            <>
                                <Input
                                    type="number"
                                    className={`${errors['userName'] && 'border-red-600'} bg-white text-black rounded-full p-2`}
                                    placeholder="Enter Mobile Number"
                                    value={value}
                                    onChange={onChange}
                                    name={name}
                                />
                                {errors['mobileNumber'] ? (
                                    <div
                                        className="py-1 ps-1 text-sm font-medium text-red-600">{errors['mobileNumber']?.message}</div>
                                ) : (
                                    ''
                                )}
                            </>
                        )}
                    />
                </div>


                <div className="col-span-12">

                    <Controller
                        name={'gender'}
                        control={control}
                        render={({field: {onChange, value, name}}) => (
                            <>
                                <Radio.Group
                                    name={name}
                                    value={value}
                                    options={radioBoxOptions}
                                    onChange={onChange}
                                />
                            </>
                        )}
                    />

                </div>


                <div className="col-span-12">

                    <Controller
                        name={'weeklyOffs'}
                        control={control}
                        render={({field: {onChange, value, name}}) => (
                            <>
                                <Checkbox.Group
                                    name={name}
                                    value={value}
                                    options={checkboxOptions}
                                    onChange={onChange}
                                />
                            </>
                        )}
                    />

                </div>

                <div className="col-span-12">

                    <Controller
                        name={'dateOfBirth'}
                        control={control}
                        render={({field: {onChange, value, name}}) => (
                            <>
                                <DatePicker onChange={onChange} />
                            </>
                        )}
                    />

                </div>

                <div className="col-span-12">

                    <Controller
                        name={'dropdown'}
                        control={control}
                        render={({field: {onChange, value, name}}) => (
                            <>
                                <Select
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            backgroundColor: 'white'

                                        }),
                                    }}
                                    value={value}
                                    onChange={onChange}
                                    options={checkboxOptions}
                                />
                            </>
                        )}
                    />

                </div>

                <div className="col-span-12">
                    <div className="text-center space-y-4 font-bold">
                        <Button
                            color="purple"
                            variant="solid"
                            title="SUBMIT"
                            loading={false}
                            className="bg-white text-cyan-500 rounded-full px-6 py-2"
                            disabled={!isValid}
                            onClick={actions.handleButtonClick}
                        >
                            SUBMIT
                        </Button>
                    </div>
                </div>



            </div>

        </>
    );
}

export default IdealFormTemplate;