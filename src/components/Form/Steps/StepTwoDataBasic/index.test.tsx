import React from "react";
import { render, fireEvent } from '@testing-library/react-native';
import { StepTwoDataBasic } from './index';

const DEFAULT_PROPS = {
    value: 'value',
    onValueChange: jest.fn(),
    options: [{ value: "option 1", label: "option 1" }],
    error: true,
    errorMessage: "messageError",
    testID: 'select-test',

};
describe('Step One General Information Component', () => {

    it('check if show correcty input', () => {
        const onChange = jest.fn();

        const { getByTestId } = render(
            <StepTwoDataBasic />
        );

        // const inputComponent = getByTestId('input-rep');
        // fireEvent(inputComponent, 'changeText', 'new text');

        // expect(onChange).toHaveBeenCalledWith('new text');

    });

    // voltar terminar
    // it('fire changeText event', () => {
    //     const onValueChange = jest.fn();
    //     const { getByTestId } = render(
    //         <Select  {...DEFAULT_PROPS} onValueChange={onValueChange} value={value} />
    //     );

    //     expect(getByTestId).toMatchSnapshot()


    //     // });
})