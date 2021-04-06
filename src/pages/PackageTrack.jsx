import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PackageTrack(props) {

  const [query, setQuery] = useState("");
  const history = useHistory();
  
  function onSearch(event) {
    event.preventDefault();
    props.setPackageID(query)
    history.push(`/results/${query}`);
  }

  const [status, setStatus] = useState(0)
  const [packages, setPackages] = useState([]);
  const API_URL = 'https://my.api.mockaroo.com/orders.json?key=e49e6840'
  
useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => onFetchSuccess(json))
      .catch((error) => onFetchFail(error));
  }, [setPackages, setStatus]);

function onFetchSuccess(json) {
    props.setPackages(json);
    setStatus(1);
  }

  function onFetchFail(error) {
    console.log("Error", error);
    setStatus(2);
  }
const PackageIDList = props.packages.map((packageInfo) =>{
  return (
    <div>
      <ul>
        <li><i class="fas fa-box"></i><span> Parcel ID:</span> {packageInfo.parcel_id}</li>
        <li><span>Sender:</span> {packageInfo.sender}</li>  
      </ul>
    </div>
  )
} 

  );

  return (
    <section className="packageTrack">
      <h1>Have a tracking number?</h1>
      <form onSubmit={onSearch}>
        <input 
          type="text"
          value={query} 
          placeholder="0000"
          onChange={(event) => setQuery(event.target.value)} />
        <input type="submit" value="Search" />
      </form>
      <p>
        If you know the Parcel ID of the package you want to track, enter it above. If not, choose a Parcel ID from the list below.
      </p>
      <p>
      {status === 0 && <div>Loading...</div>}
      {status === 1 && (
        <div> 
        Your current packages:
          {PackageIDList}
        </div>
      )}
      {status === 2 && <div>Please check your connection</div>}
      </p>
    </section>
  );
}
