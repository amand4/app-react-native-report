import React from "react";
import { render, fireEvent } from '@testing-library/react-native';
import { InputNumber } from './index';

const DEFAULT_PROPS = {
    value: 'value',
    onChangeText: jest.fn(),
    maxLength: 4,
    testID: 'inputNumber-test',

};

describe('Input Number Component', () => {

    it('check if show correcty input', () => {
        const onChangeText = jest.fn();

        const { getByTestId } = render(<InputNumber  {...DEFAULT_PROPS} onChangeText={onChangeText} />);
        expect(getByTestId('inputNumber-test').props.value).toContain('value');

    })

    it('fire changeText event', () => {
        const onChangeText = jest.fn();
        const newValue = "5";
        const { getByTestId } = render(
            <InputNumber  {...DEFAULT_PROPS} onChangeText={onChangeText} />
        );
        fireEvent(getByTestId('inputNumber-test'), "onChangeText", newValue);
        expect(onChangeText).toHaveBeenCalledWith(newValue);
    });
})