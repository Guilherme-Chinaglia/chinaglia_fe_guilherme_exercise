import * as React from 'react';
import {useLocation} from 'react-router-dom';
import {UserData} from 'types';
import Card from '../components/Card';
import {Container} from '../components/GlobalComponents';
import Header from '../components/Header';


/**
 * It's generally preferable to use const or let instead of var
 * Using const and let can help make the code more predictable
 */
const UsersData = (user: UserData) => {
    const columns = [
        {
            key: 'Name',
            value: `${user.firstName} ${user.lastName}`,
        },
        {
            key: 'Display Name',
            value: user.displayName,
        },
        {
            key: 'Location',
            value: user.location,
        },
    ];
    return <Card columns={columns} hasNavigation={false} navigationProps={user} />;
};

const UserOverview = () => {
    const location = useLocation();
    return (
        <Container>
            <Header title={`User ${location.state.firstName} ${location.state.lastName}`} />
            {UsersData(location.state)}
        </Container>
    );
};

export default UserOverview;
