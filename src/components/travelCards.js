import "../App.css"

export default function TravelCard(item) {
    return(
        <div className="card">
            <img
            src={item.imageUrl}
            alt={item.location}
            className="card--img" />
            <div className="ma">
                <div className="country--detail">
                    <img
                    src={require('../location_icon.png')}
                    alt="icon"
                    className="location--icon" />
                    <p className="country">{item.location.toUpperCase()}</p>
                    <a href={item.googleMapsUrl} target = "_blank">
                        <p className="google--maps">View on Google Maps</p>
                    </a>
                </div>
                <p className="card--title">{item.title}</p>

                <p className="dates">{item.startDate} - {item.endDate}</p>
                <p className="desc">{item.description}</p>
            </div>
        </div>
    )
}
