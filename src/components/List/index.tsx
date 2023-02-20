import * as React from 'react';
import {ListItem} from 'types';
import Card from '../Card';
import {Spinner} from '../Spinner';
import {Container} from './styles';

interface ListProps {
    items?: ListItem[];
    hasNavigation?: boolean;
    isLoading: boolean; // The correct type is `boolean`
}

const List = ({items, hasNavigation = true, isLoading}: ListProps) => {
    return (
        <Container>
            {isLoading && <Spinner />}
            {!isLoading &&
                items.map(({url, id, columns, navigationProps}, index) => {
                    return (
                        <Card
                            key={`${id}-${index}`}
                            id={id}
                            columns={columns}
                            navigationProps={navigationProps}
                            hasNavigation={hasNavigation}
                            url={url}
                        />
                    );
                })}
        </Container>
    );
};

export default List;
