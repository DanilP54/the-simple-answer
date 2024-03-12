import defaultImageSecond from '../../../assets/svg/default_image_second.svg';
import styles from './styles/Answer.module.css';
import { Error } from '../../error/Error';
import { Loader } from './Loader';



const Answer = ({ data, isLoading, isError }) => {

    return (
        <div className={styles.answer}>
            {
                isLoading
                    ? <Loader size={20} />
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