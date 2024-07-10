import {useState, useEffect} from "react";
import OutletData from "./components/OutletData";
import { API } from "./util/constants";

const App = () => {

  const [data, setData] = useState([]);

  const fetchData = async (url) =>{
    try{
      const res = await fetch(url);
      const outletData = await res.json();
      if(outletData.length > 0){
        setData(outletData);
      }
    } catch(e){
      console.error(e);
    }
  }

  useEffect(() => {
    fetchData(API);
  }, [])

  return(
    <table>
      <thead>
        <tr>
          <th>Outlet</th>
          <th>Sale Info</th>
        </tr>
      </thead>
      <tbody>
        <OutletData data={data} />
      </tbody>
    </table>
  );
}

export default App;
