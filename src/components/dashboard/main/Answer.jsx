import defaultImageSecond from '../../../assets/svg/default_image_second.svg';
import styles from './styles/Answer.module.css';
import { Error } from '../../error/Error';
import { Loader } from './Loader';
import { Skeleton, alpha } from '@mui/material';
import { grey } from '@mui/material/colors';



const Answer = ({ data, isLoading, isError }) => {

    return (
        <div className={styles.answer}>
            {
                isLoading
                    ? <Skeleton sx={{
                        backgroundColor: alpha(grey[300], .11),
                    }} width={100} height={30} variant='rounded' /> 
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
                                ? <Loader />
                                : <img
                                    className={data?.image ? styles.img__active : styles.img__default}
                                    src={data?.image ? data.image : defaultImageSecond} alt="image" />
                        }
                     </div>
            }


        </div>

    )
}


export default Answer;