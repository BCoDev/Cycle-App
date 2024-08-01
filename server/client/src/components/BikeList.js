import AddBikes from './AddBikes'

function BikeList({ bikes }) {
    const renderedBikes = bikes.map(({ id, brand, model}) => {
        return <AddBikes key={id} brand={brand} model={model} />
    })

    return <div>{ renderedBikes }</div>
}

export default BikeList