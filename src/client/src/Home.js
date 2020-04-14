import React from 'react';
import { Link } from 'react-router-dom';

function Home(props){
 console.log(props)
    const goToInputPage = ()=>{
        props.history.push('/form')
    }
    return (
      <div className="home">
        <nav className="navi">
          <Link id="link" to="/form">
            Estimate Calculator
          </Link>
          <Link id="link" to="/estimates">
            Covid-19 Estimated Data
          </Link>
        </nav>
        <h1>Coronavirus disease (COVID‑19)</h1>
        <div className="displayFlex">
          <div className="divHome">
            <h3>Overview</h3>
            <p>
              Coronavirus disease causes respiratory illness (like the flu) with
              symptoms such as a cough, fever, and in more severe cases,
              difficulty breathing. You can protect yourself by washing your
              hands frequently, avoiding touching your face, and avoiding close
              contact (1 meter or 3 feet) with people who are unwell.
            </p>
          </div>
          <div className="divHome">
            <h3>How it spreads</h3>
            <p>
              Coronavirus disease spreads primarily through contact with an
              infected person when they cough or sneeze. It also spreads when a
              person touches a surface or object that has the virus on it, then
              touches their eyes, nose, or mouth.
            </p>
          </div>
          <div className="divHome startAlign">
            <h3>How to keep safe</h3>
            <p>
              <strong>1. STAY</strong> home as much as you can
            </p>
            <p>
              <strong>2. KEEP</strong> a safe distance
            </p>
            <p>
              <strong>3. WASH</strong> hands often
            </p>
            <p>
              <strong>4. COVER</strong> your cough
            </p>
          </div>
        </div>
        <div>
          <button onClick={goToInputPage}>Estimator calculator</button>

        </div>
      </div>
    );
}
export default Home;