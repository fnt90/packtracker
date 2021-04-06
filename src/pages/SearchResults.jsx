import logo from '../images/packtrack.png'
import PackageItem from "../components/PackageItem";

export default function SearchResults(props) {

  // Consts
  const query = props.packageID;
  const filteredResults = props.packages.filter((packageInfo) =>
    packageInfo.parcel_id.match(query)
  );

const PackageArray = filteredResults.map((packageInfo) => (
    <PackageItem key={packageInfo.id} 
    parcel_id={packageInfo.parcel_id} 
    status={packageInfo.status}
    eta={packageInfo.eta}
    sender={packageInfo.sender}
    last_updated={packageInfo.last_updated}
    location_coordinate_latitude={packageInfo.location_coordinate_latitude}
    location_coordinate_longitude={packageInfo.location_coordinate_longitude}
    location_name={packageInfo.location_name}
    />
  ));

  return (
    <section className="resultPage">
      <h1>Search Results</h1>
      {PackageArray.length > 0? <p>{PackageArray}</p> : <p>No matching ID found.</p>}
      <img src={logo} alt="logo"></img>
    </section>
  );
}