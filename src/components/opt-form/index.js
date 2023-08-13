import React from "react";
import { Container, Text, Input, Button, Break } from "./styles/opt-form";
export default function OptForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...resProps }) {
    return <Input {...resProps} />;
};

OptForm.Button = function OptFormButton({ children, ...resProps }) {
    return (
        <Button {...resProps}>
            {children}{" "}
            <img src="/images/icons/chevron-right.png" alt="Try now" />
        </Button>
    );
};

OptForm.Text = function OptFormText({ children, ...resProps }) {
    return <Text {...resProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...resProps }) {
    return <Break {...resProps} />;
};
