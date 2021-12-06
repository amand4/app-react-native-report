import React from "react";
import { render, fireEvent } from '@testing-library/react-native';
import { InputView } from './index';

const DEFAULT_PROPS = {
    value: 'value',
    testID: 'inputView-test',
    placeholder: "placeholder",
    editable: false,
    selectTextOnFocus: false,

};

describe('Input View Component', () => {

    it('check if show correcty input', () => {

        const { getByTestId } = render(<InputView  {...DEFAULT_PROPS} />);
        expect(getByTestId('inputView-test').props.value).toContain('value');

    })

    it('fire changeText event', () => {
        const value = "ab"
        const { getByPlaceholderText, getByTestId } = render(
            <InputView  {...DEFAULT_PROPS} value={value} />
        );
        expect(getByPlaceholderText('placeholder').props.placeholder).toEqual('placeholder');
        expect(getByTestId('inputView-test').props.value).toContain(value);

    });
})