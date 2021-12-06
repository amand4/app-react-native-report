import React from "react";
import { render, fireEvent } from '@testing-library/react-native';
import { InputLogin } from './Index';

const DEFAULT_PROPS = {
    value: 'value',
    onChangeText: jest.fn(),
    placeholder: 'placeholder',
    testID: 'inputLogin-test',

};

describe('Input Login Component', () => {

    it('check if show correcty input', () => {
        const onChangeText = jest.fn();

        const inputComponent = render(<InputLogin  {...DEFAULT_PROPS} onChangeText={onChangeText} />);
        const { getByPlaceholderText } = inputComponent
        const { getByTestId } = inputComponent

        expect(getByPlaceholderText('placeholder').props.placeholder).toEqual('placeholder');
        expect(getByTestId('inputLogin-test').props.value).toContain('value');

    })

    it('fire changeText event', () => {
        const onChangeText = jest.fn();
        const newValue = 'a';
        const { getByPlaceholderText } = render(
            <InputLogin  {...DEFAULT_PROPS} onChangeText={onChangeText} />
        );

        fireEvent(getByPlaceholderText('placeholder'), 'onChangeText', newValue);
        expect(onChangeText).toHaveBeenCalledWith(newValue);
    });
})