// think about how:
// the route =>         /cars         **list of cars
// then how do you =>   /cars/:id     **dynamic car page - an infinite number of cars they can be shown..
// LOOK: we created a cars directory/folder and INDEX file to show ALL cars - main list of cars
// THEN: notice the [id].js file => Next.js knows that the [id] file means that we mean ONE specifc car

// In Next.js it is the [PARAM].js that creates our DYNAMIC ROUTE
// which means anytime a user navigates to:
//      cars/tesla
//      cars/lambo
//      cars/CAR_NAME_HERE
// Next.js will render it to this file..

// so far if we go to http://localhost:3000/cars we will only see => Cars List .. like below!
export default function CarsList(){
    return <h1>Cars List</h1>
}
