import { useRouter } from 'next/router';
import classes from '../styles/Toolbar.module.css';

function Toolbar() {
    const router = useRouter();

    return (
        <div className={classes.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => router.push('/feed/1')}>Feed</div>
            <div onClick={() => router.push('/eom')}>EOM</div>
            <div onClick={() => window.location.href = 'https://www.twitter.com'}>Twitter</div>
        </div>
    ); 
};

export default Toolbar;
