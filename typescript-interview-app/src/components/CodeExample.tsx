import React, { useState } from 'react';
import { codeExamples } from '../data/codeExamples';
import './CodeExample.css';

const CodeExample: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  
  const topics = Object.keys(codeExamples);

  const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(event.target.value);
  };

  return (
    <div className="code-example-container">
      <h2>TypeScript Code Examples</h2>
      
      <div className="topic-selector">
        <label htmlFor="topic-select">Choose a topic:</label>
        <select
          id="topic-select"
          value={selectedTopic}
          onChange={handleTopicChange}
          className="topic-dropdown"
        >
          <option value="">-- Select a topic --</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic.charAt(0).toUpperCase() + topic.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {selectedTopic && (
        <div className="code-display">
          <h3>{selectedTopic.charAt(0).toUpperCase() + selectedTopic.slice(1)} Example</h3>
          <pre className="code-block">
            <code>{codeExamples[selectedTopic as keyof typeof codeExamples]}</code>
          </pre>
        </div>
      )}

      {!selectedTopic && (
        <div className="placeholder">
          <p>Select a topic above to view TypeScript code examples.</p>
          <div className="available-topics">
            <h4>Available topics:</h4>
            <ul>
              {topics.map((topic) => (
                <li key={topic}>{topic.charAt(0).toUpperCase() + topic.slice(1)}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeExample;
