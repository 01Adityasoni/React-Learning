import Card from "./Card";


function Tours({tours, removeTour}){
    return(
        <div>
            <div>
                <h2 className="stylish-heading">Travel With Aditya</h2>
            </div>
            <div className="cards-container">
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour} />
                    })
                }
            </div>
        </div>
    )
}

export default Tours;