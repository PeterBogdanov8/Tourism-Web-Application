import { useState } from "react";
import { Tour } from "../shared/models/tour";
import { getTours } from "../services/api";

function ToursPage() {
    const [tours, setTours] = useState<Array<Tour>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    getTours().subscribe((tours) => {
        setTours(tours)
    })
    return (
        <>
            <h1>Tours Page</h1>
            {
                tours.map(tour => (
                    <ul>{tour.name}</ul>
                ))
            }
        </>
    );
}

export default ToursPage;