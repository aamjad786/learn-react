import type {IdealFormModel} from "./IdealFormModel.ts";
import {Controller, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import IdealFormTemplate from "./IdealFormTemplate.tsx";
import {useEffect} from "react";
import {useApiService} from "../../../../core/redux/apiService.ts";

const IdealForm = () => {

    const validations = yup.object().shape({
        userName: yup
            .string()
            .required("Username is required")
            .min(3, "Username must be at least 3 characters long")
            .matches(/^[A-Za-z0-9]+$/, "Username must contain only letters and numbers"),
        mobileNumber: yup
            .string() // Use string for mobileNumber to handle empty input
            .required("Mobile number is required")
            .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
    });

    const formMethods = useForm<IdealFormModel>({
        mode: 'onChange',
        resolver: yupResolver(validations),
        defaultValues: {
            userName: ''
        }
    })

    const {
        // handleSubmit,
        control,
        // setValue,
        getValues,
        trigger,
        formState: {errors, isValid}
    } = formMethods

    const handleButtonClick = async () => {
        console.log("Errors: ", errors)
        console.log("trigger: ", isValid)
        let formData = getValues();
        console.log('Ideal form clicked with dataddddddddddd: ', formData)

    };

    const templateProps = {
        data: {
            control,
            errors,
            trigger,
            isValid
        },
        actions: {
            handleButtonClick,
        },
    };

    const getData = async () => {
        return await useApiService().get('user')
    }

    useEffect(() => {

        getData();

    }, [])

    return (
        <IdealFormTemplate props={templateProps}/>
    )

};

export default IdealForm;