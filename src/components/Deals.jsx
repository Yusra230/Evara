import DealCard from "./DealCard";

const Deals = () => {
    const DealCardObj = [
        {
            title: "Deal of the Day",
            para: 'Summer Collection New Modern Design.',
            currentPrice: '$139',
            originalPrice: '$160.99',
            pic: 'deals-1.jpg',

        },

        {
            title: "Women Clothing",
            para: 'Try something new on vacation.',
            currentPrice: '$178',
            originalPrice: '$256.99',
            pic: 'deals-2.jpg'
        },

    ];


    return <>

        <div className="container col-xxl-8 px-4 ">
            <div className="row align-items-center  g-5 py-2">
                <div className="col-lg-6 deal-cards" >
                    <DealCard DealCardObj={DealCardObj[0]}></DealCard>
                </div>

                <div className="col-lg-6 deal-cards" >
                    <DealCard DealCardObj={DealCardObj[1]}></DealCard>
                </div>
            </div>
        </div>

    </>

}

export default Deals; 