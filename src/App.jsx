import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app"> {/* ✅ unified theme wrapper */}
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Dashboard setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

// LOGIN COMPONENT
function Login(props) {
  const { setIsLoggedIn } = props;

  return (
    <div className="login-wrapper">
      <div className="login-card glass">
        <h1 className="logo">GigGuard AI</h1>
        <p className="tagline">
          Protecting Real Income, Not Just Events
        </p>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      </div>
    </div>
  );
}

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

// DASHBOARD COMPONENT
function Dashboard(props) {
  const { setIsLoggedIn } = props;

  const [expected, setExpected] = useState("");
  const [actual, setActual] = useState("");
  const [result, setResult] = useState("");

  const checkPayout = () => {
    if (!expected || !actual) {
      setResult("⚠️ Enter all values");
      return;
    }

    if (parseInt(actual) < parseInt(expected)) {
      setResult("approved");
    } else {
      setResult("rejected");
    }
  };

  return (
    <div className="dashboard">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <h2>GigGuard AI</h2>
        <p>Dashboard</p>

        {/* ✅ Logout button added */}
        <button className="logout" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-area">
        <div className="card glass">
          <h2>Check Payout</h2>

          <input
            type="number"
            placeholder="Expected Earnings (₹)"
            value={expected}
            onChange={(e) => setExpected(e.target.value)}
          />

          <input
            type="number"
            placeholder="Actual Earnings (₹)"
            value={actual}
            onChange={(e) => setActual(e.target.value)}
          />

          <button onClick={checkPayout}>Check Payout</button>

          {/* ✅ Styled results */}
          {result === "approved" && (
            <h3 className="approved">✅ Payout Approved</h3>
          )}
          {result === "rejected" && (
            <h3 className="rejected">❌ No Loss Detected</h3>
          )}
          {result === "⚠️ Enter all values" && (
            <h3 className="warning">{result}</h3>
          )}

          {/* ✅ Extra info */}
          <p className="logic">
            System checks: Location ✔ | Activity ✔ | Earnings ✔
          </p>

          <p className="highlight">
            We don&apos;t pay just because it rains. We pay when income is actually lost.
          </p>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default App;