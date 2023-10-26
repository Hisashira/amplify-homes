/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewsUpdateFormInputValues = {
    title?: string;
    paragraph?: string;
};
export declare type NewsUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    paragraph?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewsUpdateFormOverridesProps = {
    NewsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    paragraph?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewsUpdateFormProps = React.PropsWithChildren<{
    overrides?: NewsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    news?: any;
    onSubmit?: (fields: NewsUpdateFormInputValues) => NewsUpdateFormInputValues;
    onSuccess?: (fields: NewsUpdateFormInputValues) => void;
    onError?: (fields: NewsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NewsUpdateFormInputValues) => NewsUpdateFormInputValues;
    onValidate?: NewsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NewsUpdateForm(props: NewsUpdateFormProps): React.ReactElement;
