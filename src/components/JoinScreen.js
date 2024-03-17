function JoinScreen({start}) {
    return (
        <div className="join-screen">
            <h2>Join Quiz</h2>
            <p>Take this General Knowledge quiz</p>
            <button onClick={start}>Start</button>
        </div>
    );
}

export default JoinScreen;