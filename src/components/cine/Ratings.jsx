import Start from '../../../public/assets/star.svg'
function Ratings({ value }) {

    const stars = Array(value).fill(Start)


    return (
        <>
            {
                stars.map((star, i) => (
                    < img key={i} src={star} width="14" height="14" alt="star" />
                ))
            }
        </>



    )
}

export default Ratings