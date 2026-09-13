"use client";
import { useState } from 'react';
import { questions } from './questions';

const demo = 'https://alexbernardino.github.io/regression-interactive/';
const sections = ['Fitting', 'Performance', 'Parameter space'];

function Visual({parameters}: {parameters: boolean}) {
  return <svg className="mini-visual" viewBox="0 0 240 170" role="img" aria-label={parameters ? 'Schematic slope–intercept uncertainty ellipse, not measured data' : 'Schematic observations and a fitted line, not measured data'}>
    <rect width="240" height="170" fill="#f4f1e8"/>
    <path d="M30 25V140H220" fill="none" stroke="#697183"/>
    {parameters ? <><ellipse cx="126" cy="85" rx="57" ry="24" transform="rotate(30 126 85)" fill="#cf4d4519" stroke="#cf4d45"/><circle cx="126" cy="85" r="5" fill="#cf4d45"/><path d="M110 70l6 6-6 6-6-6z" fill="#315fc7"/><text x="180" y="155">slope</text><text x="36" y="20">intercept</text></> : <><path d="M40 125L210 40" stroke="#315fc7" strokeWidth="2"/>{[[50,110],[72,115],[95,90],[118,77],[147,82],[172,52],[199,38]].map(([x,y],i)=><circle key={x} cx={x} cy={y} r="4" stroke="#cf4d45" fill={i%3 ? '#cf4d45' : '#fffdf8'}/>)}<text x="212" y="155">x</text><text x="36" y="20">y</text></>}
    <text x="38" y="162" style={{fontSize:8}}>Illustration · not live data</text>
  </svg>;
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number|null)[]>(()=>questions.map(()=>null));
  const [finished, setFinished] = useState(false);
  const q = questions[current];
  const choice = answers[current];
  const score = answers.filter((a,i)=>a===questions[i].answer).length;
  function restart() { setAnswers(questions.map(()=>null)); setCurrent(0); setFinished(false); }
  function choose(index:number) { setAnswers(old=>old.map((a,i)=>i===current && a===null ? index : a)); }
  return <main className="quiz-shell">
    <header className="site-header"><div className="brand-mark" aria-hidden="true">R</div><div><p className="eyebrow">Machine learning · formative quiz</p><h1>Regression concept check</h1></div><a href={demo} target="_blank" rel="noreferrer">Open interactive demo ↗</a></header>
    {finished ? <section className="results"><p className="eyebrow">Quiz complete</p><h2>{score} out of {questions.length} correct</h2><p>Review the explanations and use the suggested experiments to connect fitted lines with parameter uncertainty.</p><div className="result-actions"><button className="secondary" onClick={()=>{setFinished(false);setCurrent(0);}}>Review answers</button><button className="primary" onClick={restart}>Restart quiz</button></div><a className="demo-link" href={demo} target="_blank" rel="noreferrer">Continue experimenting ↗</a></section> :
    <section className="quiz-layout">
      <aside className="lesson-rail"><p className="eyebrow">Learning path</p><h2>From fitted lines to uncertainty</h2><ul>{sections.map((s,i)=><li key={s} className={q.section===s?'active':''}><span>0{i+1}</span>{s}</li>)}</ul><div className="rail-note"><p>Use ordinary least squares in the demo: leave both penalty sliders at zero. Unless a question asks otherwise, use zero outliers. Answer first, then try the experiment.</p></div></aside>
      <section className="question-stage"><p className="setup-note">Demo setup: both penalty sliders at zero; no outliers unless requested.</p><div className="progress-row"><span>Question {current+1} of {questions.length}</span><div className="progress-track"><div style={{width:`${(current+1)/questions.length*100}%`}}/></div><strong>{score} points</strong></div>
      <article className="question-card"><div className="question-top"><div><div className="question-label">{q.category}</div><h2>{q.prompt}</h2></div><Visual parameters={q.section==='Parameter space'}/></div>
      <div className="answers" role="group" aria-label="Answer choices">{q.options.map((option,index)=><button key={option} disabled={choice!==null} aria-pressed={choice===index} className={choice===null?'':index===q.answer?'answer-correct':index===choice?'answer-wrong':''} onClick={()=>choose(index)}><span>{choice!==null && index===q.answer?'✓':choice===index?'×':String.fromCharCode(65+index)}</span>{option}</button>)}</div>
      <div aria-live="polite" aria-atomic="true">{choice!==null && <div className={`feedback ${choice===q.answer?'correct':'incorrect'}`}><div><strong>{choice===q.answer?'Correct.':'Not quite.'}</strong><p>{q.explanation}</p><div className="try-it"><b>Try it:</b> {q.experiment} <a href={demo} target="_blank" rel="noreferrer">Open demo ↗</a></div></div></div>}</div>
      <footer><button className="secondary" disabled={current===0} onClick={()=>setCurrent(current-1)}>← Previous</button><button className="primary" disabled={choice===null} onClick={()=>current===questions.length-1?setFinished(true):setCurrent(current+1)}>{current===questions.length-1?'See results':'Next question →'}</button></footer>
      </article></section>
    </section>}
    <footer className="site-footer"><span>Regression Quiz · <a href="https://www.stat.purdue.edu/~fmliang/STAT512/lect3.pdf" target="_blank" rel="noreferrer">Theory reference</a></span><span>Made by Alexandre Bernardino with Codex</span></footer>
  </main>;
}
