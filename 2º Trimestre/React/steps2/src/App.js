const messages = [
  "Learn React 💗",
  "Apply for jobs 💃",
  "Invest your new income 🎉"
];

function App() {
  const step = 2;
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step = 1]} 
        </p>
      <div className="buttons">
        <button>Previous</button>
        <button>Next</button>
      </div>    
    </div>
  );
}

export default App;