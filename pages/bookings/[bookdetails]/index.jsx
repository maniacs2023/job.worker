import { Image } from "react-bootstrap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {db} from "../../../firebase";
import { getDoc,  doc } from 'firebase/firestore';
import MyMap from "../../../component/tomtommap/mymap";
const Bookdetails = () => {
    const router = useRouter();
    const [bd,setbdata] = useState([]);
    
    useEffect(()=>{
        const fetchData = async() =>{
            const bookid = router.query.bookdetails;
            const bookRef = doc(db, "booking", bookid);
            try {
                const docSnap = await getDoc(bookRef);
                setbdata(docSnap.data());
            } catch(error) {
                console.log(error)
            }
        }
        return(()=>fetchData())
    },[]);
    return ( <>
    <div className="container mt-5">
    
        <div className="col-xl-12">
            <div className="row">
            <h1 className="text-center mt-5" id="sub-heading">Booking Details</h1>
            <div className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4 mt-5">
                    <div className="text-center">
                        <Image src={bd?.cProfilePic} style={{"width":"60%", "height" :"auto"}}/> 
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4  mt-5">
                    <b>Name: </b><p>{bd.cName}</p><hr/>
                    <b>Address: </b><p>{bd.cAddress}</p><hr/>
                    <b>Phone: </b><p>{bd.cPhone}</p><hr/>
                    <b>Email: </b><p>{bd.cEmail}</p><hr/>
                </div>
                
                <div className="col-12 col-sm-6 col-md-12 col-xl-4 col-xl-4  mt-5">
                    <MyMap latitude={bd.clocationlat} longitude={bd.clocationlon}/>
                </div>
            </div>
        </div>
    </div>
    </> );
}
export default Bookdetails;