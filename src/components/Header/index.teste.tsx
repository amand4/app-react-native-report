import React from "react";
import { render, fireEvent } from '@testing-library/react-native';
import { Header } from './index';


describe('Header Component', () => {
    it('check if show correcty image card', () => {
        const { getByTestId } = render(<Header />);
        // expect(getByTestId('header-test').props.source.uri).toContain('uri');
    })

})