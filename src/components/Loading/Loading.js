import React from 'react';
import loading from '../../res/loading.png';
import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <img src={loading} alt="Loading" width="100" className={styles.image} />
        </div>
    );
};

export default Loading;
