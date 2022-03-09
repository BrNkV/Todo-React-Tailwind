import{j as d,B as m,a as f,r as a,R as p,b as h}from"./vendor.571cce3f.js";const x=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};x();const r=d.exports.jsx,c=d.exports.jsxs,y=({isCompleted:o})=>r("div",{className:`border-2 rounded-lg border-pink-400 w-6 h-6 mr-3 flex items-center justify-center
        ${o?"bg-pink-400":""}`,children:o&&r(m,{size:24,className:"text-gray-900"})}),g=({todo:o,changeTodo:s,deleteTodo:n})=>c("div",{className:"flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full",children:[c("button",{className:"flex items-center",onClick:()=>s(o.id),children:[r(y,{isCompleted:o.isCompleted}),r("span",{className:`${o.isCompleted?"line-through":""}`,children:o.title})]}),r("button",{onClick:()=>n(o.id),children:r(f,{size:22,className:"text-gray-600 hover:text-red-500 transition-colors ease-in-out duration-300"})})]}),b=({setTodos:o})=>{const[s,n]=a.exports.useState(""),i=e=>{o(t=>[{id:new Date,title:e,isCompleted:!1},...t]),n("")};return r("div",{className:"flex items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 py-3 w-full mt-20",children:r("input",{type:"text",onChange:e=>n(e.target.value),value:s,onKeyPress:e=>e.key==="Enter"&&i(s),className:"bg-transparent w-full border-none outline-none",placeholder:"Enter ToDo"})})},C=[{id:1,title:"some todo 1",isCompleted:!1},{id:2,title:"some todo 2",isCompleted:!1},{id:3,title:"some todo 3",isCompleted:!1}],N=()=>{const[o,s]=a.exports.useState(C),n=e=>{const t=[...o],l=t.find(u=>u.id===e);l.isCompleted=!l.isCompleted,s(t)},i=e=>{s([...o].filter(t=>t.id!==e))};return c("div",{className:"text-white w-4/5 mx-auto",children:[r("h1",{className:"text-2xl font-bold text-center mb-10",children:"ToDo React Tailwind"}),o.map(e=>r(g,{todo:e,changeTodo:n,deleteTodo:i},e.id)),r(b,{setTodos:s})]})},v=({children:o})=>r("div",{className:"bg-gray-900 min-h-screen py-10",children:o});p.render(r(h.StrictMode,{children:r(v,{children:r(N,{})})}),document.getElementById("root"));