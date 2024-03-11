import Skeleton from '@mui/material/Skeleton';
import defaultImage from '../../../assets/default_image.svg';
import styles from './styles/Answer.module.css';
import { Error } from '../../register/Error';

const Answer = ({ data, isLoading, isError }) => {

    return (
        <div className={styles.answer}>
            {
                isLoading
                    ? <Skeleton width={100} height={70} sx={{
                        backgroundColor: 'rgb(63, 91, 255, .1)',
                        borderRadius: 0,
                        margin: 'auto',
                    }} />
                    : <h1 className={styles.answer__title}>
                        {data?.answer ? data.answer.toUpperCase() : 'YES OR NOT'}
                    </h1>
            }
            {
                isError
                    ? <div
                        style={{
                            width: '50%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <Error>{isError}</Error>
                    </div>
                    : <div className={styles.answer__image}>
                        {
                            isLoading
                                ? <Skeleton  sx={{
                                    backgroundColor: 'rgb(63, 91, 255, .1)',
                                    borderRadius: 0,
                                    margin: 'auto',
                                }} 
                                width={'80%'} 
                                height={'100%'} />
                                : <img
                                    className={data?.image ? styles.img__active : styles.img__default}
                                    src={data?.image ? data.image : defaultImage} alt="image" />
                        }
                     </div>
            }


        </div>

    )
}


export default Answer;