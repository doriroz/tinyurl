import UrlBox from './Component/UrlBox';
import Navigation from './UI/Navigation';
import './App.css';
import MyUrl from './Component/MyUrl';
import { useEffect, useState } from 'react';
import UrlContext from './Store/UrlContext';

const Deshboard = () => {

  const [urlsLoaded,setUrlsLoaded] = useState(false);  
  const [urls,setUrls] = useState([]);
  const [url,setUrl] = useState();
  const [urltiny,setUrltiny] = useState();
  const [style,setStyle] = useState();

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
      setUrlsLoaded(true);
      getTinyURL();
    });
  }

  const getTinyURL = async() => {
    await fetch('https://tinyurlapp-41ab0-default-rtdb.firebaseio.com/tiny.json')
    .then(response=>response.json())
    .then(data=>{
        setUrlsLoaded(false);
        if(data){
          console.log("dddddddddddddddd"+data);
          Object.entries(data).map(val=> console.log(val[0].slice(1)));
          Object.entries(data).map(val=> console.log(Object.values(val[1])[0]));
          setUrls(Object.entries(data).map(val=> Object.values(val)));
        }
        else{
          setUrls([]);
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
    <UrlContext.Provider 
        value={
        {getTinyURL,
        setUrlsLoaded,
        setUrltiny,
        setUrl}}>
      <div className="App Contianer">
        <header className="App-header">
            TINYURL
            <nav className='div-flex'>
            <Navigation updstyle={setStyle} getmyurl={getTinyURL}/>
            </nav>
        </header>
        <div className='App-url'>
            <div className='App-frame'>
            <UrlBox addurl={addTinyURL} copyurl={copyHandler}/>
            </div>
            <div>
            <MyUrl urls={urls} stylemyurl={style} updstyle={setStyle} urlsLoaded={urlsLoaded}/>
            </div>
        </div> 
       </div>
    </UrlContext.Provider>
//     <Route path="/tiny/:urlid" exact>
//     <Deshboard />
//   </Route>      
  );
}

export default Deshboard;