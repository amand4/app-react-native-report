import React from "react";
import { render, fireEvent } from '@testing-library/react-native';
import { ImageCard } from './index';

const DEFAULT_PROPS = {
    uri: 'uri',
    key: 1,
    index: 0,
    testID: 'imageCard-test',

};

describe('Image Card Component', () => {
    it('check if show correcty image card', () => {
        const { getByTestId } = render(<ImageCard  {...DEFAULT_PROPS} />);
        expect(getByTestId('imageCard-test').props.source.uri).toContain('uri');
    })

})