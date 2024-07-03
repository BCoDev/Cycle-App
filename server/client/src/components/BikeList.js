import BikeShow from './BikeShow'

function BikeList({ bikes }) {
    const renderedBikes = bikes.map(({ id, brand, model}) => {
        return <BikeShow key={id} brand={brand} model={model} />
    })

    return <div>{ renderedBikes }</div>
}

export default BikeList