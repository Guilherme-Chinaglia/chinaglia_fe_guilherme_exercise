import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {Teams, UserData} from 'types';
import {Container} from './styles';

/**
 * Rename Props to CardProps
 */
interface CardProps {
    id?: string;
    url?: string;
    columns: Array<{
        key: string;
        value: string;
    }>;
    hasNavigation?: boolean;
    navigationProps?: UserData | Teams;
}

const Card: React.FC<CardProps> = ({
    id,
    columns,
    url,
    hasNavigation = true,
    navigationProps = null,
}) => {
    const navigate = useNavigate();

    /**
     * Create the handleCardClick function separate from the html.
     *  It's better for maintenance.
    */

    const handleCardClick = (e: React.MouseEvent) => { // Add the React.MouseEvent type
        e.preventDefault();

        if (hasNavigation) {
           navigate(url, {
                state: navigationProps,
            });
        }
    };

    return (
        <Container
            data-testid={`cardContainer-${id}`}
            hasNavigation={hasNavigation}
            onClick={handleCardClick}
        >
            {columns.map(({key: columnKey, value}) => (
                <p key={columnKey}>
                    <strong>{columnKey}</strong>&nbsp;{value}
                </p>
            ))}
        </Container>
    );
};

export default Card;
