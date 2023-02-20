import React, {useEffect, useState} from 'react';
import {ListItem, Teams as TeamsList} from 'types';
import {Search} from 'components/Search/styles';
import {getTeams as fetchTeams} from '../api';
import Header from '../components/Header';
import List from '../components/List';
import {Container} from '../components/GlobalComponents';

/**
 * It's generally preferable to use const or let instead of var
 * Using const and let can help make the code more predictable
 */

const TeamsData = (teams: TeamsList[]) => {
    return teams.map(team => {
        const columns = [
            {
                key: 'Name',
                value: team.name,
            },
        ];
        return {
            id: team.id,
            url: `/team/${team.id}`,
            columns,
            navigationProps: team,
        } as ListItem;
    });
};

const Teams = () => {
    const [teams, setTeams] = useState<TeamsList[]>([]);
    const [filteredTeams, setFilteredTeams] = useState<TeamsList[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>('');
    
    const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchedTerm = e.target.value.toLowerCase();
        const filterTeams = teams.filter(team => {
          return team.name.toLowerCase().includes(searchedTerm);
        });
        setFilteredTeams(filterTeams);
        setSearchTerm(searchedTerm);
      };
      

    useEffect(() => {
        const getTeams = async () => {
            const response = await fetchTeams();
            setTeams(response);
            setIsLoading(false);
        };
        getTeams();
    }, []);

    return (
        <Container>
            <Header title="Teams" showBackButton={false} />
            <Search onChange={handleSearchTerm} type="text" value={searchTerm} placeholder='Search by name' />
            <List 
                items={TeamsData(filteredTeams.length > 0 ? filteredTeams : teams)}
                isLoading={isLoading}
             />
        </Container>
    );
};

export default Teams;
