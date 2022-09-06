import UrlBox from './Component/UrlBox';
import Navigation from './UI/Navigation';
import Redirct from './UI/Redirect';
import { Switch ,Route ,Redirect } from "react-router-dom";
import './App.css';
import MyUrl from './Component/MyUrl';
import { useEffect, useState } from 'react';
import UrlContext from './Store/UrlContext';
import Deshboard from './DeshboardUrl';
import Request from './API/Request';
function App() {
  
  // const [urlsLoaded,setUrlsLoaded] = useState(false);  
  const [urls,setUrls] = useState([]);
  const [url,setUrl] = useState();
  const [urltiny,setUrltiny] = useState();
  const [style,setStyle] = useState();
  const [isUpdate,setIsUpdate] =useState(false);

  const addTinyURL =  async (url) => {
     await fetch('https://tinyurlapp-41ab0-default-rtdb.firebaseio.com/tiny.json',{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({urlSource:url,
        urlDate:new Date()})
      })
    .then(response=>{
      response.json();
      })
    .then(data=>{
      console.log(data);
      getTinyURL();
    });
  }

  const getTinyURL = () => {
    fetch('https://tinyurlapp-41ab0-default-rtdb.firebaseio.com/tiny.json')
    .then(response=>response.json())
    .then(data=>{
        if(data){
          console.log(data);
          Object.entries(data).map(val=> console.log(val[0].slice(1)));
          Object.entries(data).map(val=> console.log(Object.values(val[1])[0]));
          setUrls(Object.entries(data).map(val=> Object.values(val)));
        }
    });
  }

  const copyHandler = (url) => {
    addTinyURL(url);
  }

  useEffect(()=>{
    console.log("dori0");
    getTinyURL();
  },[])

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/tiny"/>
      </Route> 
      <Route path="/tiny" exact>
        <Deshboard />
      </Route>
      <Route path="/tiny/:tinyId" exact>
       <Request />
      </Route>
    </Switch>
  );
}

export default App;


//build block with all url array from DB
//each url adding will insert into db and display on the block
//url will displayed with button near him for copy url (url source)
//when url is copied it will update the url state and the url state will be in the path 
//attribute of a Router element which routes to the source url 