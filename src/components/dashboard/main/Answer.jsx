import Skeleton from '@mui/material/Skeleton';
import defaultImage from '../../../assets/default_image.svg';
import styles from './styles/Main.module.css';

const Answer = ({ data, isLoading }) => {

    return (
        <div className={styles.answer}>
            {
                isLoading
                    ? <Skeleton width={100} height={50} animation='wave' />
                    : <h1 className={styles.answer__title}>
                        {data?.answer? data.answer.toUpperCase() : 'YES OR NOT'}
                    </h1>
            }

            <div className={styles.answer__image}>
                {
                    isLoading
                        ? <Skeleton width={400} height={'100%'} animation='wave' />
                        : <img
                            style={{
                                boxShadow: `${data?.image ? '10px 5px 40px rgb(0,0,0)' : 'none'}`,
                                width: `${data?.image ? '400px' : '100px'}`,
                                height: `${data?.image ? '234px' : '100px'}`,
                            }} 
                            src={data?.image ? data.image : defaultImage} alt="image" />
                }
            </div>
        </div>

    )
}


export default Answer;