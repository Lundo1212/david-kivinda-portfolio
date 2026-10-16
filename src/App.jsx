import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaChevronRight,
  FaGamepad,
  FaHeadphones,
  FaMusic,
  FaPause,
  FaPlay,
  FaPlus,
  FaRedo,
  FaTrophy,
  FaUserFriends,
  FaVolumeUp,
  FaUsers,
} from "react-icons/fa";
import "./App.css";

const sampleMusic = [
  {
    id: 1,
    title: "Neon Drive",
    artist: "Pulse Studio",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    color: "#70f0c0",
  },
  {
    id: 2,
    title: "Midnight Quiz",
    artist: "Signal Room",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    color: "#7cc7ff",
  },
  {
    id: 3,
    title: "Victory Loop",
    artist: "Champion Beats",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    color: "#f3b86c",
  },
];

const quizBank = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    answer: "Mars",
    fact: "Mars looks red because of iron oxide dust covering the surface.",
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Kyoto", "Nagoya", "Tokyo", "Osaka"],
    answer: "Tokyo",
    fact: "Tokyo is Japan's political and economic capital.",
  },
  {
    question: "Which language is primarily used to style web pages?",
    options: ["Python", "CSS", "C++", "SQL"],
    answer: "CSS",
    fact: "CSS controls colors, spacing, layout, and visual design.",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare",
    fact: "Shakespeare wrote the famous tragedy in the late 1500s.",
  },
  {
    question: "What do plants need to make food in photosynthesis?",
    options: ["Moonlight", "Oxygen", "Sunlight", "Sand"],
    answer: "Sunlight",
    fact: "Sunlight powers the process that converts water and carbon dioxide into sugar.",
  },
];

const buildPlayers = (mode) =>
  mode === "solo"
    ? [{ id: 1, name: "Player 1", score: 0 }]
    : [
        { id: 1, name: "Host", score: 0 },
        { id: 2, name: "Player 2", score: 0 },
      ];

export default function App() {
  const [page, setPage] = useState("game");
  const [gameMode, setGameMode] = useState("solo");
  const [players, setPlayers] = useState(buildPlayers("solo"));
  const [musicList, setMusicList] = useState(sampleMusic);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [roundScored, setRoundScored] = useState(false);
  const [uploadForm, setUploadForm] = useState({ title: "", artist: "", url: "" });
  const [activePlayerId, setActivePlayerId] = useState(1);
  const audioRef = useRef(null);

  const currentQuestion = quizBank[questionIndex];
  const activeTrack = musicList[trackIndex % Math.max(musicList.length, 1)] || musicList[0];

  useEffect(() => {
    if (players.length > 0 && !players.some((player) => player.id === activePlayerId)) {
      setActivePlayerId(players[0].id);
    }
  }, [activePlayerId, players]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !activeTrack) return;

    audio.src = activeTrack.url;
    audio.load();

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [activeTrack, isPlaying]);

  const scoreLeader = useMemo(
    () => [...players].sort((a, b) => b.score - a.score)[0],
    [players]
  );

  const updateMode = (mode) => {
    const nextPlayers = buildPlayers(mode);
    setGameMode(mode);
    setPlayers(nextPlayers);
    setActivePlayerId(nextPlayers[0]?.id ?? 1);
    setQuestionIndex(0);
    setAnswers({});
    setShowAnswer(false);
    setRoundScored(false);
  };

  const addPlayer = () => {
    setPlayers((current) => {
      const nextPlayer = { id: Date.now(), name: `Player ${current.length + 1}`, score: 0 };
      setActivePlayerId(nextPlayer.id);
      return [...current, nextPlayer];
    });
  };

  const updatePlayerName = (playerId, name) => {
    setPlayers((current) =>
      current.map((player) =>
        player.id === playerId ? { ...player, name: name || `Player ${player.id}` } : player
      )
    );
  };

  const chooseAnswer = (playerId, option) => {
    setAnswers((current) => ({ ...current, [playerId]: option }));
  };

  const revealAnswer = () => {
    if (roundScored) return;

    setShowAnswer(true);
    setRoundScored(true);
    setPlayers((current) =>
      current.map((player) => {
        const selected = answers[player.id];
        if (!selected) return player;
        return {
          ...player,
          score: player.score + (selected === currentQuestion.answer ? 1 : 0),
        };
      })
    );
  };

  const nextQuestion = () => {
    setQuestionIndex((current) => (current + 1) % quizBank.length);
    setAnswers({});
    setShowAnswer(false);
    setRoundScored(false);
  };

  const resetGame = () => {
    setPlayers(buildPlayers(gameMode));
    setActivePlayerId(buildPlayers(gameMode)[0]?.id ?? 1);
    setQuestionIndex(0);
    setAnswers({});
    setShowAnswer(false);
    setRoundScored(false);
  };

  const handleAudioToggle = () => {
    if (!activeTrack) return;
    setIsPlaying((current) => !current);
  };

  const nextTrack = () => {
    if (musicList.length === 0) return;
    setTrackIndex((current) => (current + 1) % musicList.length);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    const title = uploadForm.title.trim() || "Untitled track";
    const artist = uploadForm.artist.trim() || "Unknown artist";
    const url = uploadForm.url.trim();

    if (!url) return;

    const newTrack = {
      id: Date.now(),
      title,
      artist,
      url,
      color: ["#70f0c0", "#7cc7ff", "#f3b86c", "#d7a6ff"][Math.floor(Math.random() * 4)],
    };

    setMusicList((current) => [newTrack, ...current]);
    setUploadForm({ title: "", artist: "", url: "" });
    setTrackIndex(0);
    setPage("game");
    setIsPlaying(true);
  };

  return (
    <div className="game-app-shell">
      <header className="top-bar">
        <div className="brand-block">
          <span className="brand-icon">
            <FaGamepad />
          </span>
          <div>
            <p className="eyebrow-label">Smart quiz arena</p>
            <h1>QPlay Studio</h1>
          </div>
        </div>

        <nav className="page-switcher" aria-label="App pages">
          <button
            type="button"
            className={page === "game" ? "switch active" : "switch"}
            onClick={() => setPage("game")}
          >
            <FaGamepad /> Game
          </button>
          <button
            type="button"
            className={page === "admin" ? "switch active" : "switch"}
            onClick={() => setPage("admin")}
          >
            <FaMusic /> Music admin
          </button>
        </nav>
      </header>

      {page === "game" ? (
        <main className="game-layout">
          <section className="arena-panel">
            <div className="arena-header">
              <div>
                <p className="eyebrow-label">Game arena</p>
                <h2>Question challenge</h2>
              </div>
              <div className="mode-toggle">
                <button
                  type="button"
                  className={gameMode === "solo" ? "mode active" : "mode"}
                  onClick={() => updateMode("solo")}
                >
                  Solo
                </button>
                <button
                  type="button"
                  className={gameMode === "team" ? "mode active" : "mode"}
                  onClick={() => updateMode("team")}
                >
                  Team
                </button>
              </div>
            </div>

            <div className="score-strip">
              {players.map((player) => (
                <button
                  key={player.id}
                  type="button"
                  className={activePlayerId === player.id ? "player-card active" : "player-card"}
                  onClick={() => setActivePlayerId(player.id)}
                >
                  <label>
                    <span className="mini-label">Name</span>
                    <input
                      type="text"
                      value={player.name}
                      onChange={(event) => updatePlayerName(player.id, event.target.value)}
                      aria-label={`${player.name} name`}
                    />
                  </label>
                  <strong>{player.score}</strong>
                </button>
              ))}

              {gameMode === "team" && (
                <button type="button" className="inline-action" onClick={addPlayer}>
                  <FaPlus /> Add player
                </button>
              )}
            </div>

            <div className="question-card">
              <div className="question-header">
                <span className="badge">Question {questionIndex + 1}</span>
                <span className="badge subtle">
                  {gameMode === "solo" ? "Solo mode" : `Answering: ${players.find((player) => player.id === activePlayerId)?.name ?? "Player"}`}
                </span>
              </div>

              <h3>{currentQuestion.question}</h3>

              <div className="answer-grid">
                {currentQuestion.options.map((option) => {
                  const isCorrect = option === currentQuestion.answer;
                  const selectedByActivePlayer = answers[activePlayerId] === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      className={
                        `option-button ${showAnswer && isCorrect ? "correct" : ""} ${
                          showAnswer && selectedByActivePlayer && !isCorrect ? "wrong" : ""
                        } ${selectedByActivePlayer ? "selected" : ""}`
                      }
                      onClick={() => chooseAnswer(activePlayerId, option)}
                    >
                      <span>{option}</span>
                      {showAnswer && isCorrect && <strong>? correct</strong>}
                    </button>
                  );
                })}
              </div>

              <div className="question-actions">
                <button type="button" className="primary-button" onClick={revealAnswer}>
                  Reveal answer
                </button>
                <button type="button" className="secondary-button" onClick={nextQuestion}>
                  Next question <FaChevronRight />
                </button>
              </div>

              {showAnswer && (
                <div className="answer-panel">
                  <h4>Host answer</h4>
                  <p>
                    <strong>{currentQuestion.answer}</strong> ? {currentQuestion.fact}
                  </p>
                </div>
              )}
            </div>
          </section>

          <aside className="side-panel">
            <div className="music-card">
              <div className="music-header">
                <span className="icon-wrap">
                  <FaHeadphones />
                </span>
                <div>
                  <p className="eyebrow-label">Now playing</p>
                  <h3>{activeTrack?.title}</h3>
                </div>
              </div>

              <div className="cover-art" style={{ background: activeTrack?.color || "#70f0c0" }}>
                <FaVolumeUp />
              </div>

              <div className="track-meta">
                <strong>{activeTrack?.artist}</strong>
                <span>{musicList.length} tracks in playlist</span>
              </div>

              <div className="controls-row">
                <button type="button" className="control-button" onClick={handleAudioToggle}>
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button type="button" className="control-button" onClick={nextTrack}>
                  <FaChevronRight />
                </button>
              </div>

              <audio ref={audioRef} preload="auto" />
            </div>

            <div className="leaderboard-card">
              <div className="leaderboard-head">
                <FaTrophy />
                <h3>Leaderboard</h3>
              </div>

              {[...players]
                .sort((a, b) => b.score - a.score)
                .map((player, index) => (
                  <div key={player.id} className="leader-row">
                    <span>#{index + 1}</span>
                    <strong>{player.name}</strong>
                    <em>{player.score} pts</em>
                  </div>
                ))}

              <div className="leader-footer">
                <FaUserFriends />
                <span>Leader: {scoreLeader?.name || "No players yet"}</span>
              </div>
            </div>

            <button type="button" className="reset-button" onClick={resetGame}>
              <FaRedo /> Reset round
            </button>
          </aside>
        </main>
      ) : (
        <main className="admin-page">
          <section className="admin-panel">
            <div className="admin-heading">
              <div>
                <p className="eyebrow-label">Music control desk</p>
                <h2>Add more game music</h2>
              </div>
              <button type="button" className="secondary-button" onClick={() => setPage("game")}>
                Return to game
              </button>
            </div>

            <form className="upload-form" onSubmit={handleUpload}>
              <label>
                Track title
                <input
                  type="text"
                  value={uploadForm.title}
                  onChange={(event) =>
                    setUploadForm((current) => ({ ...current, title: event.target.value }))
                  }
                  placeholder="Champions anthem"
                />
              </label>

              <label>
                Artist
                <input
                  type="text"
                  value={uploadForm.artist}
                  onChange={(event) =>
                    setUploadForm((current) => ({ ...current, artist: event.target.value }))
                  }
                  placeholder="Studio crowd"
                />
              </label>

              <label>
                Music URL
                <input
                  type="url"
                  value={uploadForm.url}
                  onChange={(event) =>
                    setUploadForm((current) => ({ ...current, url: event.target.value }))
                  }
                  placeholder="https://example.com/song.mp3"
                />
              </label>

              <button type="submit" className="primary-button large">
                Upload to playlist
              </button>
            </form>

            <div className="track-library">
              <div className="library-header">
                <FaUsers />
                <h3>Saved tracks</h3>
              </div>

              {musicList.map((track, index) => (
                <button
                  key={track.id}
                  type="button"
                  className={index === trackIndex ? "track-row active" : "track-row"}
                  onClick={() => {
                    setTrackIndex(index);
                    setPage("game");
                    setIsPlaying(true);
                  }}
                >
                  <span className="track-dot" style={{ background: track.color }} />
                  <div>
                    <strong>{track.title}</strong>
                    <small>{track.artist}</small>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </main>
      )}
    </div>
  );
}
