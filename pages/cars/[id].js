import { useRouter } from "next/router"; // this will allow us to use the query parameters from URL

// This is known as a DYNAMIC COMPONENT
export default function Car(){

    const router = useRouter();
    // in this case is ID however you can name it whatever you want!
    const { id } = router.query;

    return <h2>This is a car name that we called on the url: {id} </h2>

}

