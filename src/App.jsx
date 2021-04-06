
import './styles/App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FooterBar from "./components/FooterBar";
import HeaderBar from "./components/HeaderBar";
import Home from "./pages/Home";
import PackageTrack from "./pages/PackageTrack";
import SearchResults from "./pages/SearchResults";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <TopLevel></TopLevel>
  );
}

function TopLevel () {
  const [status, setStatus] = useState(0)
  const [packages, setPackages] = useState([]);
  const [packageID, setPackageID] = useState(null);
  const API_URL = 'https://my.api.mockaroo.com/orders.json?key=e49e6840'
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => onFetchSuccess(json))
      .catch((error) => onFetchFail(error));
  }, [setPackages, setStatus]);

  function onFetchSuccess(json) {
    setPackages(json);
    setStatus(1);
  }

  function onFetchFail(error) {
    console.log("Error", error);
    setStatus(2);
  }

  return (
<div>
      <BrowserRouter>
        <HeaderBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/packagetrack" exact render={()=><PackageTrack packages= {packages} setPackages={setPackages} status={status} setPackageID={setPackageID}/>} />
          <Route path="/results/:query" render={()=><SearchResults packages={packages} status={status} packageID={packageID}/>} />
        </Switch>
      <FooterBar />
      </BrowserRouter>
    </div>
  )
}
