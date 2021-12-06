import React from "react";
import { render, fireEvent } from '@testing-library/react-native';
import { Select } from './index';

const DEFAULT_PROPS = {
    value: 'value',
    onValueChange: jest.fn(),
    options: [{ value: "option 1", label: "option 1" }],
    error: true,
    errorMessage: "messageError",
    testID: 'select-test',

};

// describe('Select Component', () => {

    // it('check if show correcty input', () => {
    //     const { getByTestId } = render(
    //         <Select  {...DEFAULT_PROPS} />
    //     );

    //     expect(getByTestId).toMatchSnapshot()

    // });

    // voltar terminar
    // it('fire changeText event', () => {
    //     const onValueChange = jest.fn();
    //     const { getByTestId } = render(
    //         <Select  {...DEFAULT_PROPS} onValueChange={onValueChange} value={value} />
    //     );

    //     expect(getByTestId).toMatchSnapshot()


//     // });
// })