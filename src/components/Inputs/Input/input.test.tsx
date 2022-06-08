import React from "react";
import { render, fireEvent } from '@testing-library/react-native';
import { Input } from './index';
import colors from '../../../styles/colors'

const DEFAULT_PROPS = {
    value: 'value',
    onChangeText: jest.fn(),
    placeholder: 'placeholder',
    error: false,
    errorMessage: false,
    keyboardType: "numeric",
    maxLength: 10,
    autoCorrect: true,
    defaultValue: "defaultValue",
    editable: true,
    testID: 'input-test',

};

const DEFAULT_PROPS_INVALID = {
    value: 'value',
    onChangeText: jest.fn(),
    placeholder: 'placeholder',
    error: true,
    errorMessage: true,
    keyboardType: "numeric",
    maxLength: 10,
    autoCorrect: true,
    defaultValue: "defaultValue",
    editable: true,
    testID: 'input-test',

};

describe('Input Component', () => {

    it('check if show correcty input', () => {
        const { getByPlaceholderText, getByTestId } = render(<Input  {...DEFAULT_PROPS} />);

        expect(getByPlaceholderText('placeholder').props.placeholder).toEqual('placeholder');
        expect(getByTestId('input-test').props.value).toContain('value');

    })

    it('invalid', () => {
        const { getByTestId } = render(<Input  {...DEFAULT_PROPS_INVALID} />);
        expect(getByTestId('input-test').props.style.borderColor).toEqual(colors.red);

    })

    it('fire changeText event', () => {
        const value = '';
        const onChangeText = jest.fn();
        const newValue = 'a';
        const { getByPlaceholderText } = render(
            <Input  {...DEFAULT_PROPS} onChangeText={onChangeText} value={value} />
        );

        fireEvent(getByPlaceholderText('placeholder'), 'onChangeText', newValue);
        expect(onChangeText).toHaveBeenCalledWith(newValue);
    });
})