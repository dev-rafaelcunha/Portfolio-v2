import { useState, useEffect } from 'react';

const HeaderFixed = () => {
    const [headerFixed, setHeaderFixed] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setHeaderFixed(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return headerFixed;
};

export default HeaderFixed;
