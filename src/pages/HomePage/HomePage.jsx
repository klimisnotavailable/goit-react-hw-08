import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";


function HomePage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(register());
    }, [dispatch]);
    
    return <>
        <section>
            <h1>Hello</h1>
        </section></>
}

export default HomePage;