import Skeleton from '@mui/material/Skeleton';
import defaultImage from '../../../assets/default_image.svg';

const GifAnswer = ({ data, isLoading }) => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            height: '100%',
            width: '100%'
        }}>
            {
                isLoading
                    ? <Skeleton width={100} height={50} animation='wave' />
                    : <h1 style={{
                        color: 'transparent',
                        mixBlendMode: 'multiply',
                        WebkitTextStroke: '3px black',
                        padding: '5px',
                        backgroundColor: 'yellow',

                    }}>
                        {data?.answer? data.answer.toUpperCase() : 'YES OR NOT'}
                    </h1>
            }

            <div style={{
                flex: '1 1 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
            }}>
                {
                    isLoading
                        ? <Skeleton width={400} height={'100%'} animation='wave' />
                        : <img
                            style={{
                                boxShadow: `${data?.image ? '10px 5px 40px rgb(0,0,0)' : 'none'}`,
                                width: `${data?.image ? '400px' : '100px'}`,
                                height: `${data?.image ? '234px' : '100px'}`,
                            }} src={data?.image ? data.image : defaultImage} alt="image" />
                }
            </div>
        </div>

    )
}


export default GifAnswer;