import React from "react";
import { render, fireEvent } from '@testing-library/react-native';
import { VehicleCardPrimary, TypeVehicleProps } from './index';
import { debug } from "react-native-reanimated";

const DEFAULT_PROPS: TypeVehicleProps = {
    title: "title",
    icone: "car",
    available: true,
    onPress: jest.fn(),
    enabled: false,

}

describe('Report Card Component', () => {
    it('check if show correcty image card', () => {
        const { getByTestId } = render(<VehicleCardPrimary {...DEFAULT_PROPS} />);
        // expect(getByTestId('reportCardText-test').props.children).toContain('1231');
    })

})