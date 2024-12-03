import React, { useState, useEffect, useRef } from "react";
import CertificateDownload from "./CertificateDownload"; // Import the CertificateDownload component

const AssessmentCarpentry = () => {
  const [name, setName] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [questions] = useState([
    { id: 1, question: "What is green farming?", options: ["A", "B", "C", "D"], answer: "A" },
    { id: 2, question: "Which crop is commonly used in organic farming?", options: ["Rice", "Wheat", "Barley", "Millet"], answer: "Wheat" },
    // Add more questions as needed
  ]);
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [testEnded, setTestEnded] = useState(false);
  const [certificateReady, setCertificateReady] = useState(false); // To track whether certificate can be downloaded

  const downloadTriggered = useRef(false);  // Ref to track if download is triggered

  // Timer countdown logic
  useEffect(() => {
    if (isStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0) {
      setTestEnded(true);
    }
  }, [isStarted, timeLeft]);

  // Tab switch detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && isStarted) {
        alert("Tab switch detected! Test ended.");
        setTestEnded(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isStarted]);

  const handleAnswerChange = (questionId, option) => {
    setCurrentAnswers({ ...currentAnswers, [questionId]: option });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((q) => {
      if (currentAnswers[q.id] === q.answer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setTestEnded(true); // End the test and calculate score
    // Check if score is >= 50% (threshold for certificate generation)
    if (calculatedScore / questions.length >= 0.5) {
      setCertificateReady(true); // Set the flag to show the download button
    }
  };

  const handleRestart = () => {
    setName("");
    setIsStarted(false);
    setTimeLeft(600);
    setCurrentAnswers({});
    setScore(0);
    setTestEnded(false);
    setCertificateReady(false); // Reset certificate flag on restart
    downloadTriggered.current = false;  // Reset download flag on restart
  };

  const handleDownloadCertificate = () => {
    // Trigger certificate download only once using ref
    if (!downloadTriggered.current) {
      downloadTriggered.current = true;
    }
  };

  const renderQuestions = () =>
    questions.map((q) => (
      <div key={q.id} className="header">
        <p className="font-medium mb-2">{q.id}. {q.question}</p>
        {q.options.map((opt, index) => (
          <div key={index} className="header">
            <input
              type="radio"
              name={`question-${q.id}`}
              value={opt}
              onChange={() => handleAnswerChange(q.id, opt)}
              disabled={testEnded}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label className="ml-2">{opt}</label>
          </div>
        ))}
      </div>
    ));

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Name Entry */}
      {!isStarted && !testEnded && (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Assessment Garden</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-4"
          />
          <button
            onClick={() => {
              if (name.trim()) setIsStarted(true);
              else alert("Please enter your name to start.");
            }}
            className="block-btn"
          >
            Start Assessment
          </button>
        </div>
      )}

      {/* Assessment content */}
      {isStarted && !testEnded && (
        <div className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Assessment</h2>
            <p className="text-lg font-bold text-red-500">
              Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
            </p>
          </div>
          <form className="bg-white p-6 rounded-lg shadow-md">
            {renderQuestions()}
            <button
              type="button"
              onClick={handleSubmit}
              className="block-btn"
              disabled={Object.keys(currentAnswers).length < questions.length}
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Result, Score and Certificate Download */}
      {testEnded && name && (
        <div className="mt-6">
          {/* Show score and message based on result */}
          <div className="text-center mt-4">
            {score / questions.length >= 0.5 ? (
              <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Congratulations, {name}!</h1>
                <p>You passed the assessment with a score of {score}/{questions.length}!</p>
                {/* Show download button only if score >= 50% */}
                {certificateReady && (
                  <div className="mt-4">
                    {/* Certificate download button */}
                    <button
                      onClick={handleDownloadCertificate}
                      className="bg-green-500 block-btn"
                    >
                      Download Certificate
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-red-100 text-red-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Sorry, {name}!</h1>
                <p>You scored {score}/{questions.length}. Please try again.</p>
                <button
                  onClick={handleRestart}
                  className="bg-red-500 block-btn"
                >
                  Reattempt
                </button>
              </div>
            )}
          </div>
          {/* Trigger the certificate download after the button click */}
          {downloadTriggered.current && certificateReady && (
            <CertificateDownload name={name} certificateType="Carpentry" />
          )}
        </div>
      )}
    </div>
  );
};

export default AssessmentCarpentry;
