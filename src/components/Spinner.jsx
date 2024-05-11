import Skeleton from 'react-loading-skeleton'

function Spinner() {

    // return <> <div className='col-md-3'>
    //     <Skeleton height={550}></Skeleton>
    // </div >

    //     <div className='col-md-3'>
    //         <Skeleton height={350}></Skeleton>
    //     </div >

    //     <div className='col-md-3'>
    //         <Skeleton height={350}></Skeleton>
    //     </div >
    // </>

    return <div className="text-center spinner">
        <div className="spinner-border" role="status" style={{ width: "3rem", height: "3rem" }}>
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
}

export default Spinner;