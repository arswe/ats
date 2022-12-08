import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import { useAppContext } from '../context/appContext';
import StatItem from './StatItem';

const StatsContainer = () => {
    const { stats } = useAppContext();

    const defaultStats = [
        {
            title: 'pending applications',
            count: stats.pending || 0,
            icon: <FaSuitcaseRolling />,
            color: 'red',
            bcg: '#fcefc7',
        },
        {
            title: 'interviews scheduled',
            count: stats.interview || 0,
            icon: <FaCalendarCheck />,
            color: 'green',
            bcg: '#e0e8f9',
        },
        {
            title: 'jobs declined',
            count: stats.declined || 0,
            icon: <FaBug />,
            color: 'cyan',
            bcg: '#ffeeee',
        },
    ];

    return (
        <Wrapper>
            {defaultStats.map((item, index) => {
                return (
                    <StatItem
                        key={index}
                        {...item}
                    />
                );
            })}
        </Wrapper>
    );
};

export default StatsContainer;
