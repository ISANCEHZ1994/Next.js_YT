import { useRouter } from "next/router"; // this will allow us to use the query parameters from URL
// import axios from "axios";

// This is known as a DYNAMIC COMPONENT
export default function Car({ car }){

    const router = useRouter();
    // in this case is ID however you can name it whatever you want!
    const { id } = router.query;
    // return <h2>This is a car name that we called on the url: {id} </h2>
    // example: In url it shows localhost:3000/cars/toyota
    // the browser would show the h2 tag with the string inside
    // and id will be `toyota` because that is what we wrote in URL 

    // AT LEAST THAT IS HOW IT WAS..now we are adding our JSON data from Public folder!
    return (
        <>
            <head>
                <title>{ car.color }</title>
            </head>
            <h1> Hello { id } </h1>
            <img src={ car.image } width="300px" height="300px" />
        </>
    )
};

export async function getServerSideProps({ params }){
    const req  = await fetch(`http://localhost:3000/${ params.id }.json`);
    const data = await req.json();

    return {
        props: { car: data },
    }
}

// getting the json file depending on which car name we want to see..
// export async function getStaticProps({ params }){
//     const req  = await fetch(`http://localhost:3000/${ params.id }.json`);
//     const data = await req.json();

//     return {
//         props: { car: data },
//     }
// };

// How does Next know which dynamic pages to render? - Next doesn't know how many pages/urls there are!
// export async function getStaticPaths(){
//     const req  = await fetch("http://localhost:3000/cars.json");
//     const data = await req.json();

//     const paths = data.map( car => {
//         return {
//             params: { id: car }
//         }
//     });

//     return{
//         paths,
//         fallback: false
//     }
// };

// Server-Side Rendering
// Generate each page at request time

// ===== [ DRAWBACKS ] =====
// - slower
// - inefficient data caching

